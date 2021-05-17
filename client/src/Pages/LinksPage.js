//БроНЮВАННЯ БІЛЕТУ
import React from 'react'; 
import '../LinksPage.css'
import * as ReactBootStrap from 'react-bootstrap' 
import { useState } from "react";
import { players } from '../tiketData'



export  const  LinksPage = () => {
   const [busket, setBusket  ] = useState([]);

   
   const deleteTicket = () => {
     setBusket([])
   }
   
   
   function deleteChoosenTiket(index) {
    setBusket([...busket.slice(0, index), ...busket.slice(index + 1)]);
  }



   const renderArrayPlayers = (player, index) => {
      //РЕНДЕР ИЗНАЧАЛЬНОЙ ТАБЫ
      return (
        <tr key={index}>
          <td>{player.wherefrom}</td>
          <td>{player.where}</td>
          <td>{player.freePlaces}</td>
          <td>{player.costForEconom}</td>
          <td>{player.costForBiznes}</td>
          <td>{player.amountOfWorkers}</td>
          <td>{player.amountOfEkip}</td>
          <td>
            <button onClick={() =>setBusket((prevValue) => {
               return [...prevValue, player];
               })}
               id="elem"
               className="addButton">+</button>{" "}
          </td>
        </tr>
      );
    };
   
    //функиця для рендера
    const renderPlateTicket = (shortInfo, index) => {
      return (
         <div className="flip-card-inner">
            <div key={index}>
               <h2> Звідки:  {shortInfo.wherefrom}</h2>
               <h2>Куди: {shortInfo.where}</h2>
               <h2>Ціна для бізнесу: {shortInfo.costForBiznes}</h2>
               <h2>Працівники: {shortInfo.amountOfWorkers}</h2>
              
            </div>
            <button  onClick={() => deleteChoosenTiket(index)} className="deleteButton" >Удалить с корзины</button> {/*здесь буду вешать на onClick событие 'removeTicket' */}
        </div>
      );  
    };
  
    return (
      <div>
        <input type="checkbox" id="side-checkbox" />
        <div className="side-panel">
          <label className="side-button-2" htmlFor="side-checkbox">
            +
          </label>
          <div className="side-title">Вміст корзини:</div>
          <button onClick={deleteTicket} className="deleteButton"> Очистити всю корзину</button>
          <div className="flip-card">
              {busket.map(renderPlateTicket)}{" "}
          </div>
        </div>
        <div>
          <ul>
            {
             
            }
          </ul>
        </div>
        <ReactBootStrap.Table className="table_container">
          <thead>
            <tr>
              <th>Звідки</th>
              <th>Куди</th>
              <th>Вільні місця</th>
              <th>Вартість для економ-класу</th>
              <th>Вартість для бізнес-класу</th>
              <th>Склад Екіпажу</th>
              <th>Працівники</th>
              <th>Додати</th>
            </tr>
          </thead>
          <tbody>{players.map(renderArrayPlayers)}</tbody>
        </ReactBootStrap.Table>
  
        <div className="side-button-1-wr">
          <label className="side-button-1" htmlFor="side-checkbox">
            <div className="side-b side-open">Відкрити корзину</div>
          </label>
        </div>
      </div>
    );
  }
  
