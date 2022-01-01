import PushNotification from 'react-native-push-notification';

const DEFAUL_NOTOFICATION_OPTIONS = {
  channelId: 'your-channel-id', // *STRING: channelId, if the channel doesn't exist, notification will not trigger.
  foreground: false, // BOOLEAN: If the notification was received in foreground or not
  userInteraction: false, // BOOLEAN: If the notification was opened by the user from the notification area or not
  data: {}, // OBJECT: The push data or the defined userInfo in local notifications
};

export const notify = (message, options = DEFAUL_NOTOFICATION_OPTIONS) => {
  console.log('notify!!!');
  PushNotification.localNotification({
    message,
    ...options,
  });
};
