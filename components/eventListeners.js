$(document).ready(function () {
    $('.player').click( function(e) {
        setGameStart(e, $(this).attr('data-type'))
    });
});

function searchBtn(){
    $('#search').click((e) => setFight(e));
}

function attackBtn(){
    $('#attack').click((e) => calcAttack(e));
} 