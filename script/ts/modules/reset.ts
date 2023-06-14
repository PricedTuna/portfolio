export default function(allProjects:NodeListOf<Element>) {
   allProjects.forEach((project)=> {
      if (project.classList.contains("hide")) {
         project.classList.toggle("hide")
      }
   })
}