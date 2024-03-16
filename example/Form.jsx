import React, { useState } from 'react'


const Form = () => {


    const [username, setusername] = useState("")
    const [newuser, setnewuser] = useState("")

    const getusername = (event) => {
        setusername(event.target.value)
    }
    const newdetials = () => {
        setnewuser(newuser)
    }
    return (

        <section className='form'>
            <h2> Hello, {newuser}</h2>
            <div className='input-div'>

                < input type="text" placeholder='enter the text' onChange={getusername} />
                <br />
                <button className='submit' onClick={newdetials}>Submit</button>
            </div>
        </section>

    )
}

export default Form
