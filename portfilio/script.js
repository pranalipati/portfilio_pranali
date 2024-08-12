let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = ( ) => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}


menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const sendBtn = document.querySelector('#contact-form .btn');

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Show the prompt
    const userResponse = prompt('Please enter your message:');

    // Check if the user entered something
    if (userResponse) {
        // You can now process the user's input, e.g., send it to a server or display it on the page
        console.log('User message:', userResponse);
    } else {
        alert('No message provided.');
    }
});
