import './Header.css'
import Canvas from './Canvas'
import { HeaderTextProps, HeaderProps } from '../../types'

import { detectTablet } from '../../DetectMobile'

import { useInView, useSpring, animated } from '@react-spring/web'

import downArrow from "../../images/downArrow.svg"

function HeaderText({text}: HeaderTextProps) {
    const [ref, isInView] = useInView({once: true})

    const styles = useSpring({
        opacity: isInView ? 1 : 0,
        config: {
            mass: 50,
            clamp: true,
        },
    })
  
    return (
        <animated.div className="HeadContainer" ref={ref} style={styles}>
            <div className="TitleContainer">
                <div className="TitleBanner"
                    style={{
                        marginTop: "calc(42vh - 70px)",
                        marginBottom: detectTablet() ? "calc(35vh - 70px)" : "calc(40vh - 70px)"
                    }}>
                    <h1>{text}</h1>
                    {detectTablet() ? <p>Tap around to rotate</p> : <></>}
                </div>
                
            </div>
            <img src={downArrow} alt="Scroll Down" />
            <p>
                scroll down
            </p>
        </animated.div>
    )
}

export default function Header({rotationAxis, object, debug, fov, yTranslate, zTranslate, text}: HeaderProps) {
    return (
        <>
            <div className="Head">
                <HeaderText text={text}/>
                <Canvas rotationAxis={rotationAxis}
                        object={object}
                        debug={debug}
                        fov={fov}
                        yTranslate={yTranslate}
                        zTranslate={zTranslate}/>
            </div>
        </>
    )
}
