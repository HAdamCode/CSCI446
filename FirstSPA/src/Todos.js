import {Link, useLoaderData} from 'react-router-dom';
import './Todos.css';
export default function Todos() {
  const { todos } = useLoaderData();

  return (
    <>
    <link rel="stylesheet" href="Todos.css" />
      {todos.map((todo) => (
        <div key={todo.id} class="div">   
          <Link class="link-wrapper" to={`${todo.id}`}><h3>{todo.description}</h3></Link>
          <p>completed: {todo.completed.toString()}</p>
        </div>
      ))} 
    </>
  );
}



async function fetchTodo() {
    const response = await fetch(`http://localhost:3001/todo`)
        .catch(console.error);
  return await response.json();
}

export { fetchTodo };