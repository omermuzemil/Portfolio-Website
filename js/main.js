// nav icon

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// tab active

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      let activeLink = document.querySelector(
        'header nav ul li a[href*="' + id + '"]'
      );

      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};

// animations

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home .first-half, .about h2, .services .title, .portfolio .title, .contact .title', { origin: 'top'});
ScrollReveal().reveal('.home .second-half, .services .card-container, .portfolio .portfolio-container, .contact .user-details, .contact .page-button', { origin: 'bottom' });
ScrollReveal().reveal('.home h1, .about .first-half', { origin: 'left' });
ScrollReveal().reveal('.home p, .about .second-half', { origin: 'right' });

// typed js

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Youtuber', 'College Student'],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true,
})