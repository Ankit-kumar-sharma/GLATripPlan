console.log("JavaScript Connected");
let teacherDiv = document.getElementById("hiddenDivTeacher");
let studentDiv=document.getElementById("showStudent");
function myselection() {
  let myselect = document.getElementById("select");
  let i = myselect.selectedIndex;
  let option = myselect.options[i].text;
  if (option == "Teacher") {
      studentDiv.style="display:none; height:0px; width:0px";
    displayTeacherLogin();
  }
  if (option == "Student") {
      studentDiv.style="display:block;";
    teacherDiv.style = "display:none";
    // displayStudentLogin();
  }
}

function displayTeacherLogin() {
  teacherDiv.style = "display:block;";
}
