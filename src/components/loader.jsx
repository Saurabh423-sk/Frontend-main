const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      
      {/* Mobile */}
      <img
        src="https://i.pinimg.com/originals/26/20/8c/26208c54439dd5d89de0256177496258.gif"
        alt="loader"
        className=" hidden lg:block w-full h-full object-cover"
      />

      {/* Desktop */}
      <img
        src="https://i.pinimg.com/originals/d3/8f/74/d38f744cc144e38c3809c5c7ea4f191b.gif"
        alt="loader"
        className=" w-full h-full lg:hidden object-cover"
      />

    </div>
  )
}

export default Loader
