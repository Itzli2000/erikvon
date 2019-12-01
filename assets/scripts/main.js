$('document').ready(function () {
    $("body").scrollspy({target:"#navbar-main"});
    $("body").scrollspy({target:"#navbar-principal"});
    $(document).ready(function () {
        $('.mainSlider').slick({
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            autoplay: true,
            autoplaySpeed: 4000,
        });
    });
});