class NMDFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer class="site-footer">
        <div class="container footer-container">

            <!-- Brand Column -->
            <div class="footer-brand">
                <div class="footer-logo">
                    <img loading="lazy" src="assets/img/logo.webp" width="48" height="48" alt="NMD Travels logo">
                    <span>NMD Travels</span>
                </div>
                <p class="footer-desc">Your trusted travel partner in Chennai for over 26 years. Safe, reliable &amp;
                    affordable transportation across South India.</p>
                <div class="footer-social">
                    <a href="https://www.facebook.com/earumugam.earumugam.7?mibextid=ZbWKwL" target="_blank"
                        rel="noopener" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg></a>
                    <a href="https://www.instagram.com/_nmd_travels?igsh=YTJpdWNseW9tY3hs" target="_blank"
                        rel="noopener" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg></a>
                    <a href="https://www.linkedin.com/in/nmd-travels-4a20bb381/" target="_blank" rel="noopener"
                        aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                            </path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg></a>
                    <a href="https://share.google/3rYminJGI2B7hprpg" target="_blank" rel="noopener"
                        aria-label="Google Business Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
                            <path fill="#EA4335"
                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4"
                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05"
                                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853"
                                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </svg>
                    </a>
                </div>
                <div class="footer-trust-badge">
                    <span class="footer-badge-dot"></span>
                    <a href="https://www.justdial.com/Chennai/Nmd-Travels-Near-Zam-Bazaar-Royapettah/044P1221473572G7U2J6_BZDET"
                        target="_blank" rel="noopener" style="color:inherit;text-decoration:none;">Verified on Justdial
                        &middot; Est. 1999</a>
                </div>
            </div>

            <!-- Our Services -->
            <div class="footer-col">
                <h2 class="footer-col-heading">Our Services</h2>
                <ul class="footer-col-list">
                    <li><a href="/services">Taxi Service in Chennai</a></li>
                    <li><a href="/services">Airport Pickup &amp; Drop</a></li>
                    <li><a href="/services">Outstation Cab Services</a></li>
                    <li><a href="/tempo-traveller-rental">Tempo Traveller Rental</a></li>
                    <li><a href="/services">Corporate Travel</a></li>
                    <li><a href="/services">Wedding Transportation</a></li>
                    <li><a href="/services">Pilgrimage Tours</a></li>
                    <li><a href="/services">School &amp; College Tours</a></li>
                </ul>
            </div>

            <!-- Our Fleet + Quick Links -->
            <div class="footer-col">
                <h2 class="footer-col-heading">Our Fleet</h2>
                <ul class="footer-col-list">
                    <li><a href="/vehicles">Sedan Cars</a></li>
                    <li><a href="/vehicles">SUV Vehicles</a></li>
                    <li><a href="/tempo-traveller-rental">Tempo Traveller</a></li>
                    <li><a href="/vehicles">Mini Bus</a></li>
                    <li><a href="/vehicles">Luxury Vehicles</a></li>
                </ul>
                <h2 class="footer-col-heading" style="margin-top:1.8rem;">Quick Links</h2>
                <ul class="footer-col-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/about-us">Why Choose Us</a></li>
                    <li><a href="/faqs">FAQ</a></li>
                    <li><a href="/contact-us">Book Now</a></li>
                </ul>
            </div>

            <!-- Popular Routes -->
            <div class="footer-col">
                <h2 class="footer-col-heading">Popular Routes</h2>
                <ul class="footer-col-list">
                    <li><a href="/contact-us">Chennai &rarr; Pondicherry</a></li>
                    <li><a href="/contact-us">Chennai &rarr; Tirupati</a></li>
                    <li><a href="/contact-us">Chennai &rarr; Bangalore</a></li>
                    <li><a href="/contact-us">Chennai &rarr; Vellore</a></li>
                    <li><a href="/contact-us">Chennai &rarr; Mahabalipuram</a></li>
                    <li><a href="/contact-us">Chennai &rarr; Kanchipuram</a></li>
                    <li><a href="/contact-us">Chennai &rarr; Yelagiri</a></li>
                    <li><a href="/contact-us">Chennai &rarr; Coimbatore</a></li>
                </ul>
            </div>

            <!-- Contact Column -->
            <div class="footer-col footer-contact-col">
                <h2 class="footer-col-heading">Contact Us</h2>
                <a href="tel:+919940671829" style="text-decoration:none; color:inherit;">
                <div class="footer-contact-item">
                    <span class="footer-contact-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                            </path>
                        </svg></span>
                    <div><span class="footer-contact-label">Call / WhatsApp</span><span>+91 99406
                            71829</span></div>
                </div>
                </a>
                <a href="mailto:nmdtravelss@gmail.com" style="text-decoration:none; color:inherit;">
                <div class="footer-contact-item">
                    <span class="footer-contact-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                            </path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg></span>
                    <div><span class="footer-contact-label">Email</span><span>nmdtravelss@gmail.com</span></div>
                </div>
                </a>
                <a href="https://maps.google.com/?q=65/6,+Chella+Pillayar+Koil+St,+Padupakkam,+Royapettah,+Chennai+-+600+014" target="_blank" rel="noopener" style="text-decoration:none; color:inherit;">
                <div class="footer-contact-item">
                    <span class="footer-contact-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg></span>
                    <div><span class="footer-contact-label">Address</span><span>65/6, Chella Pillayar Koil
                            St,<br>Padupakkam, Royapettah,<br>Chennai &ndash; 600 014</span></div>
                </div>
                </a>
                <div class="footer-contact-item">
                    <span class="footer-contact-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg></span>
                    <div><span class="footer-contact-label">Working Hours</span><span>24/7</span></div>
                </div>
                <a href="/contact-us" class="footer-cta-btn js-book-now">Book Your Ride</a>
            </div>

        </div>

        <!-- Footer Bottom Bar -->
        <div class="footer-bottom">
            <div class="container footer-bottom-inner">
                <p class="footer-copy">&copy; 2026 NMD Travels, Chennai. All rights reserved.</p>
                <p class="footer-tagline">26+ Years &middot; 50+ Vehicles &middot; 10,000+ Happy Customers &middot;
                    South India&rsquo;s Trusted Travel Partner</p>
            </div>
        </div>
    </footer>
        \`;
    }
}

customElements.define('nmd-footer', NMDFooter);
