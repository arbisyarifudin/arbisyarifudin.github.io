$(document).ready(function(){

     $('#slider-hero').owlCarousel({
         loop: true,
         autoWidth: false,
         nav: true,
         items:1,
         navText: [
             '<i class="fa fa-angle-left" aria-hidden="true"></i>',
             '<i class="fa fa-angle-right" aria-hidden="true"></i>'
         ],
         navContainer: '#hero-area',
     });

});