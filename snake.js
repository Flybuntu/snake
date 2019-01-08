var ekran = document.getElementById("ekran");
var gumb = document.getElementById("kocka");

/* Pocetak i kraj stepenica*/
var ladder = 	[ 1,  4,  9, 21, 28, 51, 71, 80];
var ladderEnd = [38, 14, 31, 42, 84, 67, 91, 100];

/* Pocetak i kraj zmije */
var snake = 	[17, 54, 62, 64, 87, 93, 95, 98];
var snakeEnd = 	[7,  34, 19, 60, 24, 73, 75, 79];

/* Broj igraca */
var numPlayer = (function(){
	var brojIgraca =  prompt("How many players?(4 max)");
	if (brojIgraca > 4 || brojIgraca < 1) {
		brojIgraca = prompt("How many players?(4 max)");
	}
	return brojIgraca;

}());


var board = {
	/* Trenutni igrac kojim upravljamo */
	curPlay: 0,
	dice: function() {
		return Math.ceil(Math.random() * 6);
	},
	/* pozicija na kojoj je svaki igrac */
	playPos: [],
	movePlayer: function() {
		diceNum = this.dice();
		tempCur = this.curPlay;
		lastPosition = this.playPos[this.curPlay];
		this.playPos[this.curPlay] += diceNum;

		position = this.playPos[this.curPlay];

		document.getElementById("ekranKocka").innerHTML = "Kocka je broj: " + diceNum;

		console.log("Dice Number is: " + diceNum);
		console.log("Position pre change is: " + position);
		/* ako stane na stepenice ovdje ga mice*/
		if( ladder.includes(position) ) {
			this.playPos[this.curPlay] = ladderEnd[ladder.indexOf(position)];
		/* ako stane na zmij ovdje ga spusta */
		} else if( snake.includes(position) ) {
			this.playPos[this.curPlay] = snakeEnd[snake.indexOf(position)];
		}

		/* Provjera da li je igra gotova i da li je presao 100 */
		if (this.playPos[this.curPlay] == 100) {
			var trenIgrac = this.curPlay + 1;
			var text = "Player " + trenIgrac + " won! Play again!";
			var x = confirm(text);
			if(x) {
				location.reload();
			}	 
		} else if(position > 100) {
			console.log("testiramo prek 100");
			this.playPos[this.curPlay] = lastPosition;
			this.curPlay += 1;
			return;
		}


		console.log("current Player: " + this.curPlay);
		console.log("Player Position: " + this.playPos[this.curPlay]);
		

		position = this.playPos[this.curPlay];

		/* mjenjemo polje s obzirom na kojem smo igracu*/
		switch(this.curPlay) {
			case 0: 
				document.getElementById(position).style.backgroundImage = "url('images/red.png')";
				if(lastPosition > 0) { 
					document.getElementById(lastPosition).style.backgroundImage = "";
				}
				break;
			case 1: 
				document.getElementById(position).style.backgroundImage = "url('images/blue.png')";
				if(lastPosition > 0) { 
					document.getElementById(lastPosition).style.backgroundImage = "";
				}
				break;
			case 2: 
				document.getElementById(position).style.backgroundImage = "url('images/green.png')";
				if(lastPosition > 0) { 
					document.getElementById(lastPosition).style.backgroundImage = "";
				}
				break;
			case 3: 
				document.getElementById(position).style.backgroundImage = "url('images/yellow.png')";
				if(lastPosition > 0) { 
					document.getElementById(lastPosition).style.backgroundImage = "";
				}
				break;
		}
		
		if( this.curPlay < numPlayer-1 ) {
			this.curPlay += 1;
			printPos = this.curPlay + 1
			ekran.innerHTML = "Roll Player: " + printPos;
		} else {
			ekran.innerHTML = "Roll Player: 1"
			this.curPlay = 0;

		}

		console.log(" ");

	}
}

/* Stvaramo svakog igracu te njihovu poziciju  arrayu 0 za svakog */
var playerPositionsArr = (function(num) {
	var arr = new Array(num);
	for(var i=0; i<num; i++) {
		arr[i] = 0;
	}
	board.playPos = arr;
}(numPlayer));




