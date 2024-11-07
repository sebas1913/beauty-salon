import Link from 'next/link';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Title from '@/ui/atoms/Title';

interface NavbarProps {
    children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} href={'/'}>
                <Image src='/Beauty Logo.png' width={59} height={59} alt='Logo Beauty' />
                <Title className={styles.title} level={1}>Beauty</Title>
            </Link>
            <nav className={styles.navContainer}>
                {children}
            </nav>
        </div>
    );
};

export default Navbar;
