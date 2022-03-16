function Layout({ children }) {
  return (
    <>
      <div className="relative my-auto flex min-h-screen  w-full flex-col  justify-between bg-gray-500 text-gray-800 ">
        <div className="mx-auto  mb-24 2xl:mx-60">
          <header className="mt-8 mb-16  flex w-full flex-col items-center space-y-2">
            <p className="text-3xl font-normal">My Stack Of </p>
            <p className="text-4xl font-bold"> Web Technologies</p>
            <p className="text-3xl font-light"> Get Shit Done!</p>
          </header>

          <div className="px-4">{children}</div>
        </div>
        <footer className="absolute  bottom-0 mt-6 flex h-24 w-full items-center justify-center bg-black text-center text-white ">
          <p>
            Copyright &copy; 2022 My Stack Of Web Technologies All rights
            reserved.
          </p>
        </footer>
      </div>
    </>
  )
}

export default Layout
