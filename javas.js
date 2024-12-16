// Get the necessary elements
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Ensure the menu is hidden on page load
window.addEventListener('DOMContentLoaded', () => {
    navMenu.classList.remove('show-menu'); // Remove the 'show-menu' class to hide the menu
});

// Show the menu when navToggle is clicked
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu'); // Add the 'show-menu' class to display the menu
    });
}

// Hide the menu when navClose is clicked
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu'); // Remove the 'show-menu' class to hide the menu
    });
}

// Remove the menu when a link is clicked (for mobile experience)
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    navMenu.classList.remove('show-menu'); // Remove the 'show-menu' class to hide the menu
};

// Attach the click event listener to each link
navLinks.forEach(link => link.addEventListener('click', linkAction));


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add  blur header class to
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        :header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_pjjrywh', 'template_ohtfn7s', '#contact-form', 'wc-HIu11AK6iH-Iwh')
    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent=''
        }, 5000)

        //Clear Input fields
        contactForm.reset()

    }, ()=>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                    : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true //Animation repeat
})

sr.reveal('.home__data, .home__social, .contact__container, .footer__container')
sr.reveal('.home__image',{origin:'bottom'})
sr.reveal('.about__data, .skills__data',{origin:'left'})
sr.reveal('.about__image, .skills__content',{origin:'right'})
sr.reveal('.services__card, .projects__card',{interval: 100})


// ================= Typing script=========================
// var typed = new Typed(".home__subtitle",{
//     strings: ["Hello","i am"],
//     typeSpeed:100,
//     backSpeed:100,


// })

let title = document.querySelector('.home__title');

let words = "Shashi Kumar B";
let index = 0;


const typeWriter = () => {
    let new_title = words.slice(0, index + 1);
    title.innerText = new_title;

    index++;

    // if (index >= words.length) {
    //     index = 0;
    // }

    setTimeout(typeWriter, 150);
}
//setInterval(typeWriter(),50);

typeWriter();