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
        return <Card id={contents.id} section={contents.section} header={contents.header} date={contents.date} body={contents.body} img={contents.img} links={contents.links}/>
    });

    //This will filter each card into the appropriate array
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
            default:
                console.log("This doesn't belong anywhere, add more info to Content.js");
        }
    }

    //Return organized sections of cards based on their section
    return (
        <div>
            <h2 id='about'>About Me</h2>
            {aboArray}
            <h2 id='education'>Education</h2>
            {eduArray}
            <h2 id='projects'>Projects</h2>
            {proArray}
            <h2 id='experience'>Experience</h2>
            {expArray}
        </div>
    );
}



export default CardList;

