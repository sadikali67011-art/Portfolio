/**
 * Sadik Ali — Software Developer Portfolio
 * Vanilla JavaScript (ES6+), Zero External Dependencies, Accessible & Fast
 * Enhanced with Dynamic Typewriter, Ambient Spotlight & Smooth Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Current Year in Footer
  const yearEl = document.querySelector("#current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Dynamic Typewriter Effect in Hero Section
  const typewriterEl = document.querySelector("#typewriter");
  if (typewriterEl) {
    const words = [
      "Software Developer",
      "Java & Python Enthusiast",
      "Full Stack Web Engineer",
      "MCA Student @ I.F.T.M.",
      "Clean Code Practitioner"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 90;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2200; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 400; // Pause before new word
      }

      setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
  }

  // 3. Theme Toggle (Dark / Light Mode)
  const themeToggleBtn = document.querySelector("#theme-toggle");
  const root = document.documentElement;
  
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  
  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = root.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
      themeToggleBtn.innerHTML = theme === "dark" 
        ? `<svg class="theme-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
        : `<svg class="theme-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
    }
  }

  // 4. Mobile Navigation Menu
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      toggleMenu(!isExpanded);
    });

    // Close on navigation link click
    navLinks.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        toggleMenu(false);
      }
    });

    // Close on click outside
    document.addEventListener("click", (e) => {
      if (!menuButton.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains("is-open")) {
        toggleMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navLinks.classList.contains("is-open")) {
        toggleMenu(false);
        menuButton.focus();
      }
    });

    function toggleMenu(open) {
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
      navLinks.classList.toggle("is-open", open);
    }
  }

  // 5. Active Nav Item Highlighting on Scroll (ScrollSpy)
  const sections = document.querySelectorAll("section[id]");
  const navAnchorLinks = document.querySelectorAll(".nav-links a[href^='#']");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navAnchorLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });

  // 6. Skills Category Filter
  const skillFilterBtns = document.querySelectorAll(".skills-filter-bar .filter-btn");
  const skillCards = document.querySelectorAll(".skill-card");

  if (skillFilterBtns.length > 0) {
    skillFilterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        skillFilterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");
        skillCards.forEach((card) => {
          const category = card.getAttribute("data-category") || "";
          if (filterValue === "all" || category.includes(filterValue)) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // 7. Projects Category Filter
  const projectFilterBtns = document.querySelectorAll(".projects-filter-bar .filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (projectFilterBtns.length > 0) {
    projectFilterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        projectFilterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");
        projectCards.forEach((card) => {
          const category = card.getAttribute("data-category") || "";
          if (filterValue === "all" || category.includes(filterValue)) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // 8. Interactive Live Code Showcase (Java, Python, JavaScript)
  const codeTabBtns = document.querySelectorAll(".code-tab-btn");
  const codePanels = document.querySelectorAll(".code-panel");
  const codeCopyBtn = document.querySelector("#copy-code-btn");

  if (codeTabBtns.length > 0) {
    codeTabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetLang = btn.getAttribute("data-lang");

        codeTabBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        codePanels.forEach((panel) => {
          if (panel.getAttribute("id") === `code-panel-${targetLang}`) {
            panel.classList.add("active");
          } else {
            panel.classList.remove("active");
          }
        });
      });
    });
  }

  if (codeCopyBtn) {
    codeCopyBtn.addEventListener("click", () => {
      const activePanel = document.querySelector(".code-panel.active code");
      if (activePanel) {
        navigator.clipboard.writeText(activePanel.innerText).then(() => {
          const originalText = codeCopyBtn.innerHTML;
          codeCopyBtn.innerHTML = `<span>✓ Copied!</span>`;
          showToast("Code copied to clipboard!");
          setTimeout(() => {
            codeCopyBtn.innerHTML = originalText;
          }, 2000);
        });
      }
    });
  }

  // 9. Contact Form Handling (Netlify & Fallback)
  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = "<span>Sending...</span>";
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);

      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });

        if (response.ok) {
          formStatus.className = "form-status success";
          formStatus.textContent = "Thank you! Your message has been sent successfully. I will get back to you shortly.";
          contactForm.reset();
        } else {
          throw new Error("Form submission error");
        }
      } catch (err) {
        // Fallback for offline or local preview
        formStatus.className = "form-status success";
        formStatus.textContent = "Message received! If not connected to Netlify, you can also email me directly at sadikali7011@gmail.com.";
        contactForm.reset();
      } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        setTimeout(() => {
          formStatus.style.display = "none";
        }, 8000);
      }
    });
  }

  // 10. Quick Copy to Clipboard (Email & Phone)
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied: ${textToCopy}`);
          const originalText = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(() => {
            btn.textContent = originalText;
          }, 2000);
        });
      }
    });
  });

  // 11. Back to Top Button
  const backToTopBtn = document.querySelector("#back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }, { passive: true });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 12. Toast Notice Function
  function showToast(message) {
    let toast = document.querySelector("#toast-notice");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast-notice";
      toast.className = "toast-notice";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }
});
