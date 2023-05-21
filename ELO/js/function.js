/* Menu Button */
$('#menu-btn').click(function() {
    $('nav .nagivation ul').addClass('active')
});
$('#menu-close').click(function() {
    $('nav .nagivation ul').removeClass('active')
});

var e = {
    init: function () {
        e.backTotop()
    },
/* START: 08 Back to Top */
 backTotop: function () {
    var scrollpos = window.scrollY;
    var backBtn = e.select('.back-top');
    if (e.isVariableDefined(backBtn)) {
        var add_class_on_scroll = () => backBtn.addClass("back-top-show");
        var remove_class_on_scroll = () => backBtn.removeClass("back-top-show");

        window.addEventListener('scroll', function () {
            scrollpos = window.scrollY;
            if (scrollpos >= 800) {
                add_class_on_scroll()
            } else {
                remove_class_on_scroll()
            }
        });

        backBtn.addEventListener('click', () => window.scrollTo({
            top: 0,
            behavior: 'smooth',
        }));
    }
}
}
/* END: Back to Top */