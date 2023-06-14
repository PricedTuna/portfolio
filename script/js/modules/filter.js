import resetHide from "./reset.js";
export default function () {
    const allProjects = document.querySelectorAll(".project");
    let filterSelect = document.querySelector("#filterSelect");
    filterSelect.addEventListener("change", () => {
        let value = filterSelect.value;
        resetHide(allProjects);
        allProjects.forEach((project) => {
            let languages = project.getAttribute("data-language");
            if (!languages.includes(value)) {
                project.classList.toggle("hide");
            }
        });
    });
}
