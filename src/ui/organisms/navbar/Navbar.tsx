import Link from 'next/link';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Title from '@/ui/atoms/Title';

const Navbar: React.FC = () =>{
    return(
        <div className={styles.container}>
            <Link className={styles.link} href={'/'}>
                <Image src='/Beauty Logo.png' width={59} height={59} alt='Logo Beauty'/>
                <Title className={styles.title} level={1}>Beauty</Title>
            </Link>
            <nav className={styles.navContainer}>
                <Link className={styles.link} href={'/login'}>Iniciar sesión</Link>
            </nav>
        </div>
    )
}

export default Navbar;