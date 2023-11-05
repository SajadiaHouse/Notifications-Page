import React from 'react'
import Notification from './Notification'
import data from './data.json'
const Main = () => {
       

    return (
        <>
            <div className="flex justify-center items-center my-8">
                <div className="md:w-[55%] bg-white md:shadow-slate-300 p-6 rounded">
                    <p className='font-semibold float-left text-2xl'>Notification <span className='w-3 h-3 bg-blue-900 text-white rounded px-3 py-1 ml-2 text-sm font-normal'>3</span></p>
                    <p><a className='float-right cursor-pointer' href="">Mark all read</a></p>
                    <div className='flex-col mt-8 p-6'>
                        {data.map((e)=>(
                            <Notification img={e.img} name={e.name} react={e.react} post={e.post} time={e.time} msg={e.msg} indicator={e.indicator} like={e.like} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main