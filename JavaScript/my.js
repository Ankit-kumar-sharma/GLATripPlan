console.log("JavaScript Connected");
let teacherDiv = document.getElementById("hiddenDivTeacher");
let studentDiv=document.getElementById("showStudent");
function myselection() {
  let myselect = document.getElementById("select");
  let i = myselect.selectedIndex;
  let option = myselect.options[i].text;
  if (option == "Teacher") {
      studentDiv.style="display:none;";
    displayTeacherLogin();
  }
  if (option == "Student") {
      studentDiv.style="display:block;";
    teacherDiv.style = "display:none";
    // displayStudentLogin();
  }
}

function displayTeacherLogin() {
  teacherDiv.style = "display:block";
}
