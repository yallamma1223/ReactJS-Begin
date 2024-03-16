import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {


    const [username, setusername] = useState("")
    const [newuser, setnewuser] = useState("")
    const notify = () => toast("Wow so easy!");
    const getusername = (event) => {
        setusername(event.target.value)
    }
    const newdetials = () => {
        setnewuser(newuser)
        notify()
    }
    return (

        <section className='form'>
            <h2> Hello, {newuser}</h2>
            <ToastContainer />

            <div className='input-div'>

                < input type="text" placeholder='enter the text' onChange={getusername} />
                <br />

                <button className='submit' onClick={newdetials}>Submit</button>

            </div>
        </section>

    )
}

export default Form
