{
  /* <head>

<h1> Title </h1>

</head>

<body>

<input type="text" name="Name" />

<input type="button" value="Submit" />

</body> */
}
//here document is global obejct contains dom and bom
//here dom means document tree like structure is formed
//html is root elemnt and head and body are childs of html
//head has child element-meta,title
//body has child input tags

// console.log(document);

//local host
// console.log(document.domain);

// console.log(document.URL);

// console.log(document.title);
// document.title = 123;

// console.log(document.doctype);

// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// document.all[10].textContent = "Hello";

// console.log(document.forms);

// console.log(document.links);

//get elemet By id
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headerTitle);

//differnece between textContent and innerHtml
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "GoodBye";
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Hello</h3>";

// header.style.borderBottom = "solid 3px black";

//get Elements by className
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[2].style.backgroundColor = "green";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
// }

//Get Element By TagName
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[2].style.backgroundColor = "green";

// for (var i = 0; i < li.length; i++) {
//   li[i].style.fontWeight = "bold";
// }

//Query Selector
// var header = document.querySelector("#main-header");
// console.log(header);
// header.style.borderBottom = "4px solid black";

// var input = document.querySelector("input");
// input.value = "Hello";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastitem = document.querySelector(".list-group-item:last-child");
// lastitem.style.color = "blue";

//querySelector All

// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "grey";
// }

// var li = document.querySelectorAll("li");
// li[1].style.backgroundColor = "green";
// li[2].style.display = "none";

//traversing DOM
// var itemList = document.querySelector("#items");

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "grey";
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

//parent Element--same as above
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "grey";
// console.log(itemList.parentElement.parentNode);
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes--includes space
// console.log(itemList.childNodes);

//Html collection no space included
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[0].style.backgroundColor = "green";

//firstChild--includes space
// console.log(itemList.firstChild);

//firstElemetChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello";

//lastChild
//console.log(itemList.lastChild);

//lastElemetCHild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hello";

//nextSibling--space included
// console.log(itemList.nextSibling);

//nextElementsibling--space not included
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

//createElement
//create div
// var newDiv = document.createElement("div");

//adding class
// newDiv.className = "hello";
//adding id
// newDiv.id = "1";

//add attribute
// newDiv.setAttribute("title", "helloDiv");

//create textNode
// var newDivtext = document.createTextNode("hello World");
//adding content to div by append
// newDiv.appendChild(newDivtext);
// console.log(newDiv);

//insert before
// var header = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// newDiv.style.fontSize = "30px";
// header.insertBefore(newDiv, h1);

//tasks-Now go head and add HEllo word before Item Liste
// var newP = document.createElement("p");
// var text = document.createTextNode("HEllo");

// newP.appendChild(text);
//insert
// var header = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// newP.style.fontSize = "30px";
// header.insertBefore(newP, h1);

//task Now go head and add HEllo word before Item 1

var newP = document.createElement("p");
var text = document.createTextNode("HEllo");

newP.appendChild(text);

var ul = document.querySelector("ul");
var li = document.querySelector("li");
newP.style.fontSize = "30px";
ul.insertBefore(newP, li);
