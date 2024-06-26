import React from 'react'
import health from './imgs/health.jpg'
import hair from './imgs/hair.jpg'
import immunity from './imgs/immunity.jpg'
import skin from './imgs/skin.jpg'

export default function Specialize() {
    return (
        <div className='w-[590px] mt-[40px] border-[1px] border-slate-300 rounded-xl'>
            <div className='px-6 py-2 bg-gradient-to-r from-orange-100 to-white rounded-t-xl'>
                <span className='text-xl font-medium tracking-wide'>A Specialize In</span>
            </div>

            <div className='p-10 flex flex-wrap gap-4'>
                <div>
                    <img className='w-[90px] h-[90px] mx-auto object-cover border-[1px] border-slate-300 rounded-xl'
                        src={health}
                        alt='img'
                    />
                    <p className='mt-1 text-center'>Women Health</p>
                </div>
                <div>
                    <img className='w-[90px] h-[90px] object-cover border-[1px] border-slate-300 rounded-xl'
                        src={skin}
                        alt='img'
                    />
                    <p className='mt-1 text-center'>Skin Care</p>
                </div>
                <div>
                    <img className='w-[90px] h-[90px] object-cover border-[1px] border-slate-300 rounded-xl'
                        src={immunity}
                        alt='img'
                    />
                    <p className='mt-1 text-center'>Immunity</p>
                </div>
                <div>
                    <img className='w-[90px] h-[90px] object-cover border-[1px] border-slate-300 rounded-xl'
                        src={hair}
                        alt='img'
                    />
                    <p className='mt-1 text-center'>Hair Care</p>
                </div>
            </div>
        </div>
    )
}
