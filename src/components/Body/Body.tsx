import './Body.css'

import { ChildProp } from "../../types"

export default function Body({children}: ChildProp) {
    return (
        <div className="OuterContent">
            <div className="InnerContent">
                {/* // this div is necessary for useInView to work */}
                <div style={{height: '1px'}}></div>
                {children}
            </div>
        </div>
    )
}