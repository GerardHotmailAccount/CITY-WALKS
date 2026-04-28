

document.addEventListener("DOMContentLoaded", function() {

    // 1. SCROLL REVEAL: Rough Notation (Highlighting)
    // As the user scrolls, the "highlight" effect draws itself across the text
    window.addEventListener('scroll', () => {
        const highlights = document.querySelectorAll('.highlight');
        
        highlights.forEach(el => {
            const position = el.getBoundingClientRect();
            // If the element is visible on screen
            if(position.top < window.innerHeight && position.bottom >= 0) {
                el.style.backgroundSize = "100% 0.3em";
            } else {
                el.style.backgroundSize = "0% 0.3em";
            }
        });
    });
});

// 1. Find ALL the post-its on the page
const allStickyNotes = document.querySelectorAll('.post-it-sticky');

// 2. Loop through each one and add the wiggle effect
allStickyNotes.forEach(function(note) {
    
    // When the mouse enters the note
    note.addEventListener('mouseover', function() {
        this.style.transition = "transform 0.2s ease-in-out";
        this.style.transform = "rotate(0deg) scale(1.05)";
    });

    // When the mouse leaves the note (resets to the "human" tilt)
    note.addEventListener('mouseout', function() {
        this.style.transform = "rotate(-2deg) scale(1)";
    });
    
});

// Automatically expand the menu when the hamburger is clicked on mobile
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    var menu = document.querySelector('.megamenu');
    if (window.innerWidth < 992) {
        menu.classList.add('show');
    }
});

