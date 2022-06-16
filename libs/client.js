import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'yoshifumimizukawa',
  apiKey: process.env.API_KEY || '',
})