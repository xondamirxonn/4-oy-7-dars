/*

HTTPS
H -HYPER
T - TEXT
T - TRANSFER
P - PROTOCOL
S- SECURED

CRUD
C - CREATE
R -READ
U - UPDATE
D - DELETE

API
A- APPLICATION
P - PROGRAMMING
I - INTERFACE

C - POST
R - GET
U - PUT, PATCH
D - DELETE


*/

let userList = document.querySelector("#users");
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
if (id) {
  "<div style='font-size: 100px'>" 
  fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}	`  ).then((res) => res.json()).then((user) => {
      user.reverse()
      user.forEach(rev => {
        
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let h4 = document.createElement("h4");
        let img = document.createElement("img");
        h1.innerText = rev.albumId;
        h4.innerText = rev.id
        h2.innerText = rev.title;
        h2.style.fontSize = "25px"
        img.setAttribute("src", rev.url);
        document.body.prepend( h2, h4, img);
      }); 
      let a = document.createElement("a");
      a.innerText = "Go back";
      a.setAttribute("href", "/");
      document.body.prepend(a)
      "</div>";
    });
} else {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((users) => {
      users.forEach((user) => {
        let li = document.createElement("li");
        let h2 = document.createElement("h2");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        let a = document.createElement("a");
        h2.innerText = user.id;
        h4.innerText = user.title;
       
        a.setAttribute("href", `/?id=${user.id}`);
        a.innerText = 'Read more'
        li.append(h2, h4, p, a);
        userList.append(li);
      });
    });
}


// let usersList = document.querySelector("#users");

// let params = new URLSearchParams(window.location.search);
// let id = params.get("id");

// if (id) {
//   fetch("https://jsonplaceholder.typicode.com/users/" + id)
//     .then((res) => res.json())
//     .then((user) => {
//       let container = document.createElement("div");
//       let h1 = document.createElement("h1");
//       let h2 = document.createElement("h2");
//       let h4 = document.createElement("h4");
//       let p = document.createElement("p");
//       let a = document.createElement("a");
//       let todoList = document.createElement("ul");

//       const renderTodo = (todo) => {
//         let li = document.createElement("li");
//         let span = document.createElement("span");
//         let completeToggle = document.createElement("button");
//         let btn = document.createElement("button");

//         span.innerText = todo.title;
//         if (todo.completed) span.classList.add("text-decoration-line-through");
//         btn.classList.add("btn", "btn-danger");
//         btn.innerText = "Delete";
//         li.classList.add(
//           "list-group-item",
//           "d-flex",
//           "align-items-center",
//           "justify-content-between",
//           "gap-3"
//         );

//         completeToggle.classList.add(
//           "btn",
//           todo.completed ? "btn-warning" : "btn-success",
//           "ms-auto"
//         );
//         completeToggle.innerText = todo.completed ? "Incomplete" : "Complete";
//         li.append(span, completeToggle, btn);
//         todoList.append(li);

//         completeToggle.addEventListener("click", async () => {
//           await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
//             method: "PATCH",
//             data: JSON.stringify({ completed: !todo.completed }),
//           });

//           completeToggle.classList.toggle("btn-success");
//           completeToggle.classList.toggle("btn-warning");

//           completeToggle.innerText =
//             completeToggle.innerText === "Complete" ? "Incomplete" : "Complete";

//           span.classList.toggle("text-decoration-line-through");
//         });

//         btn.addEventListener("click", () => {
//           li.remove();

//           fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
//             method: "DELETE",
//           });
//         });
//       };

//       container.classList.add("container");
//       container.append(h1);

//       let form = document.createElement("form");
//       let input = document.createElement("input");
//       let submitBtn = document.createElement("button");

//       input.classList.add("form-control");
//       input.setAttribute("placeholder", "Todo title...");
//       submitBtn.classList.add("btn", "btn-primary");
//       submitBtn.innerText = "Add";
//       form.classList.add("d-flex", "gap-3", "my-3");
//       form.append(input, submitBtn);
//       container.append(form);

//       form.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         let title = input.value;
//         let data = {
//           title,
//           userId: id,
//           completed: false,
//         };

//         let res = await fetch("https://jsonplaceholder.typicode.com/todos", {
//           method: "POST",
//           data: JSON.stringify(data),
//         });

//         let { id: todoId } = await res.json();

//         let todo = { ...data, id: todoId };
//         renderTodo(todo);
//         e.target.reset();
//       });

//       h1.innerText = "Todos";
//       h1.classList.add("display-1", "text-center");
//       h2.innerText = user.name;
//       h4.innerText = user.username;
//       p.innerText = `${user.email}, ${user.phone}, ${user.website}`;
//       a.innerText = "Go back";
//       a.setAttribute("href", `/`);
//       (async function () {
//         container.append(todoList);
//         todoList.classList.add("list-group");
//         let res = await fetch(
//           `https://jsonplaceholder.typicode.com/todos?_limit=10&_start=1&userId=${id}`
//         );
//         let todos = await res.json();
//         todos.forEach(renderTodo);
//       })();
//       document.body.prepend(a, h2, h4, p, container);
//     });
// } else {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((users) => {
//       users.forEach((user) => {
//         let li = document.createElement("li");
//         let h2 = document.createElement("h2");
//         let h4 = document.createElement("h4");
//         let p = document.createElement("p");
//         let a = document.createElement("a");
//         h2.innerText = user.name;
//         h4.innerText = user.username;
//         p.innerText = user.email;
//         a.innerText = "Read more";
//         a.setAttribute("href", `/?id=${user.id}`);
//         li.append(h2, h4, p, a);
//         usersList.append(li);
//       });
//     });
// }




// https://jsonplaceholder.typicode.com/posts