function playGame() 
{
    var randonNumberOne = Math.floor(Math.random()*6)+1;
    var randomImageOnePath = "Diceimages/" + randonNumberOne + ".png";
    
    var randonNumberTwo = Math.floor(Math.random()*6)+1;
    var randomImageTwoPath = "Diceimages/" + randonNumberTwo + ".png";

    var image1 = document.querySelectorAll('img')[0];
    image1.setAttribute("src", randomImageOnePath);

    var image2 = document.querySelectorAll('img')[1];
    image2.setAttribute("src", randomImageTwoPath);

    if(randonNumberOne > randonNumberTwo){
        document.querySelector('h1').innerHTML = "Player One Wins !"
    }
    else if(randonNumberTwo > randonNumberOne){
        document.querySelector('h1'). innerHTML = "Player Two Wins !"
    }
    else{
        document.querySelector('h1').innerHTML = "Draw "
    }
}

document.querySelector('button').addEventListener("click", playGame);