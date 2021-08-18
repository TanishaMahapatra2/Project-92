function next_page()
{
  player1_id=document.getElementById("player1_id").value;
 player2_id=document.getElementById("player2_id").value;

 localStorage.setItem("player1_id",player1_id);
 localStorage.setItem("player2_id",player2_id);

    window.location="game_page_2.html";
    console.log("next_page");
}
 