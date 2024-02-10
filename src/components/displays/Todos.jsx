import React from 'react';
import Complete from '../icons/Complete';
import NotComplete from '../icons/NotComplete';

const Todos = ({ data }) => {
    return (
        <div>
            {data.map((item) => (<div className='post' key={Math.random()}>
                {item.completed ?
                    <div className='todo'><p className='post__title'>{item.id}. {item.title}</p><span>Complete <Complete /></span></div> :
                    <div className='todo'><p className='post__title'>{item.id}. {item.title}</p><span>Not complete <NotComplete /></span></div>
                }
            </div>))}
        </div>
    );
};

export default Todos;