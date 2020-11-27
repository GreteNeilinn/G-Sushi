const pealkiri = document.querySelectorAll("#pealkiri path");


// console.log(pealkiri)
for(let i = 0; i < pealkiri.length; i++){
    console.log(`Letter ${i} is ${pealkiri[i].getTotalLength()}`);
}
