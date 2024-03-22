import { React } from 'react'

const Navbar = () => {
  return (
    <div className="relative">
    <nav className="bg-slate-900 w-full py-4">
          <div className='text-white flex px-5'>
              <div className='mx-4 py-2 hover:text-green-800'><a href="/">Home</a></div>
              <div className='mx-4 py-2 hover:text-green-800'><a href="#">Top Rated</a></div>
              <div className='mx-4 py-2 hover:text-green-800'><a href="#">Latest</a></div>
              {/* <div className='ml-4 right-4 absolute flex justify-around'>
                  <input className='px-4 py-2 mx-2 rounded-full flex justify-around bg-slate-200 text-black' type='text'/>
                  <button className='px-4 py-2 bg-green-800 hover:bg-green-900 border-green-900 rounded-full'>
                      <a href="#">Login</a>
                  </button>
              </div> */}
          </div>
    </nav>
    </div>
  )
}

export default Navbar