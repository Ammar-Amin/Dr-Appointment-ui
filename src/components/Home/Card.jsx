import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
    return (
        <div className='w-[300px] p-5 bg-[#FFF7E2] rounded-3xl relative'>
            {/* Image  */}
            <img
                src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Image'
                className='w-[150px] h-[150px] mx-auto object-cover rounded-full'
            ></img>

            {/* rating  */}
            <span className='absolute left-[40%] top-[28%] px-3 py-1 text-white text-[13px] bg-slate-600 rounded-full'>4.5 <i class="ri-star-fill text-yellow-300"></i></span>

            {/* Name  */}
            <h1 className='mt-4 mb-2 text-3xl font-semibold text-center'>Dr. Prerna Narang</h1>

            {/* Dr. Expertise  */}
            <div className='mx-[10%] mb-3'>
                <div>
                    <i class="ri-capsule-line"></i>
                    <span className='text-[13px] ml-2'>Male-Female Infertility</span>
                </div>
                <div>
                    <i class="ri-graduation-cap-line"></i>
                    <span className='text-[13px] ml-2'>7 years of Experience</span>
                </div>
                <div>
                    <i class="ri-message-line"></i>
                    <span className='text-[13px] ml-2'>Speaks : English, Hindi, Marathi</span>
                </div>
            </div>

            {/* vedio % chat  */}
            <div className='text-[14px] flex gap-1'>
                <button className='py-2 bg-white border-[1px] border-slate-300 rounded-lg hover:bg-green-100'>Video Consultation ₹800</button>
                <button className='py-2 bg-white border-[1px] border-slate-300 rounded-lg hover:bg-green-100'>Chat Consultation Free</button>
            </div>

            {/* 2 buttons  */}
            <div className='flex flex-col gap-2 my-6' >
                <Link to='/profile' className='py-2 text-center font-semibold text-green-700 bg-white hover:text-white hover:bg-green-700 rounded-lg border-[1px] border-green-700'>
                    <button >
                        Veiw Profile
                    </button>
                </Link>
                <Link to='/profile' className='py-2 text-center font-semibold text-white bg-green-700 hover:text-green-700 hover:bg-white rounded-lg border-[1px] border-green-700'>
                    <button >Book a Consultation</button>
                </Link>
            </div>
        </div>
    )
}
