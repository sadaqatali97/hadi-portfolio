(function ($) {
/*----------------------------------------
            Isotope Masonry
------------------------------------------*/
function isotopeMasonry() {
    $(".isotope-gutter").isotope({
        itemSelector: '.work__col',
        percentPosition: true
    });
    $(".isotope-no-gutter").isotope({
        itemSelector: '.work__col',
        percentPosition: true,
        masonry: {
            columnWidth: 1
        }
    });

    $(".filter__tab a").on("click", function () {
        $(".filter__tab a").removeClass("active");
        $(this).addClass("active");
        // portfolio fiter
        var selector = $(this).attr("data-filter");
        $(".isotope-gutter").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            }
        });
        return false;
    });
}

$(window).on("load", function () {
    isotopeMasonry();
});
})(jQuery);