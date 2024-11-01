import Link from 'next/link';
import styles from './navbar.module.scss';
import Image from 'next/image';

const Navbar: React.FC = () =>{
    return(
        <div className={styles.container}>
            <Link className={styles.link} href={'/'}>
                <Image src='/Beauty Logo.png' width={150} height={58} alt='Logo Beauty'/>
            </Link>
            <nav className={styles.navContainer}>
                <Link className={styles.link} href={'/login'}>Iniciar sesión</Link>
                <Link className={styles.link} href={'/register'}>Regístrate</Link>
            </nav>
        </div>
    )
}

export default Navbar;