import fs from 'fs';
import path from 'path';

export interface SplitResult {
  files: string[];
}

function safeName(name: string): string {
  return name.replace(/[\\/]/g, '-');
}

/**
 * Splits tokens.json into per-token-set JSON files.
 *
 * Outputs:
 *   game.json                      → contains ONLY "game"
 *   themes-light.json              → contains { game, "themes/light" }
 *   themes-dark.json               → contains { game, "themes/dark" }
 *
 * Each output includes a correct $metadata.tokenSetOrder.
 */
export function splitTokenSets(
  inputFile = 'tokens.json',
  outputDir = 'tokens'
) {
  const INPUT = path.resolve(inputFile);
  const OUTPUT_DIR = path.resolve(outputDir);

  if (!fs.existsSync(INPUT)) {
    throw new Error(`❌ Input file not found: ${INPUT}`);
  }

  const raw = JSON.parse(fs.readFileSync(INPUT, 'utf-8')) as Record<
    string,
    Record<'ref' | 'sem', unknown>
  >;

  const brandLevelSets = Object.entries(raw).filter(([_k, v]) => v.ref);
  const themeLevelSets = Object.entries(raw).filter(([_k, v]) => v.sem);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const writtenBrandFiles: string[] = [];

  // Write brand-level files
  for (const [k, v] of brandLevelSets) {
    const fileName = `${k}.json`;
    const filePath = path.join(OUTPUT_DIR, fileName);

    const output = {
      [k]: v,
      $metadata: { tokenSetOrder: [k] },
      $themes: [],
    };

    fs.writeFileSync(filePath, JSON.stringify(output, null, 2));
    writtenBrandFiles.push(filePath);
  }

  const writtenThemeFiles: string[] = [];

  // Write theme-level files
  for (const [k, v] of themeLevelSets) {
    const fileName = safeName(k) + '.json';
    const filePath = path.join(OUTPUT_DIR, fileName);
    const brands = brandLevelSets.reduce((prev, [k, v]) => {
      return {
        ...prev,
        [k]: v,
      };
    }, {});

    const output = {
      ...brands,
      [k]: v,
      $metadata: { tokenSetOrder: [...Object.keys(brands), k] },
      $themes: [],
    };

    fs.writeFileSync(filePath, JSON.stringify(output, null, 2));
    writtenThemeFiles.push(filePath);
  }

  return {
    writtenBrandFiles,
    writtenThemeFiles,
  };
}
