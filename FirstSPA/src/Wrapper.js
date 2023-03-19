import { Link, Outlet } from 'react-router-dom';

export default function Wrapper() {
  return (
    <>
      <header>
        <Link to="/todo">View all todos</Link>
      </header>

      <Outlet />
    </>
  );
}