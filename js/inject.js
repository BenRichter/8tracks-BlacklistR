// content.js
console.log("Skip Tracks - 8tracks is here...");

jQuery(function($) {



    // TODO: checks if song is playing
    var playing = false;
    window.setInterval(function(){
        if($("#now_playing").length){
            playing = true;
            console.log("playing");
        }else{
            console.log("nope...");

        }
    }, 1000);


        console.log("after while");
        $('#now_playing li.track').prepend('<a class="skip" href="/skip-dat"><span class="i-favorite"></span></a>');


});
