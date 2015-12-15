<?php

function wesley_safadao($dia, $mes, $ano){
	$sum = 0;	
	while ($mes > 0)
      {
        $sum = $sum + $mes;
        $mes--;
      }
	  	
	$safadeza = $sum + ($ano / 100) * (50 - $dia);
	$anjo = 100 - $safadeza;
	
	return "Voc� � ".$safadeza."% safado e ".$anjo."% anjo";
	
}
