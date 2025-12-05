

import React from 'react';
import { motion } from 'framer-motion';


const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='education'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>  
          My <span className='text-purple'>Education</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          A summary of my academic background and qualifications.
        </p>
        <div className='max-w-4xl mx-auto space-y-8'>
          {/* Education Item 1 */}
          <div className='bg-dark-300 rounded-2xl p-6'>
            <h3 className='text-xl font-semibold mb-2'>Bachelor in Information Technology</h3>
            <span className='text-purple'>Padmakanya Multiple Campus </span> | baghbazar,kathmandu <span className='text-gray-400'>  2022- present</span>
            <p className='text-gray-300 mt-4'>
              Focusing on software development, data structures, and algorithms. Completed project on web application development.
            </p>  
          </div>
          {/* Education Item 2 */}
          <div className='bg-dark-300 rounded-2xl p-6'>
            <h3 className='text-xl font-semibold mb-2'>High School </h3>
            <span className='text-purple'>National School of Sciences </span> | lainchour,kathmandu <span className='text-gray-400'>  2019-2021</span>
            <p className='text-gray-300 mt-4'>
              Science stream 
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Education;
