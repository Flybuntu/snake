<!DOCTYPE html>
<html>
<head>
	<title>Zmija</title>
	<link rel="stylesheet" type="text/css" href="snake.css">
</head>
<body>
		<div id="leftPanel">
			<div id="ekran">Roll Player: 1</div>
			<button id="kocka" onclick="board.movePlayer()">Kocka</button>
			<div id="ekranKocka"></div>
		</div>
	<div id="podloga">


	<table>

		<?php
		require_once "functions/functions.php";
			$p = 100;

			/* DVOSTRUKI FOR LOOP ZA TABLICU */

			for($j=1; $j<=10; $j++) {
				echo "<tr>";
				for($i=1; $i<= 10; $i++, $p--) {
					/* Pokrece checkNum funkciju koja upisuje id ovisno o kvadratu */
					echo "<td id="; 
					checkNum($j, $i, $p); 
					echo ">"; 
					checkNum($j, $i, $p);  
					echo "</td>";
				}
				echo "</tr>";

			}



		?>


	</table>
	</div>



	<script type="text/javascript" src="snake.js"></script>
</body>
</html>