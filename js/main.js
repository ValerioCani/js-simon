const numberArray = [];
const guessArray = [];

for(let i=0; i<5; i++){
    randomNumber;
    numberArray.push(randomNumber());
};


const numbers = document.getElementById('numbers');
numbers.innerHTML = numberArray[0]+' - '+numberArray[1]+' - '+numberArray[2]+' - '+numberArray[3]+' - '+numberArray[4];

setTimeout(cleartimer, 30000);




function randomNumber(){
    const num = Math.floor(Math.random()*99)+1;
    return num;
};

function cleartimer(){
    numbers.innerHTML = ''; 
    setTimeout(answers, 1000);
    
};

function answers(){
    for(let i=0; i<5; i++){
        let guess = parseInt(prompt(i+1 +'- inserisci uno dei numeri da 1 a 99 da ricordare'));
        while(isNaN(guess)){
            guess = parseInt(prompt(i+1 +'- non hai scritto un numero, inserisci uno dei numeri da 1 a 99 da ricordare'));
        };
        if(numberArray.includes(guess)){
            guessArray.push(guess);
        };
    };
    alert('Hai indovinato ' + guessArray.length + ' numeri: ' + guessArray);
};