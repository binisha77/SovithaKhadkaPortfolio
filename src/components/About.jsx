

import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/profile.png'
import { data } from 'react-router-dom'
import { aboutInfo } from '../assets/assets.js'

function About() {
  return (
    <div>
  <motion.div
  initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6, ease:'easeOut'}}
      viewport={{once:true}}
      id='about'
      className='py-20 bg-dark-200'
  >
  <div className='container mx-0 px-6'>
    {/* heading */}
    <h2 className='text-3xl font-bold text-center mb-4'>About
      <span className='text-purple'>Me</span>
    </h2>
    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
      Get to know about my background and passion
    </p>
    {/* image +my journey */}
    <div className='flex flex-col md:flex-row items-center gap-12'>
      {/* image */}
      <div className='md:w-1/2 rounded-2xl overflow-hidden'>
      <motion.img
      initial={{opacity:0 ,y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.9, ease:'easeOut'}}
      viewport={{once:false, amount:0.2}}
      className='w-full h-full object-cover'
      src={assets} alt="profile" />
    
      </div>
      {/* my journey */}
      <motion.div
      initial={{opacity:0 ,y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.9, ease:'easeOut'}}
      viewport={{once:false, amount:0.2}}
      className='md:w-1/2'>
        <div className='rounded-2xl p-8'>
          <h3 className='text-2xl font-semibold mb-6'>
            My Journey
          </h3>
          <p className='text-gray-300 mb-6'>I'm passionate full-stack developer.
             My journey started with basic HTML/CSS 
             websites and evolved into building web
              application with modern frameworks Over the years, I've honed my skills in JavaScript,
             React, Node.js, and more. I love creating clean,
              responsive designs and seamless user experiences.
          </p>
          <p className='text-gray-300 mb-12'>
               When I'm not coding, I enjoy reading tech blogs,
             contributing to open-source projects, and exploring
              new technologies to stay updated in this fast-paced field.
          </p>
          {/* cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
              aboutInfo.map((data, index)=>(
                <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300
                hover:-translate-y-2 cursor-pointer'>
                  <div className='text-purple text-4xl '>
                    {/* <data.icon /> */}
                    <data.icon className='text-3xl'/>
                  </div>
                  <h3 className='text-xl font-semibold
                  mb-3'>{data.title}</h3>
                  <p className='text-gray-400'>{data.description}</p>
                </div>
              ))
            }

          </div>
        </div>
      </motion.div>
    </div>

    </div>

  </motion.div>

    </div>
  )
}

export default About