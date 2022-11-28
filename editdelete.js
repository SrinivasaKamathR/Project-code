var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//Form Submit
form.addEventListener("submit", addItem);

//delete
itemList.addEventListener("click", removeItem);

//Add item
function addItem(e) {
  e.preventDefault();
  //Get input value

  var newItem = document.getElementById("item").value;

  //new li(create)
  var li = document.createElement("li");
  li.className = "list-group-item";
  //add textNode
  li.appendChild(document.createTextNode(newItem));

  //create delete button elemnt
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  //append text
  deleteBtn.appendChild(document.createTextNode("X"));
  //appned button to li
  li.appendChild(deleteBtn);

  //append to list
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
