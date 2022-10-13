import { TodoList, Todo } from "./class";
import { crearTodoHtml } from "./js/componentes";
import "./styles.css";

export const todoList = new TodoList();
const tarea = new Todo("Aprender Java");

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);
