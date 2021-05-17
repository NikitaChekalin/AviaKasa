
// РОЗКЛАД ПОЛЬОТІВ
import '../Css/ShadulePlanePage.css'
import React from 'react';
import * as ReactBootStrap from 'react-bootstrap' //nf,kbwz
import {players}  from '../tiketData'    //база данних





export  const  ShadulePlanePage = () => {
    const renderPlayer  = (player , index) => {
        return (
            <tr  key={index}>
                <td>{player.wherefrom}</td>
                <td>{player.where}</td>
                <td>{player.freePlaces}</td>
                <td>{player.costForEconom}</td>
                <td>{player.costForBiznes}</td>
                <td>{player.amountOfWorkers}</td>
                <td>{player.amountOfEkip}</td>
            </tr>
        )
    }
    let searchValue = ( ) => document.querySelectorAll(".renderInput")
        if (searchValue) {
            window.addEventListener(  'input', (e) => {

                [...document.querySelectorAll(".rendredHere tr")].forEach(item => {
                    if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                        item.style.borderRadius = "30px";
                        item.style.display = "";
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        } 

    
    


    return(
        <div>
                
            <div className="fields">
            <input type="text" onAuxClick={searchValue} name="search" placeholder="Search.."/>
            
            </div>  
            <ReactBootStrap.Table>
                <thead>
                    <tr>
                        <th>Звідки</th>
                        <th>Куди</th>
                        <th>Вільні місця</th>
                        <th>Вартість для економ-класу</th>
                        <th>Вартість для бізнес-класу</th>
                        <th>Склад Екіпажу</th>
                        <th>Працівники</th>
                    </tr>
                </thead>
                
                <tbody   className="rendredHere">
                    {players.map(renderPlayer)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
        )
}
