import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
    <>
      <Container>
        <div> <img src="/Images/dice.png" alt="img" /> </div>
         <div className='content'>
            <h1>
                Dice Game
            </h1>
           <Button
              onClick={toggle}
           >play now</Button>
         </div>
      </Container>
    </>
  )
}

export default StartGame

const Container = styled.div`
   max-width: 1180px;
   display: flex;
   height: 100vh;
   margin: 0 auto;
   align-items: center;

.content{
    h1 {
        font-size: 96px;
        white-space: nowrap;
    }
}
`
