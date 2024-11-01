import Paragraph from '@/ui/atoms/Paragraph';
import styles from './banner.module.scss';
import Image from 'next/image';

const Banner: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerDescription}>
                <div>
                    <Paragraph>
                        En Beauty, nos apasiona realzar tu belleza. Ofrecemos una variedad de servicios, desde cortes de cabello y peinados hasta manicuras y cuidados personales. Nuestro equipo de profesionales está aquí para brindarte una experiencia única y personalizada. No esperes más, ¡reserva tu cita y déjanos cuidar de ti!.
                    </Paragraph>
                </div>
                <div>
                    <img width={400} src="/B logo.png" alt="" />
                </div>
            </div>


            <div className={styles.containerBanner}>
                <div className={styles.banner}>
                    <Image className={styles.img} src="/Barberia.webp" alt="Barbería" width={235} height={235} />
                </div>

                <div className={styles.banner}>
                    <Image className={styles.img} src="/manicurista.jpg" alt="Manicurista" width={235} height={235} />
                </div>

                <div className={styles.banner}>
                    <Image className={styles.img} src="/peluquera.jpg" alt="Peluquería" width={235} height={235} />
                </div>
            </div>
        </div>

    );
}

export default Banner;
