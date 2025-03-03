import React from 'react';
import  {updateSearchCount}  from '../appwrite';

const Cards = ({ id, title, short_content }) => {

const handleClick = async (id) =>{
  await updateSearchCount(id)
}

  return (
    <div className='flex md:flex-col'>
        <div className="h-43 rounded-md backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 shadow-md text-white"onClick={()=>handleClick(id)}>
            <b className="pb-[20px] text-[19px]">{title}</b>
            <br />
            <p className="text-[15px]">{short_content}...</p>
        </div>
    </div>
  );
};

export default Cards;
