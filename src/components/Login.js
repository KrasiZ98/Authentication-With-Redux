import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { formValidationError, loginUser } from '../redux/actions/authActions';
import loginValidation from '../validtion-forms/loginValidation';
import { ErrorBox } from './ErrorBox';

export const Login = () => {

    const dispatch = useDispatch();
    const registeredUsers = useSelector((state) => state.user.users)
    const error = useSelector((state) => state.user.error);
    const naviagte = useNavigate();



    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    const [formError, setFormError] = useState({});

    const handleChange = (e) => {
        setFormValue(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const error = loginValidation(formValue);
        setFormError(error);

        if (Object.values(error).length === 0) {
            dispatch(loginUser(formValue, registeredUsers, naviagte));

        } else {
            dispatch(formValidationError(formError));
            
        }
    }

   

    return (
        <>

            {
                error && typeof error === 'string' &&
                <div className='error'>
                    <h2 >{error}</h2>

                </div>
            }

            { error && error.email &&  <ErrorBox error={error.email}/> }
            { error && error.password &&  <ErrorBox error={error.password}/> }

            <div className='form-component'>
                <div className='form-whrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className='form-group'>
                            <input type="text" placeholder="email" name="email"
                                onChange={handleChange} value={formValue.email}
                            />

                        </div>

                        <div className='form-group'>
                            <input type="password" placeholder="password" name="password"
                                onChange={handleChange} value={formValue.password}
                            />

                        </div>

                        <button type='submit' className='form-btn'>Login</button>
                        <div className='link'>

                            <span>If You Don't Have Account <Link to="/register">Register</Link></span>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}
