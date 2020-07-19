import React, { useState, useRef } from 'react';
import uuid from 'uuid';
import * as firebase from 'firebase';
import { config } from '../utils/apis';
import moment from 'moment';

import Emoji from '../components/Emoji';

firebase.initializeApp(config);

const Survey = () => {
    const inputEl = useRef<HTMLInputElement>(null);
    const [name, setName] = useState('');
    const [answers, setAnswers] = useState({
        q1: 'Not selected',
        q2: 'Not selected',
        q3: 'Not selected',
        q4: 'Not selected',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleNameSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (null !== inputEl.current) {
            setName(inputEl.current.value);
        }
    };

    const handleQuestionSubmit = (event: React.FormEvent) => {
        let datetime = moment().format( 'YYYY-MM-DD  HH:mm:ss' );
        firebase.database().ref( 'survey/' + uuid.v4() ).set({
            name: name,
            answers: answers,
            datetime,
        });
        setSubmitted(true);
        event.preventDefault();
    };

    const handleQuestionChange = (event: React.FormEvent) => {
        let answer = answers;
        let { value, name } = event.target as HTMLInputElement;
        switch (name) {
            case 'q1': answer.q1 = value; break;
            case 'q2': answer.q2 = value; break;
            case 'q3': answer.q3 = value; break;
            case 'q4': answer.q4 = value; break;
            default: break;
        }
        setAnswers(answer);
    };

    let user;
    let questions;

    if (name && submitted === false) {
        user = <h2><span role="img" aria-label="cool">💥 Welcome {name} 💥</span></h2>
        questions = <span>
            <h3>Small question</h3>
            <form onSubmit={handleQuestionSubmit}>
                <div>
                    <label>What's your favorite operation system?</label><br />
                    <input className='option-input checkbox' type='radio' name='q1' value='Windows' onChange={handleQuestionChange}/>Windows<br />
                    <input className='option-input checkbox' type='radio' name='q1' value='OSX' onChange={handleQuestionChange}/>OSX<br />
                    <input className='option-input checkbox' type='radio' name='q1' value='Linux' onChange={handleQuestionChange}/>Linux<br />
                    <input className='option-input checkbox' type='radio' name='q1' value='Solaris' onChange={handleQuestionChange}/>Solaris<br />
                    <input className='option-input checkbox' type='radio' name='q1' value='Other' onChange={handleQuestionChange} />Other<br />
                </div>
                <div>
                    <label>What's your favorite TV?</label><br />
                    <input className='option-input checkbox' type='radio' name='q2' value='Sony' onChange={handleQuestionChange}/>Sony<br />
                    <input className='option-input checkbox' type='radio' name='q2' value='Samsung' onChange={handleQuestionChange}/>Samsung<br />
                    <input className='option-input checkbox' type='radio' name='q2' value='Panasonic' onChange={handleQuestionChange}/>Panasonic<br />
                    <input className='option-input checkbox' type='radio' name='q2' value='Horizont' onChange={handleQuestionChange}/>Horizont<br />
                    <input className='option-input checkbox' type='radio' name='q2' value='Other' onChange={handleQuestionChange} />Other<br />
                </div>
                <div>
                    <label>What's your favorite Phone?</label><br />
                    <input className='option-input checkbox' type='radio' name='q3' value='Apple' onChange={handleQuestionChange}/>Apple<br />
                    <input className='option-input checkbox' type='radio' name='q3' value='Samsung' onChange={handleQuestionChange}/>Samsung<br />
                    <input className='option-input checkbox' type='radio' name='q3' value='Meizu' onChange={handleQuestionChange}/>Meizu<br />
                    <input className='option-input checkbox' type='radio' name='q3' value='Xiaomi' onChange={handleQuestionChange}/>Xiaomi<br />
                    <input className='option-input checkbox' type='radio' name='q3' value='Other' onChange={handleQuestionChange}/>Other<br />
                </div>
                <div>
                    <label>What's your favorite CPU?</label><br />
                    <input className='option-input checkbox' type='radio' name='q4' value='Intel' onChange={handleQuestionChange}/>Intel<br />
                    <input className='option-input checkbox' type='radio' name='q4' value='AMD' onChange={handleQuestionChange}/>AMD<br />
                    <input className='option-input checkbox' type='radio' name='q4' value='Nvidia' onChange={handleQuestionChange}/>Nvidia<br />
                    <input className='option-input checkbox' type='radio' name='q4' value='ARM' onChange={handleQuestionChange}/>ARM<br />
                    <input className='option-input checkbox' type='radio' name='q4' value='Other' onChange={handleQuestionChange} />Other<br />
                </div>
                <input type='submit' value='Send' />
            </form>
        </span>
    } else if (!name && submitted === false) {
        user = <span>
            <h1>Hi! a small survey <Emoji symbol="🙌"/></h1>
            <h2>Change your name to start the survey <Emoji symbol="🚀"/></h2>
            <form id='form' onSubmit={handleNameSubmit}>
                <input type='text' placeholder='Write your name...' ref={inputEl}/>
                <input type='submit' value='Send' />
            </form>
        </span>;
        questions = '';
    } else if (submitted === true) {
        user = <div>
            <h2 id='user'>
            Thank a lot { name } <span role="img" aria-label="like">👍</span></h2>
        </div>;
    }

    return (
        <div className="App">
            <div className='text-center'>{user}</div>
            <div className='container_in'>{questions}</div>
        </div>
    );
};

export default Survey;