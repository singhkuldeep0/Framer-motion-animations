import React from 'react'
import './useanimatehook.css'
import {motion, useAnimation} from 'framer-motion'

const UseAnimateHook = () => {

    const control = useAnimation()

  return (
    <div className='box-container'>
     <h1>KeyFrame</h1>

        <button onClick={()=>{
            control.start({x:300 , transition:{ duration:1 }
            })
        }}>Move Right</button>
        <button onClick={()=>{
            control.start({x:0 , transition:{ duration:1 }
            })
        }}>More Left</button>
        <button onClick={()=>{
            control.start({borderRadius:"50%" , transition:{ duration:0.4 }
            })
        }}>Circle</button>
        <button  onClick={()=>{
            control.start({borderRadius:"0%" , transition:{ duration:0.4 }
            })
        }}>Square</button>
        <button onClick={()=>{
            control.stop()
        }}>Stop</button>
        <motion.div
            className='box'
            animate={control}
          >
        </motion.div>
    </div>
  )
}

export default UseAnimateHook