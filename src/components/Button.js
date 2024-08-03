import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    margin: 10px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    &:hover {
        opacity: 0.8;
    }
`;

const Buttons = () => {
    const handlePrebookClick = () => {
        window.location.href = 'https://www.rhyno.com/prebook';
    };

    const handleRentalsClick = () => {
        window.location.href = 'Rentals.txt';
    };

    return (
        <ButtonContainer>
            <Button 
                onClick={handlePrebookClick}
                bgColor={theme.colors.yellow[1]} 
                color={theme.colors.black[1]}
            >
                Prebook an EV
            </Button>
            <Button 
                onClick={handleRentalsClick}
                bgColor={theme.colors.grey[2]} 
                color={theme.colors.white[1]}
            >
                Rentals
            </Button>
        </ButtonContainer>
    );
};

export default Buttons;
