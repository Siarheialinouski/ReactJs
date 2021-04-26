import './Styles.css';
import React, { useState } from "react";

export const RegistrationPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    return (
        <>
            <div >
                Registration page
                <div>
                    <div class="Div-inline">{<h6 >Name</h6>}</div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <div class="Div-inline">{<h6 >Email</h6>}</div>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <div class="Div-inline">{<h6 >Password</h6>}</div>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={() => { }}> Submit </button>

            </div>
        </>
    );
}