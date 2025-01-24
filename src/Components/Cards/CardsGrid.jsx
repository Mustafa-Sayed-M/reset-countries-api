import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const CardItem = ({ cardData }) => {
    const {
        flag,
        name,
        population,
        region,
        capital,
    } = cardData;

    return (
        <Link to={`/country/${name.toLowerCase()}`} className='card-item block dark:bg-bg-dark-color-2 rounded-md shadow-md transition-colors'>
            {/* Flag */}
            <div className='flag aspect-video'>
                <LazyLoadImage
                    src={flag}
                    alt={name}
                    effect='blur'
                    className='rounded-t-md object-cover aspect-video'
                />
            </div>
            {/* Country Info */}
            <div className='country-info p-3'>
                {/* Name */}
                <h2 className='font-medium text-lg mb-3'>{name}</h2>
                {/* Population */}
                <p>Population: <span>{population}</span></p>
                {/* Region */}
                <p>Region: <span>{region}</span></p>
                {/* Capital */}
                <p>Capital: <span>{capital}</span></p>
            </div>
        </Link>
    )
};

function CardsGrid({ cardsList }) {

    if (cardsList.length === 0) return <p className='text-center py-3'>No results countries found!</p>

    return (
        <div className='cards-grid'>
            <div className='container'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3'>
                    {
                        cardsList.map((cardItem, index) => <CardItem key={index} cardData={cardItem} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default CardsGrid;