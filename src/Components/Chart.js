import React, { useEffect, useState } from 'react'
import './Chart.css'

function Chart() {
    const [totaltime, setTotaltime] = useState(0)
    useEffect(()=>{
      localStorage.getItem("yourTime")===null?localStorage.setItem("yourTime",String(totaltime)):setTotaltime((totaltime)=>totaltime+parseInt(localStorage.getItem("yourTime")) )
        return ()=>setTotaltime(0)
    })
    const reloadBtn=()=>{
        setTotaltime(localStorage.getItem("yourTime"))
    }
    const resetBtn = ()=>{
      localStorage.removeItem("yourTime")
      localStorage.setItem("yourTime",'0')
      reloadBtn()
    }
  return (
    <>
    <div className='container ml-5'>{totaltime}</div>
    {/* <button type="button" className="btn btn-outline-info m-3" id='btn-reload' onClick={reloadBtn}>Reload</button> */}
      <div className="col-md-12 text-center mt-3" >
      <button className="btn btn-dark w-25 " id='btn-reload' onClick={reloadBtn} type="button">Reload</button>
      <button className="btn btn-dark w-25 " id='btn-reset' onClick={resetBtn} type="button">Reset Progress</button>
      </div>
    </>
  )
}

export default Chart