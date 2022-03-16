import React from 'react'

function Skeleton() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-10 bg-cyan-800 p-10 ">
      <div className="h-24 w-full bg-cyan-700"></div>

      <div className="h-10 w-full bg-cyan-700 px-24"></div>

      <div className="h-10 w-full bg-cyan-700 px-24"></div>

      <div className="h-10 w-full bg-cyan-700 px-24"></div>

      <div className="h-10 w-full bg-cyan-700 px-24"></div>

      <div className="h-24 w-full bg-cyan-700"></div>
    </div>
  )
}

export default Skeleton
