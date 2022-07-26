import React from 'react';
import Head from 'next/head'
import AboutStyles from '../styles/About.module.css'

const about = () => {
    return (
        <div>
            <Head>
                <title>About Us</title>
            </Head>
            <h2 className={AboutStyles.title}>This is about page</h2>
            <div className={AboutStyles.article}>
                <h2>Article Title</h2>
                <p>Article body text goes here..</p>
            </div>
            <div className={AboutStyles.article}>
                <h2>Article Title</h2>
                <p>Article body text goes here..</p>
            </div>
        </div>
    );
};

export default about;