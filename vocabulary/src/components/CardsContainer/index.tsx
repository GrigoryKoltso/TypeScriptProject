import React from 'react';
import Card from '../Card';
import { ICard } from '../../interfaces/Card.interface';
import s from './index.module.css'
interface CardsProps {
    cards: ICard[],
    deleteCard: (cardId: number) => void,
    changeLang: (cardId: number) => void
}

const CardsContainer = ({cards, deleteCard, changeLang}:CardsProps) => {
    return (
        <div className={s.container}>
            {
                cards.map(el => <Card key={el.id} {...el} deleteCard={deleteCard} changeLang={changeLang}/>)
            }
        </div>
    );
};

export default CardsContainer;