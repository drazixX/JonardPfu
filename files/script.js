
var typed = new Typed(".text", {
    strings: ["Programming" , "Graphic Design" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})



// Get all sections and navbar links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Observer options
const options = {
    rootMargin: '-30% 0px', // Adjust trigger visibility margin
};

// IntersectionObserver callback function
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.target.id, entry.isIntersecting); // Debug log

        // Get the corresponding link for the section
        const link = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);

        if (entry.isIntersecting) {
            // Add 'active' class to the link when the section is visible
            link.classList.add('active');
        } else {
            // Remove 'active' class when the section is not visible
            link.classList.remove('active');
        }
    });
}, options);

// Observe each section
sections.forEach((section) => {
    observer.observe(section);
});


// ABOUT
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.5 // The element will be considered in view when 50% of it is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the element has appeared
            }
        });
    }, observerOptions);

    // Observe each section or element you want to animate on scroll
    document.querySelectorAll('#Skills .sec, #Projects .row, #Services .prj-list, #Contact .contact-list').forEach((el) => {
        observer.observe(el);
    });
});
