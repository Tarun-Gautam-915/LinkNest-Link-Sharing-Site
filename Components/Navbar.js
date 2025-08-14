import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-white w-[80vw] fixed top-10 right-[10vw] rounded-full px-7 py-5'>
        <div className="logo flex gap-20 items-center">
            <img src="/logo.svg" alt="LOGO" width={100} height={100} />
            <ul className='flex gap-10'>
                <li>Products</li>
                <li>Templates</li>
                <li>Marketplace</li>
                <li>Learn</li>
                <li>Pricing</li>
            </ul>
        </div>

        <div className='flex gap-2'>
            <button className='login bg-gray-300 rounded-lg p-4 font-bold'>Log in</button>
            <button className='signup bg-black rounded-full text-white p-4 font-bold'>Sign up Free</button>
        </div>
    </nav>
  )
}

export default Navbar