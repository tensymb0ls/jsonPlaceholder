import React from 'react';

const Comments = ({ data }) => {
    return (
        <div>
            {data.map((item) => <div className='post' key={Math.random()}>
                <p className='email'>From: {item.email}</p>
                <p className='post__title'> {item.name}</p>
                <p>{item.body}</p>
            </div>)}
        </div>
    );
};

export default Comments;