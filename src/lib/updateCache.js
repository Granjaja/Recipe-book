import cron from 'node-cron'
import prisma from './prisma'
import { setInCache } from './cache'

const updateCache  = async() =>{
    const updatedRecipes = await prisma.recipe.findMany()
    setInCache('newRecipes', updateCache)
};

cron.schedule('/5 ****', updateCache)