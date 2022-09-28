import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import list from './list.css'

export const List = () => {
  return (
    <div>
    <Navbar />
                {/*prop*/}
    <Header type="list"/>
    </div>
  )
}

export default List