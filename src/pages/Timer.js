import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { TimerComponent } from "../components/CDTimer/counterDownTimer";

export function TimerPage() {
    const navigate = useNavigate()

    return (
        <TimerHTML>
            <header>
                <BsArrowLeft    onClick={() => navigate('/')} 
                                style={ {
                                    display: 'flex',
                                    color: 'white',
                                    fontSize: '30',
                                    position: 'fixed',
                                    left: '20px'
                                } }/>
                <p>Countdown Timer</p>
            </header>

            <TimerComponent style={{}}
                            time={60*14}/> 
            
        </TimerHTML>)
}

const TimerHTML = styled.div`
    display: block;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 30px;
    header {
        font-family: 'Roboto Condensed', sans-serif;
        color: white;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    main {
        display: flex;
        justify-content: center;
        margin-top: 30vh;
        height: 100%;
    }  
`