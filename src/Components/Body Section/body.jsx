import React from "react";
import './body.scss'

//Imported compopnents
// import Top from './Top Section/Top'
// import Listing from './Listing Section/Listinig'
// import Activity from './Activity Section/activity'
import Login from '../Login/Login'

const Body = () => {
    return (
        <div className="mainContent">
            <Login />

            {/* <div className="bottom flex">
                <Listing/>
                <Activity/>
            </div> */}
        </div>
    )
}

export default Body