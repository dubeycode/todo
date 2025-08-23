import React from 'react'
import '../App.css'
export const Input = () => {
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <input type="text" className='input' placeholder='Enter ToDo'/>
                    </div>
                    <div className="col">
                        <input type="Date" className='input' />
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-success">Success</button>
                    </div>
                </div>
            </div>
        </>
    )
}
