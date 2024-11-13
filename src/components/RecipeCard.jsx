import React from 'react'

const RecipeCard = ({name,imgUrl,description, ingredients, instructions}) => {
  return (
    <div className='m-2 border-solid w-300 bg-green-500'>
        <div className='justify-items-center '><h1 className='font-semibold '>{name}</h1></div>
      <div>
      <img src={imgUrl} className='w-full h-100 object-cover' alt="meat" />
        </div> 
        <div>
        <h3>{description}</h3>
        </div>
      <div>
      <p>{ingredients}</p>
      </div>
     <div>
     <p>{instructions}</p>
     </div>
      
    </div>
  )
}

export default RecipeCard
