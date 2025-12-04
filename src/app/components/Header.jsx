import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div initial={{scale:0}} whileInView={{scale: 1}} transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
            {/* <Image src={assets.profile_img} alt='img' className='rounded-full w-32'/> */}
            <Image src={assets.profileAdil} alt='img' className='rounded-full w-32 lg:w-40 h-32 lg:h-40 overflow-hidden border-4 border-blue-900'/>
        </motion.div>
        <motion.h3 initial={{y: -20, opacity: 0  }} whileInView={{y: 0, opacity: 1}} transition={{ duration: 0.6, delay: 0.3}} className='flex flex-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Adil Ahamed
            <Image src={assets.hand_icon} alt='img' className='w-6'/>
            </motion.h3>
            <motion.h1 initial={{y: -30, opacity: 0  }} whileInView={{y: 0, opacity: 1}} transition={{ duration: 0.8, delay: 0.5}} className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Mern Stack Developer</motion.h1>
            <motion.p initial={{opacity: 0  }} whileInView={{opacity: 1}} transition={{ duration: 0.6, delay: 0.7}} className='max-w-2xl mx-auto font-Ovo'>
                {/* I am a Mern Stack developer from Kerela, India with 2 years of experience in multiple companies. */}
                Hello! I am Adil Ahamed, a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving.
            </motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a initial={{y: 30, opacity: 0  }} whileInView={{y: 0, opacity: 1}} transition={{ duration: 0.6, delay: 1}} href="#contact" className='px-10 py-3 border border-white bg-black text-white rounded-full flex items-center gap-2 dark:bg-transparent'>contact me
                    <Image src={assets.right_arrow_white} alt='' className='w-4'/>
                </motion.a>
                <motion.a initial={{y: 30, opacity: 0  }} whileInView={{y: 0, opacity: 1}} transition={{ duration: 0.6, delay: 1.2}} href="/Adil Ahamed - Mern Stack Developer.pdf" download className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 dark:bg-white dark:text-black'>my resume
                    <Image src={assets.download_icon} alt='' className='w-4'/>
                </motion.a>
            </div>
    </div>
  );
}

export default Header
