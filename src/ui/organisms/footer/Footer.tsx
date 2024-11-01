import styles from './footer.module.scss';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                © {new Date().getFullYear()} Beauty. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;
