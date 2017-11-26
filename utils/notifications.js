import { AsyncStorage } from 'react-native';
import { NOTIFY_STORAGE_KEY } from '../config/config';
import { Notifications, Permissions } from 'expo'

export function clearLocalNotification () {
  return AsyncStorage
    .removeItem(NOTIFY_STORAGE_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Time to pass quiz!',
    body: "Hey, do not forget to repeat the cards you studied",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFY_STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let date = new Date();
              date.setDate(date.getDate() + 1);
              date.setHours(15);
              date.setMintutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: date,
                  repeat: 'day',
                }
              );

              AsyncStorage.setItem(NOTIFY_STORAGE_KEY, JSON.stringify(true))
            }
          })
      }
    })
}