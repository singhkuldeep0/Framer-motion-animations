import React from 'react'
import './box2.css'
import {motion} from 'framer-motion'

const Box2 = () => {
  return (
    <div className='box-container'> 
    <h1>Drag</h1>
          <motion.div
           className='box'
           drag
          //  drag="x"
          //  drag="y"
          dragConstraints={{
            right:20,
            left:-20,
            top:5,
            bottom:5
          }}
           whileHover={{
              scale:1.1
           }}
           whileTap={{
            scale:0.9
           }}
          >

          </motion.div>
    </div>
  )
}

export default Box2
