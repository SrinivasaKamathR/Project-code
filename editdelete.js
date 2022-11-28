var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//Form Submit
form.addEventListener("submit", addItem);

//delete
itemList.addEventListener("click", removeItem);

//filter event
filter.addEventListener("keyup", filterItem);
//Add item
function addItem(e) {
  e.preventDefault();
  //Get input value

  var newItem = document.getElementById("item").value;
  //2nd input type
  var newItem1 = document.getElementById("item1").value;

  //new li(create)
  var li = document.createElement("li");
  li.className = "list-group-item";
  //add textNode
  li.appendChild(document.createTextNode(newItem + " " + newItem1));

  //create delete button elemnt
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  //append text
  deleteBtn.appendChild(document.createTextNode("X"));
  //appned button to li
  li.appendChild(deleteBtn);

  // Create edit button element
  var editBtn = document.createElement("button");
  // Add clases to del button
  editBtn.className = "btn btn-danger btn-sm float-right delete";
  // Append text node
  editBtn.appendChild(document.createTextNode("edit"));
  // Append button to li
  li.appendChild(editBtn);

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

//filter
function filterItem(e) {
  //convert to lower
  var text = e.target.value.toLowerCase();
  //get li
  var items = itemList.getElementsByTagName("li");
  //convertt to array
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    var description = item.childNodes[1].textContent;
    if (
      itemName.toLowerCase().indexOf(text) != -1 ||
      description.toLowerCase().indexOf(text) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
