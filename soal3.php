<?php 

function isVowel($ch) 
{ 
    $ch = strtoupper($ch); 
    return ($ch =='A' || $ch =='E' ||  
            $ch =='I' || $ch =='O' ||  
            $ch =='U'); 
} 
  
function countVowels($str) 
{ 
    $count = 0; 
    for ($i = 0; $i < strlen($str); $i++) 
        if (isVowel($str[$i])) 
            ++$count; 
    return $count; 
} 
  
$str = "programmer"; 
  
echo countVowels($str) . "\n"; 
   
?> 