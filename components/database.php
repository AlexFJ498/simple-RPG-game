<?php 
    $hostname = 'mysql';
    $username = 'root';
    $password = 'root';
    $database = 'rpg_game';
    
    $conn = mysqli_connect($hostname, $username, $password, $database);

    if(!$conn){
        echo "Conection error: " . mysqli_connect_error();
    }
?>