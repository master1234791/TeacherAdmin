 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyBjh2WHyZZ1WaB2LVfMdq84BkC5mI00dEw",
  authDomain: "activityloader.firebaseapp.com",
  projectId: "activityloader",
  storageBucket: "activityloader.appspot.com",
  messagingSenderId: "604488222680",
  appId: "1:604488222680:web:b04293ab53ef978162d4ad",
  measurementId: "G-R6YNV1JSNY"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 export{app,analytics}

 console.log("Conexión a Firebase establecida correctamente.");