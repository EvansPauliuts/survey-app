import React, { useState, useEffect } from 'react';
import { orderBy } from 'lodash';
import Total from './Total';
import { fetchApis } from '../apis.js';
import Emoji from "./Emoji";

const Result = () => {
    const [list, setList] = useState([]);
    
    useEffect(() => {
        fetchApis().then(data => setList(data));
    }, []);

    const sortList = orderBy(list, 'datetime', 'desc');

    return (
        <div>
            { list.length === 0 ?
                <h2 className="load"><Emoji symbol="🤔"/>...</h2>
                :
                <div className='list'>
                    <Total />
                    <h2>View surveys</h2>
                    <ul>
                        { Object.values(sortList).map(( list, index ) => (
                            <li className="list__item" key={ index }>
                                <p>Name: { list.name }</p>
                                <span role="img" aria-label="imac">🖥 { list.answers.q1 }</span>
                                <span role="img" aria-label="tv">📺 { list.answers.q2 }</span>
                                <span role="img" aria-label="iphone">📱 { list.answers.q3 }</span>
                                <span role="img" aria-label="cpu">🤖 { list.answers.q4 }</span>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};

export default Result;