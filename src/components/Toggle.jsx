// this component is no longer needed for now
import React from "react"

export default function Toggle () {

    const [isToggled, setIsToggled] = React.useState(false);

    function onToggle () {
        setIsToggled(prevState => !prevState)
    }

    return (
        <div className="toggle-wrapper">
            <h2>Our pricing</h2>
            <div className="toggle">
                <p className="toggle__p">Annually</p>
                <div className="toggle__box" onClick={onToggle}>
                    <div className={isToggled ? "toggle__ball active" : "toggle__ball"} id="toggle__ball"></div>
                </div>
                <p className="toggle__p">Monthly</p>
            </div>
        </div>
    )
}