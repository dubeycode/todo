import React from 'react'
import '../App.css'
import '../App'

export const Todoitem = ({ToDo_WOrk,ToDo_Time }) => {
   
    return (
        <>
            <div className="container text-center">
  <div className="row">
    <div className="col my-3">
      {ToDo_WOrk}  
    </div>
    <div className="col my-3">
    {ToDo_Time}
    </div>
    <div className="col">
      <button type="button" className="btn btn-danger my-3">Delete</button>
    </div>
  </div>
</div>

        </>
    )
}
