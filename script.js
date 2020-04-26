

$( document ).ready(function() {
   


$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .slideUp("slow")
     .appendTo('#slideshow');
}, 3000);
       
  ////slides take 3 seconds
    
    });
 

$("#slideshow > div").inViewport(function(px){
    if(px) $(this).addClass("triggeredCSS3") ;
});