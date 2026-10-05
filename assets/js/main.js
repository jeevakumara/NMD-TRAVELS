// Highlight current section in nav on scroll
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#main-nav a[href^='#']");
    const sections = Array.from(navLinks).map(link => {
        const id = link.getAttribute("href").substring(1);
        return document.getElementById(id);
    });

    // [Fix] Cache section offsets to prevent forced reflows during scroll
    let sectionBounds = [];
    function updateSectionBounds() {
        sectionBounds = sections.map(section => {
            if (!section) return null;
            return { top: section.offsetTop, height: section.offsetHeight };
        });
    }

    window.addEventListener('resize', updateSectionBounds);
    updateSectionBounds();

    function onScroll() {
        const scrollPos = window.scrollY + 120; // offset for sticky header
        let activeIndex = -1;

        // [Fix] Read from cache instead of querying DOM
        sectionBounds.forEach((bounds, index) => {
            if (!bounds) return;
            if (scrollPos >= bounds.top && scrollPos < bounds.top + bounds.height) {
                activeIndex = index;
            }
        });

        // [Fix] Write to DOM in a single batch to avoid read/write interleaving
        if (activeIndex !== -1) {
            navLinks.forEach((l, i) => {
                if (i === activeIndex) {
                    if (!l.classList.contains("active-nav")) l.classList.add("active-nav");
                } else {
                    if (l.classList.contains("active-nav")) l.classList.remove("active-nav");
                }
            });
        }


    }

    // [Fix] Use requestAnimationFrame for scroll events
    window.addEventListener("scroll", () => requestAnimationFrame(onScroll), { passive: true });
    onScroll();
});

// Booking form -> WhatsApp integration
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookingForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const fullName = form.fullName.value.trim();
        const phone = form.phone.value.trim();
        const serviceType = form.serviceType.value;
        const passengers = form.passengers.value;
        const pickup = form.pickup.value.trim();
        const drop = form.drop.value.trim();
        const journeyDate = form.journeyDate.value;
        const journeyTime = form.journeyTime.value;
        const message = form.message.value.trim();

        let text = `🚕 *New Booking Enquiry* 🚕\n\n`;
        text += `👤 *Name:* ${fullName}\n`;
        text += `📞 *Contact Number:* ${phone}\n`;
        text += `💼 *Service Type:* ${serviceType}\n`;
        if (passengers) {
            text += `👥 *Passengers:* ${passengers}\n`;
        }
        text += `📍 *Pickup:* ${pickup}\n`;
        text += `🏁 *Drop:* ${drop}\n`;
        text += `📅 *Journey Date:* ${journeyDate}\n`;
        text += `⏰ *Journey Time:* ${journeyTime}\n`;
        if (message) {
            text += `📝 *Additional Details:* ${message}\n`;
        }
        text += `\n🌐 _Source: NMD Travels Website_`;

        const encoded = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/919940671829?text=${encoded}`;

        // Open WhatsApp in new tab/window
        window.open(whatsappUrl, "_blank");

        form.reset();
        
        // Close modal if open
        const modal = document.getElementById('bookingModal');
        if (modal && modal.classList.contains('open')) {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
        }
    });
});

// Fleet slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.fleet-track');
    const cards = document.querySelectorAll('.fleet-card');
    const prevBtn = document.querySelector('.fleet-arrow-left');
    const nextBtn = document.querySelector('.fleet-arrow-right');

    if (!track || cards.length === 0 || !prevBtn || !nextBtn) return;

    function getVisibleCount() {
        if (window.innerWidth <= 640) return 1;
        if (window.innerWidth <= 1000) return 2;
        return 3;
    }

    let index = 0;

    // [Fix] Cache layout measurements to avoid forced reflows on every click
    let cachedCardWidth = 0;
    
    function measureCardWidth() {
        if (cards.length > 0) {
            cachedCardWidth = cards[0].getBoundingClientRect().width + 20; // width + gap
        }
    }

    function update() {
        // [Fix] Defer style updates to next animation frame
        requestAnimationFrame(() => {
            track.style.transform = `translateX(-${index * cachedCardWidth}px)`;
        });
    }

    prevBtn.addEventListener('click', () => {
        index = Math.max(0, index - getVisibleCount());
        update();
    });

    nextBtn.addEventListener('click', () => {
        const maxIndex = Math.max(0, cards.length - getVisibleCount());
        index = Math.min(maxIndex, index + getVisibleCount());
        update();
    });

    // [Fix] Only measure on resize, not on every slider interaction
    window.addEventListener('resize', () => {
        measureCardWidth();
        update();
    });
    
    measureCardWidth(); // initial measurement
    update();
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.faq-accordion-header');
    
    faqHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');
            
            // Optional: Close other open FAQs when one is clicked
            document.querySelectorAll('.faq-accordion-header').forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    if (otherHeader.nextElementSibling) {
                        otherHeader.nextElementSibling.style.maxHeight = '0px';
                    }
                    if (otherHeader.querySelector('.faq-icon')) {
                        otherHeader.querySelector('.faq-icon').textContent = '+';
                    }
                }
            });

            // Toggle the clicked FAQ
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) icon.textContent = '-'; // Change icon to minus
            } else {
                content.style.maxHeight = '0px';
                if (icon) icon.textContent = '+'; // Change icon back to plus
            }
        });
    });
});



// Booking Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('bookingModal');
    if (!modal) return;
    
    const openBtns = document.querySelectorAll('.js-book-now');
    const closeBtns = modal.querySelectorAll('[data-close-modal]');
    
    function openModal(e) {
        if(e) e.preventDefault();
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }
    
    function closeModal(e) {
        if(e) e.preventDefault();
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }
    
    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
});
