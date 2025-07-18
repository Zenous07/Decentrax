import React from 'react';
import Cards from './Cards.jsx';
import { data } from '../data.js'; 

const ITEMS_PER_PAGE = 6;

const All = () => {
  const sections = [];
  for (let i = 0; i < data.length; i += ITEMS_PER_PAGE) {
    sections.push(data.slice(i, i + ITEMS_PER_PAGE));
  }

  return (
    <div className='w-screen relative overflow-x-hidden mt-7' id='algorithms'>
      <div className='absolute top-10 left-1/2 transform -translate-x-1/2 text-white z-50 p-2 text-start'>
        <h1 className='text-4xl md:text-6xl special-font uppercase font-zentry'>
          <b>a</b>ll  <b>a</b>lgorithms
        </h1>
      </div>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="w-screen min-h-screen flex flex-col items-center relative mb-16">
          <div className="absolute inset-0">
            <img 
              src='img/all.jpg'
              alt='background'
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-6 lg:gap-y-15 mt-40 md:mx-10 pb-15">
            {section.map((item, index) => (
              <Cards 
                key={item.id || index}
                title={item.title}
                content={item.content}
                id={item.id}
                example={item.example}
                conclusion={item.conclusion}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default All;
