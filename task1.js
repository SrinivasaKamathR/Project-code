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
var items = document.getElementsByClassName("list-group-item");
// console.log(items);
console.log(items[1]);
items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
items[2].style.backgroundColor = "green";

for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
