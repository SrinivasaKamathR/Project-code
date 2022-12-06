//promises
const posts = [
  {
    title: "postOne",
    body: "this is the post one",
  },
  {
    title: "postTwo",
    body: "this is the post second",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${index} ${post.title} ${post.body} </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        // resolve();
        resolve(`${posts[posts.length - 1].title}`);
      } else {
        reject("Something went Wrong");
      }
    }, 2000);
  });
}

function createPost4(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went Wrong");
      }
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        resolve(posts.pop());
      } else {
        reject("array is empty");
      }
    }, 2000);
  });
}

// createPost({ title: "post three", body: "this is post three" }).then(() => {
//   getPosts();
//   deletePost().then(() => {
//     getPosts();
//     deletePost().then(() => {
//       getPosts();
//       deletePost().then(() => {
//         getPosts();
//         deletePost()
//           .then(() => {})
//           .catch((err) => {
//             console.log("Inside catch block", err);
//           });
//       });
//     });
//   });
// });

//create and delete Post Four
// createPost4({ title: "post four", body: "this is post four" })
//   .then(() => {
//     getPosts();
//     deletePost().then(() => {
//       getPosts();
//     });
//   })
//   .catch((err) => {
//     console.log("Inside catch block", err);
//   });

//promise.all
// const promise1 = Promise.resolve("Hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "GoodBye");
// });

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((val) => {
//   console.log(val);
// });

function activitytime() {
  const userpromise = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
  return userpromise;
}
// createpost({ title: "post three", body: "this is post three" })
//   .then(getposts)
//   .catch((err) => console.log(err));
const post3 = { title: "post three", body: "this is post three" };
const post4 = { title: "post four", body: "this is post four" };
// Promise.all([createPost(post3), activitytime()]).then((values) => {
//   console.log(values);
// });
Promise.all([createPost(post4), activitytime()])
  .then((values) => {
    console.log("before Creating post 4, user last activity", values);
  })
  .then(deletePost)
  .then(getPosts);
