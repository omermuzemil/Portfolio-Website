// nav icon

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);


// Download CV
const downloadBtn = document.getElementById("downloadCvBtn");

downloadBtn.addEventListener("click", () => {

    const link = document.createElement("a");

    link.href = "/files/Omer-Muzemil-CV.pdf";

    link.download = "Omer-Muzemil-CV.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

});

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


// contact page send js
emailjs.init("A5Eymo5xRJ8i1gBUQ");

const sendBtn = document.getElementById("send-btn");
const status = document.getElementById("status");

const inputs = document.querySelectorAll(".input");

// check fields function
function checkFields() {
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    sendBtn.disabled = !allFilled;
}

// run once on page load
checkFields();

// listen for typing
inputs.forEach(input => {
    input.addEventListener("input", checkFields);
});

// send message
sendBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!fullName || !email || !subject || !message) {
        status.innerText = "Please fill all fields!";
        status.style.color = "red";
        return;
    }

    const params = {
        fullName,
        email,
        subject,
        message
    };

    emailjs.send(
        "service_206jgqm",
        "template_lm5j4ti",
        params
    )
    .then(() => {
        status.innerText = "Message sent successfully!";
        status.style.color = "green";

        // optional reset
        inputs.forEach(input => input.value = "");
        checkFields();
    })
    .catch(() => {
        status.innerText = "Failed to send message!";
        status.style.color = "red";
    });
});