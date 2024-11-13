"use client"

import React, { useState } from 'react'
import Form from 'next/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Label } from './ui/label'
import CreateRecipe from '@/actions/actions'



const MyForm = () => {

  const [recipeData, setRecipeData] = useState({
    
      name:"",
      imgUrl:"",
      description:"",
      ingredients:"",
      instructions:"",
      
    }
  )
  
  function handleChange(event){
    const {name, value} = event.target;
    setRecipeData(prevValue =>{
      return {...prevValue,
        [name]:value
      } 
    })
  }
 

  return (
    <Form action={CreateRecipe} className='m-5 flex flex-col gap-5'>
      <div className='justify-items-center'>
      <Label>Recipe Name</Label>
      <Input name="name" onChange={handleChange} value={recipeData.name}/>
      </div> 
      <div>
      <Label>Image Url</Label>
      <Input name="imgUrl" onChange={handleChange} value={recipeData.imgUrl}/>
      </div>
      <div>
      <Label>Description</Label>
      <Input name="description" onChange={handleChange} value={recipeData.description}/>
      </div>
      <div>
      <Label>Ingredients</Label>
      <Input name="ingredients" onChange={handleChange} value={recipeData.ingredients}/>
      </div>
      <div>
      <Label>Instructions</Label>
      <Textarea name="instructions" onChange={handleChange} value={recipeData.instructions}/>
      </div>
      <div>
      <Button className="bg-lime-500">Submit</Button>
      </div>
    </Form>
  )
}

export default MyForm
