import React from 'react'
import './ShadulePlane.css'



export const  ShadulePlane = () => {
    
     
    
    let mainInfo = {
        fromInfo: {
           city1: 'Vinnytsia',
           city2: 'Kyiv',
           city3: 'Xmelnitsk',
           city4: 'Odessa'
        }
    }
        
    
    
    return (
        <div className="container_shadule">
            <h1 className="shadule_header">РОЗКЛАД АВІА-РЕЙСІВ</h1>
            <table>
                <tr>
                    <th>Звідки</th>
                    <th>Куди</th>
                    <th>Вільні місця</th>
                    <th>Вартість</th>
                    
                </tr>
                <tr>
                    <td>{mainInfo.fromInfo.city1}</td>
                    <td>Хургада</td>
                    <td>34</td>
                    <td>1500гр</td>
                    
                </tr>
                <tr>
                    <td>{mainInfo.fromInfo.city2}</td>
                    <td>Дублін</td>
                    <td>15</td>
                    <td>2500</td>
                </tr>
                <tr>
                    <td>{mainInfo.fromInfo.city3}</td>
                    <td>Івано-Франківськ </td>
                    <td>25</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>{mainInfo.fromInfo.city4}</td>
                    <td>Магадан</td>
                    <td>8</td>
                    <td>1250</td>
                    
                </tr>
            </table>
            <h5 className="foter_header">*для того щоб переглядати додаткову інформацію , потрібно зареєструватись</h5>
        </div>
    )
}
