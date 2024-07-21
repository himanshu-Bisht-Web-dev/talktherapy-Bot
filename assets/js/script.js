
$(document).ready(function(){
    $('.feedback-slider').owlCarousel({ 
        loop: false, //Set to false, so the carousel does not loop back to the beginning when it reaches the end.
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        navText: ["<i class = 'fas fa-arrow-left'></i>", "<i class = 'fas fa-arrow-right'></i>"] 
       // navText: Customizes the navigation arrows to use Font Awesome icons.

    });
  
});