import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.alexanderolsen.game',
  appName: 'Game',
  webDir: 'dist',
  plugins: {
    LiveUpdate: {
      appId: 'b742c78c-5772-4fae-bb80-5462eeb5cb2a',
      autoUpdateStrategy: 'background',
    },
  },
};

export default config;
