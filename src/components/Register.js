import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { formValidationError, registerUser } from '../redux/actions/authActions';
import registerValidation from '../validtion-forms/registerValidation';
import { ErrorBox } from './ErrorBox';

export const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registeredUsers = useSelector((state) => state.user.users)
    const error = useSelector((state) => state.user.error);

    const [formValue, setFormValue] = useState({
        email: '',
        username: '',
        password: '',
        reppass: '',
        image: '',
        id: uuidv4()
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
        const error = registerValidation(formValue);
        setFormError(error);

        if (Object.values(error).length === 0) {
            dispatch(registerUser(formValue, registeredUsers, navigate));
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

            {error && error.email && <ErrorBox error={error.email} />}
            {error && error.username && <ErrorBox error={error.username} />}
            {error && error.password && <ErrorBox error={error.password} />}
            {error && error.repass && <ErrorBox error={error.repass} />}
            {error && error.image && <ErrorBox error={error.image} />}


            <div className='form-component'>
                <div className='form-whrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Register</h1>

                        <div className='form-group'>
                            <input type="text" placeholder="email" name="email"
                                onChange={handleChange} value={formValue.email}
                            />

                        </div>

                        <div className='form-group'>
                            <input type="text" placeholder="username" name="username"
                                onChange={handleChange} value={formValue.username}
                            />

                        </div>

                        <div className='form-group'>
                            <input type="password" placeholder="password" name="password"
                                onChange={handleChange} value={formValue.password}

                            />

                        </div>

                        <div className='form-group'>
                            <input type="password" placeholder="confirm password" name="reppass"
                                onChange={handleChange} value={formValue.reppass}

                            />

                        </div>

                        <div className='form-group'>
                            <input type="text" placeholder="image" name="image"
                                onChange={handleChange} value={formValue.image}

                            />

                        </div>

                        <button type='submit' className='form-btn'>Register</button>
                        <div className='link'>

                            <span>If You Have Account <Link to="/login">Login</Link></span>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}
