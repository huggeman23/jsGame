


tileMap01.mapGrid.forEach(mapGenerator);
document.addEventListener('keydown',key)

var goalcount = [];


var goals = document.getElementsByClassName("G");
for (let i = 0; i < goals.length; i++) {
goalcount.push(goals[i].id)
    
}

function mapGenerator(item, index){
    
    for (let i = 0; i < item.length; i++) {
        
        var div = document.createElement('div');
        div.id=index+","+i+"";
        div.className=item[i];
    
        document.getElementById("bord").appendChild(div);
        
    }
     
}

function key(event){
    
    var player = document.getElementsByClassName("P")[0].id;
    
    var sep= player.indexOf(",");
    var xMove=0;
    var yMove=0;
    let Y = player.substring(0,sep);
    let X =player.substring(sep+1);
    
   
    switch (event.key) {
            case 'ArrowLeft': 
                xMove = 1;             
                X = X-xMove;
                
            break;
            case 'ArrowUp':
                yMove = 1;
                Y = Y-yMove;
                
            break;
            case 'ArrowDown':
                yMove = -1;
                Y = Y-yMove;
                
            break;
            case 'ArrowRight':
                xMove = -1;
                X = X-xMove;
                
            break;   
        default:
            break;
    }
//boxes ceeps all the coardenats(id) where the blocks should move when the player moves them
    var xBoxes=[];
    var yBoxes=[];
    var yID=Y;
    var xID=X;

    if (document.getElementById(Y+","+X).className =="B") {

       while(true){                     
               
        if(document.getElementById(yID+","+xID).className =="B"){
         
          if(xMove != 0){
              xBoxes.push(xID-xMove)
              xID=xID-xMove;

              yBoxes.push(yID) 
          }else{
              yBoxes.push(yID-yMove)
              yID=yID-yMove;

              xBoxes.push(xID) 
          }
          
        }else{
            break;
        }

       } 
     if(document.getElementById(yID+","+(xID)).className !="W"){

       for (let i = 0; i < xBoxes.length; i++) {
        document.getElementById(yBoxes[i]+","+xBoxes[i]).className = "B";          
       }

       document.getElementById(Y+","+X).className = "P";
       goalCheck(player);
     }

        
    }else if (document.getElementById(Y+","+X).className !="W" ) {

        goalCheck(player);
        document.getElementById(Y+","+X).className = "P";
 
 }
        
    win(Y+","+X);
}

function  goalCheck(id) {
        if(goalcount.includes(id)){
            document.getElementById(id).className = "G";   

        }else{
            document.getElementById(id).className = " ";
        }
}
function win(player) {
    
    if (goals.length==0 && goalcount.includes(player)!= true) {
        alert("you Win");
    }    
}
