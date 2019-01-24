var random_result;
   var lost =0;
   var win = 0;
   var previous =0;

   var resetAndstart = function (){
        $(".crystals").empty();

   var images = [
        'https://www.crystalhills.com/wp-content/uploads/2016/10/Emerald-at-CHO.jpg',
        'http://www.fengshuibestbuy.com/SL11827-3lotus.JPG',
        'http://cdn.shopify.com/s/files/1/1409/2086/products/2078_231_FO_10_FV_MI_grande.jpg?v=1527179847',
        'https://media.tenor.com/images/833bcbded18827b1e06950549d4373fb/tenor.gif',
        ]

    random_result = Math.floor(Math.random() * 69) + 30;

    $("#result").html('Random Result:' + random_result);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
            crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"

            });

        $(".crystals").append(crystal);
    }

    $("#previous").html("Total score: " + previous);

}
resetAndstart();


var reset = function() {

}

$("document").on('click', ".crystal", function() {

    var num = parsenInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total score: " + previous);
    console.log(previous);

    if(previous > random_result){
        lost++;
        $("#lost").html("You lost: " + lost);
        previous = 0;
        
        resetAndStart();

    } 
    else if(previous === random_result) {

        win++;
        $("#win").html("You win: " + win);
        previous = 0;
        resetAndStart();



    }
