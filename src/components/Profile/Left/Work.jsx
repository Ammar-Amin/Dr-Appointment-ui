import React from 'react'

export default function Work() {
    return (
        <div className='w-[590px] mt-[40px] border-[1px] border-slate-300 rounded-xl'>
            {/* head  */}
            <div className='px-6 py-2 bg-gradient-to-r from-orange-100 to-white rounded-t-xl'>
                <span className='text-xl font-medium tracking-wide'>My Work Experience</span>
            </div>
            {/* text  */}
            <div className='p-5'>
                <p className='uppercase pb-5 border-b-[1px] border-slate-300'>i have been in Practice for: 7<i class="ri-add-line"></i> years</p>
            </div>
            {/* 1st block  */}
            <div className='px-8 pb-3 mb-3 flex justify-between'>
                <div className='flex gap-3'>
                    <i class="ri-hospital-line text-2xl py-2 px-3 bg-slate-50 border-[1px] border-slate-300 rounded-md"></i>
                    <div>
                        <p className='font-medium'>Medtown Medical Clinic</p>
                        <p className='text-slate-500 mt-1 text-[14px]'>Senior Doctor</p>
                    </div>
                </div>
                <span className='text-slate-500 text-[14px]'>2016-Present</span>
            </div>
            {/* second block  */}
            <div className='px-8 pb-3 flex justify-between'>
                <div className='flex gap-3'>
                    <i class="ri-hospital-line text-2xl py-2 px-3 bg-slate-50 border-[1px] border-slate-300 rounded-md"></i>
                    <div>
                        <p className='font-medium'>Medtown Medical Clinic</p>
                        <p className='text-slate-500 mt-1 text-[14px]'>Senior Doctor</p>
                    </div>
                </div>
                <span className='text-slate-500 text-[14px]'>2016-Present</span>
            </div>

        </div>
    )
}
