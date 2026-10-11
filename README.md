# Praveen P. — Web Developer Portfolio Website

A cinematic, 3D-inspired personal portfolio website built with 4K-style visuals, glassmorphism cards, neon purple/violet atmospheric lighting, and high-performance interactive features.

---

## 🌟 Features

- **Cinematic 3D Aesthetic**: Deep `#0A0A0F` dark canvas with multi-layered neon purple lighting, ambient floating glowing orbs, and an interactive particle starfield background.
- **Hardware-Accelerated 3D Tilt**: Glassmorphism cards with realistic perspective parallax tilt on hover.
- **Dynamic Role Typewriter**: Interactive headline highlighting roles (*Web Developer*, *BCA Student*, *Frontend Developer*, *Problem Solver*).
- **Verified Certificates Gallery**:
  - Displays original, high-resolution certificates.
  - Category filters: *All*, *Technical & Workshops*, *Sports & Extracurriculars*.
  - Fullscreen click-to-enlarge Lightbox Modal with zoom, download, previous/next buttons, and keyboard controls (`Esc`, `←`, `→`).
- **Dedicated Resume Showcase**:
  - Embedded live interactive PDF preview.
  - One-click *Download Resume PDF* button.
  - Fullscreen interactive modal viewer.
- **Authentic Project Cards**:
  - *Student Management System* (Web Application)
  - *Personal Portfolio Website* (Live GitHub Pages link)
- **Interactive Contact Hub**:
  - Direct links to Email, LinkedIn, and GitHub.
  - One-click "Copy Email" button with glowing toast alerts.
  - Direct message form with `mailto:` generation.
- **Ultra-Fast & Mobile Responsive**: Pure HTML5, CSS3, and Vanilla JavaScript with zero npm dependencies or heavy runtimes needed.

---

## 📁 Project Directory Structure

```text
praveen-portfolio/
│
├── index.html                    # Main HTML5 single-page application
│
├── css/
│   └── style.css                 # Cinematic neon purple & glassmorphic styling
│
├── js/
│   └── main.js                   # Interactive particles, 3D tilt, lightbox, and navigation
│
├── public/                       # Assets folder
│   ├── profile.jpg               # Praveen P.'s authentic profile photo
│   ├── resume.pdf                # Official Resume PDF
│   └── certificates/             # Original certificate images
│       ├── cert_1.jpg            # Govt High School Pattur / Agastya Science Fair (2018)
│       ├── cert_2.jpg            # St. Joseph's College Kabaddi Tournament (2024)
│       ├── cert_3.jpg            # Veltech Ranga Sanku Arts College Sports Meet Runner (2024–2025)
│       ├── cert_4.jpg            # University of Madras B-Zone Kabaddi Tournament (2025)
│       ├── cert_5.jpg            # TVS Training & Services Android App Development Workshop (2025)
│       ├── cert_6.jpg            # Cisco & Magic Bus AI & Employability Skills (2025)
│       ├── cert_7.jpg            # Quest Technologies Mobile App Dev Internship (2026)
│       └── cert_8.jpg            # FutureSkills Prime & NASSCOM STEM Certification (2026)
│
├── README.md                     # Documentation & Deployment Guide
└── .gitignore                    # Git ignore file
```

---

## 🖼️ Where to Place Your Real Assets

All personal assets are organized inside the `public/` directory:

1. **Profile Photo**:
   - Location: `public/profile.jpg`
   - Praveen's formal photo in suit and tie is already placed here and verified.
   - To update with a new photo in the future, simply replace `public/profile.jpg` with your new image (keep the filename as `profile.jpg`).

2. **Resume PDF**:
   - Location: `public/resume.pdf`
   - Praveen's official 1-page resume is already placed here and active.
   - To update your resume in the future, save your updated PDF as `public/resume.pdf`.

3. **Certificates**:
   - Location: `public/certificates/`
   - All 8 original certificates are properly extracted, rotated upright, and linked:
     - `cert_1.jpg` — Govt High School Pattur Science Fair
     - `cert_2.jpg` — St. Joseph's Inter-College Kabaddi Tournament
     - `cert_3.jpg` — Vel Tech Annual Sports Meet Runner
     - `cert_4.jpg` — University of Madras B-Zone Kabaddi Tournament
     - `cert_5.jpg` — TVS Android App Development Hands-on Workshop
     - `cert_6.jpg` — Cisco / Magic Bus AI & Life Employability Skills
     - `cert_7.jpg` — Quest Technologies Internship Certificate
     - `cert_8.jpg` — NASSCOM FutureSkills Prime STEM Certification

---

## 🚀 How to Run Locally

You can preview the website locally in two easy ways:

### Option 1: Double-click (Direct Browser)
Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Local HTTP Server (Recommended for PDF iframe preview)
In PowerShell or Terminal inside this folder:
```powershell
# Using Python:
python -m http.server 8000

# Open http://localhost:8000 in your browser
```

---

## 🌐 How to Deploy Online

### Method 1: GitHub Pages (Free & Recommended)

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Praveen P. Cinematic Portfolio Website"
   ```

2. **Push to GitHub**:
   - Create a new public repository on GitHub (e.g., `portfolio` or `praveen-portfolio`).
   - Run:
     ```bash
     git remote add origin https://github.com/praveen1102-pj/YOUR_REPO_NAME.git
     git branch -M main
     git push -u origin main
     ```

3. **Enable GitHub Pages**:
   - On GitHub, go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)` folder.
   - Click **Save**.
   - Your website will be live in ~1 minute at:
     `https://praveen1102-pj.github.io/YOUR_REPO_NAME/`

### Method 2: Vercel or Netlify (One-Click)

- Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
- Drag-and-drop the `praveen-portfolio` folder directly into Netlify Drop, or connect your GitHub repository to Vercel.
- The site deploys instantly with SSL.

---

## 👤 Profile Details

- **Name**: Praveen P.
- **Title**: Web Developer
- **Degree**: Bachelor of Computer Applications (BCA) — Vel Tech Rangarajan Arts College (2024–2027)
- **Internship**: Mobile App Development — CADDCAMM Solutions & Quest Technology (June–July 2026)
- **Email**: [praveen739724@gmail.com](mailto:praveen739724@gmail.com)
- **LinkedIn**: [linkedin.com/in/praveen-p-a4b451402](https://www.linkedin.com/in/praveen-p-a4b451402/)
- **GitHub**: [github.com/praveen1102-pj](https://github.com/praveen1102-pj)
- **Location**: Chennai, Tamil Nadu, India
