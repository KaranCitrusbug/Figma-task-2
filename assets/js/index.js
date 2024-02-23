// -------------sidebar collapse-------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const collapse = document.querySelector("#collapse");

  const sideMenu = document.querySelector(".sideMenu");
  const mainPage = document.querySelector(".mainPage");
  const navbar = document.querySelector(".navbar");
  const collapsed = document.querySelector("#collapsed");

  collapse.addEventListener("click", function () {
    sideMenu.classList.add("collapsed");
    mainPage.classList.add("collapsed");
    navbar.classList.add("collapsed");
  });
  collapsed.addEventListener("click", function () {
    sideMenu.classList.remove("collapsed");
    mainPage.classList.remove("collapsed");
    navbar.classList.remove("collapsed");
  });

});
// ---------------------------for tab bar----------------------------
const tabs = document.getElementById("tabs");
const links = tabs.getElementsByClassName("links");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeTab");
    current[0].className = current[0].className.replace("activeTab", "");
    this.className += " activeTab";
  });
}
//--------------------------------- objective accordion--------------------------
function firstAccordion() {
    // Get the hidden row element
    const caret = document.querySelector(".arrowUp");
    console.log(caret.classList.contains("fa-angle-up"))
    const hiddenRow = document.querySelector(".firstHiddenRow");
    // Check if caret has class "fa-angle-up"
    if (hiddenRow.classList.contains("display")) {
        hiddenRow.classList.remove("display")
        caret.classList.remove("fa-angle-up");
        caret.classList.add("fa-angle-down");
    } else {
        // If row does not have class display, do opposite
        caret.classList.remove("fa-angle-down");
        caret.classList.add("fa-angle-up");
        hiddenRow.classList.add("display")
    }
}


function secondAccordion() {   
    // Get the hidden row element
    const caret = document.querySelector(".arrowUp2");
    console.log(caret.classList.contains("fa-angle-up"))
    const hiddenRow = document.querySelector(".secondHiddenRow");
    // Check if caret has class "fa-angle-up"
    if (hiddenRow.classList.contains("display2")) {
        hiddenRow.classList.remove("display2")
        caret.classList.remove("fa-angle-up");
        caret.classList.add("fa-angle-down");
    } else {
        // If row does not have class display, do opposite
        caret.classList.remove("fa-angle-down");
        caret.classList.add("fa-angle-up");
        hiddenRow.classList.add("display2")
    }
}
function thirdAccordion() {
    // Get the hidden row element
    const caret = document.querySelector(".arrowUp3");
    console.log(caret.classList.contains("fa-angle-up"))
    const hiddenRow = document.querySelector(".thirdHiddenRow");
    // Check if caret has class "fa-angle-up"
    if (hiddenRow.classList.contains("display3")) {
        hiddenRow.classList.remove("display3")
        caret.classList.remove("fa-angle-up");
        caret.classList.add("fa-angle-down");
    } else {
        // If row does not have class display, do opposite
        caret.classList.remove("fa-angle-down");
        caret.classList.add("fa-angle-up");
        hiddenRow.classList.add("display3")
    }
}
// ------------------------objective section end---------------------

//-------------------------------------------------- Navbar-----------------------
let list = document.getElementsByClassName("navList");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function() {

    // Remove "active" class from all elements
    let currentActive = document.getElementsByClassName("active");
    for (let j = 0; j < currentActive.length; j++) {
      currentActive[j].classList.remove("active");
    }
    
    // Remove "previous" and "next" classes from all elements
    let previousElements = document.getElementsByClassName("previous");
    let nextElements = document.getElementsByClassName("next");
    for (let j = 0; j < previousElements.length; j++) {
      previousElements[j].classList.remove("previous");
    }
    for (let j = 0; j < nextElements.length; j++) {
      nextElements[j].classList.remove("next");
    }
    
    // Add "previous" class to previous element
    if (i > 0) {
      list[i - 1].classList.add("previous");
    }
    
    // Add "next" class to next element
    if (i < list.length - 1) {
      list[i + 1].classList.add("next");
    }
    
    // Add "active" class to clicked element
    this.classList.add("active");
  });
}
// --------------------------priorities section -------------------------------
function priorities(){
  const arrow =document.querySelector(".arrow")
  const prioritiesTable = document.querySelector(".prioritiesTable")
  arrow.classList.toggle('rotated');
  if(arrow.classList.contains("rotated")){
    prioritiesTable.style.display = "none";
  }
  else{
    prioritiesTable.style.display = "block";
  }
}
// -------------------------priorities section end------------

