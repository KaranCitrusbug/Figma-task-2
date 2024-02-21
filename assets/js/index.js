document.addEventListener("DOMContentLoaded",function(){
    const collapse = document.querySelector("#collapse");

    const sideMenu = document.querySelector(".sideMenu");
    const mainPage =document.querySelector(".mainPage");
    const navbar =document.querySelector(".navbar");
    const collapsed = document.querySelector("#collapsed");

    collapse.addEventListener("click",function(){
        sideMenu.classList.add("collapsed");
        mainPage.classList.add("collapsed");
        navbar.classList.add("collapsed");
         
    })
    collapsed.addEventListener("click",function(){
        sideMenu.classList.remove("collapsed");
        mainPage.classList.remove("collapsed");
        navbar.classList.remove("collapsed");
       
    })
})
const tabs = document.getElementById("tabs");
const links = tabs.getElementsByClassName("links");
console.log(tabs)
console.log(links.length)
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeTab");
  current[0].className = current[0].className.replace("activeTab", "");
  this.className += " activeTab";
  });
}


