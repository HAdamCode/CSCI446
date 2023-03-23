import { Link, Outlet } from 'react-router-dom';
import './Wrapper.css';

export default function Wrapper() {
  return (
    <>
      <header>
        <link rel="stylesheet" href="Wrapper.css" />
        <Link class="all-link" to="/todo">View All Todos</Link>
        <Link class="new-link" to="/todo/new">Add New Todo</Link>
      </header>

      <Outlet />
    </>
  );
}