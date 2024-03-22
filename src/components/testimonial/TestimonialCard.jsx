import styled from '@emotion/styled';
import { Rating } from '@mui/material';
import React from 'react'

export default function TestimonialCard({ content }) {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#FFC700',
        },
    });

    return (
        <div className='testimonial-card'>
            <div >
                <StyledRating name="read-only" value={5} readOnly />
                <div className="testimonial-card-heading">{content?.id} Beltrano da silva</div>
                <div className="testimonial-card-subHeading">São Paulo → Porto alegre</div>
                <q className="testimonial-card-description">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</q>
            </div>
        </div>
    )
}