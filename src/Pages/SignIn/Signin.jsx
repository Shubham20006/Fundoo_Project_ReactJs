import React from 'react'
import './Signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signin } from '../../Services/Userservices';

// const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const emailRegex =/^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
const Signin = () => {

    const [signinObj, setSigninObj] = React.useState({ email: "", password: "" });
    const [errorObj, setErrorObj] = React.useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
    });

    const takeEmail = (event) => {
     //   console.log(event);
        setSigninObj((prevState) => ({ ...prevState, email: event.target.value }));
    };
    const takePassword = (e) => {
        setSigninObj((abc) => ({ ...abc, password: e.target.value }));
    };
    const submit = async () => {
        let emailTest = emailRegex.test(signinObj.email);
        let passwordTest = passwordRegex.test(signinObj.password);

        if (emailTest === false) {
            setErrorObj((prevState) => ({
                ...prevState,
                emailError: true,
                emailHelper: "enter correct email",
            }));
        } else {
            setErrorObj((prevState) => ({
                ...prevState,
                emailError: false,
                emailHelper: "",
            }));
        }

        if (passwordTest === false) {
            setErrorObj((prevState) => ({
                ...prevState,
                passwordError: true,
                passwordHelper: "enter correct password",
            }));
        } else {
            setErrorObj((prevState) => ({
                ...prevState,
                passwordError: false,
                passwordHelper: "",
            }));
        }
        console.log(signinObj);
        if (emailTest === true && passwordTest === true) {
            let response = await signin(signinObj);
            console.log(response);
            localStorage.setItem("token", response.data.id);
        }
    };
    return (
        <div className='Outer1'>
            <div className='mainbox'>
                <div className='eachbox' id='glogo'><img src="data:image/png;base64,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" alt="" /></div>
                <div className='eachbox' id='sin' >Sign in</div>
                <div className='eachbox' id='useyour'>Use your Google Account</div>
                <div className='eachbox' id='inputemail'>
                    <TextField
                        fullWidth
                        id="fullWidth"
                        label="Email or phone"
                        variant="outlined"
                        required
                        size='large'
                        error={errorObj.emailError}
                        helperText={errorObj.emailHelper}
                        onChange={takeEmail} />
                </div>
                <div className='eachbox' id='FEmail'>Forgot email?</div>
                <div className='eachbox' id='inputpass'>
                    <TextField
                        fullWidth
                        id="fullWidth"
                        label="Password"
                        variant="outlined"
                        required
                        size='large'
                        onChange={takePassword}
                        error={errorObj.passwordError}
                        helperText={errorObj.passwordHelper}
                    /></div>
                <div className='eachbox' id='FPass'>Forgot password?</div>
                <div className='eachbox' id='learn' >
                    <div>Not your computer? Use Guest mode to sign in privately.</div>
                    <div id='L'>Learn more</div>
                </div>
                <div className='eachbox' id='bt'>
                    <a href="Signup.jsx">Create account</a>
                    <Button onClick={submit} variant="contained">Next</Button>
                </div>

            </div>
        </div>

    )
}

export default Signin
