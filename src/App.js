import React, { Component } from 'react';
import uuid from 'uuid';
import firebase from 'firebase';
import './App.css';

const config = {
  apiKey: "AIzaSyB0A5GZSO2KKLV9L1w1Gl1U39wBp2VQSn0",
  authDomain: "simplesurvey-8d9e3.firebaseapp.com",
  databaseURL: "https://simplesurvey-8d9e3.firebaseio.com",
  projectId: "simplesurvey-8d9e3",
  storageBucket: "simplesurvey-8d9e3.appspot.com",
  messagingSenderId: "14399663105"
};

firebase.initializeApp(config);

class App extends Component {
  constructor( props ){
    super( props );
    this.state = {
      id: uuid.v1(),
      name: '',
      answers: {
        q1: '',
        q2: '',
        q3: '',
        q4: ''
      },
      submitted: false
    }

    this.handleQuestionChange = this.handleQuestionChange.bind( this );
  }

  handleNameSubmit( e ){
    let name = this.refs.name.value; 

    this.setState({ name: name }, () => console.log( this.state ))
    e.preventDefault();
  }

  handleQuestionSubmit( e ){
    console.log( 'dfdsf', this.state );

    firebase.database().ref( 'survey/' + this.state.id ).set({
      name: this.state.name,
      answers: this.state.answers
    });

    this.setState({ submitted: true }, function(){
      console.log( 'questions submitted', this.state );
    })

    e.preventDefault();
  }

  handleQuestionChange( e ){
    console.log( e.target.value );
    let answers = this.state.answers;

    if( e.target.name === 'q1' ){
      answers.q1 = e.target.value;
    } else if( e.target.name === 'q2' ){
      answers.q2 = e.target.value;
    } else if( e.target.name === 'q3' ){
      answers.q3 = e.target.value;
    } else if( e.target.name === 'q4' ){
      answers.q4 = e.target.value;
    }

    this.setState({ answers: answers }, () => console.log( this.state ))
  }

  render() {
    let user;
    let questions;

    if( this.state.name && this.state.submitted === false ){

      user = <h2>💥 Добро пожаловать { this.state.name } 💥</h2>
      questions = <span>
        <h3>Небольшие вопросы</h3>
        <form onSubmit={ this.handleQuestionSubmit.bind( this ) }>
          <div>
            <label>Какая ваша любимая Операционная система?</label><br />
            <input class='option-input checkbox' type='radio' name='q1' value='Windows' onChange={ this.handleQuestionChange }/>Windows<br />
            <input class='option-input checkbox' type='radio' name='q1' value='OSX' onChange={ this.handleQuestionChange }/>OSX<br />
            <input class='option-input checkbox' type='radio' name='q1' value='Linux' onChange={ this.handleQuestionChange }/>Linux<br />
            <input class='option-input checkbox' type='radio' name='q1' value='Solaris' onChange={ this.handleQuestionChange }/>Solaris<br />
            <input class='option-input checkbox' type='radio' name='q1' value='Other' onChange={ this.handleQuestionChange }/>Other<br />
          </div>
          <div>
            <label>Какой ваш любимый TV?</label><br />
            <input class='option-input checkbox' type='radio' name='q2' value='Sony' onChange={ this.handleQuestionChange }/>Sony<br />
            <input class='option-input checkbox' type='radio' name='q2' value='Samsung' onChange={ this.handleQuestionChange }/>Samsung<br />
            <input class='option-input checkbox' type='radio' name='q2' value='Panasonic' onChange={ this.handleQuestionChange }/>Panasonic<br />
            <input class='option-input checkbox' type='radio' name='q2' value='Vizio' onChange={ this.handleQuestionChange }/>Vizio<br />
            <input class='option-input checkbox' type='radio' name='q2' value='Other' onChange={ this.handleQuestionChange }/>Other<br />
          </div>
          <div>
            <label>Какой ваш любимый Смартфон?</label><br />
            <input class='option-input checkbox' type='radio' name='q3' value='Apple' onChange={ this.handleQuestionChange }/>Apple<br />
            <input class='option-input checkbox' type='radio' name='q3' value='Samsung' onChange={ this.handleQuestionChange }/>Samsung<br />
            <input class='option-input checkbox' type='radio' name='q3' value='Nexus' onChange={ this.handleQuestionChange }/>Nexus<br />
            <input class='option-input checkbox' type='radio' name='q3' value='Blackberry' onChange={ this.handleQuestionChange }/>Blackberry<br />
            <input class='option-input checkbox' type='radio' name='q3' value='Other' onChange={ this.handleQuestionChange }/>Other<br />
          </div>
          <div>
            <label>Какое ваше любимое CPU?</label><br />
            <input class='option-input checkbox' type='radio' name='q4' value='Intel' onChange={ this.handleQuestionChange }/>Intel<br />
            <input class='option-input checkbox' type='radio' name='q4' value='AMD' onChange={ this.handleQuestionChange }/>AMD<br />
            <input class='option-input checkbox' type='radio' name='q4' value='Nvidia' onChange={ this.handleQuestionChange }/>Nvidia<br />
            <input class='option-input checkbox' type='radio' name='q4' value='ARM' onChange={ this.handleQuestionChange }/>ARM<br />
            <input class='option-input checkbox' type='radio' name='q4' value='Other' onChange={ this.handleQuestionChange }/>Other<br />
          </div>
          <input type='submit' value='Отправлять' />
        </form>
      </span>

    } else if( !this.state.name && this.state.submitted === false ){

      user = <span>
        <h1>Привет! не большой опрос</h1>
        <h2>Введите свое имя, чтобы начать опрос</h2>
        <form id='form' onSubmit={ this.handleNameSubmit.bind( this ) }>
          <input type='text' placeholder='Hапиши ваше имя...' ref='name' />
          <input type='submit' value='Отправить' />
        </form>
      </span>;

      questions = '';

    } else if( this.state.submitted === true ){
      user = <h2 id='user'>Спасибо большое { this.state.name } 👍</h2>
    }

    return (
      <div className="App">
        <div className='iam'>
          <img src='iam.svg' alt='Evans Logo' />
          <p>evanscode</p>
        </div>
        <div className='App-header text-center'>
          <img src='check.svg' alt='Logo' />
        </div>
        <div className='text-center'>
          { user }
        </div>
        <div className='container'>
          { questions }
        </div>
      </div>
    );
  }
}

export default App;
