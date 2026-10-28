# 🎓 Renuka M. - Student Portfolio Website

Personal portfolio website for **Renuka M.**, a **B.Tech Computer Science and Engineering (Artificial Intelligence and Machine Learning)** student at **REVA University** and an **Aspiring AI Engineer**.

Built using clean, responsive **HTML5, Vanilla CSS3, and JavaScript** with no backend or database required.

---

## 🌟 Sections Included

1. **Home / Hero**: Greeting, typing effect displaying focus areas, code mockup card (`renuka_profile.py`), and quick action buttons.
2. **About Me**: Professional introduction about an undergraduate student learning programming, web development, and artificial intelligence at REVA University.
3. **Skills (Beginner-Level)**:
   - **C Programming** (Beginner)
   - **Python** (Beginner - IBM Certified)
   - **HTML5** (Beginner)
   - **CSS3** (Beginner)
   - **JavaScript** (Beginner)
   - **Git & GitHub** (Beginner)
   - **Problem Solving** (Beginner)
4. **Education**: Formal undergraduate degree details for **B.Tech CSE (AIML)** at **REVA University**, Bengaluru.
5. **Certifications**: Dedicated showcase for the **IBM Python Course Certificate**.
6. **Projects (Sample Cards)**:
   - Blog Application (Sample)
   - Student Management System (Sample)
   - AI / ML Project Concept (Sample)
   *(Clearly tagged as samples until replaced with your actual academic coursework)*
7. **Contact**: Direct cards for **GitHub**, **LinkedIn**, **Email**, and **Phone**, plus an interactive contact form.

---

## 📁 File Structure

```text
my protofolio/
│
├── index.html        # Main semantic website structure & Renuka's content
├── style.css         # Modern purple & white theme styling, responsive layouts & animations
├── script.js         # Navigation, typing animation, modals & form logic
└── README.md         # Setup, customization & deployment documentation
```

---

## ✏️ How to Edit Your Details Later

Whenever you want to update your links, email, phone number, or projects, open `index.html` in your code editor and look for the tags marked `<!-- EDIT HERE -->`:

### 1. Update Contact Links
In `index.html` around the `#contact` section:
- **GitHub**: Replace `https://github.com/your-username` with your exact GitHub profile URL.
- **LinkedIn**: Replace `https://linkedin.com/in/your-profile` with your exact LinkedIn profile URL.
- **Email**: Replace `mailto:your.email@example.com` and the text with your real email address.
- **Phone**: Replace `tel:+91-XXXXXXXXXX` and the text with your actual phone number.

### 2. Update IBM Certificate Link
In `index.html` under the `#certifications` section:
- Replace `href="#"` on the `cert-link-btn` with your certificate verification URL or credential link.

### 3. Replace Sample Projects with Your Real Projects
In `index.html` under the `#projects` section:
- Replace the project title, description, and tags with your real assignment or project.
- Replace `https://github.com/your-username` with the GitHub repository link for your project.

---

## 💻 How to Run Locally

### Option 1: Double-Click
Double-click `index.html` in your folder to open it directly in Google Chrome, Microsoft Edge, or any modern web browser.

### Option 2: Local HTTP Server (Python)
In the terminal inside your project folder:
```bash
python -m http.server 3000
```
Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🚀 How to Upload to GitHub

Follow these simple steps in your terminal to publish your repository to GitHub:

### Step 1: Initialize Git and Commit
```bash
git init
git add .
git commit -m "Renuka M. - AI Student Portfolio Website"
```

### Step 2: Create a New GitHub Repository
1. Go to [https://github.com/new](https://github.com/new).
2. Enter a repository name (for example: `renuka-student-portfolio`).
3. Select **Public**.
4. Leave "Add a README file" unchecked (since we already have this README).
5. Click **Create repository**.

### Step 3: Link and Push Your Code
Run the following commands in your terminal (replace `<YOUR_GITHUB_USERNAME>` with your actual username):
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/renuka-student-portfolio.git
git push -u origin main
```

---

## 🌐 How to Deploy on Vercel for Free

Vercel provides free global hosting for static web projects with automatic HTTPS and instant updates.

### Method 1: Using the Vercel Web Dashboard (Easiest)
1. Go to [https://vercel.com](https://vercel.com) and log in with your **GitHub account**.
2. Click **"Add New..."** &rarr; **"Project"**.
3. Under "Import Git Repository", choose `renuka-student-portfolio` and click **Import**.
4. Keep the Framework Preset as **Other** and the Root Directory as `./`.
5. Click **Deploy**.
6. Within 20-30 seconds, Vercel will generate your live production URL (for example: `https://renuka-student-portfolio.vercel.app`).

### Method 2: Using Vercel CLI
If you prefer the command line:
```bash
npx vercel
```
Follow the on-screen prompts to log in, accept the defaults, and your live URL will be ready!

---

## 📜 License
This project is open-source and free for students and developers to customize and use.
