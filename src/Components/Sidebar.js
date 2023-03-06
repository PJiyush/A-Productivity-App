import React from 'react'
import Clock from './Clock'
import './Sidebar.css'
function Sidebar() {
    return (
        <div>
            <button className="btn btn-light currentSessionStyle my-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Current Session</button>
            <div className="offcanvas offcanvas-start offcanvasStyle" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Your Current Session</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p></p>
                <Clock/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar