import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faHotel, faHouse, 
    faPlaceOfWorship, faQuestion, faQuestionCircle, faSearch, faShip, faTrain } from "@fortawesome/free-solid-svg-icons"
import { faPlane } from "@fortawesome/free-solid-svg-icons"
import { faCar } from "@fortawesome/free-solid-svg-icons"
import { faTaxi } from "@fortawesome/free-solid-svg-icons"
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { faPerson } from "@fortawesome/free-solid-svg-icons"

import { DateRange } from 'react-date-range';
import { useState, setDate} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {
    const [date, setDtate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
  return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                    <FontAwesomeIcon icon={faHotel} className="headerListItemIcon"/>
                    <span>Hotels</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faHouse} className="headerListItemIcon" />
                    <span>Houses</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faShip} className="headerListItemIcon"/>
                    <span>Ships</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} className="headerListItemIcon"/>
                    <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faTrain} className="headerListItemIcon"/>
                    <span>Trains</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} className="headerListItemIcon"/>
                    <span>Car Rent</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} className="headerListItemIcon"/>
                    <span>Taxi</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlaceOfWorship} className="headerListItemIcon"/>
                    <span>Attractions</span>
                    </div>
                </div>
                <h1 className="headerTitle">
                   Looking for the best booking platform? You're on the right place.
                </h1>
                 <p className="headerDesc">
                     Get rewarded for your travels – unlock instant savings of 10% or
                     more with a free alb-booking account
                </p>
                <button className="headerBtn"> Sign In / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faHotel} className="headerIcon"/>
                        <input type="text"
                        placeholder="Your destination"
                        className="headerSearchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                        <span className="headerSearchText">date to date</span>
                        <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                        <span className="headerSearchText">2 adults, 2 kids, 1 room</span>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                        <FontAwesomeIcon icon={faSearch} className="headerSearchIcon"/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header