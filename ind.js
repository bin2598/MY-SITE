$(document).ready(function(){

    $(window).scroll(function(){
        
        if (this.scrollY > 120) {
            $(".nav").addClass("stick");
        }
        else{
            $(".nav").removeClass("stick");
        }
        if (window.innerWidth < 701){
            $(".nav").removeClass("stick");
        }
    });

    $(".menu-toggler").click(function(){
        $(this).toggleClass("active")
        $(".nav").toggleClass('active')
        });

    $(".nav").click(function() {
        if (window.innerWidth < 700 ){
            $(".menu-toggler").toggleClass("active")
            $('.nav').toggleClass("active")
        }
    });

    
});