import React from 'react'

const Generate = () => {
  return (
    <div className='bg-[#225ac0] min-h-screen grid grid-cols-2'>
        <div className="col1 flex flex-col justify-center items-center">
            <div className='flex flex-col gap-5 my-8'>
                <h1 className='font-bold text-4xl text-gray-900'>Create your LinkNest</h1>

                <div className="item">

                    <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
                    <div className="mx-4">
                        <input className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full bg-white' type="text" placeholder='Choose handle' />
                    </div>

                </div>

                <div className="item">

                    <h2 className='font-semibold text-2xl'>Step 2: Add Links</h2>
                    <div className="mx-4">
                        <input className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full bg-white' type="text" placeholder='Enter Link text' />
                        <input className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full bg-white' type="text" placeholder='Enter Link' />
                        <button className='p-5 py-2 mx-2 text-white font-bold rounded-3xl bg-gray-900 cursor-pointer active:scale-95'>Add Links</button>
                    </div>

                </div>

                <div className="item">

                    <h2 className='font-semibold text-2xl'>Step 3: Add Pictures & Finalize</h2>
                    <div className="mx-4 flex flex-col ">
                        <input className='px-4 py-2 mx-2 my-2 focus:outline-blue-800 rounded-full bg-white' type="text" placeholder='Enter Link to your Picture' />
                        <button className='p-5 py-2 mx-2 w-fit my-5 text-white font-bold rounded-3xl bg-gray-900 cursor-pointer active:scale-95'>Create your LinkNest</button>
                    </div>

                </div>
                
            </div>
        </div>
        <div className="col2 w-full h-screen bg-[#225ac0]">
            <img className='h-full object-contain' src="/generate.webp" alt="Generate img" />
        </div>
    </div>
  )
}

export default Generate