//Tic Tac Toe
const WINNING_COMBINATIONS = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
class Game{
    start(){
        let c=0;
        let player1=[];
        let player2=[]
       console.log("hello")
       document.body.addEventListener("click",event=>{
        if(c==9){
            alert("game over draw");
            window.location.reload();
        }
        var a=+(<HTMLElement>event.target).id;
        if(odd(c)){
        var cross=document.createElement("div");
        cross.classList.add("cross");
        (<HTMLElement>event.target).appendChild(cross);
        player1.push(a);
        console.log("player1 ",player1)
        if(player1.length==3){
            WINNING_COMBINATIONS.map(combination=>{
                console.log("combination",combination,"array of 1",player1)
                
                if(equals(player1,combination)){
                    alert("Player 1 Won");
                    window.location.reload();
                }
            })
        }
       }else{
        var circle=document.createElement("div");
        circle.classList.add("circle");
        (<HTMLElement>event.target).appendChild(circle);
        player2.push(a);
        console.log("player2",player2);
        if(player2.length==3){
            WINNING_COMBINATIONS.map(combination=>{
                
                if(equals(player2,combination)){
                    alert("Player 2 Won");
                    window.location.reload();
                }
            })
        }
       }
        if(player1.length==3){
            player1=[];
        }
        if(player2.length==3){
            player2=[];
        }
        
        
        c++;
       })

    }
    }

let game=new Game();
game.start();
function odd(number){
    return number%2==0? true:false;

}
function equals(arr1,arr2){
    if(arr1[0]==arr2[0] && arr1[1]==arr2[1] && arr1[2]==arr2[2])
      return true;
    else
      return false;

}