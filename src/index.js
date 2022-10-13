// import { TodoList } from "./class/todo-list.class";
// import { Todo } from "./class/todo.class";
import { TodoList, Todo } from "./class";
import "./styles.css";

const todoList = new TodoList();
const tarea = new Todo("Aprender Java");
const tarea2 = new Todo("Comprar Unicornio");

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);
console.log(todoList);
