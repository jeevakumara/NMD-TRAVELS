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

// All Website Forms -> WhatsApp Integration (+91 99406 71829)
document.addEventListener("DOMContentLoaded", () => {
    const WHATSAPP_PHONE = "919940671829";

    function sendToWhatsApp(text) {
        const encoded = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
        window.open(whatsappUrl, "_blank");
    }

    function closeBookingModal() {
        const modal = document.getElementById('bookingModal');
        if (modal) {
            modal.classList.remove('open');
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            modal.style.display = '';
            modal.style.visibility = '';
            document.body.classList.remove('modal-open');
        }
    }

    // 1. Main Booking Modal Form (#bookingForm)
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!bookingForm.checkValidity()) {
                bookingForm.reportValidity();
                return;
            }

            const fullName = bookingForm.fullName ? bookingForm.fullName.value.trim() : '';
            const phone = bookingForm.phone ? bookingForm.phone.value.trim() : '';
            const serviceType = bookingForm.serviceType ? bookingForm.serviceType.value : '';
            const passengers = bookingForm.passengers ? bookingForm.passengers.value : '';
            const pickup = bookingForm.pickup ? bookingForm.pickup.value.trim() : '';
            const drop = bookingForm.drop ? bookingForm.drop.value.trim() : '';
            const journeyDate = bookingForm.journeyDate ? bookingForm.journeyDate.value : '';
            const journeyTime = bookingForm.journeyTime ? bookingForm.journeyTime.value : '';
            const message = bookingForm.message ? bookingForm.message.value.trim() : '';

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
            if (journeyTime) {
                text += `⏰ *Journey Time:* ${journeyTime}\n`;
            }
            if (message) {
                text += `📝 *Additional Details:* ${message}\n`;
            }
            text += `\n🌐 _Source: NMD Travels Website_`;

            sendToWhatsApp(text);
            bookingForm.reset();
            closeBookingModal();
        });
    }

    // 2. Inline Contact Page Booking Form (#pageBookingForm)
    const pageBookingForm = document.getElementById("pageBookingForm");
    if (pageBookingForm) {
        pageBookingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!pageBookingForm.checkValidity()) {
                pageBookingForm.reportValidity();
                return;
            }

            const fullName = pageBookingForm.fullName ? pageBookingForm.fullName.value.trim() : '';
            const phone = pageBookingForm.phone ? pageBookingForm.phone.value.trim() : '';
            const serviceType = pageBookingForm.serviceType ? pageBookingForm.serviceType.value : '';
            const passengers = pageBookingForm.passengers ? pageBookingForm.passengers.value : '';
            const pickup = pageBookingForm.pickup ? pageBookingForm.pickup.value.trim() : '';
            const drop = pageBookingForm.drop ? pageBookingForm.drop.value.trim() : '';
            const journeyDate = pageBookingForm.journeyDate ? pageBookingForm.journeyDate.value : '';
            const journeyTime = pageBookingForm.journeyTime ? pageBookingForm.journeyTime.value : '';
            const message = pageBookingForm.message ? pageBookingForm.message.value.trim() : '';

            let text = `🚕 *New Booking Enquiry (Contact Page)* 🚕\n\n`;
            text += `👤 *Name:* ${fullName}\n`;
            text += `📞 *Contact Number:* ${phone}\n`;
            text += `💼 *Service Type:* ${serviceType}\n`;
            if (passengers) {
                text += `👥 *Passengers:* ${passengers}\n`;
            }
            text += `📍 *Pickup:* ${pickup}\n`;
            text += `🏁 *Drop:* ${drop}\n`;
            text += `📅 *Journey Date:* ${journeyDate}\n`;
            if (journeyTime) {
                text += `⏰ *Journey Time:* ${journeyTime}\n`;
            }
            if (message) {
                text += `📝 *Additional Details:* ${message}\n`;
            }
            text += `\n🌐 _Source: NMD Travels Website_`;

            sendToWhatsApp(text);
            pageBookingForm.reset();
        });
    }

    // 3. Tempo Traveller Quote Form (#tempoLeadForm)
    const tempoLeadForm = document.getElementById("tempoLeadForm");
    if (tempoLeadForm) {
        tempoLeadForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!tempoLeadForm.checkValidity()) {
                tempoLeadForm.reportValidity();
                return;
            }

            const name = tempoLeadForm.elements["name"] ? tempoLeadForm.elements["name"].value.trim() : '';
            const phone = tempoLeadForm.elements["phone"] ? tempoLeadForm.elements["phone"].value.trim() : '';
            const date = tempoLeadForm.elements["date"] ? tempoLeadForm.elements["date"].value : '';
            const passengers = tempoLeadForm.elements["passengers"] ? tempoLeadForm.elements["passengers"].value : '';
            const pickup = tempoLeadForm.elements["pickup"] ? tempoLeadForm.elements["pickup"].value.trim() : '';
            const destination = tempoLeadForm.elements["destination"] ? tempoLeadForm.elements["destination"].value.trim() : '';

            let text = `🚐 *New Tempo Traveller Enquiry* 🚐\n\n`;
            text += `👤 *Name:* ${name}\n`;
            text += `📞 *Contact Number:* ${phone}\n`;
            text += `📅 *Travel Date:* ${date}\n`;
            if (passengers) {
                text += `👥 *Passengers:* ${passengers}\n`;
            }
            text += `📍 *Pickup Location:* ${pickup}\n`;
            text += `🏁 *Destination:* ${destination}\n`;
            text += `\n🌐 _Source: NMD Travels Website (Tempo Traveller)_`;

            sendToWhatsApp(text);
            tempoLeadForm.reset();
        });
    }
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



// Booking Modal Logic (Event Delegation for static and custom elements)
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('bookingModal');
    
    function openModal() {
        if (!modal) return;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }
    
    function closeModal() {
        if (!modal) return;
        modal.classList.remove('open');
        modal.classList.remove('active');
        modal.style.display = '';
        modal.style.visibility = '';
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    // Delegated click handling for openers and closers
    document.addEventListener('click', (e) => {
        const openTrigger = e.target.closest('.js-book-now');
        if (openTrigger) {
            if (modal) {
                e.preventDefault();
                openModal();
            } else {
                // If page has an inline booking form, scroll to it
                const pageForm = document.getElementById('booking-form') || document.getElementById('pageBookingForm');
                if (pageForm) {
                    e.preventDefault();
                    pageForm.scrollIntoView({ behavior: 'smooth' });
                }
            }
            return;
        }

        const closeTrigger = e.target.closest('[data-close-modal]');
        if (closeTrigger) {
            e.preventDefault();
            closeModal();
            return;
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
            closeModal();
        }
    });
});
