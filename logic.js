let cards = []
let sum = 0;
let isBlackjacked = false;
let message = "";
let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");



function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if(randomCard === 1){
        return 11;
    } else if(randomCard === 11 ||randomCard === 12 || randomCard === 13){
        return 10;
    }else{
        return randomCard;

    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    
    renderGame();
}


function renderGame() {
    

        
        cardsEl.textContent = "Cards: ";
        
        for(let i = 0; i < cards.length; i++){
            cardsEl.textContent += cards[i]+ " ";
        }
        
        sumEl.textContent = "Sum: " + sum;
        if(sum <= 20){
            message = "Do you want to draw another Card?";
            
        }else if(sum === 21){
            message = "Hurray! You've got Blackjacked!";
            isBlackjacked = true;
        }
        else{
            message = "Opps! You're out of the game!";
            isAlive = false;
            
        }
        messageEl.textContent = message;
        // console.log(messageEl);
    
}
function newCard(){

    if(isAlive === true && isBlackjacked === false){

    console.log("Drawing New Card!");
    let card = getRandomCard();

    cards.push(card);
    sum += card;

    renderGame();
    }
}

// 3:42:39