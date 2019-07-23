import React from "react";
import 'tachyons';

const imgStyle = {
    width: '30%',
    border: 'thin solid red',
    margin: '10px'
};

const cardStyle = {
    width: '99%',
    color: 'red'
}

const Card = ({ id, section, header, body, img }) => {
    return(
        <div className=' flex items-center tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2' style={cardStyle}>
            <img className='' alt="Picture of thing" src={img} style={imgStyle}></img>
            <div>
                <h2>{header}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default Card;