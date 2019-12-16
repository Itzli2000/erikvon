$(document).ready(function () {
    $("body").scrollspy({ target: "#navbar-main" });
    $("body").scrollspy({ target: "#navbar-principal" });
    $('.mainSlider').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.InstallationsSlider').slick({
        prevArrow: $('.prevInstallations'),
        nextArrow: $('.nextInstallations'),
        autoplay: true,
        autoplaySpeed: 3000,
    });
    var isMessageSent = setInterval(() => {
        var urlActual = new URL(document.location);
        var isSent = urlActual.searchParams.get("send");
        if (isSent) {
            console.log(isSent);
            // window.history.replaceState({}, document.title, "/");
            clearInterval(isMessageSent);
            Swal.fire({
                icon: 'success',
                title: 'Contacto',
                html: 'Su mensaje ha sido enviado, <br>Nos pondremos en contacto a la brevedad.',
                confirmButtonColor: '#227a21'
            }).then(response => {
                document.location.href="/";
            });
        }
        // else {
        //     console.log('not sent');
        // }
    }, 500);
});