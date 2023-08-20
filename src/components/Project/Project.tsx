import "./Project.css"
import { ProjectProp } from "../../types"
import { useInView, useSpring, animated } from '@react-spring/web'
import timelineCircle from "../../images/timelineCircle.svg"
import { useState, useEffect } from "react"

export default function Project({image, title, children, month, year}: ProjectProp) {
    const [ref1, isInView1] = useInView({once: true})
    const [ref2, isInView2] = useInView({once: false})
    const [height, setHeight] = useState(200)


    
    const leftAnim = useSpring({
        x: isInView1 ? "0%" : "-250%",
        opacity: isInView1 ? 1 : 0,
        config: {
            clamp: true,
            mass: 0.2,
            friction: 90,
        },
    })

    const rightAnim = useSpring({
        x: isInView2 ? "0%" : "100%",
        opacity: isInView2 ? 1 : 0,
        config: {
            tension: 60,
            clamp: true,
        },
    })

    useEffect(() => {
        // set a callback on resize to update the height of the middle div
        function handleResize() {
            setHeight(ref2.current?.offsetWidth * 9 / 16 || 200)
        }

        window.addEventListener("resize", handleResize)
        window.addEventListener("load", handleResize)

        // remove event listener on return
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("load", handleResize)
        }
    }, [ref2])

    return (
    <>
        <div className="OuterContainer">
            <animated.div className="Left" style={leftAnim} ref={ref1}>
                <div className="Top" />
                <div className="Middle" style={{height: height + "px"}}>
                    <p>
                        {month}
                        <br />
                        {year}
                    </p>
                    <img src={timelineCircle} alt="" height="80px" />
                </div>
                <div className="Bottom" />
            </animated.div>

            <animated.div className="Right" style={rightAnim} ref={ref2}>
                <div className="Top" />
                <div className="Middle" style={{height: height + "px"}}>asd</div>
                <div className="Bottom" />
            </animated.div>
        </div>
    </>
    )
}