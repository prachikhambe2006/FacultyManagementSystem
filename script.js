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

function searchFaculty() {
  var keyword = document.getElementById("searchName").value.toLowerCase();
  var result = [];

  for (var i = 0; i < facultyList.length; i++) {
    if (facultyList[i].toLowerCase().indexOf(keyword) !== -1) {
      result.push(facultyList[i]);
    }
  }

  showList(result);
}
// End of file