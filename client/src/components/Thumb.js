import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Thumb = () => {
	const [newUser, setNewUser] = useState({})
	const [registerProcess, setRegisterProcess] = useState(1)

	const removeFromWaitlist = userId => {
		axios.delete('http://localhost:8080/')
	}

	const addToWaitlist = newUser => {
		const data = {
			phone: parseInt(newUser.phone),
			group: 1,
			customer_num: 1
		}
	
		axios.post('http://localhost:8080/', data).then(res => console.log(res))
	}

	const fetchWaitlist = () => {
		axios.get('http://localhost:8080/').then(res => {
			if (res.status === 200) {
				console.log('Success')	
			}
		})
	}

	const onChange = e => {
		const {name, value} = e.target;

		setNewUser({...newUser, [name]: value});
	}

	const onSubmit = e => {
		e.preventDefault();

		addToWaitlist(newUser);
	}

	return (
		<div className="p-8" style={{backgroundColor: 'white'}}>
			{{
				0: (
					<div>
						<h4>
							Line the fuck up
						</h4>
						<form onSubmit={onSubmit}>
							<input type="number" name="phone" className="bg-gray-200 my-8 p-4" onChange={onChange} placeholder="Phone number" />

							<button onClick={() => addToWaitlist} className="btn btn-black w-full py-6">
								Line up
							</button>
						</form>
					</div>
				),
				1: (
					<div className="text-center">
						<h4 className="pb-2">
							You are 5th in line
						</h4>
						<p>
							Estimated wait time: 5 minutes
						</p>

						<button className="text-blue-500 underline">
							Leave queue
						</button>
					</div>
				)
			}[registerProcess]}
					</div>
	)
};

export default Thumb;
