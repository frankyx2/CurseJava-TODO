import { TodoList, Todo } from "./class";
import { crearTodoHtml } from "./js/componentes";
import "./styles.css";

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log("todos", todoList.todos);
