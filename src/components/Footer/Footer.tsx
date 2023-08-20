import './Footer.css'

import FooterDefault from "../../images/footer1.png"

import { useInView, useSpring, animated } from '@react-spring/web'

export default function Footer() {

    const [ref, isInView] = useInView({
        rootMargin: "5%",
    })
    
    const styles2 = useSpring({
        y: isInView ? "0%" : "100%",
        config: {
            tension: 90,
            clamp: true,
        },
    })

    return (
        <div className="Footer">
            <animated.div className="FooterImageContainer" style={styles2} ref={ref} >
                <img className="FooterImage2" src={FooterDefault} alt="Hey!" style={{display: "block"}} />
            </animated.div>
        </div>
    )
}