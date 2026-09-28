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

// FEATURE_PLACEHOLDER
// End of file