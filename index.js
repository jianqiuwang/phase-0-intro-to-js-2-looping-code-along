// Code your solutions in this file
function writeCards(namesArray, event){
    let cards = []
    for(let i=0; i<namesArray.length; i++){
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)

    }
    return cards
}

function countDown(number){
    while(number>=0){
        console.log(number)
        number--
    }

}

