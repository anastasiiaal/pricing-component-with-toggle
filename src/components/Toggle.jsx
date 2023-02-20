import React from "react"

export default function Toggle () {
    return (
        <div className="toggle-wrapper">
            <h2>Our pricing</h2>
            <div className="toggle">
                <p className="toggle__p">Annually</p>
                <div className="toggle__box">
                    <div className="toggle__ball"></div>
                </div>
                <p className="toggle__p">Monthly</p>
            </div>
        </div>
    )
}