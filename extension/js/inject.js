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
    var blacklist = [[],[]]; // [trackIDs],[Song - Artist]

    /**
     * MAIN-pulse
     * check every 2 second for new song
     */
    window.setInterval(function(){
        $player = $("#player #now_playing");
        $favLink = $player.find("a.fav");

        if(trackID !== $favLink.data("track_id")){
           trackID =   $favLink.data("track_id");

            checkOnList();
            addButton();            
        }
    }, 2000);


    /**
     *  add button and listener
     */
    function addButton (){
        $favLink.after('<a href="javascript:void(0)" class="black" data-method="post" data-track_id="' + trackID + '" title="Add this track to your blacklist">' +
                            '<span class="i-x"></span>' +
                        '</a>');

        $player.find("a.black").on("click", function(ev){
            ev.preventDefault();

            $(this).addClass('active').unbind();

            blacklistSong(trackID);
        });
    }

    /**
     * check current song if on List, true: skip
     */
    function checkOnList (){

        chrome.storage.sync.get(['list'], function(result){
            blacklist = result.list;

            // first init if empty
            if(blacklist === undefined){
                blacklist = [[],[]];
                chrome.storage.sync.set({'list': blacklist}, function(){});
            }

            if( blacklist[0].indexOf(trackID) > -1 ){
                console.log("skipped song " + trackID);
                skipSong();
            }

        });

    }

    /**
     *  save song to blacklist in chrome synched API and skip
     */
    function blacklistSong(currentTrackID){

        var artistName = $player.find(".title_artist .t").text();
        artistName += " - " + $player.find(".title_artist .a").text();

        blacklist[0].push(currentTrackID);
        blacklist[1].push(artistName);

        chrome.storage.sync.set({'list': blacklist}, function() {
            skipSong();
        });
    }

    /**
     * trigger the skip event/link
     */
    function skipSong(){

        $('#player_skip_button').click();
        // TODO: check for next_mix_button if three times skipped

    }

});