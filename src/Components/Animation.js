import React from 'react'
import { useSpring, animated } from '@react-spring/web'

function Animation() {
    const [spring,setSpring] = useSpring(()=>({
        from:{x:0,background:"#5A20CB"},
        to:{x:300, background:"#22CB5C"},
        loop:{reverse:true},
        config:{duration:1000},
    }),[])

    return (
        <animated.div style={{
            height:60,
            width:60,
            borderRadius:20,
            ...spring
        }}>
        </animated.div>
    )
}

export default Animation