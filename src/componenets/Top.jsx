import React, { useEffect, useState } from 'react';
import Cards from './Cards.jsx';
import { getTrendingAlgo } from '../appwrite.js';
import { data } from '../data.js';

const Top = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trend = await getTrendingAlgo();
        console.log(trend);

        // Match IDs from trend with full details in data.js
        const matchedData = trend.map((trendItem) =>
          data.find((item) => item.id === trendItem.id)
        ).filter(Boolean); // Remove undefined values

        setCardData(matchedData);
      } catch (error) {
        console.error("Error fetching trending algorithms:", error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className='w-screen h-dvh relative overflow-x-hidden mt-7' id='top'>
      <div className="w-screen h-dvh overflow-hidden rounded-lg relative">
        <img 
          src='img/top.jpg'
          alt='background'
          className="w-full h-full object-cover"
        />
        <div className='absolute top-7 left-4 text-white z-50 p-2 rounded-md'>
          <h1 className='text-4xl md:text-6xl special-font uppercase font-zentry'>
            Top Se<b>a</b>rched Algorithm
          </h1>
        </div>

        {/* Card Container */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 grid md:grid-cols-3 gap-6 w-3/4 ">
          {cardData.length > 0 ? (
            cardData.map((item, index) => (
              <Cards 
                key={index} 
                id={item.id}
                title={item.title}
                short_content={item.short_content}
              />
            ))
          ) : (
            <p className="text-white">Loading trending algorithms...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Top;
