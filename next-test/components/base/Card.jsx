import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'

const StyledButton = styled.button`
    background-color: light-gray;
    color: black; 
    font-size: 14px;
    padding: 10px;
    margin: 40px;
    width: 30rem;
    height: 30rem;
    display: inline-block;
`;

const StyledText = styled.text`
    background-color: yellow;
    font-size: 18px;
`;


export default function MyCard(props) {
    const { title, description, date, status, asignee, onClick } = props;
    
    return (
        <>
            <StyledButton onClick = { onClick }> 
                <h2>{title}</h2> <StyledText>{status}</StyledText> <div>{description}</div> 
                <div>{date}</div>  <div>{asignee}</div> 
            </StyledButton>
        </>
    )
}

