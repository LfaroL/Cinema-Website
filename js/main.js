/*global $*/

$(document).ready(function () {
    "use strict";
    
    $('#screenshots a').on('click', function () {
        $('#modal img').attr('src', $(this).attr('data-image-url'));
    });
    
    
    var nav = $('.navbar-fixed-top'),
        distance = $('.navbar-fixed-top').offset();

    if (distance.top >= 500) {
        nav.addClass('effect');
    }
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        
//        console.log(scroll);
//        console.log(distance);
        
        if (scroll >= 500) {
            nav.addClass('effect');
        } else {
            nav.removeClass('effect');
        }
        
        
    });

    /* div, .blue-circle and img animation*/
    
    $('#about .blue-circle').waypoint(function () {
        $('#about .blue-circle').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('#features .blue-circle').waypoint(function () {
        $(this.element).addClass('animated fadeInUp');      /* Animates each div one by one */
    }, {
        offset: '50%'
    });
       
    $('.features-image img').waypoint(function () {
        $('.features-image img').addClass('animated rubberBand');
    }, {
        offset: '25%'
    });
     
    $('#screenshots .col-xs-4 img').waypoint(function () {
        $(this.element).addClass('animated zoomIn');
        $(this.element).css({'opacity': 1});    /* add css attribute "opacity: 1" to element */
    }, {
        offset: '50%'
    });
     
    $('#download div.phone img').waypoint(function () {
        $(this.element).addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
         
    $('#download .platforms > div').waypoint(function () {
        $(this.element).addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

//    $('#form').bootstrapValidator({
//        message: 'This value is not valid',
//        feedbackIcons: {
//            valid: 'glyphicon glyphicon-ok',
//            invalid: 'glyphicon glyphicon-remove',
//            validating: 'glyphicon glyphicon-refresh'
//        },
//        fields: {
//            name: {
//                validators: {
//                    notEmpty: {
//                        message: 'This field is required and cannot be empty'
//                    }
//                }
//            },
//            email: {
//                validators: {
//                    notEmpty: {
//                        message: 'This field is required and cannot be empty'
//                    },
//                    emailAddress: {
//                        message: 'The input is not a valid email address'
//                    }
//                }
//            },
//            message: {
//                validators: {
//                    notEmpty: {
//                        message: 'The message cannot be empty, why send an empty message?'
//                    }
//                }
//            }
//        }
//    }).on('success.form.bv', function (e) {
//        e.preventDefault();
//            
//        var $form = $(e.target),
//            bv = $form.data('bootstrapValidator');
//        
//        $.post($form.attr('action'), $form.serialize(), function (result) {
//            console.log(result);
//        }, 'json');
//    });
    
    /* '==' does type coercion, '===' keeps data integrity */
    /* Added ":not([href="#modal"])" to ignore modals */
    
    $(function () {
        $('a[href*="#"]:not([href="#"]):not([href="#modal"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 40
                    }, 1000);
                    return false;
                }
            }
        });
    });


});


