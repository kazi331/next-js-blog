import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Nav from './Nav';
const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className="mb-4">
                        <h2 className='text-5xl font-bold text-center'><span className='text-sky-500'>WebDev</span> News</h2>
                        <p className='text-lg font-medium text-center'>Keep updated with daily dev news</p>
                    </div>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;