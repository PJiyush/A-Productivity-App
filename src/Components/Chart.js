import React, { useEffect, useState } from 'react'

function Chart() {
    const [totaltime, setTotaltime] = useState(0)
    useEffect(()=>{
        setTotaltime((totaltime)=>totaltime+parseInt(localStorage.getItem("yourTime")) )
        return ()=>setTotaltime(0)
    })
    const reloadBtn=()=>{
        setTotaltime(localStorage.getItem("yourTime"))
    }
  return (
    <>
    <div className='container ml-5'>{totaltime}</div>
    <button type="button" className="btn btn-outline-info m-3" id='btn-reload' onClick={reloadBtn}>Reload</button>
    </>
  )
}

export default Chart