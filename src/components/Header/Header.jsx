import React from 'react';
import './Header.css'

const Header = ({ changeState }) => {
    return (

        <nav>
            <ul className='navigation-list'>
                <li onClick={() => changeState('posts')}>Posts</li>
                <li onClick={() => changeState('comments')}>Comments</li>
                <li onClick={() => changeState('photos')}>Photos</li>
                <li onClick={() => changeState('todos')}>Todos</li>
                <li onClick={() => changeState('users')}>Users</li>
            </ul>
        </nav>

    );
};

export default Header;