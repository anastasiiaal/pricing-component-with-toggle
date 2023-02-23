import React from "react";

import Card from "./Card";
import cards from "/cards.js";

export default function Main() {

    const [isToggled, setIsToggled] = React.useState(true);

    function onToggle () {
        setIsToggled(prevState => !prevState)
    }

    const cardsArray = cards.map(card => {
        return ( 
            <Card
                key = {card.id}
                state = {isToggled}
                {...card}
            />
        )
    })

    return (
        <div className="container">

            <div className="toggle-wrapper">
                <h2>Our Pricing</h2>
                <div className="toggle" onClick={onToggle}>
                    <p className="toggle__p">Annually</p>
                    <div className="toggle__box" tabIndex="0" onKeyDown={onToggle}>
                        <div className={isToggled ? "toggle__ball active" : "toggle__ball"} id="toggle__ball"></div>
                    </div>
                    <p className="toggle__p">Monthly</p>
                </div>
            </div>

            <div className="card-wrapper">
                {cardsArray}
            </div>

        </div>
    )
}