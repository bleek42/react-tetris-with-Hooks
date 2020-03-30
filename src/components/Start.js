import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const Start = ({ callback }) => {
    return (
        <StyledStartButton onClick={callback}>
            Start Game
        </StyledStartButton>
    )
}

export default Start
