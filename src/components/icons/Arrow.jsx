import React from 'react';

const Arrow = ({ onClick, style }) => {
    return (
        <div onClick={onClick}>
            <div style={style}>
                <svg width="36" height="18" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 3.60001L18 14.4L31.5 3.60001" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default Arrow;
