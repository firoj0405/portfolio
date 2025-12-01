/*
    -----------------------------------------------------------------------
    Global Reset and Typography - Dark Theme & Premium Foundation
    -----------------------------------------------------------------------
*/
:root {
    --color-primary: #C7B58C;       /* Elegant Gold/Bronze for accents and headings */
    --color-secondary: #E0E0E0;     /* Light Gray for main text */
    --color-text-dark: #222222;     /* Deep readable text (used in light elements) */
    --color-background: #1A1A1A;    /* Deep Charcoal Dark Background */
    --color-background-offset: #252525; /* Slightly lighter dark background for cards */
    --color-hover-bg: #333333;      /* Darker background for hover effects */
    --color-shadow: rgba(0, 0, 0, 0.4); /* Darker, pronounced shadow */
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Poppins', sans-serif;
    --transition-speed: 0.3s;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-body);
    line-height: 1.7;
    color: var(--color-secondary);
    background: var(--color-background);
    scroll-behavior: smooth;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: var(--color-primary);
    transition: color var(--transition-speed);
}

a:hover {
    color: #ffffff;
}

/*
    -----------------------------------------------------------------------
    Header and Navigation (Top Right)
    -----------------------------------------------------------------------
*/
.header {
    background-color: var(--color-background);
    padding: 20px 50px;
    box-shadow: 0 4px 15px var(--color-shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: flex-end; /* Push nav to the right */
    width: 100%;
}

.nav {
    display: flex;
    gap: 25px;
}

.nav-link {
    font-weight: 600;
    font-size: 1rem;
    color: var(--color-secondary);
    position: relative;
    padding-bottom: 4px;
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: var(--color-primary);
    transition: width var(--transition-speed) ease;
}

.nav-link:hover,
.nav-link.active-nav {
    color: var(--color-primary);
}

.nav-link:hover::after,
.nav-link.active-nav::after {
    width: 100%;
    left: 0;
    right: auto;
}

/*
    -----------------------------------------------------------------------
    Main Content Area & Sections (Individual "Pages")
    -----------------------------------------------------------------------
*/
.section {
    padding: 60px 5vw; /* Generous horizontal padding */
    min-height: 100vh; /* Ensures full-page feel for most sections */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically center content */
    opacity: 0; /* For reveal animation */
    transform: translateY(30px); /* For reveal animation */
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.section.active {
    opacity: 1;
    transform: translateY(0);
}

.section-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(199, 181, 140, 0.2), transparent);
}

.section-title {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
}

/*
    -----------------------------------------------------------------------
    Profile/Intro Section (Two Column Grid)
    -----------------------------------------------------------------------
*/
.profile-intro-section {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 80px;
    align-items: center;
    padding-top: 100px;
}

/* Profile Sidebar Styling (Left) */
.profile-sidebar {
    background-color: var(--color-background-offset);
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 30px var(--color-shadow);
    text-align: center;
}

.profile-image-container {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    border: 8px solid var(--color-primary);
    margin: 0 auto 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.profile-name {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    margin-bottom: 5px;
}

.profile-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: var(--color-primary);
}

.profile-subtitle {
    font-size: 0.9rem;
    opacity: 0.8;
}

.contact-details-horizontal {
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid rgba(199, 181, 140, 0.2);
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
    font-size: 0.95rem;
}

.contact-details-horizontal a {
    color: var(--color-secondary);
    border-bottom: 1px dotted var(--color-primary);
}

.contact-details-horizontal a:hover {
    color: var(--color-primary);
}

.contact-details-horizontal i {
    color: var(--color-primary);
    margin-right: 8px;
}


/* Highlights Grid (Right) */
.profile-info-area {
    padding: 0;
}

.highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.highlight-card {
    background: var(--color-background-offset);
    padding: 30px;
    border-radius: 8px;
    border-left: 5px solid var(--color-primary);
    transition: transform var(--transition-speed), box-shadow var(--transition-speed);
}

.highlight-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px var(--color-shadow);
    background: var(--color-hover-bg);
}

.highlight-card i {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: 15px;
}

.highlight-card h4 {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--color-primary);
}

/*
    -----------------------------------------------------------------------
    EXPERTISE Section (3-Column Table/Badge Layout)
    -----------------------------------------------------------------------
*/
.expertise-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.expertise-column {
    background-color: var(--color-background-offset);
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 5px 20px var(--color-shadow);
}

.column-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 25px;
    border-bottom: 2px solid var(--color-primary);
    padding-bottom: 12px;
    text-align: center;
}

.skills-badges {
    display: flex;
    flex-direction: column; /* Stack badges vertically */
    gap: 12px;
    align-items: flex-start; /* **Crucial for left alignment** */
}

.badge {
    background-color: var(--color-primary);
    color: var(--color-text-dark);
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: background-color var(--transition-speed), transform var(--transition-speed);
    width: auto; /* Allow badges to size naturally */
    text-align: left;
}

.badge:hover {
    background-color: #ffffff;
    transform: translateX(5px);
}

/*
    -----------------------------------------------------------------------
    TOOLS Section (Original Color Icons)
    -----------------------------------------------------------------------
*/
.tool-subtext {
    text-align: center;
    margin-bottom: 40px;
    color: var(--color-secondary);
    font-style: italic;
}

.tools-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.tool-category {
    background-color: var(--color-background-offset);
    padding: 30px;
    border-radius: 10px;
    text-align: center;
}

.tool-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 20px;
}

.tool-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
}

