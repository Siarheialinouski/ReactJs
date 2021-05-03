import './Styles.css';
import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import { InputField } from "./InputField"
import { Button } from './Button';
import { login } from "../app_backend_api/authController";

export const LoginPage = () => {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e)
    };

    const handlePasswordChange = (e) => {
        setPassword(e)
    };


    const submitHandler = () => {
        const newUser = {
            email,
            password
        };
        login(newUser)
            .then((resp) => {
                const authHeader = resp.data.result.split(' ');
                localStorage.setItem(authHeader[0], authHeader[1]);
                history.push("/courses");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div >
                Login
                <div>
                    Email:
                <InputField
                        type="text"
                        onChange={handleEmailChange}
                        value={email}
                        placeholder="Enter email..."
                    />
                </div>
                <div>
                    Password:
                <InputField
                        type="text"
                        onChange={handlePasswordChange}
                        value={password}
                        placeholder="Enter password..."
                    />
                </div>
                <Button className='inputSearch' handleClick={submitHandler} name={"Submit"} />
                <h6>  If you not have an account you can  <Link to='/register'>Registration</Link></h6>
            </div>
        </>
    );
}