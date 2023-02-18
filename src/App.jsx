import React from "react"

import Attribution from "./components/Attribution"
import BgWaves from "./components/BgWaves"
import Card from "./components/Card"

import cards from "../cards.js"

function App() {
    const cardsArray = cards.map(card => {
        return ( 
            <Card
                key = {card.id}
                {...card}
            />
        )
    })
    return (
        <main>
            <BgWaves />
            <div className="card-wrapper">
                {cardsArray}
            </div>
            <Attribution />
        </main>
    )
}

export default App