// ---------kpi section start --------------------
function kpiTable(){
  const arrow =document.querySelector(".arrow1")
  arrow.classList.toggle('rotated');
  const kpiTable = document.querySelector(".kpiTable")
  const kpiHeader = document.querySelector(".kpiHeader")
  if(arrow.classList.contains("rotated")){
    kpiTable.style.display = "none";
    kpiHeader.classList.add("space")
  }
  else{
    kpiTable.style.display = "block";
    kpiHeader.classList.remove("space")

  }
}
function kpiTable2(){
  const arrow =document.querySelector(".arrow2")
  arrow.classList.toggle('rotated');
  const kpiTable = document.querySelector(".kpiTable2")
  const kpiHeader = document.querySelector(".kpiHeader")
  if(arrow.classList.contains("rotated")){
    kpiTable.style.display = "none";
  }
  else{
    kpiTable.style.display = "block";
  }
}
// -----------------kpi section end ------------------------

// --------------Feedback section start --------------------

const feedbackYear = document.querySelectorAll(".year")
for (let i = 0; i < feedbackYear.length; i++) {
  feedbackYear[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeYear");
    current[0].className = current[0].className.replace("activeYear", "");
    this.className += " activeYear";
  });
}

function feedbackResult(){
  const arrow =document.querySelector(".arrow4")
  arrow.classList.toggle('rotated');
  const feedbackResult = document.querySelector(".feedbackResult")
  if(arrow.classList.contains("rotated")){
    feedbackResult.style.display = "none";

  }
  else{
    feedbackResult.style.display = "flex";


  }
}
function feedbackTableOne(){
  const arrow =document.querySelector(".arrow3")
  arrow.classList.toggle('rotated');
  const feedbackTableOne = document.querySelector(".feedbackTableOne")
  if(arrow.classList.contains("rotated")){
    feedbackTableOne.style.display = "none";
  }
  else{
    feedbackTableOne.style.display = "block";
  }

}
function thirdQuarterTable(){
  const arrow =document.querySelector(".arrow5")
  arrow.classList.toggle('rotated');
  const thirdQuarterDetails = document.querySelector(".thirdQuarterDetails")
  if(arrow.classList.contains("rotated")){
    thirdQuarterDetails.style.display = "none";
  }
  else{
    thirdQuarterDetails.style.display = "flex";
  }
}

function kpiResultTable(){
  const arrow =document.querySelector(".arrow6")
  arrow.classList.toggle('rotated');
  const kpiResult = document.querySelector(".kpiResult")
  if(arrow.classList.contains("rotated")){
    kpiResult.style.display = "none";
  }
  else{
    kpiResult.style.display = "block";
  }
}

function kpiResultSales(){
  const arrow =document.querySelector(".arrow7")
  arrow.classList.toggle('rotated');
  const salesTable = document.querySelector(".salesTable")
  if(arrow.classList.contains("rotated")){
    salesTable.style.display = "none";
  }
  else{
    salesTable.style.display = "block";
  }
}

function highImpactTable(){
  const arrow =document.querySelector(".arrow8")
  arrow.classList.toggle('rotated');
  const highImpactTable = document.querySelector(".highImpactTable")
  if(arrow.classList.contains("rotated")){
    highImpactTable.style.display = "none";
  }
  else{
    highImpactTable.style.display = "block";
  }
}
function cultureFittable(){
  const arrow =document.querySelector(".arrow9")
  arrow.classList.toggle('rotated');
  const cultureFittable = document.querySelector(".cultureFittable")
  if(arrow.classList.contains("rotated")){
    cultureFittable.style.display = "none";
  }
  else{
    cultureFittable.style.display = "block";
  }
}

// sidebar menu collapse when screen size above 1000px

window.addEventListener("resize", function(){
  const sidebar = document.querySelector(".sideMenu");
  const mainPage = document.querySelector('.mainPage')

    if ($(window).width() < 1000) {
      sidebar.classList.add("collapsed");
      mainPage.classList.add("collapsed")
    } else {
      sidebar.classList.remove("collapsed");
      mainPage.classList.remove("collapsed")
    }
  }); 