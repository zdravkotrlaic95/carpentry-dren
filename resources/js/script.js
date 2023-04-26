$(document).ready(function(){
    $('.section-offer').waypoint(function(direction){
        if(direction=='down'){
            $('.navigacija').addClass('sticky');
        }else{
            $('.navigacija').removeClass('sticky');
        }

    }, {
        offset:'60px'
    });
    $('.section-offer').waypoint(function(direction){
        $('.ponuda').addClass('animate__animated animate__fadeIn');
    });
    $('.section-works').waypoint(function(direction){
        $('.logo-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset:'30%'
    });
    $('.section-cities').waypoint(function(direction){
        $('.gradovi').addClass('animate__animated animate__fadeIn');
    },{
        offset: '30%'
    });
    $('.section-accounts').waypoint(function(direction){
        $('.premium').addClass('animate__animated animate__pulse');
    },{
        offset:'30%'
    });

});