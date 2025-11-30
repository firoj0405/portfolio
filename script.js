document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Smooth Scroll for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the anchor is part of the main navigation
            if (this.classList.contains('nav-link')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Calculate position to account for the header if it were sticky
                    // Using targetElement.scrollIntoView for simplicity and modern smooth scroll
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // --- 2. Section Reveal Animation (Intersection Observer) ---
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    
    // --- 3. IAMS Project Link Interaction (Modal) ---
    const iamsLink = document.getElementById('iams-link');
    const iamsModal = document.getElementById('iams-modal');
    const closeModal = document.querySelector('.close-button');

    if (iamsLink && iamsModal && closeModal) {
        iamsLink.addEventListener('click', (e) => {
            e.preventDefault(); // Stop the default link action
            iamsModal.style.display = 'block'; // Show the modal
            // Focus on the close button for accessibility
            closeModal.focus(); 
        });

        closeModal.addEventListener('click', () => {
            iamsModal.style.display = 'none'; // Hide the modal
        });

        // Close when clicking outside the image
        iamsModal.addEventListener('click', (e) => {
            if (e.target === iamsModal) {
                iamsModal.style.display = 'none';
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && iamsModal.style.display === 'block') {
                iamsModal.style.display = 'none';
            }
        });
    }

    // --- 4. Navigation Active State on Scroll (Bonus for UX) ---
    const navLinks = document.querySelectorAll('.nav-link');

    const setActiveNav = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active-nav'));
                // Find the corresponding navigation link and add active class
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active-nav');
                }
            }
        });
    };

    const navObserverOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Center of the viewport is the trigger
        threshold: 0 // Only care about intersection changes
    };

    const navObserver = new IntersectionObserver(setActiveNav, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });
});
