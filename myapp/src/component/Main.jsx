import React from 'react'
import Notification from './Notification'

const Main = () => {
    return (
        <>
            <div className="flex justify-center items-center my-8">
                <div className="md:w-[50%] bg-white md:shadow-slate-300 p-6 rounded">
                    <p className='font-semibold float-left text-lg'>Notification</p>
                    <p><a className='float-right cursor-pointer' href="">Mark all read</a></p>
                    <div className='flex-col mt-8 p-6'>
<Notification />
<Notification />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Main