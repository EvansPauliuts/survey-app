import React, { Component } from 'react';
import Total from './Total';
import { fetchApis } from '../apis.js';

class Result extends Component {
	constructor( props ){
		super( props );
		this.state = {
			list: [],
			listFire: null
		}
    }

    componentDidMount(){
        fetchApis()
            .then(data => this.setState({ list: data, listFire: data }));
  	}

	render() {
		let listArray = Object.values( this.state.list );
		return (
			<div className='list'>
				<Total />
				<h2>Посмотреть опросы</h2>
				{ !this.state.listFire ? 
					<h4 className='load'>Loading...</h4> 
					: 
					<ul>
			          {
			            listArray.map(( list, index ) => {
			              return (
			              	<li className="list__item" key={ index }>
			              		<p>Имя: { list.name }</p>
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
	}
}

export default Result;