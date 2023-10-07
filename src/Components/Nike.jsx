import React from 'react'
import Footer from './Footer'

import iconstar from '../assets/star.svg'
// img

import five from '../assets/img/5.png'
import Seven from '../assets/img/7.png'
import Ten from '../assets/img/21.png'
import eight from '../assets/img/20.png'



export default function Nike() {
  return (
    <div className='Nike '>
      <div className='text-center'>
      <h2 > <span>OUR TRENDING Collection Shoes</span> </h2>
      <div className='typo'>
        <label htmlFor="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam blanditiis dicta consectetur quia vitae alias. Eos magni iusto deserunt </label> <br />
        <label htmlFor="">sit amet consectetur adipisicing elit. Repellendus quibusdam illo corporis unde veniam placeat atque? Sequi quos, aliquid error architecto  excepturi culpa </label>
      </div>
      </div>
      <div className='   md:flex gap-20  justify-center p-20'>
        <div className=' mb-9 bg-slate-200 w-fit justify-center p-5'>
          <img src={Ten} alt="" className='w-60' />
          <img src={iconstar} alt="" className='w-4 translate-y-4' />
          <label className='ml-5'>$-200k</label>
          <h5>Nike</h5>
          <p>Lorem ipsum dolor sit amet.</p>

        </div>

        <div className=' mb-9 bg-slate-200 w-fit p-5'>
          <img src={Seven} alt="" className='w-60' />
          <div className='flex'>
            <img src={iconstar} alt="" className='w-4 translate-y-4' />
            <img src={iconstar} alt="" className='w-4 translate-y-4' />

          </div>
          <label className='ml-10'>$-200k</label>
          <h5>Nike</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='bg-slate-200 w-fit p-5 mb-9'>
          <img src={Ten} alt="" className='w-60' />
          <div className='flex '>
            <img src={iconstar} alt="" className='w-4 translate-y-4' />
            <img src={iconstar} alt="" className='w-4 translate-y-4' />
            <img src={iconstar} alt="" className='w-4 translate-y-4' />
          </div>
          <label className='ml-14'>$-200k</label>
          <h5>Nike</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='bg-slate-200 w-fit p-5 mb-9' >
          <img src={Seven} alt="" className='w-60' />
          <div className='flex '>
            <img src={iconstar} alt="" className='w-4 translate-y-4' />
            <img src={iconstar} alt="" className='w-4 translate-y-4' />
            <img src={iconstar} alt="" className='w-4 translate-y-4' />
            <img src={iconstar} alt="" className='w-4 translate-y-4' />
          </div>
          <label className='ml-16'>$-200k</label>
          <h5>Nike</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div> <br /> <br /> <br /> <br />

      <Footer />
    </div>
  )
}
