import React from 'react';
import Link from "next/link";  
const Navigation = () => {
    return (
        <div className='my-4 flex justify-center bg-gray-800'>
            <div className='flex gap-x-2'>
                <Link href="/"><a className='px-4 py-2 hover:text-red-300 text-sky-500'>Home</a></Link>
                <Link href="/about"><a className='px-4 py-2 hover:text-red-300 text-sky-500'>About</a></Link>
                <Link href="/works"><a className='px-4 py-2 hover:text-red-300 text-sky-500'>Works</a></Link>
            </div>
        </div>
    );
};

export default Navigation;