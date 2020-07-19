import React, { useState, useEffect } from 'react';
import { fetchApis, filterDataApisCount } from '../utils/apis';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

import { NewItemData } from '../types/index';

const Total = () => {
    const [lists, setLists] = useState<NewItemData[]>([]);

    useEffect(() => {
        fetchApis().then(data => setLists(data));
    }, []);

    const data = {
        labels: [
            'Linux',
            'Windows',
            'OSX',
            'Solaris',
            'Sony',
            'Samsung',
            'Panasonic',
            'Horizont',
            'Apple',
            'Samsung',
            'Meizu',
            'Xiaomi',
            'Intel',
            'Nvidia',
            'AMD',
            'ARM'
        ],
        datasets: [{
            data: [
                filterDataApisCount(lists, 'q1', 'Linux'),
                filterDataApisCount(lists, 'q1', 'Windows'),
                filterDataApisCount(lists, 'q1', 'OSX'),
                filterDataApisCount(lists, 'q1', 'Solaris'),
                filterDataApisCount(lists, 'q2', 'Sony'),
                filterDataApisCount(lists, 'q2', 'Samsung'),
                filterDataApisCount(lists, 'q2', 'Panasonic'),
                filterDataApisCount(lists, 'q2', 'Horizont'),
                filterDataApisCount(lists, 'q3', 'Apple'),
                filterDataApisCount(lists, 'q3', 'Samsung'),
                filterDataApisCount(lists, 'q3', 'Meizu'),
                filterDataApisCount(lists, 'q3', 'Xiaomi'),
                filterDataApisCount(lists, 'q4', 'Intel'),
                filterDataApisCount(lists, 'q4', 'Nvidia'),
                filterDataApisCount(lists, 'q4', 'AMD'),
                filterDataApisCount(lists, 'q4', 'ARM') 
            ],
            backgroundColor: [
                '#f44336',
                '#e91e63',
                '#9c27b0',
                '#673ab7',
                '#3f51b5',
                '#2196f3',
                '#03a9f4',
                '#00bcd4',
                '#009688',
                '#4caf50',
                '#8bc34a',
                '#ffeb3b',
                '#ff9800',
                '#795548',
                '#9e9e9e',
                '#607d8b'
            ],
            hoverBackgroundColor: [
                '#f44336',
                '#e91e63',
                '#9c27b0',
                '#673ab7',
                '#3f51b5',
                '#2196f3',
                '#03a9f4',
                '#00bcd4',
                '#009688',
                '#4caf50',
                '#8bc34a',
                '#ffeb3b',
                '#ff9800',
                '#795548',
                '#9e9e9e',
                '#607d8b'
            ],
            borderColor: '#fff',
            borderWidth: 1
        }]
    };

    return (
        <div className='total'>
            <h2>Result surveys:</h2>
            <h4><span role="img" aria-label="sheep">📢</span>All surveys: {Object.values(lists).length}</h4>
            <article id="chartcanvas">
                <Doughnut
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                            position: 'top',
                            align: 'center',
                            display: true,
                            labels: {
                                fontFamily: "'IBM Plex Sans', sans-serif",
                                fontSize: 18,
                                fontColor: '#4C5D63',
                                boxWidth: 18
                            },
                        },
                        tooltips: {
                            enabled: true,
                        },
                        animation: {
                            animateScale: true
                        },
                        plugins: {
                            datalabels: {
                                color: '#fff',
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                textAlign: 'center',
                                borderRadius: 5,
                                padding: 5,
                                rotation: 0,
                                font: {
                                    lineHeight: 1.6,
                                    size: 16,
                                },
                                formatter: function(val: string) {
                                    return val;
                                },
                            }
                        },
                    }}
                />
            </article>
        </div>
    );
};

export default Total;