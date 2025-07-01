import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDise from './RoleDise'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState('') ;
  const [rules, setRules] = useState(false);
  

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber){
       setError("You have not selected any Number");
    return;
    }
    setError('');
    const randomNumber = generateRandomNumber(1,7);

    setCurrentDice((prev) => randomNumber);



  if(selectedNumber === randomNumber){
    setScore((prev) => prev + randomNumber)
  } else {
    setScore((prev) => prev - 2)
  }

  setSelectedNumber(undefined);

}; 

const resetScore = () => {
  setScore(0);
}

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDise currentDice={currentDice} roleDice={roleDice}/>
      <div className="btns">
        <OutlineButton
        onClick={resetScore}
        >Reset</OutlineButton>
        <Button
         onClick={() => setRules((prev) => !prev)}
        >
         {rules ? "Hide" : "Show"}
        Rules</Button>
      </div>
      {rules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
   padding-top: 70px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }
`