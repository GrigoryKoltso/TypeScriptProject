
import { useState } from 'react'
import './App.css'
import { cardsData } from './data/cardsData'
import CardsContainer from './components/CardsContainer'
import ActionButtonsContainer from './components/ActionButtonsContainer'
import AddCardForm from './components/AddCardForm'
import { ICard } from './interfaces/Card.interface'
function App() {

  const [cards, setCards] = useState(cardsData)

  const deleteCard = (cardId: number) => setCards(cards.filter(el => el.id !== cardId))

  const changeLang = (cardId: number) => {
    setCards(cards.map(el => 
      el.id === cardId ? { ...el, lang: el.lang === 'eng' ? 'rus' : 'eng' } : el
    ));
  };
  

  const changeToRus = () => setCards(cards.map(el => ({ ...el, lang: 'rus' })));

  const changeToEng = () => setCards(cards.map(el => ({ ...el, lang: 'eng' })));

  const deleteAllCards = () => setCards([])

  const addNewCard = (new_card:ICard) => {
     setCards([...cards, new_card])
  }

  return (
    <>
      <h1>Helloooo</h1>
      <AddCardForm addNewCard={addNewCard}/>
      <CardsContainer cards={cards} deleteCard={deleteCard} changeLang={changeLang} />
      <ActionButtonsContainer changeToRus={changeToRus} changeToEng={changeToEng} deleteAllCards={deleteAllCards}/>
    </>
  )
}

export default App
