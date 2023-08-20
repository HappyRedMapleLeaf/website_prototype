import { useInView, animated } from '@react-spring/web'
import { ChildProp } from "../types"

export default function FadeParagraph ({children}: ChildProp) {
    const [ref, springs] = useInView(() => ({
        from: {
            y: 50,
            opacity: 0,
        },
        to: {
            y: 0,
            opacity: 1,
        },
        config: {
            mass: 2,
            friction: 40,
            clamp: true,
        },
    }))
  
    return (
        <animated.p ref={ref} style={springs}>{children}</animated.p>
    )
}