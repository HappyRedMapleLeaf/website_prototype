import { NavLink } from "react-router-dom"
import "./LongButton.css"
import HoverGlow from "../HoverGlow/HoverGlow"

type LongButtonProps = {
    img: string,
    color: string,
    href: string,
    text: string
}

export default function LongButton({img, color, href, text}: LongButtonProps) {
    function scroll() {
        //window.scrollTo(0, 0)
    }

    return (
        <HoverGlow>
            <NavLink to={href} className="LongButtonLink" onClick={scroll}>
                <div className="LongButton" style={{backgroundColor: color, whiteSpace: 'pre-wrap'}}>
                    <img className="LongButtonImage" src={img} alt={text} height="44px"/>
                    <div className="LongButtonText">
                        {text}
                    </div>
                </div>
            </NavLink>
        </HoverGlow>
    );
}