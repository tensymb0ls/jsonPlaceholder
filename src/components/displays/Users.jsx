import React from 'react';

const Users = ({ data }) => {
    return (
        <div className='photo'>
            {data.map((item) => <div className='post users' key={Math.random()}>
                <p className='post__title'>{item.id}. {item.name} <i>({item.username})</i></p>
                <p className='email'>e-mail: {item.email}</p>
                <p className='email'>phone: {item.phone}</p>
                <p className='email'>website: {item.website}</p>
                <p className='email'>company: {item.company.name}</p><br />
            </div>)}
        </div>
    );
};

export default Users;