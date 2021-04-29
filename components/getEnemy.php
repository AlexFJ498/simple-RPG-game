<?php  
include 'database.php';

$sql = "SELECT * from enemies";
$result = mysqli_query($conn, $sql);
$rowCount = mysqli_num_rows($result);

$id = rand(1, $rowCount);
$sql = "SELECT * from enemies where id=$id";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result);

$enemy->name = $row['name'];
$enemy->image = $row['image'];
$enemy->health = $row['health'];
$enemy->mana = $row['mana'];
$enemy->strength = $row['strength'];
$enemy->agility= $row['agility'];
$enemy->speed = $row['speed'];

$myJSON = json_encode($enemy);
echo $myJSON;
?>