const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const btn = document.querySelector("btn");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

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
      console.log(response);
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4>Something Went Wrong</h4>";
      console.log(err);
    });

  if (nameInput.value === "" || email.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    // const li = document.createElement("li");
    // li.appendChild(
    //   document.createTextNode(`${nameInput.value} : ${email.value}`)
    // );
    // userList.appendChild(li);
    //itertaing on local storage
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${email.value}`)
    );
    //edit or delete button
    const a1 = document.createElement("input");
    a1.type = "button";
    a1.value = "Edit";
    a1.addEventListener("click", () => {
      // nameInput = userObj.name;
      // email = userObj.email;
      localStorage.removeItem(userObj.name, userObj.name);
      li.remove();
    });
    a1.className = "delete";
    a1.style.border = "2px solid blue";
    li.appendChild(a1);

    const a = document.createElement("input");
    a.type = "button";
    a.value = "delete";
    a.addEventListener("click", () => {
      localStorage.removeItem(userObj.name, userObj.name);
      // axios.delete(`${apiendpoint}/registeruser/${object._id}`);
      li.remove();
    });
    a.className = "delete";
    a.style.border = "2px solid red";

    li.appendChild(a);

    userList.appendChild(li);
  }

  //clear
  nameInput.value = "";
  email.value = "";
});
