import cron from 'node-cron'
import prisma from './prisma'
import { setInCache } from './cache'

const updateCache  = async() =>{
    const updatedRecipes = await prisma.recipe.findMany()
    setInCache('newRecipes', updatedRecipes)
    console.log('cache updated')
};
//updates every five minutes
cron.schedule('/5 ****', updateCache)