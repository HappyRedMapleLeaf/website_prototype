import { NavLink } from "react-router-dom"
import "./LongButton.css"

type LongButtonProps = {
    img: string,
    color: string,
    href: string,
    text: string,
    alt: string
}

export default function LongButton({img, color, href, text, alt}: LongButtonProps) {
    function scroll() {
        //window.scrollTo(0, 0)
    }

    return (
        <NavLink to={href} className="LongButtonLink" onClick={scroll}>
            <div className="LongButton" style={{backgroundColor: color, whiteSpace: 'pre-wrap'}}>
                <img className="LongButtonImage" src={img} alt={alt} height="50px"/>
                <div className="LongButtonText">
                    {text}
                </div>
            </div>
        </NavLink>
    );
}