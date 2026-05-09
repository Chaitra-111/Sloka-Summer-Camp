document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Logic
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    // Sticky Navbar on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link Highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        const isActive = navLinksContainer.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        mobileMenuBtn.setAttribute('aria-expanded', isActive);
    });

    // Close menu when link is clicked (Mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // 2. FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isOpen = question.getAttribute('aria-expanded') === 'true';
            
            // Close other items
            faqQuestions.forEach(q => {
                q.setAttribute('aria-expanded', 'false');
                q.nextElementSibling.style.maxHeight = '0';
            });

            if (!isOpen) {
                question.setAttribute('aria-expanded', 'true');
                const answer = question.nextElementSibling;
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // 3. Testimonial Slider
    const track = document.getElementById('testimonial-track');
    const slides = Array.from(track.children);
    const nextBtn = document.getElementById('next-test');
    const prevBtn = document.getElementById('prev-test');
    const dotsContainer = document.getElementById('slider-dots');
    let currentIndex = 0;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const updateDots = (index) => {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    const moveToSlide = (index) => {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots(currentIndex);
    };

    nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));

    // Auto-slide every 5 seconds
    setInterval(() => moveToSlide(currentIndex + 1), 5000);

    // 4. Lightbox Gallery
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeLightbox = document.querySelector('.lightbox-close');
    const prevLightbox = document.querySelector('.lightbox-prev');
    const nextLightbox = document.querySelector('.lightbox-next');
    let currentGalleryIndex = 0;

    const openLightbox = (index) => {
        currentGalleryIndex = index;
        const imgSrc = galleryItems[index].querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    });

    prevLightbox.addEventListener('click', () => {
        let index = currentGalleryIndex - 1;
        if (index < 0) index = galleryItems.length - 1;
        openLightbox(index);
    });

    nextLightbox.addEventListener('click', () => {
        let index = currentGalleryIndex + 1;
        if (index >= galleryItems.length) index = 0;
        openLightbox(index);
    });

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    });

    // 5. Form Validation & Submission
    const registrationForm = document.getElementById('registration-form');
    const successModal = document.getElementById('success-modal');
    const closeSuccessBtn = document.getElementById('close-success');

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = registrationForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        
        // Basic validation
        const phone = document.getElementById('phone').value;
        if (phone.length < 10) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';

        const formData = new FormData(registrationForm);
        const data = Object.fromEntries(formData.entries());

        // Send to FormSubmit.co AJAX
        fetch('https://formsubmit.co/ajax/csarts3537@gmail.com', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            // Save to localStorage as backup
            const registrations = JSON.parse(localStorage.getItem('camp_registrations') || '[]');
            registrations.push({...data, timestamp: new Date().toISOString()});
            localStorage.setItem('camp_registrations', JSON.stringify(registrations));

            // Show Success Modal
            successModal.setAttribute('aria-hidden', 'false');
            registrationForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again or contact us directly via WhatsApp.');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
        });
    });

    closeSuccessBtn.addEventListener('click', () => {
        successModal.setAttribute('aria-hidden', 'true');
    });

    // 6. Scroll Animations (Simple Reveal)
    const revealItems = document.querySelectorAll('.about-card, .activity-card, .section-header');
    
    const revealOnScroll = () => {
        revealItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.85;
            if (itemTop < triggerPoint) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for animation
    revealItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load
});
