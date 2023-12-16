document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.querySelector('a[href="#aboutSection"]');
    const contactLink = document.querySelector('a[href="#contactSection"]');
    
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#aboutSection').scrollIntoView({ behavior: 'smooth' });
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#contactSection').scrollIntoView({ behavior: 'smooth' });
    });
});
  