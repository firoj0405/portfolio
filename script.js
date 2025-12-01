document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------
    // A) Project Modal Logic (for IAMS workflow)
    // ----------------------------------------
    const modal = document.getElementById("iams-modal");
    const link = document.getElementById("iams-link");
    const closeButton = modal.querySelector(".close-button");

    if (link && modal && closeButton) {
        // Open the modal
        link.onclick = function(e) {
            e.preventDefault();
            modal.style.display = "block";
            modal.removeAttribute('hidden');
            link.setAttribute('aria-expanded', 'true');
        }

        // Close the modal via X button
        closeButton.onclick = function() {
            modal.style.display = "none";
            modal.setAttribute('hidden', '');
            link.setAttribute('aria-expanded', 'false');
        }

        // Close the modal when clicking anywhere outside
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                modal.setAttribute('hidden', '');
                link.setAttribute('aria-expanded', 'false');
            }
        }
    }


    // ----------------------------------------
    // B) Scroll Reveal Animation (Visual Enhancement)
    // ----------------------------------------
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        // Add CSS transition for smooth animation (needs supporting CSS)
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        el.style.willChange = 'opacity, transform';
        observer.observe(el);
    });

    // Note: You should define the '.reveal.active' style in your CSS for the animation to work:
    // .reveal.active {
    //     opacity: 1 !important;
    //     transform: translateY(0) !important;
    // }

});
