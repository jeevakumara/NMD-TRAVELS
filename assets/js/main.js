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