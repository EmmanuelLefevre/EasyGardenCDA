<?php

function stringWithoutParenthesis($str) {
    return substr($str, ($p = strpos($str, '(')+1), strrpos($str, ')')-$p);
}

function stringWithParenthesis($str) {
    $pseudo = substr($str, ($p = strpos($str, '(')+1), strrpos($str, ')')-$p);
    return (' ('.$pseudo.')');
}

function random_float ($min,$max) {
    $value = ($min+lcg_value()*(abs($max-$min)));
    return (sprintf("%01.2f",$value)."bars");
}