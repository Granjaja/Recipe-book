"use server"

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import React from 'react'

const CreateRecipe = async(formData) => {
    const name = formData.get('name')
    const imgUrl = formData.get('imgUrl')
    const description = formData.get('description')
    const ingredients = formData.get('ingredients')
    const instructions = formData.get('instructions')
    

    await prisma.recipe.create({data:
      {name,imgUrl, description, ingredients, instructions}
    })

    revalidatePath("/recipes")

  return (
    <div>
      
    </div>
  )
}

export default CreateRecipe
