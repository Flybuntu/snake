<?php

/* funkija za upis pozicija prema id pozicijama*/
function checkNum($red, $stupac, $mjesto) {
	if($red%2 == 0){
		$broj=0;
		if($stupac == 1){
			$broj= $mjesto-9;
			echo $broj;
		} else {
			$broj = $mjesto / 10;
			$broj = floor($broj);
			$broj *= 10;
			$broj += $stupac;
			echo $broj . " i " . $red ;
		}

	} else {
		echo $mjesto;
	}

}


?>