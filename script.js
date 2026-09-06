document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation using IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal, .scale-reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it contains a counter, trigger the counter animation
                if (entry.target.querySelector('.counter')) {
                    const counters = entry.target.querySelectorAll('.counter');
                    startCounters(counters);
                }
                
                // Keep the class (don't un-reveal on scroll up)
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 2. Animated Counters
    function startCounters(counters) {
        counters.forEach(counter => {
            // Prevent restarting if already animated
            if (counter.classList.contains('counted')) return;
            counter.classList.add('counted');

            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            
            updateCounter();
        });
    }

    // 3. Magnetic Buttons Effect
    const magneticButtons = document.querySelectorAll('.magnetic');
    
    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // 4. Parallax Image Scroll Effect
    const parallaxImages = document.querySelectorAll('.parallax-img');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        
        parallaxImages.forEach(img => {
            // Apply a subtle Y translation based on scroll position
            // We use a small multiplier to make it look smooth and subtle
            let speed = 0.05;
            img.style.transform = `scale(1.1) translateY(${scrollY * speed}px)`;
        });

        // Navbar scrolled state
        const navbar = document.getElementById('navbar');
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 5. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navCta = document.querySelector('.nav-cta');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                if (navCta) navCta.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                
                if (navCta) {
                    navCta.style.display = 'flex';
                    navCta.style.justifyContent = 'center';
                    navCta.style.marginTop = '1rem';
                    navLinks.appendChild(navCta);
                }
            }
        });
    }
});
