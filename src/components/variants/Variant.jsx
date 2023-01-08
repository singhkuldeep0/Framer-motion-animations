import React from 'react'
import './variant.css'
import {motion} from 'framer-motion'

const Variant = () => {

     const boxVariant = {
         hidden :{
             x:"-100vw",
         },
         visible :{
             x:0,
             transition: {
                delay: 0.5,
                when: "beforeChildren", 
                staggerChildren: 0.4,
            },
         }
     }

     const listVariant = {
         hidden :{
             x:-30,
             opacity:0
         },
         visible :{
             x:0,
             opacity:1,
            
         }
     }

     return (
        <div className='box-container'>
            <h1>Variant</h1>
            <motion.div
                className='box'
                 variants={boxVariant}
                 initial="hidden"
                 animate="visible"
                 transition={{
                    type:"tween",
                    duration:0.6
                }}
            >
                {[1,2,3].map(box => {
                    return <motion.li 
                    variants={listVariant}
                     className='boxItem'></motion.li>
                })}
            </motion.div>

        </div>
    )
}


export default Variant
