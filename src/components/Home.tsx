import React from 'react'
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section className="h-full bg-green-200 w-screen flex items-center justify-center nav:flex-row flex-col-reverse -scroll-mt-[-70px]"  id="home">
      <div className='h-[60%] nav:w-[35%] w-full pl-5'>
       <div>
          <p className='font-bold text-6xl'>Hi, I am Carl</p>
       </div>
       <div>
        <ReactTyped  
        strings={[
          "Software Engineer",
          "Front End Developer",
          "Full Stack Developer",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
        className='font-bold text-6xl text-[#3B82F6]'/>
       </div>
      </div>
      <div className='h-[60%]  nav:w-[35%] w-full'>
        Picture
      </div>
    </section>
  )
}
