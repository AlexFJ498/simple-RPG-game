let finish = false;

function setGameStart(e, classType){
    e.preventDefault();
    switch (classType) {
        case "Cazador":
            player = new Player(classType, 200, 0, 50, 200, 100);
            break;
            
        case "Orco":
            player = new Player(classType, 100, 0, 100, 150, 200);
            break;
            
        case "Guerrero":
            player = new Player(classType, 200, 0, 200, 100, 50);
            break;
            
        case "Mago":
            player = new Player(classType, 70, 100, 150, 150, 100);
            break;
    }

    let html = `<img src="img/avatar-player/` + classType.toLowerCase() + `.png" class="img-avatar"> 
                <div class="desc">
                    <div class="info" id="infoEnemy"></div>
                    <div class="finish" id="victory"></div>
                    <h3>` + classType + `</h3>
                    <p id="health-player">Vida: ` + player.getHealth() + `</p>
                    <p>Maná: ` + player.getMana() + `</p>
                    <p>Fuerza: ` + player.getStrength() + `</p>
                    <p>Agilidad: ` + player.getAgility() + `</p>
                    <p>Velocidad: ` + player.getSpeed() + `</p>
                </div>
               `;
               
    $('#header').fadeOut();
    $('#interface').fadeOut();

    $("#actions").html(`<a href="#" class="btn-prefight" id="search">Buscar un enemigo</a>`);
    
    $('#interface').promise().done(function(){
        $("#header").html(`<p>Objetivo: Encuentra un enemigo!</p>`);
        $('#interface').html(html);

        $("#header").fadeIn();
        $('#interface').fadeIn();
        $("#actions").fadeIn();
        $("#arena").fadeIn();
        
        $('#actions').css('display', 'flex');
    });
    
    searchBtn();
}

function setFight(e){
    e.preventDefault();

    let enemy0 = new Enemy("Goblin", 100, 0, 50, 100, 100);
    let enemy1 = new Enemy("Troll", 200, 0, 150, 80, 150);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy) {
        case 0:
            enemy = enemy0;
            break;
    
        case 1:
            enemy = enemy1;
            break;
    }

    
    let html = `<img src="img/avatar-enemies/` + enemy.getEnemyType().toLowerCase() + `.png" class="img-avatar"> 
                <div class="desc">
                    <div class="info" id="infoPlayer"></div>
                    <div class="finish" id="lost"></div>
                    <h3>` + enemy.getEnemyType() + `</h3>
                    <p id="health-enemy">Vida: ` + enemy.getHealth() + `</p>
                    <p>Maná: ` + enemy.getMana() + `</p>
                    <p>Fuerza: ` + enemy.getStrength() + `</p>
                    <p>Agilidad: ` + enemy.getAgility() + `</p>
                    <p>Velocidad: ` + enemy.getSpeed() + `</p>
                </div>
               `;
    
    $("#header").fadeOut(20);
    $('#enemy').fadeIn(500);
    $("#enemy").css('display', 'flex');

    $("#actions").html(`<a href="#" class="btn-prefight" id="attack">Atacar</a>`);
    
    $("#header").promise().done(function(){
        $("#header").html(`<p>Objetivo: Elige tu movimiento</p>`);
        $("#enemy").html(html);

        $('#header').fadeIn(480);
    });
    

    attackBtn();
}

function calcAttack(e){
    e.preventDefault();

    // Start attack
    if(player.getSpeed() >= enemy.getSpeed() && finish !== true){
        insertInfoPlayer(player.attack());

        if(enemy.getHealth() <= 0){
            $('#health-enemy').html('Vida: 0');
            insertVictory();
        } else{
            $('#health-enemy').html('Vida: ' + enemy.getHealth());
            
            insertInfoEnemy(enemy.attack());

            if(player.getHealth() <= 0){
                $('#health-player').html('Vida: 0');
                insertLost();
            } else{
                $('#health-player').html('<p>Vida: ' + player.getHealth());
            }
        }
    } else if (finish !== true){
        insertInfoEnemy(enemy.attack());

        if(player.getHealth() <= 0){
            $('#health-player').html('Vida: 0');
            insertLost();
        } else{
            $('#health-player').html('Vida: ' + player.getHealth());
            
            insertInfoPlayer(player.attack());

            if(enemy.getHealth() <= 0){
                $('#health-enemy').html('Vida: 0');
                insertVictory();
            } else{
                $('#health-enemy').html('Vida: ' + enemy.getHealth());
            }
        }
    }
}

function insertInfoPlayer(info){
    $("#infoPlayer").fadeOut(100);
    $("#infoPlayer").promise().done(function(){
        $("#infoPlayer").html(info).fadeIn(100);
    });
}

function insertInfoEnemy(info){
    $("#infoEnemy").fadeOut(100);
    $("#infoEnemy").promise().done(function(){
        $("#infoEnemy").html(info).fadeIn(100);
    });
}

function insertVictory(){
    $("#victory").html("¡HAS GANADO!").fadeIn(500);
    finish = true;
}

function insertLost(){
    $("#lost").html("HAS PERDIDO...").fadeIn(500);
    finish = true;
}