class NMDHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="site-header" id="nmdHeader">
                <div class="top-bar" id="topBar">
                    <div class="header-container top-bar-inner">
                        <!-- Left: Contact Info -->
                        <div class="top-bar-left">
                            <span class="top-bar-item">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                Chennai, Tamil Nadu, India
                            </span>
                            <span class="top-bar-divider">|</span>
                            <a href="tel:+919940671829" class="top-bar-item top-bar-link">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                +91 99406 71829
                            </a>
                            <span class="top-bar-divider">|</span>
                            <div class="top-bar-item top-bar-link">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <a href="mailto:nmdtravelss@gmail.com" style="color: inherit; text-decoration: none;">nmdtravelss@gmail.com</a>
                            </div>
                        </div>
                        <!-- Right: Social + Support -->
                        <div class="top-bar-right">
                            <span class="top-bar-item">Follow Us</span>
                            <div class="top-bar-socials">
                                <a href="https://www.facebook.com/earumugam.earumugam.7?mibextid=ZbWKwL" target="_blank" aria-label="Facebook">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="https://www.instagram.com/_nmd_travels?igsh=YTJpdWNseW9tY3hs" target="_blank" aria-label="Instagram">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/nmd-travels-4a20bb381/" target="_blank" aria-label="LinkedIn">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="https://wa.me/919940671829" target="_blank" aria-label="WhatsApp">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                </a>
                            </div>
                            <span class="top-bar-divider">|</span>
                            <span class="top-bar-item top-bar-badge">
                                <span class="top-bar-pulse"></span>
                                24/7 Customer Support
                            </span>
                        </div>
                    </div>
                </div>
                <div class="header-container header-main">
                    <a href="/" class="brand">
                        <div class="logo-wrapper">
                            <img src="assets/img/logo-header-2x.webp" alt="NMD Travels Logo" class="brand-logo" onerror="this.style.display='none'">
                        </div>
                        <div class="brand-divider"></div>
                        <div class="brand-text">
                            <span class="brand-name">NMD Travels</span>
                            <span class="brand-since">EST. 1999</span>
                        </div>
                    </a>
                    
                    <button class="mobile-toggle" aria-label="Toggle Menu">
                        <span class="hamburger"></span>
                    </button>

                    <nav class="site-nav">
                        <a href="/" class="nav-link">Home</a>
                        <a href="/about-us" class="nav-link">About Us</a>
                        <a href="/services" class="nav-link">Services</a>
                        <a href="/vehicles" class="nav-link">Our Vehicles</a>
                        <a href="/tempo-traveller-rental" class="nav-link">Tempo Travellers</a>
                        <a href="/contact-us" class="nav-link">Contact</a>
                        <a href="#" class="btn-book js-book-now" id="headerBookBtn">
                            <span class="btn-text">Book Now</span>
                            <span class="btn-shimmer"></span>
                        </a>
                    </nav>
                </div>
            </header>
        `;

        // 1. Mobile Menu Logic
        const toggleBtn = this.querySelector('.mobile-toggle');
        const nav = this.querySelector('.site-nav');
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('active');
            nav.classList.toggle('nav-active');
        });



        // 3. Modal Trigger Logic
        const headerBookBtn = this.querySelector('#headerBookBtn');
        headerBookBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = document.getElementById('bookingModal');
            if (modal) {
                modal.classList.add('active'); 
                modal.style.display = 'flex';
                modal.style.visibility = 'visible';
                modal.setAttribute('aria-hidden', 'false');
            } else {
                window.location.href = '/#bookingModal';
            }
        });
    }
}
customElements.define('nmd-header', NMDHeader);

// Global WhatsApp Handler (Keep Existing)
document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'bookingForm') {
        e.preventDefault();
        const form = e.target;
        const name = form.querySelector('[name="fullName"]')?.value || 'Not provided';
        const phone = form.querySelector('[name="phone"]')?.value || 'Not provided';
        const service = form.querySelector('[name="serviceType"]')?.value || 'Not specified';
        const pax = form.querySelector('[name="passengers"]')?.value || 'N/A';
        const pickup = form.querySelector('[name="pickup"]')?.value || 'Not specified';
        const drop = form.querySelector('[name="drop"]')?.value || 'Not specified';
        const date = form.querySelector('[name="journeyDate"]')?.value || 'Not specified';
        const time = form.querySelector('[name="journeyTime"]')?.value || 'Not specified';
        const msg = form.querySelector('[name="message"]')?.value || 'None';

        const whatsappNumber = '919940671829';
        const whatsappText = `*New Booking Enquiry via Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service Type:* ${service}%0A*Passengers:* ${pax}%0A*Pickup Location:* ${pickup}%0A*Drop Location:* ${drop}%0A*Journey Date:* ${date}%0A*Journey Time:* ${time}%0A*Additional Details:* ${msg}`;

        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappText}`, '_blank');
        
        setTimeout(() => {
            const modal = document.getElementById('bookingModal');
            if(modal) {
                modal.style.display = 'none';
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
            }
            form.reset();
        }, 1000);
    }
});
