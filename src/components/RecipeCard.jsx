import React from 'react'

const RecipeCard = ({name, imgUrl, description, ingredients, instructions}) => {
  return (
    <div className='m-2 border-solid w-300 bg-green-500 p-5'>
        <div className='justify-items-center '>
          <h1 className='font-semibold text-xl p-5'>{name}</h1>
        </div>
        <div>
        <img src={imgUrl} className='w-full h-100 object-cover p-5' alt="food" />
        </div> 
        <div className='font-bold p-3'>
        <h3 >{description}</h3>
        </div>
        <div className='p-3'>
        <p >{ingredients}</p>
        </div>
        <div className='p-3'>
        <p>{instructions}</p>
        </div>
      
    </div>
  )
}

export default RecipeCard
