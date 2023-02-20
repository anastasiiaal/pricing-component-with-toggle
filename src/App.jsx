import React from "react"

import BgWaves from "./components/BgWaves"
import Toggle from "./components/Toggle"
import Card from "./components/Card"
import Attribution from "./components/Attribution"

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
            <Toggle />
            <div className="card-wrapper">
                {cardsArray}
            </div>
            <Attribution />
        </main>
    )
}

export default App