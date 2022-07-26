import Link from 'next/link';
import React from 'react';
import NavStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={NavStyles.nav}>
            <ul>
                <li><Link href="/"><a >Home</a></Link></li>
                <li><Link href="/about"><a >About</a></Link></li>
                <li><Link href="/services"><a >Services</a></Link></li>
                <li><Link href="/works"><a >Works</a></Link></li>
                <li><Link href="/contact"><a >Contact</a></Link></li>
            </ul>
        </nav>
    );
};

export default Nav;