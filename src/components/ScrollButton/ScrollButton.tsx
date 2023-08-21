import './ScrollButton.css'
import { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import downArrow from "../../images/downArrow.svg"

export default function ScrollButton() {
    const [visible, setVisible] = useState(false)

    function onClick() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const [springs, api] = useSpring(() => ({
        from: { opacity: 0 },
        config: { mass: 2 }
    }))

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > window.innerHeight * 3 / 4) {
                if (!visible) {
                    setVisible(true)
                    api.start({
                        from: {
                            opacity: 0,
                        },
                        to: {
                            opacity: 1,
                        },
                    })
                }
            } else {
                if (visible) {
                    setVisible(false)
                    api.start({
                        from: {
                            opacity: 1,
                        },
                        to: {
                            opacity: 0,
                        },
                    })
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [visible, api])

    return (
        <animated.button className="ScrollButton" onClick={visible ? onClick : () => {}} style={{...springs}}>
            <img src={downArrow} width={"40px"} height={"40px"} alt="Scroll to top" style={visible ? {cursor: "pointer"} : {cursor: "default"}}/>
        </animated.button>
    )
}