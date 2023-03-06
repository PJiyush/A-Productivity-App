import React from 'react'
import './Quote.css'
function Quote(props) {
    return (
        <div class="card styleCard">
    <div class="card-header stylecard-header">
        Be Motivated
    </div>
    <div class="card-body">
        <blockquote class="blockquote mb-0">
        <p>{props.passage}</p>
        <footer class="blockquote-footer">Wriiten by<cite title="Source Title">{props.author}</cite></footer>
        </blockquote>
    </div>
    </div>
    )
}

export default Quote