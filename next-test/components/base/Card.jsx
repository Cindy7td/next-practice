import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const StyledDiv = styled.div`
    color: black; 
    font-size: 14px;
    padding: 10px;
    margin: 40px;
    width: 25rem;
    height: 25rem;
    display: inline-block;
    border: solid black 1px;
`;

const StyledText = styled.text`
    border: solid yellow 3px;
    background-color: yellow;
`;

const StyledButton = styled.button`
    color: blue;
`;


const MyCard = (props) => {
    const { id, title, date, asignee, status } = props;
    
    return (
        <>
            <StyledDiv> 
                <h2>{title}</h2> 
                <StyledText>{status}</StyledText>
                <p>Due date: {date} </p>
                <p>Asignee: {asignee} </p>
                <StyledButton>
                    <Link href="/details">
                        Ver mas 
                    </Link>
                </StyledButton>
                <p>{id}</p>
            </StyledDiv>
        </>
    )
}

export default MyCard;
