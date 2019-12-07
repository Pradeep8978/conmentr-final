$(function() {
    $(document).scroll(
            function() {
                var $nav = $(".sticky-top");
                $nav.toggleClass('scrolled', $(this).scrollTop() > $nav
                        .height());
                var $nav1 = $(".logo");
                $nav1.toggleClass('scrolled',
                        $(this).scrollTop() > $nav1.height());
            });
    $('#loginbtn').click(function() {
        $('.modal').addClass('open');

        if ($('.modal').hasClass('open')) {
            $('.cont').addClass('blur');
        }
    });

    $('.close').click(function() {
        $('.modal').removeClass('open');
        $('.cont').removeClass('blur');
    });
});