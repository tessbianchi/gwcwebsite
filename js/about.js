

$(function() {                       //run when the DOM is ready
  $(".clickcontact").click(function() {  //use a class, since your ID gets mangled
     console.log("He");
    $(".contact").toggleClass("mynothiddencontact animated slideInDown");      //add the class to the clicked element
  });
});







//  $(".mybutton").click(function() {
//     console.log("hey");
//     $('html,body').animate({
//         scrollTop: $(".mymission").offset().top},
//         'slow');
// });
