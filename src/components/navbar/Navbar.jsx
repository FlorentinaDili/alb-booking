import "./navbar.css"
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">alb-booking</span>
            <div className="navItems">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                <button className="navButton">Register</button>
                <button className="navButton">Log In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar