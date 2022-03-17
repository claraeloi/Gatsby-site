import React from "react";
import * as Styled from './styled';
import Images from '../Images'

const Card = (props) => {
    return(
        <Styled.CardWrapper className="card" background={props.backgroundCard} primary={props.styleDefault}>
            <Images name={props.nameImage} />
            <div className="card-body">
                <h5 className="card-title">{props.titleCard}</h5>
                <p className="card-text">{props.textCard}</p>
                <a href="#" className={`btn btn-${props.colorButton}`}>Visitar</a>
            </div>
        </Styled.CardWrapper>
    )
}

export default Card