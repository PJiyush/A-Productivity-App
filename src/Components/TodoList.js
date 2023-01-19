import React, { useState } from 'react'
import Todo from './Todo'

function TodoList() {
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])
    const lengthOfList = messageList.length
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                TodoList <span className="badge text-bg-secondary"> {lengthOfList}</span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Your Todo List</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
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
                <form className="row gy-10 gx-5 align-items-center" onSubmit={
                    e=>{e.preventDefault()
                    setMessageList([...messageList,message])
                    setMessage('')
                }}>
                    <div className="col-auto">
                        <label className="visually-hidden" htmlFor="autoSizingInput">Name</label>
                        <input type="text" className="form-control gy-10" id="autoSizingInput" placeholder="What you want to do" value={message} onChange={e=>setMessage(e.target.value)} />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodoList