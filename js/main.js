/*======== MODAL ==========*/ 

$(document).ready(function(){
   $('section#screenshots a').on('click', function(){
      $('div#modal img').attr('src', $(this).attr('data-image-url')); 
   }); 
    
    var nav = $('.navbar-fixed-top');
    var distance = $('.navbar-fixed-top').offset();
    
    if(distance.top >= 300){
        nav.addClass('effect');
    }
    else{
        nav.removeClass('effect');
    }
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        
        if(scroll >= 300){
            nav.addClass('effect');
        }
        else{
            nav.removeClass('effect');
        }
    
    });
    
    $('#about .blue_circle').waypoint(function(){
       $('#about .blue_circle').addClass('animated fadeInUp')
    },{
        offset: '50%'
    }
    );
    
    $('#features .blue_circle').waypoint(function(){
       $(this.element).addClass('animated fadeInUp')
    },{
        offset: '50%'
    }
    );
    
    $('#screenshots .col-xs-4').waypoint(function(){
       $(this.element).addClass('animated zoomIn');
        $(this.element).css({'opacity':1});
    },{
        offset: '50%'
    }
    );
    
    $('.features_image img').waypoint(function(){
       $('.features_image img').addClass('animated rubberBand')
    },{
        offset: '50%'
    }
    );
    
    $('#download div.phone img').waypoint(function(){
       $(this.element).addClass('animated fadeInRight');
    },{
        offset: '50%'
    }
    );
    
    $('#download .platforms > div').waypoint(function(){
       $(this.element).addClass('animated fadeInRight');
    },{
        offset: '50%'
    }
    );
    
    $('#form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'Cannot be empty'
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Cannot be empty'
                    },
                    emailAddress: {
                        message: 'Not a valid e-mail id'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'Cannot be empty'
                    }
                }
            }
        }
    }).on('success.form.bv',function(e){
        e.preventDefault();
        
        var $form = $(e.target);
        var bv = $form.data('bootstrapValidator');
        
        $.post($form.attr('action'), $form.serialize(), function(result){
            console.log(result);
        },'json');
    });
    
});

/*====== MODAL END ========*/

/*====== SMOOTH SCROLL ======*/

smoothScroll.init({
    speed: 600,
    easing: 'easeInOutQuad',
    updateURL: false,
    offset: 0
});

/*====== SMOOTH SCROLL END ======*/
