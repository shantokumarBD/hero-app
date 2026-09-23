import React from 'react'
import AppCard from '../components/shared/AppCard'
import { AppType } from '../../Types/App.type'
import { getApi } from '@/lib/apps'



const AppsPage = async () => {

    const data = await getApi()
  console.log('Fetched data:', data) // Log the fetched data for debugging

  return (
    <div className='container mx-auto px-4 py-8'>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {data && data.length > 0 ? (
               data.map((app: AppType) => (
                 <AppCard key={app.id} app={app} />
               ))
             ) : (
               <p className="col-span-4 text-center text-red-500">Data not found!</p>
             )}
           </div>
    </div>
  )
}

export default AppsPage