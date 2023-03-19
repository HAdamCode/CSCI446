import {Link, useLoaderData} from 'react-router-dom';
export default function Todos() {
  const { todos } = useLoaderData();

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`${todo.id}`}><p>{todo.description}</p></Link>
          
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