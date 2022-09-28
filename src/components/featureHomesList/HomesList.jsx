import React from 'react'
import homeList from './homeList.css'

function HomesList() {
  return (
    <div className="homeList">
        <div className="hlItem">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" className="homeListImg" />
            <span className='hlName'>Kango</span>
            <span className='hlCity'>Prishtine</span>
            <span className='hlPrice'>Starting from 300$</span>
            <div className="hlRating">
                <button>8.9</button>
                <span>Exellent</span>
            </div>
        </div>
        <div className="hlItem">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" className="homeListImg" />
            <span className='hlName'>Baflo</span>
            <span className='hlCity'>Ferizaj</span>
            <span className='hlPrice'>Starting from 230$</span>
            <div className="hlRating">
                <button>9.9</button>
                <span>Exellent</span>
            </div>
        </div>
        <div className="hlItem">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" className="homeListImg" />
            <span className='hlName'>Kango</span>
            <span className='hlCity'>Prishtine</span>
            <span className='hlPrice'>Starting from 300$</span>
            <div className="hlRating">
                <button>8.5</button>
                <span>Exellent</span>
            </div>
        </div>
    </div>
  )
}

export default HomesList