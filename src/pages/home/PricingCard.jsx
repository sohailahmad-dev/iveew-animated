import React from 'react'
import Btn from '../../components/btn/Btn'
import CheckIcon from '@mui/icons-material/Check';


export default function PricingCard({ heading, btnLabel, features, note }) {
    return (
        <div className='pricingCard-home' data-aos="flip-left">
            <div className="pricingCard-heading" style={{ whiteSpace: 'pre-line' }} >{heading}</div>
            <Btn style={{ width: '100%', padding: '12px 12px', maxWidth: '100%', margin: '25px auto' }} label={btnLabel} />
            {note ?? <div className="pricingCard-note">{note}</div>}
            <div className="priceCard-features">
                {features && features.length > 0 &&
                    features.map(item => (
                        <div key={item}><CheckIcon fontSize='small' /> {item}  </div>
                    ))
                }
            </div>
        </div>
    )
}
