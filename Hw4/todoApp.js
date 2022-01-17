import { todoApi } from "./todoApis.js";

const submitButton = document.querySelector(".submitButton");

const todoList = document.querySelector(".todoList");
const unorderList = document.createElement("ul");

submitButton.onclick = (e) => {
  const input = document.querySelector(".inputBox");
  console.log(JSON.stringify(input.value));
  todoApi
    .addTodo({ content: `${input.value}`, isCompleted: false })
    .then((res) => {
      console.log(res);
    });

  todoApi.getAllTodos().then((res) => {
    console.log(res.todos);
  });

  show();

  e.preventDefault();
};

const show = () => {
  unorderList.innerHTML = "";
  todoList.append(unorderList);
  todoApi.getAllTodos().then((res) => {
    console.log(res.todos);
    res.todos.map(({ content, isCompleted }, index) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const btn = document.createElement("button");

      unorderList.append(li);

      span.textContent = content;
      if (isCompleted) {
        span.style = "text-decoration:line-through;";
      }
      span.ondblclick = () => {
        mod(index);
      };
      btn.textContent = "Delete";
      btn.className = "btn";
      btn.id = `${index}`;
      btn.onclick = () => {
        deleteBtn(index);
      };
      li.append(span);
      li.append(btn);
    });
  });
};

show();

const deleteBtn = (index) => {
  todoApi.delTodo(index).then((res) => {
    console.log(res);
    show();
  });
};

const mod = (index) => {
  todoApi.modTodo(index).then((res) => {
    console.log(res);
    show();
  });
};
