import React from 'react'

import { FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/actions/authActions';

export const Profile = ({ user }) => {
    const { email, username, password, reppass, image, id } = user.user;
   const dispatch = useDispatch();
    return (
        <div className='profile-page'>
            <div className='profile'>

                <div className='profile-image'>
                    <img src={image} alt="Profile Image" />
                </div>

                <div className='profile-info'>
                    <h4>Email: {email}</h4>
                    <h4>Username: {username}</h4>
                </div>

                <div className='profile-action'>
                    <Link to={`/edit_user/${id}`}>
                        <button className='edit-btn'>
                            <FaUserEdit className='profile-icon' />
                            Edit Profile
                        </button>
                    </Link>
                    <Link>
                        <button  onClick={() => dispatch(deleteUser(id))} className='delete-btn'>
                            <AiFillDelete className='profile-icon' />
                            Delete Profile
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
