import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => { 
	const addToWaitlist = () => {
		const data = {
			phone: 7787787778,
			group: 1,
			customer_num: 1
		}
	
		axios.post('http://localhost:8080/', data).then(res => console.log(res))
	}
	const fetchWaitlist = () => {
		axios.get('http://localhost:8080/').then(res => console.log(res))
	}

	useEffect(() => {
		fetchWaitlist()
	})
	return (
		<div>
			Hello world
			<button onClick={() => addToWaitlist()}>add fake user</button>	
		</div>
	)
};

export default Home;
