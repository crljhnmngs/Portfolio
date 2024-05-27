import React from 'react'

export default function Header() {
  return (
    <div className='bg-white w-screen h-[10%] flex flex-row justify-between items-center px-20'>
      <div>
        <h3>Logo</h3>
      </div>
      <div>
        <ul className='flex gap-8'>
          <li className='group hover:bg-blue-500 rounded-md px-4 py-2'>
            <a className='group-hover:text-white text-black text-[17px] font-medium' href={'http://google.com'}>Home</a>
          </li>
           <li className='group hover:bg-blue-400 rounded-md px-4 py-2'>
            <a className='group-hover:text-white text-black text-[17px] font-medium' href={'http://google.com'}>About</a>
          </li>
          <li className='group hover:bg-blue-400 rounded-md px-4 py-2'>
            <a className='group-hover:text-white text-black text-[17px] font-medium' href={'http://google.com'}>Experiences</a>
          </li>
           <li className='group hover:bg-blue-400 rounded-md px-4 py-2'>
            <a className='group-hover:text-white text-black text-[17px] font-medium' href={'http://google.com'}>Skills</a>
          </li>
           <li className='group hover:bg-blue-400 rounded-md px-4 py-2'>
            <a className='group-hover:text-white text-black text-[17px] font-medium' href={'http://google.com'}>Projects</a>
          </li>
          <li className='group hover:bg-blue-400 rounded-md px-4 py-2'>
            <a className='group-hover:text-white text-black text-[17px] font-medium' href={'http://google.com'}>Contact</a>
          </li>
          <li className='group hover:bg-blue-400 rounded-md px-4 py-2'>
            <a className='group-hover:text-white text-black text-[17px] font-medium' href={'http://google.com'}>D</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
