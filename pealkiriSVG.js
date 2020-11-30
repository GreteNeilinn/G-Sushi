// Otseselt pole veebilehes kasutamisel,
// aga kasutasime seda pealkirja svg mõõtmete saamiseks

//leiab elemendid, mis vastavad css selectoriga, milleks praegu on pealkirja path-id
const pealkiri = document.querySelectorAll("#pealkiri path");

for(let i = 0; i < pealkiri.length; i++){
    //console.log() == print()
    //Saab pealkirjas oleva pathi pikkuse ehk ühe tähe pikkuse ja prindib selle
    console.log(`Letter ${i} is ${pealkiri[i].getTotalLength()}`);
}
