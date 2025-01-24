import React from 'react';

const CardItemSkeleton = () => {
    return (
        <div className='card-item-skeleton animate-pulse bg-bg-light-color-1 dark:bg-bg-dark-color-2 rounded-md shadow-md'>
            {/* Flag */}
            <div className='flag rounded-md h-36 bg-gray-400 dark:bg-gray-600 animate-pulse'></div>
            {/* Info */}
            <div className='info p-3 space-y-2'>
                {/* Name */}
                <p className='rounded-md h-4 bg-gray-400 dark:bg-gray-600 animate-pulse'></p>
                {/* Population */}
                <p className='rounded-md h-4 w-3/4 bg-gray-400 dark:bg-gray-600 animate-pulse'></p>
                {/* Region */}
                <p className='rounded-md h-4 w-1/2 bg-gray-400 dark:bg-gray-600 animate-pulse'></p>
                {/* Capital */}
                <p className='rounded-md h-4 w-1/4 bg-gray-400 dark:bg-gray-600 animate-pulse'></p>
            </div>
        </div>
    )
};

function CardsGridSkeleton() {
    return (
        <div className='cards-grid-skeleton'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3'>
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    {/* ########## */}
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    {/* ########### */}
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                    <CardItemSkeleton />
                </div>
            </div>
        </div>
    )
}

export default CardsGridSkeleton;