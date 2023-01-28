//SETTING UP FIREBASE AND FIRESTORE//

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {

    apiKey: "AIzaSyCy_tqUSARUIvaD9lyuJk4LZDwaa_zjC9Y",
    authDomain: "mudsock-hackathon.firebaseapp.com",
    projectId: "mudsock-hackathon",
    storageBucket: "mudsock-hackathon.appspot.com",
    messagingSenderId: "511083006715",
    appId: "1:511083006715:web:8ec4d98a6ea5fe0f9f7e5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CREATING LISTS//
const plantNames = [];
const plantWateringTimes = [];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//GETTING DATA//
const querySnapshot = await getDocs(collection(db, "Preferences"));
querySnapshot.forEach((doc) => {
    var plantName = doc.data().name;
    var plantWaterTime = doc.data().time;


    plantNames.push(plantName);
    plantWateringTimes.push(plantWateringTimes);
    
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHANGING SELECT OPTIONS//

var selects = document.querySelectorAll(".selects");

selects.forEach((select) => {
    for (var i = 0; i < plantNames.length; i++) {
        const option = document.createElement("option");
        const node = document.createTextNode(plantNames[i]);
        option.appendChild(node);
        select.appendChild(option);
    
    }
});







