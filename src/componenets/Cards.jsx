import React from 'react';
import  {updateSearchCount}  from '../appwrite';

const Cards = ({ id, title, short_content }) => {

const handleClick = async (id) =>{
  await updateSearchCount(id)
}

  return (
    <div className='flex md:flex-col'>
        <div className="w-[48dvh] h-[25dvh] rounded-md backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 shadow-md text-white p-[2dvh]"onClick={()=>handleClick(id)}>
            <b className="mb-[5dvh] text-[3dvh] ">{title}</b>
            <br />
            <p className="text-[2dvh]">{short_content}...</p>
        </div>
    </div>
  );
};

export default Cards;
