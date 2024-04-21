import React from 'react'

export default function Concerns() {
    return (
        <div className='w-[590px] mt-[40px] border-[1px] border-slate-300 rounded-xl'>
            <div className='px-6 py-2 bg-gradient-to-r from-orange-100 to-white rounded-t-xl'>
                <span className='text-xl font-medium tracking-wide'>The Concerns I Treat</span>
            </div>

            <div className='p-5 flex flex-wrap gap-3'>
                <span className='py-1 px-4 bg-slate-100 rounded-3xl'>Skin Treatment</span>
                <span className='py-1 px-4 bg-slate-100 rounded-3xl'>Pregnancy</span>
                <span className='py-1 px-4 bg-slate-100 rounded-3xl'>Period Doubts</span>
                <span className='py-1 px-4 bg-slate-100 rounded-3xl'>Endometriosis</span>
                <span className='py-1 px-4 bg-slate-100 rounded-3xl'>Pelvic Pain</span>
                <span className='py-1 px-4 bg-slate-100 rounded-3xl'>Ovarian Cysts</span>
                <span className='py-1 px-4 border-[1px] border-slate-300 rounded-3xl'> <i class="ri-add-line"></i>5 more</span>
            </div>


        </div>
    )
}
