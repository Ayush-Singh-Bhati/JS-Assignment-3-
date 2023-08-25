

// getRandomColor=()=>{
//     const letters = '012345678ABCDEF';
//     let color = '#';

//     for (i = 0; i<6; i++){

//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     console.log('clicked')
//     return color;
// }


// changeBackgroundColor=()=>{

//     let randomcolor = getRandomColor();
//     document.body.style.backgroundColor = randomcolor;
// }

// document.onclick = changeBackgroundColor;



const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];

let indexCount = 0;
const displayName = document.getElementById('names')
const previousbtn = document.getElementById('Previous')
const nextbtn = document.getElementById('Next')

currentName=()=>{

    displayName.textContent = names[indexCount];
}

showPreviousName=()=>{
    indexCount = (indexCount - 1 + names.length) % names.length;
    currentName();
}
showNextName=()=>{
    indexCount = (indexCount + 1) % names.length;
    currentName();
}


currentName();