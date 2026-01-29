import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <p></p>
      <nav>
        <menu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Blog List</Link>
          </li>
          <li>
            <Link to="/trash">Deleted List</Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
