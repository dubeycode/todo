import React from 'react'
import styles from './Input.module.css'
import '../App.css'
export const Input = () => {
    return (
        <>
        {/* input for to do list  */}
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <input type="text" className={styles.input} placeholder='Enter ToDo'/>
                    </div>
                    <div className="col">
                        <input type="Date" className={styles.input} />
                    </div>
                    {/* sucess button */}
                    <div className="col">
                        <button type="button" className="btn btn-success">Success</button>
                    </div>
                </div>
            </div>
        </>
    )
}
