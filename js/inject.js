// content.js
console.log("Skip Tracks - 8tracks is here...");

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


    var $favLink;
    var trackID = 0;
    // check every 2 second for new song
    window.setInterval(function(){
        $favLink = $("#player #now_playing a.fav");

        if(trackID !== $favLink.data("track_id")){
            trackID = $favLink.data("track_id");
            addButton();
            console.log("new track");
        }

        console.log(trackID);

    }, 2000);


    /**
     *  add the blacklist button
     */
    function addButton (){
        $favLink.after('<a href="/toggle_black" class="black inactive" data-method="post" data-track_id="' + trackID + '" title="Add this track to your blacklist">' +
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