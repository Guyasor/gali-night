importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAQB9lmAQke04tMte_SekKJrOuXa5yrq0E",
  authDomain: "gali-night-df79f.firebaseapp.com",
  projectId: "gali-night-df79f",
  storageBucket: "gali-night-df79f.firebasestorage.app",
  messagingSenderId: "581346187316",
  appId: "1:581346187316:web:7d73541d5d8266fb0e1261"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || '💬 הודעה חדשה', {
    body: body || '',
    icon: '/gali-night/ort-logo.jpeg',
    badge: '/gali-night/ort-logo.jpeg',
    dir: 'rtl',
    lang: 'he',
    tag: 'gali-chat',
    data: { url: '/gali-night/#chat' }
  });
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data?.url || '/gali-night/'));
});
