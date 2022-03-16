import React from 'react'

function Skeleton() {
  return (
    <div className="flex max-w-5xl flex-col space-y-10 bg-cyan-800 p-10 ">
      <div className="h-24 w-full bg-cyan-700"></div>

      <div className="mx-24 h-10 w-full bg-cyan-700"></div>

      <div className="mx-24 h-10 w-full bg-cyan-700"></div>

      <div className="mx-24 h-10 w-full bg-cyan-700"></div>

      <div className="mx-24 h-10 w-full bg-cyan-700"></div>

      <div className="h-24 w-full bg-cyan-700"></div>
    </div>
  )
}

export default Skeleton
