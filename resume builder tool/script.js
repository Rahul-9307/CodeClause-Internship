/* ---------------- DARK MODE ---------------- */

const toggle = document.getElementById("themeToggle");
if (toggle) {
    toggle.onclick = () => {
        document.body.classList.toggle("dark");
        toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    };
}

/* ---------------- AI-LIKE OFFLINE FEATURES ---------------- */

function aiSummary() {
    const templates = [
        "Highly motivated professional with strong problem-solving skills.",
        "Creative and dedicated individual with excellent communication.",
        "Organized and detail-oriented person committed to high performance."
    ];
    summary.value = templates[Math.floor(Math.random() * templates.length)];
}

function aiExperience() {
    experience.value =
`• Managed multiple projects with strong deadlines.
• Improved workflow and communication.
• Delivered quality work consistently.`;
}

function aiSkills() {
    skills.value = "HTML, CSS, JavaScript, Communication, Teamwork, Problem Solving";
}

/* ---------------- LIVE PREVIEW ---------------- */

function updatePreview() {
    ["name","email","phone","summary","experience","skills"].forEach(f => {
        document.getElementById("p-" + f).innerText = document.getElementById(f).value;
    });
}

/* ---------------- SAVE SYSTEM ---------------- */

function saveResume() {
    const data = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        summary: summary.value,
        experience: experience.value,
        skills: skills.value
    };
    localStorage.setItem("resumeData", JSON.stringify(data));
    alert("Resume Saved!");
}

function loadResume() {
    const saved = JSON.parse(localStorage.getItem("resumeData"));
    if (!saved) return alert("No saved resume!");

    name.value = saved.name;
    email.value = saved.email;
    phone.value = saved.phone;
    summary.value = saved.summary;
    experience.value = saved.experience;
    skills.value = saved.skills;

    updatePreview();
    alert("Resume Loaded!");
}

/* ---------------- PDF DOWNLOAD ---------------- */

function downloadPDF() {
    html2pdf().from(document.getElementById("preview")).save("resume.pdf");
}

// LOAD MORE TEMPLATE LOGIC
const loadMoreBtn = document.getElementById("loadMoreBtn");
const templates = document.querySelectorAll(".template-card.hidden");

let visibleCount = 6;

loadMoreBtn.addEventListener("click", () => {
    let nextItems = Array.from(templates).slice(0, 6);

    nextItems.forEach(card => {
        card.classList.remove("hidden");
        card.style.opacity = "1";
    });

    visibleCount += nextItems.length;

    if (visibleCount >= 12) {
        loadMoreBtn.style.display = "none";
    }
});
 // Optional: Smooth scroll on wheel
        const container = document.querySelector('.template-container');
        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        });

