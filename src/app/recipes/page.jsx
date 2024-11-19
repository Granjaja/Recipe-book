import RecipeCard from '@/components/RecipeCard'
import prisma from '@/lib/prisma'
import React from 'react'
import { getFromCache, setInCache } from '@/lib/cache'

const fetchRecipes = async () => {
  let newRecipes = getFromCache('newRecipes')

  if (!newRecipes) {
    console.log('Fetching recipes from the database...');
    newRecipes = await prisma.Recipe.findMany()

    setInCache('newRecipes', newRecipes)
    console.log(newRecipes)
  } else{
    console.log('Serving recipes from the cache...');
  }

  console.log(newRecipes)
  return newRecipes;
  
}
 
const recipePage = async () => {
  const newRecipes =await fetchRecipes()
  
  
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

