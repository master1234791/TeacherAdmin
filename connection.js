 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyCoqs-uC7DN5-lVLk79bbDvmM7AGAjYyT0",
  authDomain: "teacheraid2-89ea5.firebaseapp.com",
  projectId: "teacheraid2-89ea5",
  storageBucket: "teacheraid2-89ea5.firebasestorage.app",
  messagingSenderId: "421961067051",
  appId: "1:421961067051:web:98abfd1993fefb1004186e"
};


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 export{app,analytics}


 console.log("Conexión a Firebase establecida correctamente.");
