export default function () {
    const observerSection = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            else {
                entry.target.classList.remove("show");
            }
        });
    });
    const observerProject = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("showY");
            }
            else {
                entry.target.classList.remove("showY");
            }
        });
    });
    const observerSkills = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("showX");
            }
            else {
                entry.target.classList.remove("showX");
            }
        });
    });
    const hiddenElements = document.querySelectorAll(".hiddenSection");
    hiddenElements.forEach((el) => observerSection.observe(el));
    const hiddenProjects = document.querySelectorAll(".hiddenProject");
    hiddenProjects.forEach((el) => observerProject.observe(el));
    const hiddenSkills = document.querySelectorAll(".hiddenSkill");
    hiddenSkills.forEach((el) => observerSkills.observe(el));
}
