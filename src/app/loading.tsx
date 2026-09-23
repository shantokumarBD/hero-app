import React from 'react'

const GlobalLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-white gap-5">
      {/* Gradient Spinner */}
      <div className="spinner" />

      {/* Brand Name */}
      <p className="text-gradient font-bold text-xl tracking-widest">
        HERO.IO
      </p>
    </div>
  )
}

export default GlobalLoading