import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import { faPlane } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faTaxi } from "@fortawesome/free-solid-svg-icons"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { faPerson } from "@fortawesome/free-solid-svg-icons"

import "./header.css";

const Header = () => {
  return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                    <FontAwesomeIcon icon={faHotel} />
                    <span>Hotel</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rent</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Taxi</span>
                    </div>
                </div>
                <h1 className="headerTitle">
                   A lifetime of discounts? It's Genius.
                </h1>
                 <p className="headerDesc">
                     Get rewarded for your travels – unlock instant savings of 10% or
                     more with a free alb-booking account
                </p>
                <button className="headerBtn"> Sign In / Register</button>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faHotel} />
                    <input type="text"
                     placeholder="Your destination"
                     className="headerSearchInput" />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span className="headerSearchText">date to date</span>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} />
                    <span className="headerSearchText">2 adults, 2 kids, 1 room</span>
                </div>
            </div>
        </div>
  )
}

export default Header