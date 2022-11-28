const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const btn = document.querySelector("btn");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // localStorage.setItem("name", nameInput.value);
  // localStorage.setItem("email", email.value);
  //   console.log(localStorage.getItem("name"));
  //   console.log(localStorage.removeItem("email"));
  let userObj = {
    name: nameInput.value,
    email: email.value,
  };
  //object key must be serilize
  let serilizeObj = JSON.stringify(userObj);
  // console.log(serilizeObj);
  localStorage.setItem(userObj.name, serilizeObj);
  // console.log(localStorage);

  // let deserilizeObj = JSON.parse(localStorage.getItem("userObj"));
  // console.log(deserilizeObj);

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
    userList.appendChild(li);
  }

  //clear
  nameInput.value = "";
  email.value = "";
});
