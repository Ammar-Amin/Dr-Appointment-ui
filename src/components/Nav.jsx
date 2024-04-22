import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='py-3 px-[8em] flex justify-between bg-[#FFF7E2]'>
            <div className='w-[55%] flex justify-between items-center'>
                <h1 className='text-2xl font-semibold tracking-[0.5em] uppercase'>Amrutam</h1>
                <div>
                    <Link to='/'>
                        <span className='mx-4 hover:underline cursor-pointer'>Home</span>
                    </Link>
                    <span className='mx-4 hover:underline cursor-pointer'>Find Doctors</span>
                    <span className='mx-4 hover:underline cursor-pointer'>About us</span>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <button className='py-1 px-6 text-lg border-2 border-green-700 bg-white rounded-lg hover:bg-green-700 hover:text-white cursor-pointer'>Login</button>
                <button className='py-1 px-6 text-lg border-2 border-green-700 bg-green-700 text-white rounded-lg hover:bg-white hover:text-green-700 cursor-pointer'>Sign-up</button>
            </div>
        </div>
    )
}
