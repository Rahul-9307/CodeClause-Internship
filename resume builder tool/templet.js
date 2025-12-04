function updatePreview() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let summary = document.getElementById("summary").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;

    // TEMPLATE 1
    document.getElementById("p-name-1").innerText = name;
    document.getElementById("p-email-1").innerText = email;
    document.getElementById("p-phone-1").innerText = phone;
    document.getElementById("p-summary-1").innerText = summary;
    document.getElementById("p-skills-1").innerText = skills;
    document.getElementById("p-experience-1").innerText = experience;

    // TEMPLATE 4
    document.getElementById("p-name-4").innerText = name;
    document.getElementById("p-email-4").innerText = email;
    document.getElementById("p-phone-4").innerText = phone;
    document.getElementById("p-summary-4").innerText = summary;
    document.getElementById("p-skills-4").innerText = skills;
    document.getElementById("p-experience-4").innerText = experience;
}


function changeTemplate() {
    let select = document.getElementById("templateSelector").value;

    document.querySelectorAll('.template').forEach(t => t.classList.remove("active"));

    document.querySelector(`.${select}`).classList.add("active");
}


// DOWNLOAD PDF
function downloadPDF() {
    const preview = document.getElementById("preview");
    html2pdf().from(preview).save("Resume.pdf");
}
