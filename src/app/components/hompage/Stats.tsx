import React from 'react'

const Stats = () => {
  return (
    <div className="bg-gradient w-full py-16 mt-0">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <p className="text-white/80 text-sm md:text-base mb-2">Total Downloads</p>
            <h3 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-2">29.6M</h3>
            <p className="text-white/70 text-xs md:text-sm">21% More Than Last Month</p>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <p className="text-white/80 text-sm md:text-base mb-2">Total Reviews</p>
            <h3 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-2">906K</h3>
            <p className="text-white/70 text-xs md:text-sm">46% More Than Last Month</p>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <p className="text-white/80 text-sm md:text-base mb-2">Active Apps</p>
            <h3 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-2">132+</h3>
            <p className="text-white/70 text-xs md:text-sm">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats

