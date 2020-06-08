import React, { useState, useEffect } from 'react';
import Total from './Total';
import { fetchApis } from '../apis.js';

const Result = () => {
    const [list, setList] = useState([]);
    
    useEffect(() => {
        fetchApis().then(data => setList(data));
    }, []);

    return (
        <div className='list'>
            <Total />
            <h2>View surveys</h2>
            { list.length === 0 ? 
                <h4 className='load'>Loading...</h4> 
                : 
                <ul>
                    {
                    Object.values(list).map(( list, index ) => {
                        return (
                        <li className="list__item" key={ index }>
                            <p>Name: { list.name }</p>
                            <span role="img" aria-label="imac">🖥 { list.answers.q1 }</span>
                            <span role="img" aria-label="tv">📺 { list.answers.q2 }</span>
                            <span role="img" aria-label="iphone">📱 { list.answers.q3 }</span>
                            <span role="img" aria-label="cpu">🤖 { list.answers.q4 }</span>
                        </li>
                        )
                    })
                    }
                </ul>
            }
        </div>
    );
};

export default Result;