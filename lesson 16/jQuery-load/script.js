// AJAX exercise

$(document).ready(function(){
	$("main").load("home.html");
    $("#home").click(function(){
        $("main").load("home.html");
    });
    $("#about").click(function(){
        $("main").load("about.html");
    });    
});