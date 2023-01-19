import React from 'react'
import {TfiCheck} from 'react-icons/tfi'
function Todo(props) {
    return (
        <div className="card" >
            <div className="card-header">
                {props.number+1}
                <span className='checkBox'><TfiCheck/></span>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{props.value}</p>
                    <footer className="blockquote-footer">Created on : {props.date}</footer>
                </blockquote>
            </div>
        </div>
    )
}

export default Todo