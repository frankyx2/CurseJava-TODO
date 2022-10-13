//referencias al html

import { Todo } from "../class";
import { todoList, TodoList } from "../index";

const divTodoList = document.querySelector(".todo-list");
const txtinput = document.querySelector(".new-todo");

export const crearTodoHtml = (todo) => {
  const htmlTodo = `<li class="${
    todo.completado ? "completed" : ""
  }" data-id="${todo.id}">
    <div class="view">
      <input class="toggle" type="checkbox" ${
        todo.completado ? "checked" : ""
      } />
      <label>${todo.tarea}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>`;
  const div = document.createElement("div");
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);
  return div.firstElementChild;
};

//eventos
txtinput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && txtinput.value.length > 0) {
    const nuevoTodo = new Todo(txtinput.value);
    todoList.nuevoTodo(nuevoTodo);
    console.log(todoList);
    crearTodoHtml(nuevoTodo);
    txtinput.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  const nombreElemento = event.target.localName;
  const todoElemento = event.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute("data-id");

  if (nombreElemento.includes("input")) {
    todoList.marcaCompletado(todoId);
    todoElemento.classList.toggle("completed");
  } else if (nombreElemento.includes("button")) {
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento);
  }
});
