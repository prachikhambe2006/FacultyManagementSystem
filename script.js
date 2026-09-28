// Faculty Management System
var facultyList = [];

function showList(list) {
  var ul = document.getElementById("facultyList");
  ul.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    var li = document.createElement("li");
    li.textContent = list[i];
    ul.appendChild(li);
  }
}

function addFaculty() {
  var name = document.getElementById("facultyName").value;

  if (name === "") {
    alert("Please enter faculty name");
    return;
  }

  facultyList.push(name);
  showList(facultyList);
  document.getElementById("facultyName").value = "";
}
// End of file