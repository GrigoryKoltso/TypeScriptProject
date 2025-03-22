
import React from 'react';
import { ICard } from '../../interfaces/Card.interface';

interface FormProps  {
    addNewCard: (new_card: ICard) => void
}

const AddCardForm = ({addNewCard}: FormProps) => {

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const { rus, eng } = form;

        const newCard = {
            id: Date.now(),
            title_rus: rus.value,
            title_eng: eng.value,
            lang: 'eng'
        }

       addNewCard(newCard)
        
        form.reset();
    }

    return (
        <form onSubmit={submit}>
            <input type="text" placeholder='RUS' name='rus' />
            <input type="text" placeholder='ENG' name='eng' />
            <button>Add new card</button>
        </form>
    );
};

export default AddCardForm;