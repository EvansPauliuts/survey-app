import React, { useState, useEffect } from 'react';
import { orderBy } from 'lodash';
import Total from './Total';
import { fetchApis } from '../utils/apis';
import Emoji from '../components/Emoji';
import { ListItem } from '../types/index';

const Result = () => {
    const [list, setList] = useState<ListItem[]>([]);
    
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
                        { Object.values(sortList).map(( lst: any, index ) => (
                            <li className="list__item" key={ index }>
                                <p>Name: { lst.name }</p>
                                <span role="img" aria-label="imac">🖥 { lst.answers.q1 }</span>
                                <span role="img" aria-label="tv">📺 { lst.answers.q2 }</span>
                                <span role="img" aria-label="iphone">📱 { lst.answers.q3 }</span>
                                <span role="img" aria-label="cpu">🤖 { lst.answers.q4 }</span>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};

export default Result;