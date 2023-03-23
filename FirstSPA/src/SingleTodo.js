import { useLoaderData } from "react-router-dom";
import './SingleTodo.css';

export async function getTodo({ params }) {
  const response = await fetch(`http://localhost:3001/todo/${params.todoId}`);
  return await response.json();
}

export default function SingleTodo() {
  const todo = useLoaderData();

  return (
    <div key={todo.id}>
      <link rel="stylesheet" href="SingleTodo.css"/>
      <h2>Description: {todo.description}</h2>
      <p>Completed: {todo.completed.toString()}</p>
    </div>
  );
}