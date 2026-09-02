class SiteHeader extends HTMLElement {
    connectedCallback() {
        const isAbout = window.location.pathname.includes('about');
        
        this.innerHTML = `
        <header class="site-header fixed w-full top-0 z-50">
            <div class="header-inner container">
                <a href="index.html#home" class="brand" aria-label="NMD Travels Home">
                    <img src="assets/img/logo-header.webp"
                        srcset="assets/img/logo-header.webp 1x, assets/img/logo-header-2x.webp 2x" width="112" height="112"
                        decoding="async" alt="NMD Travels logo" class="brand-logo">
                    <div class="brand-text">
                        <span class="brand-name">NMD Travels</span>
                        <span class="brand-since">Since 1999</span>
                    </div>
                </a>

                <div class="mobile-menu-overlay"></div>

                <nav class="site-nav" aria-label="Primary navigation" id="site-nav">
                    <div class="mobile-nav-header">
                        <span class="mobile-nav-title">Menu</span>
                        <button class="mobile-menu-close" aria-label="Close Menu">&times;</button>
                    </div>
                    <a href="index.html#home" class="nav-link ${!isAbout ? 'active' : ''}">Home</a>
                    <a href="about.html" class="nav-link ${isAbout ? 'active' : ''}">About Us</a>
                    <a href="index.html#services" class="nav-link">Services</a>
                </nav>

                <div class="header-actions">
                    <a href="#" class="header-cta btn-primary js-book-now">
                        Book Now
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
