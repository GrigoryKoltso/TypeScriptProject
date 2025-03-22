
import React from 'react';
import { ICard } from '../../interfaces/Card.interface';
import s from './index.module.css'
interface CardProps extends ICard {
    deleteCard: (cardId: number) => void,
    changeLang: (cardId: number) => void
}

const Card = ({ id, title_eng, title_rus, lang, deleteCard, changeLang }: CardProps) => {

    const title = lang === 'eng' ? title_eng : title_rus;

    const cardStyles = {
        backgroundColor: lang === 'eng' ? 'darkBlue' : 'green',
        color: lang === 'rus' ? 'darkblue' : 'white'
    }

    const removeCard = (e: React.MouseEvent) => {
        e.stopPropagation();
        deleteCard(id)
    }

    return (
        <div 
            onClick={() => changeLang(id)}
            style={cardStyles}
            className={s.card} key={id}>
            <span onClick={removeCard}>X</span>
            <p>{title}</p>
        </div>
    );
};

export default Card;