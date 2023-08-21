import { ChildProp } from "../../types"
import './HoverGlow.css'

export default function HoverGlow({children}: ChildProp) {
    return (
        <div className="HoverGlow">
            {children}
        </div>
    )
}