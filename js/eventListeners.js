$(document).ready(function () {
    $('.player').mouseenter(function(){
        let data1 = $(this).attr("data-type");
        $('.hidden_stats').each(function(){
            let data2 = $(this).attr("data-type");

            if(data1 === data2){
                $(this).slideDown(200);
            }
        })
    });

    $('.player').mouseleave(function(){
        let data1 = $(this).attr("data-type");
        $('.hidden_stats').each(function(){
            let data2 = $(this).attr("data-type");

            if(data1 === data2){
                $(this).slideUp(200);
            }
        })
    });

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

    $('.back').click(function (e) { 
        e.preventDefault();
        location.reload();
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