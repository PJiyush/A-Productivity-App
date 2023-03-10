import React, { useEffect, useState } from 'react'
import FetchQuotes from './FetchQuotes'
import Todo from './Todo'
import './TodoList.css'

function TodoList() {
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])
    const lengthOfList = messageList.length

    
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('todos'))){
            setMessageList(JSON.parse(localStorage.getItem('todos')))
        }else{
            localStorage.setItem('todos',JSON.stringify(messageList))
        }
    },[])

    const clearAll=()=>{
        localStorage.removeItem('todos',JSON.stringify(messageList))
        console.log(messageList);
        setMessageList([])
    }


    return (
        <div>
            <button type="button" className="btn btn-todo" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                TodoList <span className="badge text-bg-secondary"> {lengthOfList}</span>
            </button>
            <div className="offcanvas offcanvas-end styleOffCanvasTodo" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel" >Your Todo List</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                    <button type="button" className="btn-remove" onClick={clearAll}>Remove All</button>
                <div className="offcanvas-body">
                    {
                        messageList.map((todo,index)=>(
                            <div key={index}>
                            <Todo value={todo} number={index}/>
                            <br/>
                            </div>
                        ))
                    }
                </div>
                <form className="row gy-10 gx-5 align-items-center" >
                    <div className="col-auto">
                        {/* <label className="visually-hidden" htmlFor="autoSizingInput">Name</label> */}
                        <input type="text" className="form-control gy-10 style-form" id="autoSizingInput" placeholder="What you want to do" value={message} onChange={e=>setMessage(e.target.value)} />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn-submit" onClick={
                    e=>{e.preventDefault()
                            setMessageList([...messageList,message])
                            setMessage('')
                    localStorage.setItem('todos',JSON.stringify(messageList))
                }}>Submit</button>
                    </div>
                </form>
            </div>
            <div className='container-fluid my-5'>
                <FetchQuotes/>
            </div>
        </div>
        
    )
}

export default TodoList