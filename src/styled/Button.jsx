import styled from "styled-components"

export const Button = styled.button`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    padding: 10px 18px;
    color: white;
    // gap: 10px;
    width: 220px;
    // height: 44px;
    background: #000000;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 16px;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &: hover{
       background-color: white;
       border: 1px solid black;
       color: black;
       transition: 0.3s background ease-in;
    }
`
export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
    &: hover{
       background-color: black;
       border: 1px solid tasnsparent;
       color: white;
    }
`