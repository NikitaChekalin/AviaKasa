// дОдаваня білету у базу
import React from 'react';
import '../Css/CreateTiketPage.css';
import { players} from '../tiketData'





export  const  CreateTicket = () => {
    //Рендер таблицы
    

    
    const sumbmitInfo = () => {
        console.log('Start work sumbmitInfo');
        //ПРИСВАЕВАЕМ ПЕРЕМЕНЫМ ЗНАЧЕНИЯ ИНПУТА
        var wherefrom = document.querySelector('.whereform').value;
        var where = document.querySelector('.where').value;
        var freePlaces = document.querySelector('.freePlaces').value;
        var costForEconom = document.querySelector('.costForEconom').value;
        var costForBiznes = document.querySelector('.costForBiznes').value;
        var amountOfWorkers = document.querySelector('.amountOfWorkers').value;
        var amountOfEkip = document.querySelector('.amountOfEkip').value;
        
        
        // В МАСИВ  ПУШИМ  ТО ЧТО ПОЛУЧИЛИ
        const pushARR = (wherefrom ,where,freePlaces,costForEconom,costForBiznes,amountOfWorkers,amountOfEkip,) => {
            players.push({'wherefrom':wherefrom,'where':where, "freePlaces": freePlaces,"costForEconom": costForEconom,"costForBiznes": costForBiznes ,"amountOfWorkers":amountOfWorkers,"amountOfEkip":amountOfEkip})
            alert('Білет доданий')
        }
        //ПРОВЕРКА НА ВВОД  ДАННЫХ
        if (amountOfEkip  !== '') {
            pushARR(wherefrom,where,freePlaces,costForEconom,costForBiznes,amountOfWorkers,amountOfEkip)
            
        } else {
            console.log(('Потрібно заповнити усі поля'))
        }
        console.log('End method submitInfo');
        
    }
    
    
    return(
        <div className="ticket_container">
            <div className="ticket_form">
                    
                    <h1 className='ticket_header_main'> *Додаваня Білету*</h1>
                    <h5 className='ticket_header'> Звідки</h5>
                <input   placeholder="Точка початку маршруту " className="whereform"  required/>
                    <h5 className='ticket_header'> Куди</h5>
                <input   placeholder="Точка кінця маршруту" className="where"  required/>   
                    <h5 className='ticket_header'> Вільні місця</h5>
                <input   placeholder="Кількість вільних місць" className="freePlaces"  required/>
                    <h5 className='ticket_header'> Вартість для Економу</h5>
                <input   placeholder="$...." className="costForEconom"  required/>      
                    <h5 className='ticket_header'> Вартість для Бізнес</h5>
                <input   placeholder="$...." className="costForBiznes"  required/>      
                    <h5 className='ticket_header'> Склад працівників</h5>
                <input   placeholder="Введіть ФІО складу команди " className="amountOfWorkers"  required/>      
                    <h5 className='ticket_header'> Склад екіпажу</h5>
                <input   placeholder="Введіть кількість" className="amountOfEkip"  required/>      
                   

                <button  className="buttInfo" onClick={sumbmitInfo} >Додати білет</button>
            </div>     
            
            
        </div>
        
    )
}
