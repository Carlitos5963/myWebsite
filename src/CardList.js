import React from 'react';
import Card from './Card';

var aboArray = [];
var eduArray = [];
var proArray = [];
var expArray = [];
//Returns several card arrays based on what section they are in
const CardList = ( {content} ) => {

    //Array holds every card before it is filtered
    const CardArray = content.map((contents) => {
        return <Card id={contents.id} section={contents.section} header={contents.header} body={contents.body} img={contents.img}/>
    });

    //This will filter each card into the appropriate array
    //TODO: Fix the call to CardArray in the switch statement
    for(var i = 0; i < CardArray.length; i++){
        switch(CardArray[i].props.section){
            case 'about':
                aboArray.push(CardArray[i]);
                break;
            case 'education':
                eduArray.push(CardArray[i]);
                break;
            case 'projects':
                proArray.push(CardArray[i]);
                break;
            case "experience":
                expArray.push(CardArray[i]);
                break;
        }
    }

    return (
        <div>
            <h1 id='about'>About Me</h1>
            {aboArray}
            <h1 id='education'>Education</h1>
            {eduArray}
            <h1 id='projects'>Projects</h1>
            {proArray}
            <h1 id='experience'>Experience</h1>
            {expArray}
        </div>
    );
}



export default CardList;