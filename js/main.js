jQuery(document).ready(function($){

    // jQuery sticky Menu

    // $(function() {
    // $(".myabout").hover(
    // function() {  //use a class, since your ID gets mangled
    //     console.log("yo");
    // $(".mymenu").addClass("visible");      //add the class to the clicked element
    // $(".mymenu").removeClass("hidden");
    // },
    // function() {  //use a class, since your ID gets mangled
    // $(".mymenu").addClass("hidden");      //add the class to the clicked element
    // $(".mymenu").removeClass("visible");
    // });
    // });

	$(".mainmenu-area").sticky({topSpacing:0});







    // Bootstrap Mobile Menu fix
    $(".navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass('in');
    });


});

