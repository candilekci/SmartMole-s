import Link from "next/link";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/" className="navTitle">
        Car Site
      </Link>
      <ul className="navList">
        <li className="navItem ">
          <Link className="navLink" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navLink" href="/EditCars">
            Car List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
