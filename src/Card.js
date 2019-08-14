import React from "react";
import 'tachyons';
import './index.css';

const cardStyle = {
    width: '99%',
    color: 'black'
}

const textStyle = {
    position: 'relative',
    textAlign: 'center',
    whiteSpace: 'pre-wrap'
};

const Card = ({ id, section, header, date, body, img, links }) => {

    //If a card has a link, it will render a link leading to more information
    var linkCom;
    if(links.length <= 3)
        linkCom = '';
    else
        linkCom = <a href={links}>For More Information</a>

    return(
        <div className='flex items-center tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2' style={cardStyle}>
            <img id='CardImage' className='ma10' src={img} alt="Loading..."></img>
            <div className='' id='CardBody' style={textStyle}>
                <h2>{header}</h2>    
                <p className='tl pa3'>{body}</p>
                {linkCom}
            </div>
            <h4 className='' id='CardDate'>{date}</h4>
        </div>
    );
}

export default Card;