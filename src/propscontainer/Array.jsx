import React from 'react'
import { userdata } from './Data'



function Array() {
    return (
        <div>
            {userdata.map((item) => {
                return (
                    <div className='user'>
                        <h1> {item.username}</h1>
                        <h1> {item.email}</h1>


                    </div>

                )
            })}
        </div>
    )
}

export default Array
