<?php
function replaceTitle($title,$find,$replace)
{
	$replace_char = str_replace('a', 'u', $title);
	echo $replace_char;
}

$title = "tuban";
$find = "a";
$replace = 'u';
replaceTitle($title,$find,$replace)
?>