import React from 'react';

const Notification = ({img,name, post,react,time,msg,indicator,like}) => {
    return (
        <>
        <div className="hover:bg-blue-100 rounded p-3 mt-2 flex items-start">
            <img
                src={`./images/${img}`}
                alt=""
                className="mr-4 block w-12 h-12"
            />
            <div className="text-left w-full">
                <div className="flex items-center">
                    <div className='space-x-2'>
                    <span className="font-semibold cursor-pointer hover:text-blue-900">
                        {name}
                    </span>
                    <span className='text-slate-500'>{react}</span>
                    <span className="font-semibold cursor-pointer  hover:text-blue-900">
                       {post}
                    </span>
                    </div>
                    {indicator==="yes" ? <span class="w-2 h-2 ml-2 bg-red-500 rounded-full self-center"></span>: ""}
                    {like ? <img src={like} className="w-12 h-12 ml-auto" /> :"" }
                    
                </div>
                <p className="text-slate-400 text-sm">{time}</p>
               
            </div>
            
        </div>
        {msg ? <div className='hover:bg-blue-100 text-base p-3 rounded -mt-3 text-slate-800 ml-16 mr-10'>{msg}</div>:"" }

</>
    );
};

export default Notification;
