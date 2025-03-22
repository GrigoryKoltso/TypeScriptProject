
import React from 'react';

import s from'./index.module.css'
import ActionButton from '../ActionButton';

interface ContainerProps {
    changeToRus: () => void,
    changeToEng: () => void,
    deleteAllCards: () => void
}


const ActionButtonsContainer = ({changeToRus, changeToEng, deleteAllCards}: ContainerProps) => {
    return (
        <div className={s.container}>
            <ActionButton action={changeToRus}>RUS</ActionButton>
            <ActionButton action={changeToEng}>ENG</ActionButton>
            <ActionButton action={deleteAllCards}>DELETE</ActionButton>
        </div>
    );
};

export default ActionButtonsContainer;