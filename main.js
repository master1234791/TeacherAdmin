var result=[];
var Act_date;
var Act_name;
var Activity=[];
var count;
var Grade;
var Group;
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc,doc,setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoqs-uC7DN5-lVLk79bbDvmM7AGAjYyT0",
  authDomain: "teacheraid2-89ea5.firebaseapp.com",
  projectId: "teacheraid2-89ea5",
  storageBucket: "teacheraid2-89ea5.firebasestorage.app",
  messagingSenderId: "421961067051",
  appId: "1:421961067051:web:98abfd1993fefb1004186e"
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
        Grade=document.getElementById("Discipline").value;
        Group=document.getElementById("Group").value;
        //Name=result;
        console.log(Act_name);

        console.log(Act_date);
      
       
       
        setDoc(doc(firestore, "Activities",result), {
            Date:Act_date,
            Activity:Act_name,
            Grade:Grade,
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

   


  



