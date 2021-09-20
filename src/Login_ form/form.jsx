import React, {useState} from 'react';
import './form.css'

const Form = () =>{
    const [loginBtn, setLoginBtn] = useState(false);
    const [nickName, setNickName] = useState("");
    

    const loginChange =()=> setLoginBtn(!loginBtn)

    return(
        <div className="form-cont">
            <div className="left">
                <h1>CriB!</h1>
                <h4>Sign in to see all we have to offer.</h4>
            </div>
            
            {
                loginBtn ? (<div className="right">
                    <div id="welcome">
                        <h1>Hi <span>{nickName}</span> , </h1> 
                        <h3>welcome to the Crib!</h3> 
                    </div>
                    <button type="submit" className="submit" name='Login' onClick={loginChange}>{loginBtn ? 'Logout':'Login'}</button> 
                </div> ):

                (<div className="right">
                    <form action="" id="form" className='form'>
                        <input type="text" placeholder="Nickname" className="txtArea" onChange={(e)=>setNickName(e.target.value)} required/>
                        <button type="submit" className="submit" name='Login' onClick={loginChange}>{loginBtn ? 'Logout':'Login'}</button>
                    </form>
                </div>)
                
            }
            
            
            
        </div>
        
    )
}

export default Form