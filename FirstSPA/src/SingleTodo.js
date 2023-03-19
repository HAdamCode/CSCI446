import { useLoaderData } from "react-router-dom";

export async function getTodo({ params }) {
  console.log(params.todoId)
  const response = await fetch(`http://localhost:3001/todo/${params.todoId}`);
  return await response.json();
}

export default function SingleTodo() {
  const todo = useLoaderData();

  return (
    <div key={todo.id}>
      <h1>{todo.description}</h1>
      <p>Completed: {todo.completed.toString()}</p>
    </div>
  );
}