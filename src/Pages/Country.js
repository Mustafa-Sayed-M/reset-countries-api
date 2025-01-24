import React, { useState, useTransition } from 'react';
import { Link, useParams } from 'react-router-dom';
import cardsData from '../Data/data.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Country() {

    // eslint-disable-next-line no-unused-vars
    const [_, startTransition] = useTransition();

    const { countryName } = useParams();
    const [countryData, setCountryData] = useState({});

    React.useEffect(() => {
        startTransition(() => {
            const foundCountry = cardsData.find(country => country.name.toLowerCase() === countryName.toLowerCase());
            setCountryData(foundCountry);
        })
    }, [countryName]);

    return (
        <div className='country-page'>
            <div className='container md:h-[750px] flex justify-center flex-col gap-7 py-7'>
                {/* Back Link */}
                <Link
                    to={'/'}
                    className='bg-bg-light-color-2 dark:bg-bg-dark-color-2 w-fit block py-2 px-4 rounded-md shadow-md transition-colors'>
                    <i className="fa-solid fa-arrow-left me-2"></i>
                    <span>Back</span>
                </Link>
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-2 gap-10 items-center w-full'>
                    {/* Flag */}
                    <div className='flag'>
                        <LazyLoadImage
                            src={countryData.flag}
                            alt={countryData.name}
                            effect='blur'
                        />
                    </div>
                    {/* Info */}
                    <div className='info space-y-7'>
                        {/* Name */}
                        <h1 className='font-bold text-2xl'>{countryData.name}</h1>
                        {/* Lists Container */}
                        <div className='lists-container flex max-md:flex-col md:items-center justify-between gap-7'>
                            {/* List 1 */}
                            <ul className='space-y-2'>
                                {/* Native Name */}
                                <li>
                                    <span>Native Name: </span>
                                    <span>{countryData.nativeName}</span>
                                </li>
                                {/* Population */}
                                <li>
                                    <span>Population: </span>
                                    <span>{countryData.population}</span>
                                </li>
                                {/* Region */}
                                <li>
                                    <span>Region: </span>
                                    <span>{countryData.region}</span>
                                </li>
                                {/* Sub Region */}
                                <li>
                                    <span>Sub Region: </span>
                                    <span>{countryData.subregion}</span>
                                </li>
                                {/* Capital */}
                                <li>
                                    <span>Capital: </span>
                                    <span>{countryData.capital}</span>
                                </li>
                            </ul>
                            {/* List 2 */}
                            <ul className='space-y-2'>
                                {/* Top Level Domain */}
                                <li>
                                    <span>Top Level Domain: </span>
                                    <span>{(countryData.topLevelDomain || [])[0]}</span>
                                </li>
                                {/* Currencies */}
                                <li>
                                    <span>Currencies: </span>
                                    <span>{(countryData.currencies || [])[0]?.name}</span>
                                </li>
                                {/* Languages */}
                                <li className='flex max-sm:flex-col md:items-center gap-1'>
                                    <span>Languages: </span>
                                    <ul className='flex flex-wrap items-center gap-1'>
                                        {
                                            (countryData.languages || []).map((language, index) => <li key={index}>{language.name}</li>)
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* Border Countries */}
                        <div className='flex max-sm:flex-col md:items-center gap-2'>
                            <p>Border Countries: </p>
                            <ul className='flex flex-wrap items-center gap-2 flex-1'>
                                {
                                    (countryData.borders || []).map((border, index) => <li key={index} className='bg-bg-light-color-1 dark:bg-bg-dark-color-2 rounded-md py-2 px-4 shadow-md transition-colors'>{border}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country;