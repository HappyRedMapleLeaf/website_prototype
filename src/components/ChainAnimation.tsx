import { ChildProp } from "../types"
import React from 'react'
import { useInView, animated, useTrail } from '@react-spring/web'

export default function ChainAnimation ({children}: ChildProp) {
    const items = React.Children.toArray(children)

    const [ref, isInView] = useInView({once: false, rootMargin: '30% 0% 0% 0%'})

    const trail = useTrail(items.length, {
        config: { mass: 2, friction: 30, clamp: true },
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 40,
            clamp: true,
    })

    return (
        <div ref={ref}>
        {trail.map(({ ...style }, index) => (
            <animated.div key={index} style={style}>
            <animated.div>{items[index]}</animated.div>
            </animated.div>
        ))}
        </div>
    )
}