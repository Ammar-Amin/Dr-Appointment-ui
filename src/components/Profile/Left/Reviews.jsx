import React from 'react'

export default function Reviews() {
    return (
        <div className='w-[590px] mt-[40px] border-[1px] border-slate-300 rounded-xl'>
            {/* head  */}
            <div className='px-6 py-2 bg-gradient-to-r from-orange-100 to-white rounded-t-xl'>
                <span className='text-xl font-medium tracking-wide'>Featured Reviews (102)</span>
            </div>

            <div className='px-12 py-10'>
                {/* 1st review  */}
                <div className='mb-12'>
                    <div className='flex justify-between'>
                        <div className='flex gap-3'>
                            <img
                                src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                alt='profile image'
                                className='w-[50px] h-[50px] object-cover rounded-full'
                            />
                            <div>
                                <p className='font-medium'>Alicent Hightower</p>
                                <p className='text-slate-500 mt-1 text-[13px]'>Consulted for Skin Care</p>
                            </div>
                        </div>
                        <span className='text-slate-500 text-[14px]'>20 January 2023</span>
                    </div>
                    <div className='my-1 flex gap-1'>
                        <i className="ri-star-fill text-yellow-500"></i>
                        <i className="ri-star-fill text-yellow-500"></i>
                        <i className="ri-star-fill text-yellow-500"></i>
                        <i className="ri-star-fill text-yellow-500"></i>
                        <i className="ri-star-fill text-yellow-500"></i>
                    </div>
                    <p>
                        Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods
                    </p>
                </div>
                {/* 2 review  */}
                <div >
                    <div className='flex justify-between'>
                        <div className='flex gap-3'>
                            <img
                                src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                alt='profile image'
                                className='w-[50px] h-[50px] object-cover rounded-full'
                            />
                            <div>
                                <p className='font-medium'>Alicent Hightower</p>
                                <p className='text-slate-500 mt-1 text-[13px]'>Consulted for Skin Care</p>
                            </div>
                        </div>
                        <span className='text-slate-500 text-[14px]'>20 January 2023</span>
                    </div>
                    <div className='my-1 flex gap-1'>
                        <i className="ri-star-fill text-yellow-500"></i>
                        <i className="ri-star-fill text-yellow-500"></i>
                        <i className="ri-star-fill text-yellow-500"></i>
                        <i className="ri-star-fill text-yellow-500"></i>
                        <i className="ri-star-fill text-yellow-500"></i>
                    </div>
                    <p>
                        Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods
                    </p>
                </div>
            </div>
        </div>
    )
}
