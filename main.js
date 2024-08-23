var result=[];
var Act_date;
var Act_name;
var Activity=[];
var count;
var Discipline;
var Group;
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc,doc,setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBjh2WHyZZ1WaB2LVfMdq84BkC5mI00dEw",
  authDomain: "activityloader.firebaseapp.com",
  projectId: "activityloader",
  storageBucket: "activityloader.appspot.com",
  messagingSenderId: "604488222680",
  appId: "1:604488222680:web:b04293ab53ef978162d4ad",
  measurementId: "G-R6YNV1JSNY"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
        
    ) {
        count+=1;
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}


domReady(function () {
 
    // If found you qr code
    function onScanSuccess (decodeText, decodeResult) {
      //  for (var i=1; i<3;i=i+1){
        alert("You Qr is : " + decodeText, decodeResult);
        result=decodeText;
        Act_date=document.getElementById("Activity_Date").value;
        Act_name=document.getElementById("Activity_Name").value;
        Discipline=document.getElementById("Discipline").value;
        Group=document.getElementById("Group").value;
        //Name=result;
        console.log(Act_name);

        console.log(Act_date);
      
       
       
        setDoc(doc(firestore, "Activities",result), {
            Date:Act_date,
            Activity:Act_name,
            Discipline:Discipline,
            Name:result,
            Group:Group
         });
      //  Timestamp.fromDate(new Date(Act_date)),}
      alert("Scanned");
    }
 
    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});

   

  