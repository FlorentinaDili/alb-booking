import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import list from './list.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";
import {useState} from 'react'
import { format } from "date-fns"
import { DateRange } from 'react-date-range'

export const List = () => {

  const location=useLocation();
  const [destination, setDestination]=useState(location.state.destination);
  const [date, setDate]=useState(location.state.date);
  const [openDate, setOpenDate]=useState(false);
  const [options, setOptions]=useState(location.state.options);

  return (
    <div>
    <Navbar />
                {/*prop*/}
    <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search
              <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
              </h1>
              <div className="lsItem">
                <label>Destination</label>
                <input type="text" placeholder={destination} />
              </div>
              <div className="lsItem">
                <label>Check-In Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")}
                to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                </span>
              </div>
              <div className="lsItem">
                {openDate && <DateRange
                onChange={item=>setDate([item.selection])} 
                minDate={new Date()}
                ranges={date}
                />}
              </div>
            </div>
            <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List