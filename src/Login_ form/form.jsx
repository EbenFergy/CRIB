import React from 'react';
import './form.css'

const Form = () =>{

    return(
        <div className="form-cont">
            <div className="left">
                <h1>Welcome to the Crib!</h1>
                <h4>Sign in to see all we have to offer.</h4>
                <button id="skipBtn">Skip</button>
            </div>
            <form action="" id="form" className="right">
                <input type="text" placeholder="Nickname" className="txtArea" required/>
                <button type="submit" className="submit" name='Login'>Login</button>
            </form>
            
        </div>
        
    )
}

export default Form