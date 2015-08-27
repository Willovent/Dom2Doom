
function JQueryRequireFunc() {

	//Make every elements roll on the screen
    window.rollOverEverything = function(){
    	$('body>*>*>*>* *').css({transition : "all 5s", transform : "rotate(1080deg) scale(0.8)"});
    	setTimeout(function(){
    		$('body>*>*>*>* *').css({transform : ""});
    	}, 5*1000);
    	setTimeout(function(){
    		$('body>*>*>*>* *').css({transition : ""});
    	}, 10*1000);
    }

}
//include JQuery cdn if needed
if(typeof jQuery=='undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
    jqTag.type = 'text/javascript';
    jqTag.src = 'https://code.jquery.com/jquery-2.1.4.min.js';
    jqTag.onload = JQueryRequireFunc;
    headTag.appendChild(jqTag);
} else {
     JQueryRequireFunc();
}