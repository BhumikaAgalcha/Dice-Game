import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDise = ({currentDice, roleDice}) => {


    
  return (
    <DiceContainer>
        <div className='dice'
        onClick={roleDice}
        >
          <img src={`/Images/dice/dice_${currentDice}.png`} alt="Dice-img" />
       </div>
       <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDise;

const DiceContainer = styled.div`
   margin-top: 48px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   .dice{
       cursor: pointer;
    }

   p{
      font-size: 24px;

   }
`
