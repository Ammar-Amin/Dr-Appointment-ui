import React from 'react'

export default function About() {
    return (
        <div className='w-[590px] mt-[40px] border-[1px] border-slate-300 rounded-xl'>
            <div className='px-6 py-2 flex justify-between bg-gradient-to-r from-orange-100 to-white rounded-t-xl'>
                <span className='text-xl font-medium tracking-wide'>A Little About me</span>
                <button className='px-6 py-1 bg-white hover:bg-green-700 hover:text-white border-[1px] border-green-700 rounded-lg'>Follow <i class="ri-add-line ml-2"></i></button>
            </div>

            <div className='px-14 py-10'>
                <p>
                    Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the
                </p>
                <div className='flex gap-3 my-[10px]'>
                    <div className='w-[78%] my-auto h-[1px] bg-slate-300'></div>
                    <p className='font-medium'>Read More</p>
                </div>

                <div className='flex gap-4 my-8'>
                    <p className='py-1 text-[17px]'>Language Spoken</p>
                    <span className='py-1 px-6 bg-slate-100 rounded-3xl'>English</span>
                    <span className='py-1 px-6 bg-slate-100 rounded-3xl'>Hindi</span>
                    <span className='py-1 px-6 bg-slate-100 rounded-3xl'>Telugu</span>
                </div>

                <div className='mt-10'>
                    <i class="ri-facebook-line p-3 mr-3 text-lg rounded-full border-[1px] border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-slate-400"></i>
                    <i class="ri-instagram-line p-3 mr-3 text-lg rounded-full border-[1px] border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-slate-400"></i>
                    <i class="ri-youtube-line p-3 mr-3 text-lg rounded-full border-[1px] border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-slate-400"></i>
                    <i class="ri-twitter-line p-3 mr-3 text-lg rounded-full border-[1px] border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-slate-400"></i>
                </div>
            </div>

        </div>
    )
}
