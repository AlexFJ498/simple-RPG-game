<?php 
include 'database.php';

$name = $_REQUEST["name"];
$sql = "SELECT * FROM players WHERE name = '" . $name."'"; 
$result = mysqli_query($conn, $sql); 
$row = mysqli_fetch_array($result);

$player->name = $row['name'];
$player->image = $row['image'];
$player->health = $row['health'];
$player->mana = $row['mana'];
$player->strength = $row['strength'];
$player->agility = $row['agility'];
$player->speed = $row['speed'];

$myJSON = json_encode($player);
echo $myJSON;
?>