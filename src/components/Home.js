import React from 'react'
import { useSelector } from 'react-redux'
import { Profile } from './Profile';
import { Link } from 'react-router-dom';

export const Home = () => {
    const user = useSelector((state) => state.user);
    const users = useSelector((state) => state.user.users);



    return (
        <div className='home'>
            <h1>Authentication With Redux</h1>
            {
                user && user.user ?
                    <Profile user={user} /> :
                    <>
                        <h1>We Have {users.length} Authenticated Users.</h1>
                        <h1>You Don't Have Authentication</h1>
                        <h2>Please <Link to='/login'>Login</Link></h2>
                    </>
            }
        </div>


    )
}
