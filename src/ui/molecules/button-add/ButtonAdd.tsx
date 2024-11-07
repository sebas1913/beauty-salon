import { Icons } from '@/ui/atoms/Icons';
import styles from './button.module.scss';
import Button from '@/ui/atoms/button/Button';

interface ButtonAddProps {
    text?: string;
    onClick?: () => void;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ text, onClick }) => {
    return (
        <div className={styles.buttonAdd}>
            <Button onClick={onClick}>
                {Icons.add}
                {text}
            </Button>
        </div>
    );
}
6
export default ButtonAdd;
