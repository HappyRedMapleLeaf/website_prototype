import "./Project.css"
import { ProjectProp } from "../../types"
import { useInView, useSpring, animated } from '@react-spring/web'
import timelineCircle from "../../images/timelineCircle.svg"
import { useState, useEffect, useRef } from "react"
import HoverGlow from "../HoverGlow/HoverGlow"

export default function Project({image, title, children, month, year}: ProjectProp) {

    // use react-spring to slide the CoverPanel div up and down on mouse click
    const [isCoverPanelOpen, setIsCoverPanelOpen] = useState(false)
    const coverPanelAnim = useSpring({
        y: isCoverPanelOpen ? "-105%" : "0%",
        config: {
            tension: 100,
            clamp: true,
        },
    })

    const [refLeft, isInViewLeft] = useInView({once: true})
    const [refRight, isInViewRight] = useInView({once: false})
    const [height, setHeight] = useState(200)

    const refContent = useRef<HTMLDivElement>(null)
    const refText = useRef<HTMLDivElement>(null)
    
    const leftAnim = useSpring({
        x: isInViewLeft ? "0%" : "-250%",
        opacity: isInViewLeft ? 1 : 0,
        config: {
            clamp: true,
            mass: 0.2,
            friction: 90,
        },
    })

    const rightAnim = useSpring({
        x: isInViewRight ? "0%" : "100%",
        opacity: isInViewRight ? 1 : 0,
        config: {
            tension: 60,
            clamp: true,
        },
    })

    useEffect(() => {
        // set a callback on resize to update the height of the middle div
        function handleResize() {
            let c = refContent.current
            if (c) {
                setHeight(c.offsetWidth * 9 / 16)
            }
        }

        // initial size
        handleResize()

        window.addEventListener("resize", handleResize)

        // remove event listener on return
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [refContent])

    return (
    <>
        <div className="OuterContainer">
            <animated.div className="Left" style={leftAnim} ref={refLeft}>
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

            <animated.div className="Right" style={rightAnim} ref={refRight}>
                <div className="Top" />
                <HoverGlow>
                    <div className="Middle" style={{height: height + "px"}} ref={refContent}>
                        <animated.div className="CoverPanel" onClick={() => {setIsCoverPanelOpen(true)}} style={coverPanelAnim}>
                            <div className="CoverText">
                                <h1>{title}</h1>
                                <p>Click to show more</p>
                            </div>  
                            <img src={image} alt="" />
                        </animated.div>

                        <div className="Content" ref={refText}>
                            <button onClick={() => {setIsCoverPanelOpen(false)}}><code>Back</code></button>
                            {children}
                        </div>
                    </div>
                </HoverGlow>
                <div className="Bottom" />
            </animated.div>
        </div>
    </>
    )
}