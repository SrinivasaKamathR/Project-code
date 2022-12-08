function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;

  const obj = {
    name,
    email,
  };

  axios
    .post(
      "https://crudcrud.com/api/c61299ec93174ab78511579b75bda0f0/addUser",
      obj
    )
    .then((response) => {
      showNewUserOnScreen(response.data);
      console.log(response);
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4> Something went wrong! </h4>";
      console.log(err);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/c61299ec93174ab78511579b75bda0f0/addUser")
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        showNewUserOnScreen(response.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function showNewUserOnScreen(user) {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  // if (localStorage.getItem(user.email) !== null) {
  //   removeUserFromScreen(user.email);
  // }

  const parentNode = document.getElementById("users");
  const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
                          <button onclick=deleteUser('${user._id}')> Delete User </button>
                          <button onclick=editUserDetails('${user.name}','${user.email}','${user._id}')>Edit User </button>
                       </li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserDetails(name, email, userId) {
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  deleteUser(userId);
}

function deleteUser(userId) {
  axios
    .delete(
      `https://crudcrud.com/api/c61299ec93174ab78511579b75bda0f0/addUser/${userId}`
    )
    .then((response) => {
      removeUserFromScreen(userId);
    })
    .catch((err) => {
      console.log(err);
    });
}

function removeUserFromScreen(userId) {
  const parentNode = document.getElementById("users");
  const childNodeToBeDeleted = document.getElementById(userId);
  parentNode.removeChild(childNodeToBeDeleted);
}
