import React from 'react'

export default function Appointment() {
    return (
        <div className='w-[550px] h-[940px] mt-[40px] border-[1px] border-slate-300 rounded-2xl'>
            <div className='px-5 py-8'>
                {/* Appointment fee  */}
                <div className='mb-3 py-3 px-5 flex justify-between border-[1px] border-slate-300 rounded-xl '>
                    <span>Appointment Fee</span>
                    <span>₹699.00</span>
                </div>

                {/* session mode  */}
                <div className='my-7 mx-3 flex gap-4'>
                    <p className='font-semibold'>Select your mode of session</p>
                    <div className='w-[54%] my-3 h-[1px] bg-slate-300'></div>
                </div>

                <div className='mx-10 flex justify-between'>
                    <button className='py-2 px-10 border-[1px] hover:bg-slate-100 hover:border-slate-600 border-slate-300 rounded-lg'>
                        <span className='font-medium'>In-Clinic</span>
                        <br></br>
                        <span className='text-slate-600 text-[14px]'>45 mins</span>
                    </button>
                    <button className='py-2 px-10 border-[1px] hover:bg-slate-100 hover:border-slate-600 border-slate-300 rounded-lg'>
                        <span className='font-medium'>Video</span>
                        <br></br>
                        <span className='text-slate-600 text-[14px]'>45 mins</span>
                    </button>
                    <button className='py-2 px-10 border-[1px] hover:bg-slate-100 hover:border-slate-600 border-slate-300 rounded-lg'>
                        <span className='font-medium'> Chat</span>
                        <br></br>
                        <span className='text-slate-600 text-[14px]'> 10 mins</span>
                    </button>
                </div>

                {/* time slots  */}
                <div className='mt-10 mx-3 flex gap-4'>
                    <p className='font-semibold mt-2'>Pick a time slot</p>
                    <div className='w-[54%] my-auto h-[1px] bg-slate-300'></div>
                    <i class="ri-calendar-line px-4 py-2 text-lg rounded-full border-[1px] border-slate-300 bg-slate-50"></i>
                </div>
            </div>

            <div className='min-h-[70px] p-5 mx-6 flex justify-between items-center border-[1px] border-slate-300 rounded-xl'>
                <i class="ri-arrow-left-s-line px-2 py-1 border-[1px] border-slate-300 hover:bg-slate-100 hover:border-slate-600 rounded-full"></i>
                <button className='py-2 px-3 border-[1px] hover:bg-slate-100 hover:border-slate-600 border-slate-300 rounded-lg'>
                    <span className='font-medium'>Mon, 10 Oct</span>
                    <br></br>
                    <span className='text-slate-600 text-[14px]'>10 slots</span>
                </button>
                <button className='py-2 px-3 border-[1px] hover:bg-slate-100 hover:border-slate-600 border-slate-300 rounded-lg'>
                    <span className='font-medium'>Tue, 11 Oct</span>
                    <br></br>
                    <span className='text-[14px] text-red-500'>02 slots</span>
                </button>
                <button className='py-2 px-3 border-[1px] hover:bg-slate-100 hover:border-slate-600 border-slate-300 rounded-lg'>
                    <span className='font-medium'>Wed, 12 Oct</span>
                    <br></br>
                    <span className='text-[14px] text-orange-400'> 05 slots</span>
                </button>
                <i class="ri-arrow-right-s-line px-2 py-1 border-[1px] border-slate-300 hover:bg-slate-100 hover:border-slate-600 rounded-full"></i>
            </div>
            {/* Morning  */}
            <div className='p-8'>
                <p className='mb-4 font-semibold'>Morning</p>
                <div className='flex flex-wrap gap-4'>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>09:00 AM</button>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>09:30 AM</button>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>10:00 AM</button>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>10:15 AM</button>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>10:45 AM</button>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>11:00 AM</button>
                </div>
            </div>
            {/* Evening  */}
            <div className='px-8'>
                <p className='mb-4 font-semibold'>Evening</p>
                <div className='flex flex-wrap gap-4'>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>04:00 PM</button>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>04:15 PM</button>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>04:30 PM</button>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>04:45 PM</button>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>05:00 PM</button>
                    <button className='px-3 py-3 bg-white border-[1px] border-slate-300 hover:bg-green-700 hover:text-white rounded-xl'>05:15 PM</button>
                </div>
            </div>

            {/* Appointment btn  */}
            <div className='p-8'>
                <button className='w-full py-2 px-6 font-semibold text-white bg-green-700 hover:text-green-700 hover:bg-white rounded-lg border-[1px] border-green-700'>Make an Appointment</button>
            </div>

        </div>
    )
}
