//Update resume label info
const resumeVersion = "3.2";
const resumeDate = "February 2022";
const resumeFocus = "Software Engineering";
const resumeLabel = document.getElementById("resumeLabel");
resumeLabel.innerHTML = `Current Version: V${resumeVersion}, ${resumeDate} <br> Focus: ${resumeFocus}.`;

const today = new Date();
const year = today.getFullYear();


//console.log(year);

const github = document.getElementById("Github");
//console.log(github);


//Activate first tab
const active = document.getElementById("ProjectsTab");
active.style.display = "block";
console.log(active);

function openTab(event, tabName) {
    // Declare all variables
    var i;
    var tabcontent;
    var tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
   // console.log(tabcontent);
    for(tc of tabcontent)
    {
        tc.style.display = "none";
    };

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (tl of tablinks) {
      tl.className = tl.className.replace(" active", "");
      
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
    console.log(tl.className);
  } 