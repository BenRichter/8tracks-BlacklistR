
// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var blacklist = [];
var $list = $('ul');


//TODO: sort alphabetically

loadList(); //init
function loadList(){
    chrome.storage.sync.get(['list'], function(result){
        blacklist = result.list;

        if(blacklist === undefined){
            blacklist = [[],[]];
        }else {
            $list.html(""); 
        }      

        var blackLength = blacklist[0].length;
        if(blackLength.length !== 0){
            
            for (var i = 0; i < blackLength; i++) {
                $list.append('<li><a href="#" data-array_nbr="' + i +'" >'+ blacklist[1][i] + '</a></li>');
               // $list.append('<li><a href="#" data-array_nbr="' + i +'" >'+ blacklist[1][i] + '</a>  -> ' + blacklist[0][i] +' </li>');
            }
            
            $('a').on("click", function(){
                removeSong($(this).data("array_nbr"));
            });
        }
        
        $list.fadeIn();

    });
}



function removeSong(arr_nbr){
    
    // save refresh
    chrome.storage.sync.get(['list'], function(result){
        blacklist = result.list;

        blacklist[0].splice(arr_nbr, 1);
        blacklist[1].splice(arr_nbr, 1);

        chrome.storage.sync.set({'list': blacklist}, function() {
            loadList(); //reloading
        });

    });


    

}


