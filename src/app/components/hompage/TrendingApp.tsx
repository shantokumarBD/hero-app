import React from 'react'
import AppCard from '../shared/AppCard'
import { AppType } from '@/Types/App.type'
import { getApi } from '@/lib/apps'




const TrendingApp = async () => {
  const data = await getApi()
  console.log('Fetched data:', data) // Log the fetched data for debugging
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Apps</h2>
        <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data && data.length > 0 ? (
          data.slice(3, 9 ).map((app: AppType) => (
            <AppCard key={app.id} app={app} />
          ))
        ) : (
          <p className="col-span-4 text-center text-red-500">Data not found!</p>
        )}
      </div>
    </div>
  )
}

export default TrendingApp