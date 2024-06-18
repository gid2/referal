import React, {useState} from 'react';
// @ts-ignore
import styles from './Button.module.scss';
// @ts-ignore
import Icon from '../../icons/Icon.svg';


interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsClicked(false);
    };

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '15px'
        }}>
        <button
            className={`${styles.button} ${isClicked ? styles.clicked : isHovered ? styles.hovered : ''}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={Icon} className={styles.icon} alt="Icon" />
            <span>{text}</span>
        </button>
        </div>

    );
};

export default Button;
