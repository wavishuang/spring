// app/plugins/push.client.ts
import { PushNotifications } from '@capacitor/push-notifications';
import { Device } from '@capacitor/device';

export default defineNuxtPlugin(async () => {
  // 僅在 Capacitor 原生環境下執行
  if (process.client) {
    const info = await Device.getInfo();
    
    if (info.platform !== 'web') {
      // 1. 請求權限
      let permStatus = await PushNotifications.checkPermissions();

      if (permStatus.receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions();
      }

      if (permStatus.receive !== 'granted') {
        console.error('使用者拒絕推播權限');
        return;
      }

      // 2. 註冊推播服務
      await PushNotifications.register();

      // 3. 取得 Token 並處理
      PushNotifications.addListener('registration', (token) => {
        console.log('取得原生推播 Token:', token.value);
        // TODO: 這裡可以用 $fetch 傳到你的後端或存入 Firebase Firestore
      });

      // 4. 監聽點擊通知事件
      PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
        console.log('使用者點擊了通知:', notification.actionId);
        // 例如：router.push('/news')
      });
    }
  }
});