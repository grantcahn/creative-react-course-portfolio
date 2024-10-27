import React from 'react';
import styled from 'styled-components';

const StarsRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.min(Math.max(rating, 0), totalStars);

    return (
        <StarsContainer>
            {[...Array(totalStars)].map((_, index) => (
                <Star key={index} filled={index < filledStars}>
                    ★
                </Star>
            ))}
        </StarsContainer>
    );
};

const StarsContainer = styled.div`
    display: flex;
`;

const Star = styled.span`
    color: ${props => (props.filled ? 'gold' : 'lightgray')};
    font-size: 24px;
    margin-right: 4px;
`;

export default StarsRating;