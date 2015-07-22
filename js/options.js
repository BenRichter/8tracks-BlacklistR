
// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var blacklist = [];
var $list = $('ul');


loadList(); //init
function loadList(){
    chrome.storage.sync.get(['list'], function(result){
        blacklist = result.list;

        if(blacklist === undefined){
            blacklist = [[],[]];
        }

        $list.html("");
        for (var i = 0; i < blacklist[0].length; i++) {
            $list.append('<li><a href="#" data-array_nbr="' + i +'" >'+ blacklist[1][i] +'</a></li>');
        }

        $('a').on("click", function(){
            removeSong($(this).data("array_nbr"));
        });


    });
}



function removeSong(arr_nbr){


    blacklist[0].splice(arr_nbr, 1);
    blacklist[1].splice(arr_nbr, 1);

    chrome.storage.sync.set({'list': blacklist}, function() {
        loadList(); //reloading
    });

}


