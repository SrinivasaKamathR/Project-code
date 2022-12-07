const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const btn = document.querySelector("btn");

myForm.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  if (nameInput.value === "" || email.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => {
      msg.remove();
    }, 5000);
  } else {
    let userObj = {
      name: nameInput.value,
      email: email.value,
    };

    axios
      .post(
        "https://crudcrud.com/api/f1d174572102491b86c8988b47cb380b/addUser",
        userObj
      )
      .then((response) => {
        showonscreen(response.data);
        console.log(response);
      })
      .catch((err) => {
        document.body.innerHTML =
          document.body.innerHTML + "<h4>Something Went Wrong</h4>";
        console.log(err);
      });
  }
}

//store data after Refresh
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/f1d174572102491b86c8988b47cb380b/addUser")
    .then((response) => {
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        showonscreen(response.data[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

function showonscreen(data) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${data.name} : ${data.email}`));

  var delbtn = document.createElement("button");
  delbtn.className = "delete-btn";
  delbtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(delbtn);

  var edibtn = document.createElement("button");
  edibtn.className = "edit-btn";
  edibtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(edibtn);

  userList.appendChild(li);

  nameInput.value = "";
  email.value = "";
}

// myForm.addEventListener("submit", (e) => {

//  else {
// const li = document.createElement("li");
// li.appendChild(
//   document.createTextNode(`${nameInput.value} : ${email.value}`)
// );
// userList.appendChild(li);
//itertaing on local storage

//edit or delete button
//     const a1 = document.createElement("input");
//     a1.type = "button";
//     a1.value = "Edit";
//     a1.addEventListener("click", () => {

//       localStorage.removeItem(userObj.name, userObj.name);
//       li.remove();
//     });
//     a1.className = "delete";
//     a1.style.border = "2px solid blue";
//     li.appendChild(a1);

//     const a = document.createElement("input");
//     a.type = "button";
//     a.value = "delete";
//     a.addEventListener("click", () => {
//       localStorage.removeItem(userObj.name, userObj.name);

//       li.remove();
//     });
//     a.className = "delete";
//     a.style.border = "2px solid red";

//     li.appendChild(a);

//   }

//   //clear
//   nameInput.value = "";
//   email.value = "";
// });
