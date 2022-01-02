import react from "react";
import "./App.css";
import {FaCross, FaSearch} from "react-icons/fa";
import {HiMenu} from "react-icons/hi";
import {IoIosAdd, IoIosClose, IoMdCloseCircle} from "react-icons/io"
import Task from "./Task";

function App() {

    function closeMenu() {
      document.getElementById('leftSide').style.marginLeft='-40%';
    }

    function openMenu() {
      document.getElementById('leftSide').style.marginLeft='0%';
    }

  return (
    <div className="body">
      {/* left side */}

      <div id="leftSide">
        <span id="closeIcon">
          <IoIosClose onClick={closeMenu}/>
        </span>

        <div className="search">
          <span className="searchIcon">
            <FaSearch />
          </span>
          <input placeholder="Search" className="input"></input>
        </div>

        <div className="tasks">
          <Task status={true} details="Design a Parking Lot" />
          <Task status={false} details="Design Amazon-Online Shopping System" />
          <Task status={false} details="Design Stack Overflow" />
          <Task status={false} details="Design a Movie Ticket Booking System" />
          <Task status={false} details="Design an ATM" />
        </div>
      </div>

      {/*Menu Icon for responsive design */}
      <span id="menuIcon">
        <HiMenu onClick={openMenu}/>
      </span>

      <div className="rightSide">
        <p className="content">Content</p>
      </div>
    </div>
  );
}

export default App;