import { Link, Outlet } from "react-router-dom";



const Layout = () => {
  return (
    <div>
      <header className="header"> 
      <ul>
        <li>
            <Link to={`/`}>Home</Link>
        </li>
      </ul>
      </header>
      <Outlet />
      <footer className="footer"></footer>
    </div>
  );
}

export default Layout