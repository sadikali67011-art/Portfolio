const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navLinks.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
  const revealItems = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-card, .education-item, .cert-card",
  );
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });
}

const resumeRoute = window.location.pathname.replace(/\/+$/, "") === "/resume";

if (resumeRoute) {
  const content = document.querySelector("#app");
  content.innerHTML = `
    <main class="resume-page">
      <div class="resume-actions">
        <a class="resume-back" href="/">Back to portfolio</a>
        <button class="resume-print" type="button">Save as PDF / Print</button>
      </div>
      <article class="resume-sheet">
        <header class="resume-header">
          <h1>Sadik Ali</h1>
          <p class="resume-role">Software Developer</p>
          <p>Sambhal, Uttar Pradesh · <a href="tel:+917534894896">+91 7534894896</a> · <a href="mailto:sadikali7011@gmail.com">sadikali7011@gmail.com</a></p>
          <p><a href="https://www.linkedin.com/in/sadik-ali-75a539294/">LinkedIn</a> · <a href="https://github.com/sadikali67011-art">GitHub</a></p>
        </header>
        <section class="resume-section">
          <h2>Professional Summary</h2>
          <p>Software developer and computer applications student with internship experience building web-based applications. Interested in creating practical software and continuing to grow through hands-on development. Skills include Python, Java, JavaScript, HTML, CSS, SQL, and PostgreSQL.</p>
        </section>
        <section class="resume-section">
          <h2>Technical Skills</h2>
          <p><strong>Programming:</strong> Python, Java, JavaScript</p>
          <p><strong>Web:</strong> HTML, CSS, responsive design, REST APIs</p>
          <p><strong>Databases:</strong> SQL, PostgreSQL, DBMS</p>
          <p><strong>Tools:</strong> Git, GitHub, VS Code, Postman</p>
          <p><strong>Core concepts:</strong> OOP, DSA basics, problem solving</p>
        </section>
        <section class="resume-section">
          <h2>Experience</h2>
          <div class="resume-entry">
            <div class="resume-entry-heading"><strong>Web Developer Intern</strong><span>June 2025 - November 2025</span></div>
            <p class="resume-muted">CETPA</p>
            <ul><li>Contributed to building and maintaining web-based applications as part of a development team.</li><li>Gained practical experience across the web development lifecycle.</li></ul>
          </div>
        </section>
        <section class="resume-section">
          <h2>Projects</h2>
          <div class="resume-entry">
            <div class="resume-entry-heading"><strong>Motor Doctor</strong></div>
            <p>Vehicle service platform designed to help drivers understand repair estimates and make informed maintenance decisions.</p>
            <p><a href="https://motordoctor.in/">Live website</a> · <a href="https://github.com/sadikali67011-art/Motor-doctor">GitHub</a></p>
          </div>
          <div class="resume-entry">
            <div class="resume-entry-heading"><strong>Job Portal</strong></div>
            <p>Job portal project focused on connecting job opportunities and job seekers.</p>
            <p>Node.js, Express, MongoDB · <a href="https://github.com/sadikali67011-art/Job-Portal">GitHub</a></p>
          </div>
        </section>
        <section class="resume-section">
          <h2>Education</h2>
          <div class="resume-entry"><div class="resume-entry-heading"><strong>Master of Computer Applications (MCA)</strong><span>2026 - 2028</span></div><p class="resume-muted">I.F.T.M. University, Moradabad</p></div>
          <div class="resume-entry"><div class="resume-entry-heading"><strong>Bachelor of Computer Applications (BCA)</strong><span>2023 - 2026</span></div><p class="resume-muted">Mobile Application and Web Technology · Teerthanker Mahaveer University</p></div>
          <div class="resume-entry"><div class="resume-entry-heading"><strong>12th Standard - UP Board</strong><span>2022</span></div><p class="resume-muted">M M S S V M I C, Madha, Sambhal</p></div>
          <div class="resume-entry"><div class="resume-entry-heading"><strong>10th Standard - UP Board</strong><span>2020</span></div><p class="resume-muted">D S M Inter College</p></div>
        </section>
        <section class="resume-section">
          <h2>Certifications</h2>
          <ul class="resume-certifications"><li><strong>Artificial Intelligence for Intermediate</strong> - IBM, 2026</li><li><strong>Java Programming</strong> - NPTEL, 2025</li><li><strong>Introduction to Computers</strong> - Spoken Tutorial, IIT Bombay, 2024</li><li><strong>Soft Skills for IT Professionals</strong> - Great Learning Academy, 2024</li></ul>
        </section>
      </article>
    </main>
  `;
  document.querySelector(".resume-print").addEventListener("click", () => window.print());
}
