import React, { Component } from 'react';

class Result extends Component {
	constructor( props ){
		super( props );
		this.state = {
			list: []
		}
    }

    componentDidMount(){
    	this.fetchDate();
  	}

  	fetchDate(){
    	fetch( 'https://simplesurvey-8d9e3.firebaseio.com/survey.json' )
      		.then( response => response.json())
      		.then( data => {
        		console.log( data )
        		this.setState({
          			list: data
        			}, () => console.log( this.state.list ))
      			})
      		.catch( err => console.log( 'Error', err ))
  	}
	render() {
		let listArray = Object.values( this.state.list );
		return (
			<div className='list'>
				<h2>Посмотреть опросы</h2>
		        <ul>
		          {
		            listArray.map(( list, index ) => {
		              return (
		              	<li key={ index }>
		              		<p>Имя: { list.name }</p>
		            		<div>🖥 { list.answers.q1 }</div>
		            		<div>📺 { list.answers.q2 }</div>
		            		<div>📱 { list.answers.q3 }</div>
		            		<div>🤖 { list.answers.q4 }</div>
		                </li>
		                )
		            })
		          }
		        </ul>
		    </div>
		);
	}
}

export default Result;