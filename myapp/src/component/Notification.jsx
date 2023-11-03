import React from 'react'

const Notification = () => {
    return (
        <>
            <div className='hover:bg-blue-100 rounded p-3 mt-2'>
                <img src="./images/avatar-angela-gray.webp" alt="" className='mr-4 block w-12 h-12' />
                <div className='text-left w-full'>
 <span className='font-semibold cursor-pointer'>Mark Webber</span>
                    <span>reacted to your recent post</span>
                    <span className='font-semibold cursor-pointer'>My Frist tumonent today!</span>
                  <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>.</span>
                </div>
                   
                
                    <span className='font-thin text-slate-400'>1m ago</span>
            </div>

        </>
    )
}

export default Notification