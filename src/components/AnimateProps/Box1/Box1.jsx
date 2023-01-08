import React, { useState } from 'react'
import './box1.css'
import { motion } from 'framer-motion'

const Box1 = () => {

    const [isAnimate, setIsAnimate] = useState(false)

  return (
    <div className='box-container'>
        <motion.div 
        className="box"
        animate={{
          x: isAnimate ? "50vw" : 0 ,
          opacity:isAnimate ? 1 : 0.5,
          scale:isAnimate ? 2 : 1,
          rotate:isAnimate ? 360 : 0,
        }}

        initial={{
          opacity:0.5
        }}

         //duration is used with tween while stiffness with spring

        transition={{
          type:'spring',
          stiffness:100,
          damping:30
        }}
        // transition={{
        //   type:'tween',     
        //   duration:1
        // }}
        onClick={() => setIsAnimate(!isAnimate)}
        >

        </motion.div>
    </div>
  )
}

export default Box1