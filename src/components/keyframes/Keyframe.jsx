import React from 'react'
import './keyframe.css'
import { motion } from 'framer-motion'

const Keyframe = () => {
  return (
    <div className='box-container'>
        <h1>KeyFrame</h1>
        <motion.div
            className='box'
            animate={{
              scale:[1, 1.4, 1.4, 1, 1],
              borderRadius:["20%", "20%", "50%", "50%", "20%"],
              rotate:[0, 0, 270, 270, 0 ]
            }}
            transition={{
              duration:2
            }}
          >

      </motion.div>
    </div>
  )
}

export default Keyframe