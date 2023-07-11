function changeText(){

    var randomTexts = ["Heading 1", "Heading 2", "Heading 3", "Heading 4", "Heading 5"]

    var randomNum = getRandnomNumbersBetween(0,randomTexts.length-1)

    console.log(randomNum)

    document.getElementById("heading").innerHTML = randomTexts[randomNum]

}

function getRandnomNumbersBetween(min,max){

    return Math.floor(Math.random() * (max-min+1)+min)

}