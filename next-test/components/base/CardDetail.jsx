import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDetail = styled.div`
    width: 100%;
`;

const StyledText = styled.text`
    border: solid yellow 3px;
    background-color: yellow;
`;

const MyCardDetail = (props) => {
    const { id, title, description, date, asignee, asigner, status } = props;
    
    return (
        <>
            <StyledDetail> 
                <h1>{title}</h1> 
                <StyledText>{status}</StyledText>
                <p>Due date: {date} </p>
                <p>{description}</p>
                <p>Asignee: {asignee} </p>
                <p>Asigned by: {asigner} </p>
                <p>{id}</p>
            </StyledDetail>
        </>
    )
}

export default MyCardDetail;