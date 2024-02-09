import React from 'react';

const Posts = ({ data }) => {
    return (
        <div>
            {data.map((item) => <div className='post' key={Math.random()}>
                <p className='post__title'>{item.id}. {item.title}</p>
                <p>{item.body}</p>
            </div>)}
        </div>
    );
};

export default Posts;