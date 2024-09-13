/* Subtle page animations on-scroll */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) { /* If entry is intersecting the viewport or not */
            entry.target.classList.add('show'); /* Shows the animation */
        } else { 
            entry.target.classList.remove('show'); /* Allows animation to be shown multiple times */
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden'); /* Targeting elements that have a class of hidden */
hiddenElements.forEach((el) => observer.observe(el)); /* Observes all hidden elements */