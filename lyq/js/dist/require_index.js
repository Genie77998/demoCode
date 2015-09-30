require(
    [
        "http://code.jquery.com/jquery-1.8.3.min.js",
        "js/base/swiper.min.js",
        "js/lib/base.js"
    ],
    function() {
        $(function() {
           var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 30,
                loop: true
            });
            $('.colockbox').dajishi();
        });
    });
