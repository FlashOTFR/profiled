import React, { Component } from 'react';
import './style.css';
import Sh1 from '../assets/comicall.png';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Portfolio = () => {
    const cardInfo = [
        { image: `${ Sh1 }`, link:"https://chargenproj.herokuapp.com/", title: "D&D Character Sheet Generator", text: "Make your own character sheets for dungeons and dragons quickly!"},
        { image: `${ Sh1 }`, link:"https://maximilianc88.github.io/ComiCall/", title: "ComiCall", text: "ComiCall!  For comic searches big and small!"},
        { image: `${ Sh1 }`, link:"https://flashotfr.github.io/Homework5/", title: "Note Taker", text: "Note taking made easy with this app!"},
        { image: `${ Sh1 }`, link:"https://bigolbudgetboy.herokuapp.com/", title: "Budget Tracker", text: "Keep an eye on your spending with this budget tracker!"},
        { image: `${ Sh1 }`, link:"https://flashotfr.github.io/Homework3/", title: "Password Generator", text: "Don't want to think up a new password?  Let this app do it for you!"},
        { image: `${ Sh1 }`, link:"https://flashotfr.github.io/quizlet/", title: "Quiz App", text: "Challenge yourself to get the highest score with this quiz app!"}
    ];

    const renderCard = (card, index) => {
        return(
            <Card style={{ width: '18rem' }} key={index} className="box">
                <Card.Img variant="top"/>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                    {card.text}
                    </Card.Text>
                    <Button variant="primary" href={card.link}>Check it out!</Button>
                </Card.Body>
            </Card> 
        )
    }    
    return ( 
        <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <section className="center">
                                <div className="center-text">
                                    <h1>Welcome to my portfolio page! If you are here, you probably have an interest in seeing some of my work! Feel free to peruse some of my projects located here. Or if you prefer, you can check out my github by visiting the contact page!</h1>
                                </div> 
                                
        <div className="grid">{cardInfo.map(renderCard)}</div>
                                
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
             );
        }
 
export default Portfolio;