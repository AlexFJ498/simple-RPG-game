$(document).ready(function () {
    $('.player').click( function(e) {
        $.ajax({
            type: "POST",
            url: "./components/getPlayer.php",
            data: {
                "name": $(this).data("type")
            },
            dataType: "JSON",
            success: function (response) {
                setGameStart(e, response)
            }
        });        
    });
});

function searchBtn(){
    $('#search').click(function(e){
        $.ajax({
            type: "POST",
            url: "./components/getEnemy.php",
            dataType: "JSON",
            success: function (response) {
                setFight(e, response)
            }
        });
    });
}

function attackBtn(){
    $('#attack').click((e) => calcAttack(e));
} 