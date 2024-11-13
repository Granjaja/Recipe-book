import RecipeCard from '@/components/RecipeCard'
import prisma from '@/lib/prisma'
import React from 'react'

const recipePage = async (name, imgUrl, description, ingredients, instructions) => {
  const newRecipes = await prisma.recipe.findMany()

  return (
   <div className='grid grid-cols-3'>
    {newRecipes.map(recipe => (
      <RecipeCard
      key={recipe.id}
      name={recipe.name}
      imgUrl={recipe.imgUrl}
      description={recipe.description}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      

      />
    ))}
   </div>
  
  )
}

export default recipePage
