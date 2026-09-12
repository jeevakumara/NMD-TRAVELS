class SiteHeader extends HTMLElement {
    connectedCallback() {
        const isAbout = window.location.pathname.includes('about');
        const isContact = window.location.pathname.includes('contact');
        const isVehicles = window.location.pathname.includes('vehicles');

        this.innerHTML = `
        <header class="site-header fixed w-full top-0 z-50">
            <div class="top-bar">
                <div class="container top-bar-inner">
                    <div class="top-bar-left">
                        <span class="top-bar-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Chennai, Tamil Nadu, India</span>
                        <span class="top-bar-divider">|</span>
                        <a href="tel:+919940671829" class="top-bar-item" style="color:inherit; text-decoration:none;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> +91 99406 71829</a>
                        <span class="top-bar-divider">|</span>
                        <a href="mailto:nmdtravelss@gmail.com" class="top-bar-item" style="color:inherit; text-decoration:none;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> nmdtravelss@gmail.com</a>
                    </div>
                    <div class="top-bar-right">
                        <span class="top-bar-item">Follow Us</span>
                        <div class="top-bar-socials">
                            <a href="https://www.facebook.com/earumugam.earumugam.7?mibextid=ZbWKwL" target="_blank" rel="noopener" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <a href="https://www.instagram.com/_nmd_travels?igsh=YTJpdWNseW9tY3hs" target="_blank" rel="noopener" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                            <a href="https://www.linkedin.com/in/nmd-travels-4a20bb381/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                        </div>
                        <span class="top-bar-divider">|</span>
                        <span class="top-bar-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg> 24/7 Customer Support</span>
                    </div>
                </div>
            </div>
            <div class="header-inner container">
                <a href="index.html#home" class="brand" aria-label="NMD Travels Home">
                    <img src="assets/img/logo-header.webp"
                        srcset="assets/img/logo-header.webp 1x, assets/img/logo-header-2x.webp 2x" width="112" height="112"
                        decoding="async" alt="NMD Travels logo" class="brand-logo">
                    <div class="brand-divider-line"></div>
                    <div class="brand-text">
                        <span class="brand-name">NMD Travels</span>
                        <span class="brand-since">SINCE 1999</span>
                    </div>
                </a>

                <div class="mobile-menu-overlay"></div>

                <nav class="site-nav" aria-label="Primary navigation" id="site-nav">
                    <div class="mobile-nav-header">
                        <span class="mobile-nav-title">Menu</span>
                        <button class="mobile-menu-close" aria-label="Close Menu">&times;</button>
                    </div>
                    <a href="index.html#home" class="nav-link ${!isAbout && !isContact && !isVehicles ? 'active' : ''}">Home</a>
                    <a href="about.html" class="nav-link ${isAbout ? 'active' : ''}">About Us</a>
                    <a href="index.html#services" class="nav-link">Services</a>
                    <a href="vehicles.html" class="nav-link ${isVehicles ? 'active' : ''}">Our Vehicles</a>
                    <a href="index.html#pricing" class="nav-link">Pricing</a>
                    <a href="index.html#testimonials" class="nav-link">Testimonials</a>
                    <a href="contact.html" class="nav-link ${isContact ? 'active' : ''}">Contact Us</a>
                </nav>

                <div class="header-actions">
                    <a href="#" class="header-cta btn-primary js-book-now">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cta-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        BOOK NOW
                    </a>
                    <button class="mobile-menu-toggle" aria-label="Toggle Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
        `;
    }
}

customElements.define('site-header-component', SiteHeader);
