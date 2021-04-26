import './Styles.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div >
                Login page
                <div>
                  <h6 >Email: </h6>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                   <h6 >Password:</h6>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={() => { }}> Submit </button>
                <h6>  If you not have an account you can  <Link to='/register'>Registration</Link></h6>
            </div>
        </>
    );
}