// var origBoard;
var turnp1 ;
var turnp2 ;
var player1 = 'O';
var player2 = 'X';
var move=0;

var winSequence = [
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[1,5,9],
		[3,5,7],
		[1,4,7],
		[3,6,9],
		[2,5,8] ];

var cells = document.querySelectorAll('.box');
startGame();

function startGame(){
//loop each cell to make it blank again
// origBoard  = Array.from{Array(9).keys()};
turnp1 = true;
turnp2 = false;
for(var i = 0; i < cells.length; i++ ){
	
	// console.log("inside for loop");
	cells[i].innerText = "";
//	cells[i].style.removeProperty('background-clor');
	cells[i].addEventListener('click',turnClick,false);
	
	}

}

function turnClick(boxid){
	
	// document.getElementById(boxid.target.id).innerText = player1;
	// console.log("Called");
	if(turnp1){
	 turn(boxid.target.id,player1);
	}
	else{
	 turn(boxid.target.id,player2);
	}
}

function turn(sqid,player){
	
	if(player=='O'){
	
	document.getElementById(sqid).innerText = player;
	console.log("Called");
	turnp1=false;
	turnp2=true;
	checkwinner(player);
	
	}
	
	else{
	document.getElementById(sqid).innerText = player;
	console.log("Called");
	turnp1=true;
	turnp2=false;
	checkwinner(player);
	
	}
	
}
function checkwinner(player){
	move++;
	// console.log(player);
for(var i = 0;i<winSequence.length;i++)
{	

	var count=0;
	for(var j = 0;j<3;j++)
	{
		// console.log(winSequence[i][j]);
		var val = document.getElementById(winSequence[i][j]).innerText;
		if( val == player &&move>=3){
			count++;
		}
	}
	
 	if(count==3&&move<=9)
	{
		alert(player + " WINS");
		window.location.reload()
	}
	// else{
	// 	alert("MATCH DRAW");
	// 	startGame();
	// }
}
// alert("Match DRAW");
// startGame();

}


