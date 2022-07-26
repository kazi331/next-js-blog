import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center py-20 w-full bg-gray-900'>
            <p className='text-center'>Follow me on </p>
            <ul className='flex flex-wrap justify-center my-4'>
                <li><a className='px-4 py-2 inline-block text-sky-700 hover:text-sky-500' href="#">facebook</a></li>
                <li><a className='px-4 py-2 inline-block text-sky-700 hover:text-sky-500' href="#">linkedin</a></li>
                <li><a className='px-4 py-2 inline-block text-sky-700 hover:text-sky-500' href="#">twitter</a></li>
                <li><a className='px-4 py-2 inline-block text-sky-700 hover:text-sky-500' href="#">youtube</a></li>
            </ul>
        </div>
    );
};

export default Footer;