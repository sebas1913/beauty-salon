import { ReactNode } from 'react';
import styles from './layout.module.scss';
import Navbar from '@/ui/organisms/navbar/Navbar';
import Footer from '@/ui/organisms/footer/Footer';
import Link from 'next/link';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layoutContainer}>
                <Navbar>
                    <Link className={styles.link} href={'/login'}>Iniciar sesión</Link>
                </Navbar>
                <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
