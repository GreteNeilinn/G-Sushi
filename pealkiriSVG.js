// Otseselt pole veebilehes kasutamisel,
// aga kasutasime seda pealkirja svg mõõtmete saamiseks

//leiab elemendid, mis vastavad css selectoriga, milleks praegu on pealkiri
const pealkiri = document.querySelectorAll("#pealkiri path");

for(let i = 0; i < pealkiri.length; i++){
    //console.log() == print()
    console.log(`Letter ${i} is ${pealkiri[i].getTotalLength()}`);
}
