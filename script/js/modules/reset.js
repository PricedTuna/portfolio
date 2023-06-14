export default function (allProjects) {
    allProjects.forEach((project) => {
        if (project.classList.contains("hide")) {
            project.classList.toggle("hide");
        }
    });
}
