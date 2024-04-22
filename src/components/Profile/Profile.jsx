import React from 'react'
import Appointment from './Appointment'
import About from './Left/About'
import Specialize from './Left/Specialize'
import Concerns from './Left/Concerns'
import Work from './Left/Work'
import Reviews from './Left/Reviews'

export default function Profile() {
    return (
        <div className='py-[50px]'>
            {/* Info  */}
            <div className='w-[80%] mx-auto min-h-[280px] border-[1px] border-slate-300 rounded-xl relative'>
                {/* Background img */}
                <img src='https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='bg-img'
                    className='w-full h-[140px] object-cover rounded-t-xl'
                />
                {/* profile content  */}
                <div className='w-full px-10 h-[140px] flex justify-between items-center bg-[#FFFBF2] rounded-b-xl'>
                    <div className='flex'>
                        {/* profile img  */}
                        <img
                            src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt='profile image'
                            className='w-[150px] h-[150px] object-cover rounded-full absolute bottom-[10%] border-[5px] border-white'
                        />
                        {/* name  */}
                        <div className='ml-[180px]'>
                            <p className='text-xl font-semibold'>Dr. Bruce Wills</p>
                            <p>Gynecologist</p>
                            <div>
                                <span className='pr-2'>4.2</span>
                                <i className="ri-star-fill text-yellow-300"></i>
                                <i className="ri-star-fill text-yellow-300"></i>
                                <i className="ri-star-fill text-yellow-300"></i>
                                <i className="ri-star-fill text-yellow-300"></i>
                            </div>
                        </div>
                    </div>
                    {/* followers, Following, post  */}
                    <div className='flex'>
                        <div className='mx-[30px]'>
                            <p className='text-center'>Followers</p>
                            <p className='text-2xl font-bold text-center'>890</p>
                        </div>
                        <div className='mx-[30px]'>
                            <p className='text-center'>Following</p>
                            <p className='text-2xl font-bold text-center'>13k</p>
                        </div>
                        <div className='mx-[30px]'>
                            <p className='text-center'>Posts</p>
                            <p className='text-2xl font-bold text-center'>250</p>
                        </div>
                    </div>
                    {/* book btn  */}
                    <button className='py-2 px-6 font-semibold text-white bg-green-700 hover:text-green-700 hover:bg-white rounded-lg border-[1px] border-green-700'>Book an Appointment</button>
                </div>


            </div>

            <div className='w-[80%] mx-auto flex justify-between'>
                <div>
                    <About />
                    <Specialize />
                    <Concerns />
                    <Work />
                    <Reviews />
                </div>
                {/* Appointment Details  */}
                <Appointment />
            </div>
        </div>
    )
}
