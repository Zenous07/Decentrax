import React from 'react';
import  {updateSearchCount}  from '../appwrite';

const Cards = ({ id, title,content,className,cardColour,titleColour,contentColour }) => {

const handleClick = async (id) =>{
  await updateSearchCount(id)
}

  return (
    <div className={`flex lg:flex-col min-w-xs max-w-xl ${className} `}>
        <div className={`rounded-xl backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 shadow-md text-white p-4 transition hover:shadow-fuchsia-300/40 hover:scale-95 duration-300 overflow-clip ${cardColour}`}onClick={()=>handleClick(id)}>
            <p className={`*:lg:text-3xl md:text-2xl text-xl mb-4 line-clamp-1 text-black-500 font-bold ${titleColour}`}>{title}</p>
            <p className={`text-base lg:text-xl md:text-lg md:line-clamp-3 lg:line-clamp-5 line-clamp-2 text-balance text-gray-200 ${contentColour}`}>{content}...</p>
        </div>
    </div>
  );
};

export default Cards;
