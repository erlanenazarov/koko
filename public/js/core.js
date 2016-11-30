/**
 * Created by Эрлан on 25.11.2016.
 */
var pre_order_button = '<div class="pre-order-settings"> <div class="text">Количество</div> <div class="count"> <div class="count-value">1</div> <div class="settings-buttons"> <img src="public/images/icons/plus.png" class="plus-trigger" /> <img src="public/images/icons/minus.png" class="minus-trigger" /> </div> </div> <div class="done"> <img src="public/images/icons/done.png" class="done-trigger" /> </div> </div>';


var add_to_card = $('.add-to-card');

$(add_to_card).on('click', function() {
    $(this).parent().html(pre_order_button);
});

var closeButton = $('.md-close');
var openButton = $('#order-button');

var addToCart = $('button[class="add-to-card"]');

$(addToCart).on('click', function() {
    $('#alert-modal').fadeIn('fast');
});

$(openButton).on('click', function() {
    $('#order-modal').fadeIn('fast');
});

$(closeButton).on('click', function() {
    $('.md-window').addClass('close');
    $('#order-modal').fadeOut('fast', function() {
        $('.md-window').removeClass('close');
    });
});

$('.md-alert-close').on('click', function() {
    $('.md-alert').addClass('close');
    $('#alert-modal').fadeOut('fast', function() {
        $('.md-alert').removeClass('close');
    });
});

$(document).ready(function() {
    $(window).on('scroll', function() {
        if($(window).scrollTop() > 140) {
            $('.fixed-header').fadeIn('fast');
        } else {
            $('.fixed-header').fadeOut('fast');
        }
    });

    var isOpen = false;
    $('#mobile-menu').on('click', function() {
        if(!isOpen) {
            $('.mobile-fixed-menu').animate({
                height: 170
            }, 500);
            isOpen = true;
        } else {
            $('.mobile-fixed-menu').animate({
                height: 0
            }, 500);
            isOpen = false;
        }
    });

    var navigationTrigger = $('.navigation-trigger');
    $(navigationTrigger).on('click', function(event) {
        event.preventDefault();
        var block = $(this).attr('href') + '';
        $('body, html').animate({
            scrollTop: $(block).offset().top
        }, 800);
        $('.mobile-fixed-menu').animate({
            height: 0
        }, 500);
        isOpen = false;
    });
});