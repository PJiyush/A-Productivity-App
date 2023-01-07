import React from 'react'
import Sidebar from './Sidebar'

function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link float-right" href="#">Pomodoro</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
            <Sidebar/>
        </div>
    )
}

export default Navbar