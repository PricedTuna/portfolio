import resetHide from "./reset.js"

export default function():void {
   const allProjects:NodeListOf<Element> = document.querySelectorAll(".project")
   let filterSelect:any = document.querySelector("#filterSelect")

   filterSelect.addEventListener("change", ()=> {
      let value = filterSelect.value;
      resetHide(allProjects);


      allProjects.forEach((project)=> {
         let languages = project.getAttribute("data-language")
         
         if (!languages.includes(value)) {
            project.classList.toggle("hide")
         }
      })
   })
}