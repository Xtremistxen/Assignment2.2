function RPS()
{
    var player1 = Math.ceil(Math.random() *3)
    // This will generate a random number 1-3
    var player2 = Math.ceil(Math.random() *3)

    var rockImg = "Rock.jpg";
    var paperImg = "Paper.jpg";
    var scissorsImg = "Scissors.jpg";

    // This will show the img at random for both players
    if (player1 == 1)
        {
          document.getElementById("Player1img").src = rockImg;
        }

           else if (player1 == 2)
            
             {
                document.getElementById("Player1img").src = paperImg;
             }
            
     
            else
            
             {
                document.getElementById("Player1img").src = scissorsImg;
             }
            

            if (player2 == 1)
            
             {
                document.getElementById("Player2img").src = rockImg;
             }
            
            
             else if (player2 == 2)
             
              {
                document.getElementById("Player2img").src = paperImg;
              }
             
            
             else
                
              {
                 document.getElementById("Player2img").src = scissorsImg;
              }

              // This will show Draw or Wins
if (player1 == player2)
{
    document.getElementById("finalResult").innerHTML = "DRAW";
}

else if ((player1 == 1 && player2 == 3) || (player1 == 2 && player2 == 1) || (player1 == 3 && player2 == 2))
{
    document.getElementById("finalResult").innerHTML = "Player 1 Wins";
}
else
{
    document.getElementById("finalResult").innerHTML = "Player 2 Wins";
}

}