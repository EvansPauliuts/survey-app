import React, { useState, useRef } from 'react';
import IconSurvey from './IconSurvey';
import uuid from 'uuid';
import firebase from 'firebase';
import { config } from '../apis';

firebase.initializeApp(config);

const Survey = () => {
    const inputEl = useRef(null);
    const [name, setName] = useState('');
    const [answers, setAnswers] = useState({
        q1: 'Не выбрано',
        q2: 'Не выбрано',
        q3: 'Не выбрано',
        q4: 'Не выбрано',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleNameSubmit = e => {
        e.preventDefault();
        setName(inputEl.current.value);
    };

    const handleQuestionSubmit = e => {
        firebase.database().ref( 'survey/' + uuid.v4() ).set({
            name: name,
            answers: answers
        });
        setSubmitted(true);
        e.preventDefault();
    };

    const handleQuestionChange = e => {
        let answer = answers;
        let {value} = e.target;
        switch (e.target.name) {
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
        user = <h2><span role="img" aria-label="cool">💥 Добро пожаловать {name} 💥</span></h2>
        questions = <span>
            <h3>Небольшие вопросы</h3>
            <form onSubmit={handleQuestionSubmit}>
                <div>
                    <label>Какая ваша любимая Операционная система?</label><br />
                    <input className='option-input checkbox' type='radio' name='q1' value='Windows' onChange={handleQuestionChange}/>Windows<br />
                    <input className='option-input checkbox' type='radio' name='q1' value='OSX' onChange={handleQuestionChange}/>OSX<br />
                    <input className='option-input checkbox' type='radio' name='q1' value='Linux' onChange={handleQuestionChange}/>Linux<br />
                    <input className='option-input checkbox' type='radio' name='q1' value='Solaris' onChange={handleQuestionChange}/>Solaris<br />
                    <input className='option-input checkbox' type='radio' name='q1' value='Другие' onChange={handleQuestionChange} />Другие<br />
                </div>
                <div>
                    <label>Какой ваш любимый TV?</label><br />
                    <input className='option-input checkbox' type='radio' name='q2' value='Sony' onChange={handleQuestionChange}/>Sony<br />
                    <input className='option-input checkbox' type='radio' name='q2' value='Samsung' onChange={handleQuestionChange}/>Samsung<br />
                    <input className='option-input checkbox' type='radio' name='q2' value='Panasonic' onChange={handleQuestionChange}/>Panasonic<br />
                    <input className='option-input checkbox' type='radio' name='q2' value='Horizont' onChange={handleQuestionChange}/>Horizont<br />
                    <input className='option-input checkbox' type='radio' name='q2' value='Другие' onChange={handleQuestionChange} />Другие<br />
                </div>
                <div>
                    <label>Какой ваш любимый Смартфон?</label><br />
                    <input className='option-input checkbox' type='radio' name='q3' value='Apple' onChange={handleQuestionChange}/>Apple<br />
                    <input className='option-input checkbox' type='radio' name='q3' value='Samsung' onChange={handleQuestionChange}/>Samsung<br />
                    <input className='option-input checkbox' type='radio' name='q3' value='Meizu' onChange={handleQuestionChange}/>Meizu<br />
                    <input className='option-input checkbox' type='radio' name='q3' value='Xiaomi' onChange={handleQuestionChange}/>Xiaomi<br />
                    <input className='option-input checkbox' type='radio' name='q3' value='Другие' onChange={handleQuestionChange}/>Другие<br />
                </div>
                <div>
                    <label>Какое ваше любимое CPU?</label><br />
                    <input className='option-input checkbox' type='radio' name='q4' value='Intel' onChange={handleQuestionChange}/>Intel<br />
                    <input className='option-input checkbox' type='radio' name='q4' value='AMD' onChange={handleQuestionChange}/>AMD<br />
                    <input className='option-input checkbox' type='radio' name='q4' value='Nvidia' onChange={handleQuestionChange}/>Nvidia<br />
                    <input className='option-input checkbox' type='radio' name='q4' value='ARM' onChange={handleQuestionChange}/>ARM<br />
                    <input className='option-input checkbox' type='radio' name='q4' value='Другие' onChange={handleQuestionChange} />Другие<br />
                </div>
                <input type='submit' value='Отправлять' />
            </form>
        </span>
    } else if (!name && submitted === false) {
        user = <span>
            <h1>Привет! не большой опрос</h1>
            <h2>Введите свое имя, чтобы начать опрос</h2>
            <form id='form' onSubmit={handleNameSubmit}>
                <input type='text' placeholder='Hапиши ваше имя...' ref={inputEl}/>
                <input type='submit' value='Отправить' />
            </form>
        </span>;
        questions = '';
    } else if (submitted === true) {
        user = <div>
            <h2 id='user'>
            Спасибо большое { name } <span role="img" aria-label="like">👍</span></h2>
        </div>;
    }

    return (
        <div className="App">
            <div className='App-header text-center'>
                <IconSurvey width={170} height={130} />
            </div>
            <div className='text-center'>{user}</div>
            <div className='container_in'>{questions}</div>
        </div>
    );
};

export default Survey;