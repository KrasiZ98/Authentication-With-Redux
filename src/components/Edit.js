import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../redux/actions/authActions';

export const Edit = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registeredUsers = useSelector((state) => state.user.users);
    const error = useSelector((state) => state.user.error);

    const findUser = registeredUsers.find((user) => user.id === id);

    const [formValue, setFormValue] = useState({
        email: findUser.email,
        username: findUser.username,
        password: findUser.password,
        reppass: findUser.reppass,
        image: findUser.image,
        id: findUser.id
    });

    const handleChange = (e) => {
        setFormValue(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.values(formValue).every(value => value !== '')) {
          dispatch(updateUser(id, formValue, navigate))
        } else {
            alert('Please write the empty fields.');
        }
    }

    return (
        <>


            {
                error &&
                <div className='error'>
                    <h2 >{error}</h2>

                </div>
            }


            <div className='form-component'>
                <div className='form-whrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Edit user</h1>

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

                        <button type='submit' className='form-btn'>Edit</button>
                        <div className='link'>

                            
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}
