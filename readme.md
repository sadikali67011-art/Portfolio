# Sadik Ali — Software Developer Portfolio

A modern, responsive, job-ready personal portfolio and interactive resume designed for software engineering and web development opportunities. Built with pure **HTML5, CSS3, and vanilla JavaScript (ES6+)** with **zero build steps or external package dependencies**, ensuring 100% reliable deployment on **Netlify** and **GitHub Pages**.

---

## 🌟 Highlights & Technologies Showcased

- **Programming Languages**:
  - **Java**: Object-Oriented Programming (OOP), Collections Framework, Stream API, JDBC, NPTEL Certified.
  - **Python**: Automation scripting, REST API integration, File I/O, Web scraping, data processing.
  - **JavaScript (ES6+)**: Asynchronous programming (Async/Await, Promises), DOM API manipulation, Fetch API, Event delegation.
- **Web Technologies**:
  - **HTML5**: Semantic tags, Web Accessibility (ARIA), Open Graph & Twitter meta tags, Schema.org JSON-LD structured data.
  - **CSS3**: CSS Grid, Flexbox, Custom Properties (variables), Dark/Light theme switching, Keyframe animations, mobile-first responsive design, and pixel-perfect `@media print` A4 styling for PDF resumes.
- **Databases & Tools**:
  - SQL, PostgreSQL, MySQL, MongoDB basics.
  - Git & GitHub version control workflows.
  - Netlify continuous deployment with security & caching headers (`netlify.toml`).

---

## 📁 Project Structure

```text
personal-portfolio-master/
├── index.html          # Main portfolio homepage
├── styles.css          # Modern design system (Dark/Light themes + Print styles)
├── script.js           # Interactive UI: theme toggle, filters, live code tabs, copy-to-clipboard, form
├── 404.html            # Branded custom 404 error page
├── netlify.toml        # Production Netlify redirect & security header configuration
├── image.jpeg          # Profile picture
├── resume/
│   └── index.html      # Standalone ATS-friendly, printable resume page
└── README.md           # Project documentation & deployment guide
```

---

## 💻 Run Locally

### Option 1: Python Static Server (Recommended)
From this directory, run:
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 2: VS Code Live Server
Right-click `index.html` in VS Code and select **Open with Live Server**.

### Option 3: Direct File
Double-click `index.html` in your file explorer. All assets use relative paths, so everything loads cleanly.

---

## 🚀 How to Deploy on GitHub & Netlify (Step-by-Step)

### 1. Upload / Push to GitHub

If you have Git installed, open terminal inside this directory and run:

```bash
# 1. Check git status
git status

# 2. Stage all changes
git add .

# 3. Commit changes
git commit -m "Update portfolio: job-ready design, Java/Python/JS showcases, Netlify and resume fixes"

# 4. Push to your GitHub repository
git push origin main
```

> **Note**: If you are using GitHub Web upload or GitHub Desktop:
> Simply drag and drop all the files (`index.html`, `styles.css`, `script.js`, `image.jpeg`, `404.html`, `netlify.toml`, and the `resume/` folder) into your GitHub repository `sadikali67011-art/Portfolio`.

---

### 2. Deploy to Netlify (2 Easy Ways)

#### Method A: Connect with GitHub (Continuous Deployment — Best)
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select **GitHub** and authorize access.
4. Pick your repository: `sadikali67011-art/Portfolio`.
5. Netlify will automatically detect:
   - **Build command**: *(leave blank)*
   - **Publish directory**: `.` (or root)
6. Click **Deploy Site**. Your site will be live instantly with automated SSL!

#### Method B: Netlify Drop (Drag & Drop — 30 Seconds)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop this folder (`personal-portfolio-master`) directly into the browser box.
3. Your website will be live in 10 seconds!

---

### 3. Deploy to GitHub Pages (Alternative Free Hosting)
1. In your GitHub repository (`sadikali67011-art/Portfolio`), click **Settings** → **Pages**.
2. Under **Build and deployment** > **Branch**, select `main` and `/ (root)`.
3. Click **Save**.
4. In 1–2 minutes, your site will be live at: `https://sadikali67011-art.github.io/Portfolio/`!
*(All internal links use relative paths like `resume/`, so GitHub Pages will never have 404 route issues!)*

---

## 📄 Printable Resume
Visit `/resume/` on the live site or open `resume/index.html`. Click **"Save as PDF / Print"** to generate a clean, ATS-compliant single/two-page PDF resume ready for job applications.

---

## 👤 Author

**Sadik Ali**  
- Email: [sadikali7011@gmail.com](mailto:sadikali7011@gmail.com)  
- LinkedIn: [linkedin.com/in/sadik-ali-75a539294](https://www.linkedin.com/in/sadik-ali-75a539294/)  
- GitHub: [github.com/sadikali67011-art](https://github.com/sadikali67011-art)  
- Phone: +91 7534894896  
