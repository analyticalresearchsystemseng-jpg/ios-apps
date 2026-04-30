import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.neilross.testapp',
  appName: 'TestApp',
  webDir: 'dist/testapp/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
