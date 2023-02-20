import React from "react"


export default function Card (props) {

    let price = props.pricePerYear;
    
    if (document.getElementById("toggle__ball") && document.getElementById("toggle__ball").classList.contains("active")) {
        price = Math.floor(price*10)/100
    }

    return (
        <div className={props.isActive ? "card active" : "card"}>
            <h3>{props.title}</h3>
            <h1 className="card__price">
                <span>$</span> {price}
            </h1>
            <p>{props.storage} Storage</p>
            <p>{props.users} Users Allowed</p>
            <p className="last">Send up to {props.sendingCapacity} GB</p>
            <div className={props.isActive ? "button active" : "button"}>
                Learn More
            </div>
        </div>
    )
}