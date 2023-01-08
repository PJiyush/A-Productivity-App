import React, { useEffect, useState } from 'react'

function Clock() {
    const [seconds, setSeconds] = useState(0)
    const [mins, setMins] = useState(0)
    const [stop, setStop] = useState(true)

    const startTimer = () => {
        setStop(false)
    }
    const stopTimer = () => {
        setStop(true)
    }

    const resetTimer=()=>{
        setSeconds(0)
        setMins(0)
        setStop(true)
    }

    const handleTimer=()=>{
        setSeconds((seconds)=>seconds+1)
    }

    useEffect(() => {
        let timer = null;
        if (!stop) {
            timer = setInterval(() => {
                handleTimer()
            }, 1000)
        }
        else {
            clearInterval(timer)
        }
        return ()=>{clearInterval(timer)}
    })

    return (
        <div>
            <div className='container'>
                <p id="timer"><span id="mins">{mins}</span>:<span id="seconds">{seconds}</span></p>
            </div>
            <button type="button" className="btn btn-outline-success m-3" id='btn-start' onClick={startTimer}>Start</button>
            <button type="button" className="btn btn-outline-danger m-3" id='btn-stop' onClick={stopTimer}>Stop</button>
            <button type="button" className="btn btn-outline-info m-3" id='btn-reset' onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Clock