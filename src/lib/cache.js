import NodeCache from "node-cache";

const cache = new NodeCache({stdTTL:600, checkperiod: 120})


export const getFromCache = (key) => cache.get(key) 

export const setInCache = (key, value) => cache.set(key, value)

export const clearCache = (key) => cache.del(key)

