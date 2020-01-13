import React, { Component } from 'react';
import { fetchApis, filterDataApisCount } from '../apis.js';

class Total extends Component {
	constructor( props ){
		super( props );
		this.state = {
			lists: [],
		};
    }

    componentDidMount(){
        fetchApis()
            .then(data => this.setState({ lists: data }));
    }
      
	render() {
        let listArrays = Object.values( this.state.lists );
		return (
			<div className='total'>
				<h2>Результаты опросов:</h2>
                <h4>📢Всего опросов: {listArrays.length}</h4>
                <div id="flex">
                    <ul className="total__list">
                        <li>Linux: <span>{filterDataApisCount(listArrays, 'q1', 'Linux')}</span></li>
                        <li>Windows: <span>{filterDataApisCount(listArrays, 'q1', 'Windows')}</span></li>
                        <li>OSX: <span>{filterDataApisCount(listArrays, 'q1', 'OSX')}</span></li>
                        <li>Solaris: <span>{filterDataApisCount(listArrays, 'q1', 'Solaris')}</span></li>
                    </ul>
                    <ul className="total__list">
                        <li>Sony: <span>{filterDataApisCount(listArrays, 'q2', 'Sony')}</span></li>
                        <li>Samsung: <span>{filterDataApisCount(listArrays, 'q2', 'Samsung')}</span></li>
                        <li>Panasonic: <span>{filterDataApisCount(listArrays, 'q2', 'Panasonic')}</span></li>
                        <li>Horizont: <span>{filterDataApisCount(listArrays, 'q2', 'Horizont')}</span></li>
                    </ul>
                    <ul className="total__list">
                        <li>Apple: <span>{filterDataApisCount(listArrays, 'q3', 'Apple')}</span></li>
                        <li>Samsung: <span>{filterDataApisCount(listArrays, 'q3', 'Samsung')}</span></li>
                        <li>Meizu: <span>{filterDataApisCount(listArrays, 'q3', 'Meizu')}</span></li>
                        <li>Xiaomi: <span>{filterDataApisCount(listArrays, 'q3', 'Xiaomi')}</span></li>
                    </ul>
                    <ul className="total__list">
                        <li>Intel: <span>{filterDataApisCount(listArrays, 'q4', 'Intel')}</span></li>
                        <li>AMD: <span>{filterDataApisCount(listArrays, 'q4', 'AMD')}</span></li>
                        <li>Nvidia: <span>{filterDataApisCount(listArrays, 'q4', 'Nvidia')}</span></li>
                        <li>ARM: <span>{filterDataApisCount(listArrays, 'q4', 'ARM')}</span></li>
                    </ul>
                </div>
		    </div>
		);
	}
}

export default Total;