.tool-list img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.4)); /* Subtle shadow for 3D effect */
    transition: transform var(--transition-speed);
    cursor: pointer;
}

.tool-list i {
    font-size: 40px;
    transition: transform var(--transition-speed);
    cursor: pointer;
}

.tool-list img:hover, .tool-list i:hover {
    transform: scale(1.15);
}

/* Specific Font Awesome Icons Color */
.excel-icon { color: #217346; } /* Microsoft Excel Green */
.outlook-icon { color: #0078D4; } /* Microsoft Outlook Blue */
.code-icon { color: var(--color-primary); } /* Gold for VBA/Code */


/*
    -----------------------------------------------------------------------
    PROJECTS Section
    -----------------------------------------------------------------------
*/
.project-category {
    margin-bottom: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.category-title {
    font-size: 1.4rem;
    color: var(--color-primary);
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px dashed var(--color-primary);
    text-align: center;
}

.main-project-card {
    background: var(--color-background-offset);
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px var(--color-shadow);
}

.project-intro {
    margin-bottom: 20px;
    font-size: 1.05rem;
}

.project-link {
    font-size: 1.1rem;
    font-weight: 600;
    display: inline-block;
    color: var(--color-primary);
    padding: 10px 20px;
    border: 2px solid var(--color-primary);
    border-radius: 5px;
    transition: background-color var(--transition-speed);
}

.project-link:hover {
    background-color: var(--color-primary);
    color: var(--color-text-dark);
}

.project-link i {
    margin-left: 8px;
}

.project-subtext {
    text-align: center;
    margin-bottom: 30px;
    font-style: italic;
    color: var(--color-secondary);
}

/* SEO Gallery Grid */
.seo-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.gallery-item {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 6px 15px var(--color-shadow);
    transition: transform 0.4s ease-in-out, opacity 0.4s;
    background: var(--color-background-offset);
}

.gallery-item:hover {
    transform: scale(1.03);
    opacity: 0.9;
}

.hd-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
}

/* Modal for IAMS Workflow (unchanged) */
.modal {
    display: none; 
    position: fixed; 
    z-index: 2000; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0,0,0,0.95); 
}

.modal-content {
    margin: auto;
    display: block;
    width: 90%;
    max-width: 1200px;
    animation-name: zoom;
    animation-duration: 0.6s;
}

.close-button {
    position: absolute;
    top: 20px;
    right: 45px;
    color: var(--color-primary);
    font-size: 50px;
    font-weight: bold;
    transition: 0.3s;
}

.close-button:hover,
.close-button:focus {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
}


/*
    -----------------------------------------------------------------------
    CONTACT Section
    -----------------------------------------------------------------------
*/
.contact-card {
    background: var(--color-primary);
    color: var(--color-text-dark);
    padding: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(199, 181, 140, 0.3);
}

.contact-info p {
    margin-bottom: 12px;
    font-size: 1.1rem;
}

.contact-info strong {
    font-weight: 700;
    color: var(--color-text-dark);
    margin-right: 5px;
}

.contact-info a {
    color: var(--color-text-dark);
    border-bottom: 1px dashed var(--color-text-dark);
}

.contact-info a:hover {
    color: #ffffff;
    border-bottom-color: #ffffff;
}

.contact-info i {
    margin-right: 8px;
    color: var(--color-text-dark);
}

.social-media a {
    font-size: 2.5rem;
    margin-left: 20px;
    color: var(--color-text-dark);
    transition: color var(--transition-speed), transform var(--transition-speed);
}

.social-media a:hover {
    color: #ffffff;
    transform: scale(1.1);
}


/*
    -----------------------------------------------------------------------
    Footer
    -----------------------------------------------------------------------
*/
.footer {
    text-align: center;
    padding: 25px;
    font-size: 0.85rem;
    color: #555;
    background-color: var(--color-background-offset);
}

/*
    -----------------------------------------------------------------------
    Responsiveness
    -----------------------------------------------------------------------
*/

@media (max-width: 1200px) {
    .profile-intro-section {
        grid-template-columns: 1fr; /* Stack on smaller wide screens */
        padding-top: 50px;
    }

    .profile-sidebar {
        margin: 0 auto;
        max-width: 450px;
    }
    
    .profile-info-area {
        padding: 0 20px;
        text-align: center;
    }

    .highlights-grid {
        justify-content: center;
    }
}

@media (max-width: 992px) {
    .section-title {
        font-size: 2.5rem;
    }
    
    .expertise-grid, .tools-grid {
        grid-template-columns: 1fr; /* Stack expertise and tools columns */
    }
    
    .expertise-column {
        max-width: 80%;
        margin: 0 auto;
    }

    .skills-badges {
        align-items: center; /* Center badges when columns are stacked */
    }

    .header {
        padding: 20px 20px;
        justify-content: center;
    }

    .nav {
        flex-wrap: wrap;
        gap: 15px;
    }

    .contact-card {
        flex-direction: column;
        gap: 30px;
        align-items: flex-start;
    }

    .social-media {
        width: 100%;
        text-align: center;
    }
}

@media (max-width: 600px) {
    .section {
        padding: 40px 5vw;
    }

    .profile-name {
        font-size: 2rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .contact-details-horizontal {
        text-align: center;
        align-items: center;
    }

    .profile-sidebar {
        padding: 20px;
    }
    
    .profile-image-container {
        width: 150px;
        height: 150px;
    }

    .badge {
        font-size: 0.8rem;
    }
    
    .tool-list img, .tool-list i {
        width: 38px;
        height: 38px;
        font-size: 30px;
    }
}
