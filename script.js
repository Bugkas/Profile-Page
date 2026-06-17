document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       THEME TOGGLE SYSTEM
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;

    // Retrieve saved theme or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        rootElement.classList.add('light-mode');
    } else {
        rootElement.classList.remove('light-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (rootElement.classList.contains('light-mode')) {
            rootElement.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            rootElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    /* ==========================================================================
       MOBILE MENU HANDLER
       ========================================================================== */
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    /* ==========================================================================
       SCROLL EFFECTS & NAVIGATION HIGHLIGHT
       ========================================================================== */
    const navbarHeader = document.querySelector('.navbar-header');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Scrolled Navbar background styling
        if (window.scrollY > 50) {
            navbarHeader.classList.add('scrolled');
        } else {
            navbarHeader.classList.remove('scrolled');
        }
    });

    // Intersection Observer for highlighting active Nav links
    const navObserverOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies center of screen
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });

    /* ==========================================================================
       HERO TYPING CAROUSEL
       ========================================================================== */
    const typingTextEl = document.getElementById('typing-text');
    const phrases = [
        'Full-Stack Developer.',
        'ZyberLab Developer Intern.',
        'IoT Hardware Builder.',
        'Systems Engineering Student.',
        'Hybrid AI Enthusiast.'
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Backspace character
            typingTextEl.textContent = currentPhrase.substring(0, characterIndex - 1);
            characterIndex--;
            typingSpeed = 50; // Deletes faster
        } else {
            // Type character
            typingTextEl.textContent = currentPhrase.substring(0, characterIndex + 1);
            characterIndex++;
            typingSpeed = 100; // Standard typing pace
        }

        // Handle Phrase Transitions
        if (!isDeleting && characterIndex === currentPhrase.length) {
            // Full phrase printed. Pause before deleting.
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && characterIndex === 0) {
            // Phrase deleted. Move to next phrase.
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Initialize typing
    if (typingTextEl) {
        setTimeout(typeEffect, 1000);
    }

    /* ==========================================================================
       ABOUT ME STATS INCREMENT
       ========================================================================== */
    const statsNums = document.querySelectorAll('.stat-num');
    let statsAnimated = false;

    function animateStats() {
        statsNums.forEach(stat => {
            const targetVal = parseFloat(stat.getAttribute('data-val'));
            const isDecimal = targetVal % 1 !== 0;
            let currentVal = 0;
            const duration = 1500; // ms
            const stepTime = 30; // ms
            const increment = targetVal / (duration / stepTime);

            const counter = setInterval(() => {
                currentVal += increment;
                if (currentVal >= targetVal) {
                    stat.textContent = isDecimal ? targetVal.toFixed(1) + '+' : Math.floor(targetVal) + '+';
                    clearInterval(counter);
                } else {
                    stat.textContent = isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal);
                }
            }, stepTime);
        });
    }

    // Observer to trigger stats animation when scrolled into view
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    animateStats();
                    statsAnimated = true;
                }
            });
        }, { threshold: 0.2 });

        statsObserver.observe(aboutSection);
    }

    /* ==========================================================================
       SKILL PROGRESS FILL ANIMATION
       ========================================================================== */
    const skillBars = document.querySelectorAll('.skill-level-bar');
    const skillsSection = document.getElementById('skills');

    // Tab switcher logic
    const tabButtons = document.querySelectorAll('.skills-tab-btn');
    const skillGrids = document.querySelectorAll('.skills-grid');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active status from current button and grid
            tabButtons.forEach(btn => btn.classList.remove('active'));
            skillGrids.forEach(grid => grid.classList.remove('active'));

            // Set active target
            button.classList.add('active');
            const targetGridId = button.getAttribute('data-target');
            const targetGrid = document.getElementById(targetGridId);
            targetGrid.classList.add('active');

            // Trigger animation on newly shown grids
            const activeBars = targetGrid.querySelectorAll('.skill-level-bar');
            activeBars.forEach(bar => {
                setTimeout(() => {
                    bar.style.setProperty('--bar-width', bar.getAttribute('data-level'));
                    // Apply inline width for direct fallback
                    bar.style.width = '100%'; 
                    // Update pseudo elements dynamically via custom properties
                    const targetPercent = bar.getAttribute('data-level');
                    // We set width directly in style sheets via custom animation
                    // but for vanilla CSS we set inline style rule variables:
                    bar.style.setProperty('--skill-fill-width', targetPercent);
                }, 100);
            });
        });
    });

    // Animate visible skill bars on section scroll
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Find active grid bars
                    const activeGrid = document.querySelector('.skills-grid.active');
                    const bars = activeGrid.querySelectorAll('.skill-level-bar');
                    bars.forEach(bar => {
                        const targetPercent = bar.getAttribute('data-level');
                        // Add a style tag or inline CSS variable for pseudo-element width
                        bar.style.setProperty('--skill-fill-width', targetPercent);
                        
                        // We will set style rules dynamically by writing to custom CSS variables
                        // We will add class to trigger width transition
                        bar.style.setProperty('--bar-width', targetPercent);
                        
                        // Creating a small dynamic style injection for the pseudoelement
                        const barId = Math.random().toString(36).substring(2, 9);
                        bar.setAttribute('data-bar-id', barId);
                        
                        let style = document.querySelector('#skill-dynamic-styles');
                        if (!style) {
                            style = document.createElement('style');
                            style.id = 'skill-dynamic-styles';
                            document.head.appendChild(style);
                        }
                        style.sheet.insertRule(`[data-bar-id="${barId}"]::before { width: ${targetPercent} !important; }`, style.sheet.cssRules.length);
                    });
                }
            });
        }, { threshold: 0.1 });

        skillsObserver.observe(skillsSection);
    }

    /* ==========================================================================
       CONTACT FORM SUBMISSION HANDLER
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn-submit');
            const submitBtnText = submitBtn.querySelector('span');
            const originalText = submitBtnText.textContent;
            
            // Set loading state
            submitBtn.disabled = true;
            submitBtnText.textContent = 'Sending...';
            formStatus.className = 'form-status-message';
            formStatus.textContent = '';

            // Simulate form submission API call
            setTimeout(() => {
                // Success case
                formStatus.classList.add('success');
                formStatus.textContent = 'Thank you! Your message was sent successfully. (Static Demo)';
                
                // Reset form fields
                contactForm.reset();
                
                // Reset button status
                submitBtn.disabled = false;
                submitBtnText.textContent = originalText;
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    formStatus.style.opacity = '0';
                    setTimeout(() => {
                        formStatus.textContent = '';
                        formStatus.className = 'form-status-message';
                        formStatus.style.opacity = '1';
                    }, 500);
                }, 5000);
                
            }, 1200);
        });
    }
});
