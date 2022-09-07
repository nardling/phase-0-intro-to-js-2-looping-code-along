// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; ++i)
    {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return false;
}

function writeCards(names, occasion) {
    let msgs = []
    for (let i = 0; i < gifts.length; ++i)
    {
        msgs.push("Thank you, " + names[i] + ", for the wonderful " + occasion + " gift!")
    }
    return msgs;
}

function countDown(n) {
    while (n >= 0)
    {
        console.log(n--);
    }
}

wrapGifts(gifts);