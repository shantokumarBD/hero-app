import React from 'react'
import Banner from './components/hompage/Banner'
import Stats from './components/hompage/Stats'
import TrendingApp from './components/hompage/TrendingApp'

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <TrendingApp></TrendingApp>
    </div>
  )
}

export default page