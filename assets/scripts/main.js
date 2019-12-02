$(document).ready(function () {
    $("body").scrollspy({ target: "#navbar-main" });
    $("body").scrollspy({ target: "#navbar-principal" });
    $('.mainSlider').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $('.InstallationsSlider').slick({
        prevArrow: $('.prevInstallations'),
        nextArrow: $('.nextInstallations'),
        autoplay: true,
        autoplaySpeed: 4000,
    });
});