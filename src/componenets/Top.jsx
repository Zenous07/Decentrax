import React, { useEffect, useState } from 'react';
import Cards from './Cards.jsx';
import { getTrendingAlgo } from '../appwrite.js';
import { data } from '../data.js';

const Top = () => {
  const [cardData, setCardData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trend = await getTrendingAlgo();
        console.log(trend);
        setIsLoading(false);

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
    <section className='w-screen h-dvh relative overflow-hidden mt-7 bg-gray-500' id='top'>
        <img 
          src='img/top.jpg'
          alt='background'
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h1 className='absolute m-10 sm:m-5 sm:ml-10 text-white z-50 text-4xl md:text-6xl special-font uppercase font-zentry'>
              Top Se<b>a</b>rched Algorithm
        </h1>
        <div className="absolute sm:mt-[10dvh] md:mt-[20dvh] lg:mt-[25dvh]">
          {/* Card Container */}
          <div className="grid md:grid-cols-2 lg:flex lg:flex-row sm:gap-4 gap-6 mx-8 overflow-x-auto scrollbar-hide relative mb-10">
            {cardData.length > 0 ? (
              <>
                {cardData.map((item, index) => (
                <Cards 
                  key={index} 
                  id={item.id}
                  title={item.title}
                  content={item.content}
                />
              ))}
              
              <Cards 
                title="CheckOut More"
                content="Explore more algorithms with detailed insights and real-world applications."
                className="hidden md:block"
                cardColour="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#44403c] via-[#78716c] to-[#d6d3d1] opacity-50"
                titleColour="text-slate-400/70"
                contentColour="text-slate-300/70"
              />
              </>
            
            ) : (
              <p className="text-white absolute top-[50dvh]">Loading trending algorithms...</p>
            )}
          </div>
        
        
        </div>

        {!isLoading && (
          <div className="absolute mt-[15dvh] hidden lg:flex gap-4 bg-black/70 px-4 py-2 rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg border border-fuchsia-500">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`rounded-full size-2.5 bg-fuchsia-400`}
                
              />
    ))}
  </div>
)}



        
      
    </section>
  );
};

export default Top;


//<div className="w-screen h-dvh overflow-hidden rounded-lg relative"></div>