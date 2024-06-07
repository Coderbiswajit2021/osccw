// Sticky Navbar
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 0) {
//         $('.navbar').addClass('nav-sticky');
//     } else {
//         $('.navbar').removeClass('nav-sticky');
//     }
// });

// window.addEventListener('scroll', function () {
//     const header = document.querySelector('header');
//     header.classList.toggle("sticky", window.scrollY > 0);
// });

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
})



sr.reveal(`.scroll-top, .footer-row`)
// sr.reveal(`.about-img `, { delay: 800, scale: .5 })

const srt = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
    delay: 300,
})

srt.reveal(`.box-1`)