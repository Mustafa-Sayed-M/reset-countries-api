import React from 'react';

function CardsFilter({ handleFilterByCountry, handleFilterByRegion }) {
    return (
        <div className='cards-filter sticky top-[60px] z-50 py-3 bg-bg-light-color-2 dark:bg-bg-dark-color-1 transition-colors'>
            <div className='container'>
                <form onSubmit={e => e.preventDefault()} className='flex items-center justify-between max-md:flex-col gap-3'>
                    {/* Filter By Search */}
                    <div className='filter-search relative w-full md:w-[400px]'>
                        <label htmlFor='filter-search' className='block absolute top-1/2 -translate-y-1/2 left-3 opacity-80'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </label>
                        <input
                            type='text'
                            autoComplete='on'
                            id='filter-search'
                            name='filter-search'
                            onChange={handleFilterByCountry}
                            placeholder='Search for a country...'
                            className='focus:outline-none w-full p-3 ps-9 rounded-md dark:bg-bg-dark-color-2 shadow-md transition-colors'
                        />
                    </div>
                    {/* Filter With Region */}
                    <label htmlFor='filter-region' className='block text-sm text-gray-600 sr-only'>Region:</label>
                    <select onChange={handleFilterByRegion} id='filter-region' name='filter-region' className='filter-region focus:outline-none w-full md:w-[250px] p-3 rounded-md dark:bg-bg-dark-color-2 cursor-pointer shadow-md transition-colors'>
                        <option value={''}>Filter by Region</option>
                        <option value={'Africa'}>Africa</option>
                        <option value={'Americas'}>America</option>
                        <option value={'Asia'}>Asia</option>
                        <option value={'Europe'}>Europe</option>
                        <option value={'Oceania'}>Oceania</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default CardsFilter;