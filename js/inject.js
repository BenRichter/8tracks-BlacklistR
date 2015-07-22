// content.js
jQuery(function($) {

    // Do on song loading    (stops after jquery fail ??)
//    $(document).ajaxComplete(function(event,xhr, settings){
//        console.log("ajaxComplete");
//        console.log(event);
//        console.log(xhr);
//        console.log(settings);
//
//        addButton();
//    });


    var $player;  // #player #now_playing
    var $favLink; // #player #now_playing a.fav

    var trackID = 0;
    // check every 2 second for new song
    window.setInterval(function(){
        $player = $("#player #now_playing");
        $favLink = $player.find("a.fav");

        if(trackID !== $favLink.data("track_id")){
            trackID = $favLink.data("track_id");
            addButton();
            blacklistSong();
        }
    }, 2000);


    /**
     *  add the blacklist button
     */
    function addButton (){
        $favLink.after('<a href="" class="black" data-method="post" data-track_id="' + trackID + '" title="Add this track to your blacklist">' +
                            '<span class="i-x"></span>' +
                        '</a>');

       // trackID
    }

    /**
     * check current song if on List
     */
    function checkOnList (){


        // set button active
    }


    /**
     * put song on blacklist
     */
    function blacklistSong(){
        $player.find("a.black").on("click", function(ev){
            ev.preventDefault();




            $('#player_skip_button').click();
           // TODO: check for next_mix_button if three times skipped

            $(this).toggleClass('active');
        });

        // listen to button skip

        // set active

    }

    /**
     * trigger the skip event/link
     */
    function skipSong(){


    }


       // $('#now_playing li.track').prepend('<a class="skip" href="/skip-dat"><span class="i-favorite"></span></a>');


});



// GET https://api.soundcloud.com/tracks/6074695/stream?client_id=3904229f42df3999df223f6ebf39a8fe