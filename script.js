// Save user input in localStorage
document.getElementById("startForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const language = document.getElementById("language").value;

    localStorage.setItem("cvName", name);
    localStorage.setItem("cvLanguage", language);

    window.location.href = "cv_page.html";
});

// Display CV Name
document.addEventListener("DOMContentLoaded", function () {
    const cvName = localStorage.getItem("cvName");
    if (cvName) {
        document.getElementById("cvName")?.innerText = `Welcome, ${cvName}`;
    }

    // Initialize Charts
    if (document.getElementById("educationChart")) {
        new Chart(document.getElementById("educationChart"), {
            type: "bar",
            data: {
                labels: ["2015-2019", "2020-2022"],
                datasets: [{ label: "Education Duration", data: [4, 2], backgroundColor: ["#4CAF50", "#2196F3"] }]
            }
        });
        new Chart(document.getElementById("experienceChart"), {
            type: "pie",
            data: {
                labels: ["Software Engineer", "Data Scientist"],
                datasets: [{ data: [3, 1], backgroundColor: ["#FFC107", "#FF5722"] }]
            }
        });
        new Chart(document.getElementById("achievementsChart"), {
            type: "doughnut",
            data: {
                labels: ["Award", "Research", "Model"],
                datasets: [{ data: [1, 1, 1], backgroundColor: ["#9C27B0", "#673AB7", "#E91E63"] }]
            }
        });
    }
});
