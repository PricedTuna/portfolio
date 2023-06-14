export default function () {
   const observerSection: IntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         console.log(entry);
         if (entry.isIntersecting) {
            entry.target.classList.add("show");
         } else {
            entry.target.classList.remove("show");
         }
      })
   })

   const observerProject: IntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         console.log(entry);
         if (entry.isIntersecting) {
            entry.target.classList.add("showY");
         } else {
            entry.target.classList.remove("showY");
         }
      })
   })

   const observerSkills: IntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         console.log(entry);
         if (entry.isIntersecting) {
            entry.target.classList.add("showX");
         } else {
            entry.target.classList.remove("showX");
         }
      })
   })

   const hiddenElements:NodeListOf<Element> = document.querySelectorAll(".hiddenSection")
   hiddenElements.forEach((el)=> observerSection.observe(el))

   const hiddenProjects:NodeListOf<Element> = document.querySelectorAll(".hiddenProject")
   hiddenProjects.forEach((el)=> observerProject.observe(el))

   const hiddenSkills:NodeListOf<Element> = document.querySelectorAll(".hiddenSkill")
   hiddenSkills.forEach((el)=> observerSkills.observe(el))
}