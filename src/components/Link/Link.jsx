import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='px-6 mr-10 hover:bg-yellow-400'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;