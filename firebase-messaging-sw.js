importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyBCkxeoHj_1WGpqbM2fKXxJZFBklPQ23eo",
  authDomain: "wecare-8b846.firebaseapp.com",
  databaseURL: "https://wecare-8b846-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wecare-8b846",
  storageBucket: "wecare-8b846.appspot.com",
  messagingSenderId: "201453592520",
  appId: "1:201453592520:web:1549ed0a44e5ef05616afd",
  measurementId: "G-NP3J1JVR43"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(payload);
  const notificationOption={
      body:payload.notification.body,
      icon:payload.notification.icon
  };
  return self.registration.showNotification(payload.notification.title,notificationOption);
});
