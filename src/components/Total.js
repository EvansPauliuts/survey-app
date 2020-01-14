import React, { useState, useEffect } from 'react';
import { fetchApis, filterDataApisCount } from '../apis.js';

const Total = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetchApis().then(data => setLists(data));
    }, []);
    
    return (
        <div className='total'>
            <h2>Результаты опросов:</h2>
            <h4><span role="img" aria-label="sheep">📢</span>Всего опросов: {Object.values(lists).length}</h4>
            <div id="flex">
                <ul className="total__list">
                    <li>Linux: <span>{filterDataApisCount(lists, 'q1', 'Linux')}</span></li>
                    <li>Windows: <span>{filterDataApisCount(lists, 'q1', 'Windows')}</span></li>
                    <li>OSX: <span>{filterDataApisCount(lists, 'q1', 'OSX')}</span></li>
                    <li>Solaris: <span>{filterDataApisCount(lists, 'q1', 'Solaris')}</span></li>
                </ul>
                <ul className="total__list">
                    <li>Sony: <span>{filterDataApisCount(lists, 'q2', 'Sony')}</span></li>
                    <li>Samsung: <span>{filterDataApisCount(lists, 'q2', 'Samsung')}</span></li>
                    <li>Panasonic: <span>{filterDataApisCount(lists, 'q2', 'Panasonic')}</span></li>
                    <li>Horizont: <span>{filterDataApisCount(lists, 'q2', 'Horizont')}</span></li>
                </ul>
                <ul className="total__list">
                    <li>Apple: <span>{filterDataApisCount(lists, 'q3', 'Apple')}</span></li>
                    <li>Samsung: <span>{filterDataApisCount(lists, 'q3', 'Samsung')}</span></li>
                    <li>Meizu: <span>{filterDataApisCount(lists, 'q3', 'Meizu')}</span></li>
                    <li>Xiaomi: <span>{filterDataApisCount(lists, 'q3', 'Xiaomi')}</span></li>
                </ul>
                <ul className="total__list">
                    <li>Intel: <span>{filterDataApisCount(lists, 'q4', 'Intel')}</span></li>
                    <li>AMD: <span>{filterDataApisCount(lists, 'q4', 'AMD')}</span></li>
                    <li>Nvidia: <span>{filterDataApisCount(lists, 'q4', 'Nvidia')}</span></li>
                    <li>ARM: <span>{filterDataApisCount(lists, 'q4', 'ARM')}</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Total;