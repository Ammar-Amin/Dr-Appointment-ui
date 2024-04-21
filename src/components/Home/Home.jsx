import React from 'react'
import DropdownBox from './DropdownBox'
import Card from './Card'

export default function Home() {
    return (
        <div className='pb-[100px]'>
            {/* Heading & location  */}
            <div className='min-h-[221px] p-10 background.body bg-[url(https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
                <p className='text-3xl font-medium text-center tracking-wider'>Find expert Doctors for an In-clinic session here</p>
                <div className='my-10 flex gap-4 justify-center'>
                    <DropdownBox rightIcon={<i class="ri-map-pin-line mr-3"></i>} name='Select Location' leftIcon={<i class="ri-arrow-down-s-line ml-3"></i>} />
                    <div className='w-[30%] p-2 border-[1px] border-slate-300 rounded-md'>
                        <input
                            type='text'
                            placeholder="eg. Doctor, specialisation, clinic name"
                            className='w-[90%] bg-transparent border-none outline-none' />
                        <button className='border-none outline-none bg-transparent'><i class="ri-arrow-right-line text-xl ml-3"></i></button>
                    </div>
                </div>
            </div>

            {/* Dropdown Boxes & Horizontal line  */}
            <div className='w-[60%] mx-auto my-2 flex flex-wrap justify-between'>
                <DropdownBox name='Expertise' leftIcon={<i class="ri-arrow-down-s-line ml-3"></i>} />
                <DropdownBox name='Gender' leftIcon={<i class="ri-arrow-down-s-line ml-3"></i>} />
                <DropdownBox name='Fees' leftIcon={<i class="ri-arrow-down-s-line ml-3"></i>} />
                <DropdownBox name='Languages' leftIcon={<i class="ri-arrow-down-s-line ml-3"></i>} />
                <DropdownBox name='All filters' leftIcon={<i class="ri-arrow-down-s-line ml-3"></i>} />
            </div>

            <div className='w-full h-[1px] bg-slate-400'></div>

            {/* filters items  */}
            <div className='w-[60%] mx-auto my-[40px] flex flex-wrap justify-end gap-3'>
                <span className='py-1 px-4 text-sm rounded-full bg-slate-100'> Hair Care <i class="ri-close-line"></i></span>
                <span className='py-1 px-4 text-sm rounded-full bg-slate-100'> Female <i class="ri-close-line"></i></span>
                <span className='py-1 px-4 text-sm rounded-full bg-slate-100'> Rs.0-Rs.500 <i class="ri-close-line"></i></span>
                <span className='py-1 px-4 text-sm rounded-full bg-slate-100'> Hindi <i class="ri-close-line"></i></span>
            </div>

            {/* Cards  */}
            <div className='w-[70%] mx-auto flex flex-wrap justify-between'>
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}
