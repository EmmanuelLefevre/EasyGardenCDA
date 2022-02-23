<?php

// Check string surrounded by parenthesis
function stringWithoutParenthesis($str) {
    return substr($str, ($p = strpos($str, '(')+1), strrpos($str, ')')-$p);
}

// Check string surrounded by parenthesis and concatenate parenthesis around
function stringWithParenthesis($str) {
    $pseudo = substr($str, ($p = strpos($str, '(')+1), strrpos($str, ')')-$p);
    return (' ('.$pseudo.')');
}

// Generate an aleatory float with two decimals in the interval $min/$max
function random_float ($min,$max) {
    $value = ($min+lcg_value()*(abs($max-$min)));
    return (sprintf("%01.2f",$value)."bars");
}