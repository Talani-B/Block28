import { Routes, Route , Link} from "react-router-dom";
export default function Navbar() {
    return (
        <div id="navbar">
        <li>
        <Link to="/home">Home</Link>
        </li>
         <li>
          <Link to="/red">Red</Link>
          </li>
         <li>
         <Link to="/blue">Blue</Link>
        </li>
       </div>
    );
  }