// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const cardNames = [];

function writeCards(arrayName,eventName){
    
    for(let i = 0; i < arrayName.length; i++){
        cardNames.push(`Thank you ${arrayName[i]} for the wonderful ${eventName} gift!`);
    }
    return cardNames;
};

writeCards(names,"birthday");



function countDown(number){
    while(number >= 0){
        console.log(number);
        number--;
    }
}

countDown(10);
