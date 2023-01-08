import React from 'react'
import Box1 from './AnimateProps/Box1'
import Box2 from './eventsAndDrag/Box2'
import Keyframe from './keyframes/Keyframe'
import UseAnimateHook from './useAnimation/UseAnimateHook'
import Variant from './variants/Variant'

const Index = () => {
  return (
    <div >
      <Box1/>
      <Box2/>
      <Variant/>
      <Keyframe/>
      <UseAnimateHook/>
    </div>
  )
}

export default Index
