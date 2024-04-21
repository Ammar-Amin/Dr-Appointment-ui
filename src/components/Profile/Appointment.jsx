import React from 'react'

export default function Appointment() {
    return (
        <div className='w-[550px] mt-[40px] border-[1px] border-slate-300 rounded-xl'>
            <div className='px-6 py-2 flex justify-between bg-gray-100'>
                <span className='text-xl font-medium tracking-wide'>A Little About me</span>
                <button className='px-6 py-1 bg-white hover:bg-green-700 hover:text-white rounded-lg'>Follow <i class="ri-add-line ml-2"></i></button>
            </div>

            <div className='p-10'>
                <p>
                    Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the
                </p>
                <div className='flex gap-3 my-[10px]'>
                    <div className='w-[78%] my-auto h-[1px] bg-slate-300'></div>
                    <p className='font-medium'>Read More</p>
                </div>
            </div>
        </div>
    )
}
