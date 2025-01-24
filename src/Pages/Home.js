import React, { useState, useTransition } from 'react';
import cardsData from '../Data/data.json';
import CardsFilter from '../Components/Cards/CardsFilter';
import CardsGrid from '../Components/Cards/CardsGrid';
import CardsGridSkeleton from '../Components/Skeletons/CardsGridSkeleton';

function Home() {

    const [isPending, startTransition] = useTransition();

    const [cardsDataFiltered, setCardsDataFiltered] = useState(cardsData);
    const [filterByCountry, setFilterByCountry] = useState(null);
    const [filterByRegion, setFilterByRegion] = useState(null);

    // Filtered Cards Data:
    React.useEffect(() => {
        startTransition(() => {
            if (filterByCountry && filterByRegion) {
                const filteredData = cardsData.filter((card) => card.name.includes(filterByCountry));
                setCardsDataFiltered(filteredData.filter((card) => card.region === filterByRegion));
            } else if (filterByCountry) {
                const filteredData = cardsData.filter((card) => card.name.includes(filterByCountry));
                setCardsDataFiltered(filteredData);
            } else if (filterByRegion) {
                const filteredData = cardsData.filter((card) => card.region === filterByRegion);
                setCardsDataFiltered(filteredData);
            } else {
                setCardsDataFiltered(cardsData);
            }
        })
    }, [filterByCountry, filterByRegion]);

    // Handle Filter By Country
    const handleFilterByCountry = (e) => {
        const value = e.target.value;;
        if (value) {
            setFilterByCountry(value);
        } else {
            setFilterByCountry(null);
        }
    };
    // Handle Filter By Region
    const handleFilterByRegion = (e) => {
        const value = e.target.value;;
        if (value) {
            setFilterByRegion(value);
        } else {
            setFilterByRegion(null);
        }
    };

    return (
        <div className='home-page'>
            {/* Cards Filter */}
            <CardsFilter handleFilterByCountry={handleFilterByCountry} handleFilterByRegion={handleFilterByRegion} />
            {/* Cards Grid */}
            {
                isPending ? (<CardsGridSkeleton />) : (<CardsGrid cardsList={cardsDataFiltered} />)
            }
        </div>
    )
}

export default Home;