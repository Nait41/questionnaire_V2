import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Form, Tooltip } from 'react-bootstrap';
import "./Home.css";

export default function Home() {

    const [profHarm, setProfHarm] = useState(false);
    const [smoke, setSmoke] = useState(false);
    const profHarmArray = ["profHarm_Yes", "profHarm_No"];
    const smokeArray = ["smoke_Yes", "smoke_No"];
    const foodArray = [
        "Всеядный(ая)", 
        "Всеядный(ая), исключая т.н. красное мясо",
        "Всеядный(ая), исключая рыбу",
        "Вегетарианец(ка), но не исключаю рыбу",
        "Вегетарианец(ка), но не исключаю молочные продукты",
        "Вегетарианец(ка), но не исключаю молочные продукты и яйца",
        "Веган",
        "Исключаю молочные продукты",
        "Безглютеновая диета",
        "Кето-диета",
        "Low Foodmap",
    ];
    const [checkedFood, setCheckedFood] = useState(
        new Array(foodArray.length).fill(false)
    );

    useEffect(() => {
        
    }, []);

    const handleOnChange = (position) => {
        const updatedCheckedFood = checkedFood.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedFood(updatedCheckedFood);
    };

    return (
        <div className="container">
            <div className="card mb-3" style={{height: 200, width: 900, alignItems: 'center'}}>
                <div className='card-body'>
                    <div style={{fontSize: 20, position: 'absolute', fontFamily: 'cursive', top: 40, left: 50}}>Место настоящего проживания:</div>
                    <input
                      className="input"
                      type="text" 
                      placeholder="Введите место проживания"
                      style={{border: 0, outline: 0, width: 400, fontSize: 20, fontFamily: 'cursive',position: 'absolute', left: 50, top: 120}}
                      name="place">
                    </input>
                    <span className="underline"></span>
                    <span className="static-underline"></span>
                </div>
            </div>
            <div className="card mb-3" style={{height: 355, width: 900, alignItems: 'center'}}>
                <div className='card-body'>
                    
                    <div 
                        style={{fontSize: 20, position: 'absolute', fontFamily: 'cursive', top: 40, left: 50}} 
                        data-tooltip="Факторы трудового процесса и производственной среды, оказывающие неблагоприятное воздействие на здоровье и работоспособность человека 
                        и вызывающие при определённых условиях развитие профессиональных болезней.">
                        Профессиональные вредности:
                    </div>
                    <div style={{position: 'absolute', fontFamily: 'cursive', top: 110, left: 50}}>
                        <div className="form-check">
                            <input 
                                className="form-check-input me-1"
                                checked = {profHarm == profHarmArray.at(0)}
                                onChange = {() => setProfHarm((current) => profHarmArray.at(0))}
                                type="radio"
                                value="" 
                                id="Checkbox"/>
                            <label className="form-check-label" for="Checkbox" style={{minWidth: 200, textIndent:0, textAlign:'left'}}>Да</label>
                        </div>
                        <div className="form-check">
                            <input
                                style={{}} 
                                className="form-check-input me-1"
                                checked = {profHarm == profHarmArray.at(1)}
                                onChange = {() => setProfHarm((current) => profHarmArray.at(1))}
                                type="radio" 
                                value="" 
                                id="Checkbox"/>
                            <label className="form-check-label" for="Checkbox" style={{minWidth: 200, textIndent:0, textAlign:'left'}}>Нет</label>
                        </div>
                        <div style={{fontSize: 20, position: 'absolute', fontFamily: 'cursive', top: 80, left: -98, width: 250}}>Какая:</div>
                        <input
                            className="input"
                            type="text" 
                            placeholder="Введите профессиональную вредность"
                            style={{border: 0, outline: 0, width: 400, fontSize: 20, fontFamily: 'cursive',position: 'absolute', left: -3, top: 165}}
                            name="place">
                        </input>
                        <span className="underline" style={{left: 1, top: 197}}></span>
                        <span className="static-underline" style={{left: 1, top: 197}}></span>
                    </div>
                </div>
            </div>
            <div className="card mb-3" style={{height: 580, width: 900, alignItems: 'center'}}>
                <div className='card-body'>
                    
                    <div 
                        style={{fontSize: 20, position: 'absolute', fontFamily: 'cursive', top: 40, left: 50}}>
                        По своим привычкам питания вы себя оцениваете как:
                    </div>
                    <div style={{position: 'absolute', fontFamily: 'cursive', top: 110, left: 20}}>
                    <ul className="food-list">
                    {foodArray.map((name, index) => {
                         return (
                            <li key={index} style={{listStyleType: 'none', top: index*25}}>
                                <div className="toppings-list-item">
                                    <div className="left-section">
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            id={`checkbox-${index}`}
                                            name={name}
                                            value={name}
                                            checked={checkedFood[index]}
                                            onChange={() => handleOnChange(index)}
                                        />
                                        <label htmlFor={`checkbox-${index}`} style={{minWidth: 500, textAlign:'left', textIndent:10}}>{name}</label>
                                    </div>
                                </div>
                                </li>
                            );
                    })}
                    </ul>
                    </div>
                    <div style={{fontSize: 20, position: 'absolute', fontFamily: 'cursive', top: 410, left: 23, width: 350}}>Если другая, то укажите какая:</div>
                    <input
                        className="input"
                        type="text" 
                        placeholder="Укажите диету"
                        style={{border: 0, outline: 0, width: 400, fontSize: 20, fontFamily: 'cursive',position: 'absolute', left: 50, top: 500}}
                        name="place">
                    </input>
                    <span className="underline" style={{left: 51, top: 531}}></span>
                    <span className="static-underline" style={{left: 51, top: 531}}></span>
                </div>
            </div>
            <div className="card mb-3" style={{height: 355, width: 900, alignItems: 'center'}}>
                <div className='card-body'>
                    
                    <div 
                        style={{fontSize: 20, position: 'absolute', fontFamily: 'cursive', top: 40, left: 50}}>
                        Курите ли вы:
                    </div>
                    <div style={{position: 'absolute', fontFamily: 'cursive', top: 110, left: 50}}>
                        <div className="form-check">
                            <input 
                                className="form-check-input me-1"
                                checked = {smoke == smokeArray.at(0)}
                                onChange = {() => setSmoke((current) => smokeArray.at(0))}
                                type="radio"
                                value="" 
                                id="Checkbox"/>
                            <label className="form-check-label" for="Checkbox" style={{minWidth: 200, textIndent:0, textAlign:'left'}}>Да</label>
                        </div>
                        <div className="form-check">
                            <input
                                style={{}} 
                                className="form-check-input me-1"
                                checked = {smoke == smokeArray.at(1)}
                                onChange = {() => setSmoke((current) => smokeArray.at(1))}
                                type="radio" 
                                value="" 
                                id="Checkbox"/>
                            <label className="form-check-label" for="Checkbox" style={{minWidth: 200, textIndent:0, textAlign:'left'}}>Нет</label>
                        </div>
                        <div style={{fontSize: 20, position: 'absolute', fontFamily: 'cursive', top: 80, left: -28, width: 350}}>Если бросили, укажите, когда:</div>
                        <input
                            className="input"
                            type="text" 
                            placeholder="Введите профессиональную вредность"
                            style={{border: 0, outline: 0, width: 400, fontSize: 20, fontFamily: 'cursive',position: 'absolute', left: -2, top: 165}}
                            name="place">
                        </input>
                        <span className="underline" style={{left: 1, top: 197}}></span>
                        <span className="static-underline" style={{left: 1, top: 197}}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
