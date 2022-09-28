import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import list from './list.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";

export const List = () => {

  const location=useLocation();
  
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
                <input type="text" />
              </div>
              <div className="lsItem">
                <label>Check-In Date</label>

              </div>
              <div className="lsItem">
                <label>Destination</label>
                <input type="text" />
              </div>
            </div>
            <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List