<?php 
    include 'components/database.php';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RPG Game</title>

    <!-- Jquery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    
    <!-- CSS -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Acme">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <button class="back">Volver</button>
    </div>

    <div class="header" id="header">
        <p>¡Juega al mejor RPG que se haya creado nunca!</p>
        <h2>Elige tu personaje</h2>
    </div>

    <div class="interface" id="interface"> 
        <?php $sql = "SELECT * FROM players"; ?>
        <?php $result = mysqli_query($conn, $sql); ?>
        <?php while($row = mysqli_fetch_array($result)){ ?>
            <div style="display: flex; flex-wrap: wrap; width: 370px;">
                <a href="#" class="player" data-type="<?php echo $row['name'] ?>" >
                    <img src="<?php echo $row['image'] ?>">
                    <div class="desc">
                        <h3><?php echo $row['name'] ?></h3>
                        <p><?php echo $row['description'] ?></p>
                    </div>
                </a>
                
                <div class="interface" style="justify-content: normal !important; display: block">
                    <div class="hidden_stats" data-type="<?php echo $row['name'] ?>">
                        <h4>Vida: <?php echo $row['health'] ?></h4>
                        <h4>Maná: <?php echo $row['mana'] ?></h4>
                        <h4>Fuerza: <?php echo $row['strength'] ?></h4>
                        <h4>Agilidad: <?php echo $row['agility'] ?></h4>
                        <h4>Velocidad: <?php echo $row['speed'] ?></h4>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>


    <div class="actions" id="actions"></div>
    <div class="arena" id="arena"></div>
    <div class="enemy" id="enemy"></div>
    
</body>
<script src="js/gameManager.js"></script>
<script src="js/player.js"></script>
<script src="js/enemy.js"></script>
<script src="js/eventListeners.js"></script>
</html>