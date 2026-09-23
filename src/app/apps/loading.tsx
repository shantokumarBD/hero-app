import React from 'react'

const AppsPageSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md overflow-hidden"
          >
            {/* Image / Logo */}
            <div className="skeleton h-40 w-full" />

            <div className="card-body">
              {/* App title */}
              <div className="skeleton h-6 w-3/4" />

              {/* Description */}
              <div className="mt-2 space-y-2">
                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-4 w-5/6" />
              </div>

              {/* Button / action */}
              <div className="card-actions mt-4 justify-end">
                <div className="skeleton h-10 w-24 rounded-btn" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AppsPageSkeleton