import './Styles.css';
import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import { InputField } from "./InputField"
import { Button } from './Button';
import { registration } from "../app_backend_api/authController";

export const RegistrationPage = () => {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const registerUser = () => {
        registration({name, email, password})
            .then((e) => history.push("/login"))
            .catch((errorMessage) => console.log(errorMessage));
    };

    const handleNameChange = (e) => {
        setName(e)
    };

    const handleEmailChange = (e) => {
        setEmail(e)
    };

    const handlePasswordChange = (e) => {
        setPassword(e)
    };

    return (
        <>
            <div >
                Registration page
                <div>
                    <div class="Div-inline">{<h6 >Name</h6>}</div>
                    <InputField
                        type="text"
                        onChange={handleNameChange}
                        value={name}
                        placeholder="Enter name..."
                    />
                </div>
                <div>
                    <div class="Div-inline">{<h6 >Email</h6>}</div>
                    <InputField
                        type="text"
                        onChange={handleEmailChange}
                        value={email}
                        placeholder="Enter email..."
                    />
                </div>
                <div>
                    <div class="Div-inline">{<h6 >Password</h6>}</div>
                    <InputField
                        type="text"
                        onChange={handlePasswordChange}
                        value={password}
                        placeholder="Enter password..."
                    />
                </div>
                <Button className='inputSearch' handleClick={registerUser} name={"Submit"} />

            </div>
        </>
    );
}