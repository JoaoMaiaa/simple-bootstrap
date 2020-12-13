$(()=>{
    // scroll-reveal  
    let sr = ScrollReveal();

    sr.reveal('.scroll-hidden',{
        distance: '50px',
        origin: 'right'
    });

    sr.reveal('.scroll-hidden-left',{
        distance: '50px',
        origin: 'left'
    });

    // menu/scroll-smooth
    $('.navbar a').on('click',function(e){
        e.preventDefault();
        
       let id = $(this).attr('href');

       let targetOffset = $(id).offset().top;

       $('html , body').animate({
            scrollTop:targetOffset + 350
       },500);

       $('.collapse').collapse('toggle');

    });
});