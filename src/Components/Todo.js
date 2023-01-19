import React from 'react'

function Todo(props) {
    return (
        <div className="card">
            <div className="card-header">
                {props.number+1}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{props.value}</p>
                    <footer className="blockquote-footer">Here I will place Current time<cite title="Source Title">Source Title</cite></footer>
                </blockquote>
            </div>
        </div>
    )
}

export default Todo