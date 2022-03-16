import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }, [])

  return (
    <div>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-10 bg-cyan-800 p-10 ">
        <div className="h-24 w-full bg-cyan-700"></div>

        <div className="h-10 w-full bg-cyan-700 px-24"></div>

        <div className="h-10 w-full bg-cyan-700 px-24"></div>

        <h1 className="text-5xl font-extrabold text-red-900">
          Page Not Found Men, Go Back!
        </h1>

        <div className="h-10 w-full bg-cyan-700 px-24"></div>

        <div className="h-10 w-full bg-cyan-700 px-24"></div>

        <div className="h-24 w-full bg-cyan-700"></div>
      </div>
    </div>
  )
}

export default NotFound
