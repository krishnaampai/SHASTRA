import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion'
import React from 'react'

const ScrollView = ({children}) => {
  const[ref,inView] = useInView({
    threshold :1,
    triggerOnce: false
  })

  return (
    <motion.div 
      ref = {ref}
      initial={{opacity:0,y:60}}
      animate = {inView?{opacity:1,y:0, transition: { duration: 1, ease: "easeOut"}} : {opacity:0,y:40,transitionDuration:0.5}}
    >{children}

    </motion.div>
  )
}

export default ScrollView