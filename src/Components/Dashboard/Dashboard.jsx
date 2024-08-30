import React from 'react'
import { Link } from 'react-router-dom'

// Imported component 
import Top from '../Body Section/Top Section/Top'
import Sidebar from '../Sidebar Section/Sidebar'

const Dashboard = () => {
    return (
        <div className="mainContent">
            <Sidebar />
            <Top />
        </div>
    )
}

export default Dashboard