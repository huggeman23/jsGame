

//document.getElementById("bord").innerHTML=tileMap01.mapGyid[3];
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
function ftest(item,index) {
    //
    var div = document.createElement('div');
    
    div.innerHTML ="<p>"+index+item+"</p>";
    document.getElementById("bord").appendChild(div);
}

function key(event){
    
    var player = document.getElementsByClassName("P")[0].id;
    
    var sep= player.indexOf(",");
    var xMove=0;
    var yMove=0;
    let Y = player.substring(0,sep);
    let X =player.substring(sep+1);
    //document.getElementById("11,10").className = "P";
   
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

    var boxes=[];
    var yID=Y;
    var xID=X;

    if (document.getElementById(Y+","+X).className =="B" && xMove != 0) {

       while(true){                     
               
        if(document.getElementById(Y+","+xID).className =="B"){
         boxes.push(xID-xMove)
          
          xID=xID-xMove; 
        }else{
            break;
        }

       } 
     if(document.getElementById(Y+","+(xID)).className !="W"){
       for (let i = 0; i < boxes.length; i++) {
        document.getElementById(Y+","+boxes[i]).className = "B";          
       }
       document.getElementById(Y+","+X).className = "P";
       goalCheck(player);
     }

        }else  if (document.getElementById(Y+","+X).className =="B" && yMove != 0) {
  
    
           while(true){ 
                        
                   
            if(document.getElementById(yID+","+X).className =="B"){
             boxes.push(yID-yMove)
              
              yID=yID-yMove; 
            }else{
                break;
            }
    
           } 
         if(document.getElementById(yID+","+(X)).className !="W"){

           for (let i = 0; i < boxes.length; i++) {
            document.getElementById(boxes[i]+","+X).className = "B";          
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
