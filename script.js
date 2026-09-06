document.addEventListener('DOMContentLoaded', () => {
    const slogans = [
        "Comfort in Every Step",
        "Walk with Confidence"
    ];
    
    const sloganElement = document.getElementById('slogan-text');
    let sloganIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typingSpeed = 100;    // Delay per character while typing
    const erasingSpeed = 50;     // Delay per character while erasing
    const delayBetween = 2000;   // Pause time when full slogan is displayed

    function typeEffect() {
        const currentSlogan = slogans[sloganIndex];

        if (isDeleting) {
            // Remove character
            sloganElement.textContent = currentSlogan.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Add character
            sloganElement.textContent = currentSlogan.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = isDeleting ? erasingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentSlogan.length) {
            // Finished typing current slogan, pause then delete
            currentSpeed = delayBetween;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, move to next slogan
            isDeleting = false;
            sloganIndex = (sloganIndex + 1) % slogans.length;
            currentSpeed = 500; // Brief pause before typing next slogan
        }

        setTimeout(typeEffect, currentSpeed);
    }

    // Start typing animation
    typeEffect();
});