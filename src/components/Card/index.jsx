import React from "react";

import CardStyles from './card.module.scss'

const Card = () => {
    return(
        <div className={CardStyles.card}>
            <h1>Title Card</h1>
            <h1 className={CardStyles.h1}>Title 2 Card</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, itaque, maxime molestias libero enim, eligendi officiis voluptates corporis eius quia dolorem saepe! Iste vero nisi et neque at delectus ipsum?</p>
            <button>Butto Card</button>
        </div>
    )
}

export default Card