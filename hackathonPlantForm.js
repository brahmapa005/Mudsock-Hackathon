
// const plants = {
//     name: [],
//     waterFreq: [],
//     icon: []
// }

localStorage.setItem("name", ["",""])
var newName = localStorage.getItem("name");
console.log(typeof newName)
// newName.push("pineapple");
// localStorage.setItem("name", newName);

//icon is set to first one by default
var selectedIcon = document.getElementById("plant1");


function selectImage(clickedId){
    var lastSelectedIcon = selectedIcon;
    lastSelectedIcon.style.borderColor = "#ffffff";
    
    selectedIcon = document.getElementById(clickedId);
    selectedIcon.style.borderColor = "#0689aa"
    //console.log(selectedIcon);

    //store the image link
    var selectedImage = "images/" + clickedId + ".png";
    //console.log(selectedImage);
    event.preventDefault();
}

var nameInput = "";
var waterInput = "";

//save form information when button clicked
//need to push name, water frequency, and icon to database
//the image link that needs to be pushed is held in the variable selectedImage
function save(){
    //console.log(selectedIcon)
    nameInput = document.getElementById("nameInput").value;
    console.log(nameInput)
    //waterInput = document.getElementById("waterInput").value;

    // var newName = localStorage.getItem("name");
    // newName.push(nameInput);
    // localStorage.setItem("name", newName);

    // plants.name.push(nameInput);
    // plants.waterFreq.push(waterInput);
    // console.log(plants.name)
    console.log(localStorage.getItem("name"));

    event.preventDefault();

    location.href="garden.html";
}






