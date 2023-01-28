//CHOOSING PLANTS//

//icon is set to first one by default
var selectedIcon = document.getElementById("plant1");
var imgs = document.querySelectorAll(".plant");

imgs.forEach((img) => {
    img.addEventListener("click", async(e) => {
        e.preventDefault();

        var lastSelectedIcon = selectedIcon;
        var clickedID = img.id;

        lastSelectedIcon.style.borderColor = "#ffffff";
    
        selectedIcon = document.getElementById(clickedID);
        selectedIcon.style.borderColor = "#0689aa"
        //console.log(selectedIcon);

        //store the image link
        var selectedImage = "images/" + clickedID + ".png";

    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var nameInput = "";
var waterInput = "";

//save form information when button clicked
//need to push name, water frequency, and icon to database
//the image link that needs to be pushed is held in the variable selectedImage
// function save(){
//     //console.log(selectedIcon)
//     nameInput = document.getElementById("nameInput").value;
//     waterInput = document.getElementById("waterInput").value;

//     await setDoc(doc(db, "Preferences", "4vtPpyJUmneFzmqohQew"), {
//         name: [nameInput],
//         time: [timeInput],
//       });


//     // console.log(nameInput)
//     // console.log(waterInput);
//     //waterInput = document.getElementById("waterInput").value;

//     // var newName = localStorage.getItem("name");
//     // newName.push(nameInput);
//     // localStorage.setItem("name", newName);

//     // plants.name.push(nameInput);
//     // plants.waterFreq.push(waterInput);
//     // console.log(plants.name)
//     console.log(localStorage.getItem("name"));

//     event.preventDefault();

//     // location.href="garden.html";
// }



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";

// import {
//     doc,
//     setDoc,
//   } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCy_tqUSARUIvaD9lyuJk4LZDwaa_zjC9Y",
//   authDomain: "mudsock-hackathon.firebaseapp.com",
//   projectId: "mudsock-hackathon",
//   storageBucket: "mudsock-hackathon.appspot.com",
//   messagingSenderId: "511083006715",
//   appId: "1:511083006715:web:8ec4d98a6ea5fe0f9f7e5e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore();

const submitBtn = document.getElementById("subBtn");

submitBtn.addEventListener("click", async(e) => {
    e.preventDefault();



    nameInput = document.getElementById("nameInput").value;
    waterInput = document.getElementById("waterInput").value;

    await setDoc(doc(db, "Preferences", "4vtPpyJUmneFzmqohQew"), {
        name: [nameInput],
        time: [timeInput],
      });
  
    
  });






