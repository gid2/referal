import React from 'react';
// @ts-ignore
import styles from './Card.module.scss';

interface CardProps {
    title: string;
    icon: string;
    number: number;
    numberBackground: string;
    numberBorderImageSource: string;
    backgroundColor?: string;
    textColor?: string;
    opacity?: number;
    borderRadius?: string;
    border?: string;
    borderImageSource?: string;
}

const Card: React.FC<CardProps> = ({
                                       title,
                                       icon,
                                       number,
                                       numberBackground,
                                       numberBorderImageSource,
                                       backgroundColor,
                                       textColor,
                                       opacity,
                                       borderRadius,
                                       borderImageSource,
                                   }) => {
    const cardStyle = {
        background: backgroundColor || 'linear-gradient(180deg, #6377E1 0%, #2920A5 100%)',
        color: textColor || '#000',
        opacity: opacity !== undefined ? opacity : 1,
        borderRadius: borderRadius || '20px 0 0 0',
        borderImageSource: borderImageSource || 'linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, #475FDF 100%)',
    };

    const numberStyle = {
        background: numberBackground || 'linear-gradient(180deg, #2920A5 0%, #6377E1 100%)',
        borderImageSource: numberBorderImageSource || 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.32) 100%)',
    };

    return (
        <div className={styles.card} style={cardStyle}>
            <div className={styles.cardContent}>
                <div className={styles.cardTitleNumberContainer}>
                    <div className={styles.cardNumber} style={numberStyle}>{number}</div>
                    <div style={{
                        width: "100%",
                        display: 'flex'
                    }} className={styles.cardTitle}>{title}</div>
                </div>
                <img src={icon} alt="Icon" className={styles.cardIcon} />
            </div>
        </div>
    );
};

export default Card;
