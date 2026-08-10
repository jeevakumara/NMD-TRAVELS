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

// Booking form basic validation and UX
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookingForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Simple HTML5 validity check
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // For now, just show a success message.
        // Later we will integrate Firestore or WhatsApp deep link.
        alert("Thank you! Your booking enquiry has been received. Our team will contact you shortly.");

        form.reset();
    });
});