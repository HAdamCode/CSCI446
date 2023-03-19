import { useLoaderData } from "react-router-dom";

export async function createTodo({ params }) {
  console.log(params.todoId)
  var requestOptions = {
    method: 'PUT',
    redirect: 'follow'
  };
  
  const response = await fetch("http://localhost:3001/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  return await response.json();
}



export default function NewTodo() {
  const todo = useLoaderData();

  return (
    <div key={todo.id}>
      <h1>{todo.description}</h1>
      <p>Completed: {todo.completed.toString()}</p>
    </div>
  );
}