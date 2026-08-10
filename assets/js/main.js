// Highlight current section in nav on scroll
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#main-nav a[href^='#']");
    const sections = Array.from(navLinks).map(link => {
        const id = link.getAttribute("href").substring(1);
        return document.getElementById(id);
    });

    function onScroll() {
        const scrollPos = window.scrollY + 120; // offset for sticky header

        sections.forEach((section, index) => {
            if (!section) return;
            const top = section.offsetTop;
            const height = section.offsetHeight;

            const link = navLinks[index];
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(l => l.classList.remove("active-nav"));
                link.classList.add("active-nav");
            }
        });
    }

    window.addEventListener("scroll", onScroll);
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
    });
});

// Fleet slider functionality
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.fleet-track');
    const cards = document.querySelectorAll('.fleet-card');
    const prevBtn = document.querySelector('.fleet-arrow-left');
    const nextBtn = document.querySelector('.fleet-arrow-right');

    if (!track || cards.length === 0 || !prevBtn || !nextBtn) return;

    const visibleCount = 3;
    let index = 0;

    function update() {
        const cardWidth = cards[0].getBoundingClientRect().width + 20; // width + gap
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        index = Math.max(0, index - visibleCount);
        update();
    });

    nextBtn.addEventListener('click', () => {
        const maxIndex = Math.max(0, cards.length - visibleCount);
        index = Math.min(maxIndex, index + visibleCount);
        update();
    });

    window.addEventListener('resize', update);
    update();
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.faq-accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all others
            document.querySelectorAll('.faq-accordion-item').forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-accordion-header').setAttribute('aria-expanded', 'false');
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
