importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBndygRH9DVMivhAPxKlM4sOGyHyLsXw74",
  projectId: "g-opec-a2e19",
  messagingSenderId: "539687706447",
  appId: "1:539687706447:web:66c89dcd63acbe47576f3a"
});

const messaging = firebase.messaging();

// Fica escutando as mensagens em segundo plano
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icone-do-seu-app.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});