import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faHotel, faHouse, 
         faPlaceOfWorship, faQuestion, faQuestionCircle,
         faSearch, faShip, faTrain,
         faPlane, faCar, faTaxi, faCalendarDays,
         faPerson} from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useState, setDate} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"

const Header = () => {
    //the component is set false once the page is open (it's not shown until clicking)..
    const [openDate, setOpenDate] = useState(false);
    //
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);

    const[options, setOptions] = useState({
        adult:1,
        kids:0,
        room:1
    })
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
                        <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")}
                                                            to ${format(date[0].endDate, "dd/MM/yyyy")}`
                                                            }
                        </span>

                       {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        />
                       }
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                        <span className="headerSearchText">{`${options.adult} adult - 
                                                            ${options.kids} kids -
                                                            ${options.room} room 
                                                            `}</span>
                        <div className="options">
                            <div className="optionItem">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <button className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">1</span>
                                    <button className="optionCounterButton">+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <div className="optionItem">
                                    <span className="optionText">Kids</span>
                                    <button className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">0</span>
                                    <button className="optionCounterButton">+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <button className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">1</span>
                                    <button className="optionCounterButton">+</button>
                                </div>
                            </div>
                        </div>
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