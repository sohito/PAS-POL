'use-strict';

$(function() {
    $('.drawer-btn').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.drawer-nav').removeClass('open');
        }else {
            $(this).addClass('active');
            $('.drawer-nav').addClass('open');
        }
    });

    $('.drawer-nav a').on('click', function() {
        $('.drawer-nav').removeClass('open');
        $('.drawer-btn').removeClass('active');
    });

    $('.hatena').on('click', function() {
        alert("ごめんなさい。そのボタンは押せません。");
    });
    $('.line').on('click', function() {
        alert("ごめんなさい。そのボタンは押せません。");
    });
});
