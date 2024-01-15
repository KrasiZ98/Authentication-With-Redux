import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../redux/actions/authActions';

export const Navigation = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const naigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        naigate('/');
    }
    return (
        <div className='navigation'>
            <div className='home-link'>
                <Link to='/'>Home</Link>
            </div>
            {user && user.user ?
                <div className='auth_links'>
                    <Link className='logout_link' onClick={handleLogout}>Logout</Link>
                </div>

                :
                <div className='auth_links'>
                    <Link className='login_link' to='/login'>Login</Link>
                    <Link className='register_link' to='/Register'>Register</Link>
                </div>
            }
        </div>
    )
}
