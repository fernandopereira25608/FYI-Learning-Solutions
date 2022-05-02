import Calendar from '../../Images/icons/Calendar.svg'
import Clock from "../../Images/icons/Clock.svg"

import Campanha from '../../Images/campaign-creators.png'

import React from 'react'

import './Card.css'


function Card() {
    return (
        <div class="curso-card" onClick="#openmodal">
            <div class="data-content">
                <h3>31<br /> April</h3>
                <img src={Calendar} class="calendar-icon" />
            </div>
            <div class="info-card">
                <div class="info-itens">
                    <h3>Progamming Microsoft Dynamics</h3>
                    <p>Ativo</p>
                    <img src={Clock} class="clock-icon"/>
                    <p>Presencial</p>
                </div>
            </div>
        </div>
    )
}

export default Card;