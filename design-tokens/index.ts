import fs from 'fs';
import path from 'path';
import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary);

function getBasename(sourceFilePath: string) {
  return path.basename(sourceFilePath, '.json');
}

function generateBaseDictionary() {
  return new StyleDictionary({
    source: ['tokens/ref.json', 'tokens/sem.json'],
    preprocessors: ['tokens-studio'],
    platforms: {
      css: {
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab', 'ts/resolveMath'],
        buildPath: 'dist',
        files: [
          {
            destination: `css/game.css`,
            format: 'css/variables',
          },
        ],
      },
    },
  });
}

function generateThemeDictionaries() {
  const tokenSetsRaw: { tokenSetOrder: string[] } = JSON.parse(
    fs.readFileSync('tokens/$metadata.json', 'utf-8')
  );
  const { tokenSetOrder: tokenSets } = tokenSetsRaw;

  const tokenSourceArrays = tokenSets
    .filter((set) => set.includes('themes/'))
    .map((themeSet) => {
      return ['tokens/ref.json', 'tokens/sem.json', `tokens/${themeSet}.json`];
    });

  const tokenSetDictionaries = tokenSourceArrays.map((sourceArray) => {
    const basename = getBasename(sourceArray[sourceArray.length - 1]);

    return new StyleDictionary({
      source: sourceArray,
      preprocessors: ['tokens-studio'],
      platforms: {
        css: {
          transformGroup: 'tokens-studio',
          transforms: ['name/kebab', 'ts/resolveMath'],
          buildPath: 'dist',
          files: [
            {
              destination: `css/${basename}.css`,
              format: 'css/variables',
              options: {
                selector: `.${basename}`,
              },
            },
          ],
        },
      },
    });
  });

  return tokenSetDictionaries;
}

const run = async () => {
  const baseDictionary = generateBaseDictionary();
  const themeDictionaries = generateThemeDictionaries();

  const allDicts = [baseDictionary, ...themeDictionaries];

  Promise.all(
    allDicts.map(async (dict) => {
      await dict.cleanAllPlatforms();
      await dict.buildAllPlatforms();
    })
  );
};

run();
