let finish = false;

function setGameStart(e, response){
    e.preventDefault();
    player = new Player(response.name, response.health, response.mana, response.strength, response.agility, response.speed);

    let html = `<img src="` + response.image + `" class="img-avatar"> 
                <div class="desc">
                    <div class="info" id="infoEnemy"></div>
                    <div class="finish" id="victory"></div>
                    <h3>` + player.getClassType() + `</h3>
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

function setFight(e, response){
    e.preventDefault();

    enemy = new Enemy(response.name, response.health, response.mana, response.strength, response.agility, response.speed);
    
    let html = `<img src="` + response.image + `" class="img-avatar"> 
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