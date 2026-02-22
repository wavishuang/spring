import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spring.myapp', // 必須跟 JSON 裡的 package_name 一致
  appName: 'my-app',
  webDir: '.output/public',  // 確保指向 Nuxt 4 產出的資料夾
  bundledWebRuntime: false
};

export default config;
