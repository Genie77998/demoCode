require(
    [
        "../base/jquery",
        "../base/swiper.min",
        "../lib/base"
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
