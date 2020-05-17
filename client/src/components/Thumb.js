import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Thumb = () => {
	const [newUser, setNewUser] = useState({})
	const [registerProcess, setRegisterProcess] = useState(0)

	const removeFromWaitlist = userId => {
		axios.delete(`https://app-align.herokuapp.com/api/${userId}`).then(res => {
			console.log(res)
			setRegisterProcess(3)
		})
	}

	const addToWaitlist = newUser => {
		const data = {
			phone: parseInt(newUser.phone),
			group: 1,
			customer_num: 1
		}
	
		axios.post('https://app-align.herokuapp.com/api/', data).then(res => {
			if (res.status === 200) {
				setNewUser({...newUser, ['id']: res.data._id})
				setRegisterProcess(2)
				console.log('success')
			}
		})
	}

	const fetchWaitlist = () => {
		axios.get('http://localhost:8080/api/').then(res => {
			console.log(res)	
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
					<div className="w-full">
						<input type="text" name="phone" className="w-full bg-gray-200 my-8 p-4" placeholder="Where are you looking to shop today?" />
						<div className="w-full text-right">
						<button className="text-blue-500 ml-auto" onClick={() => setRegisterProcess(1)}>
							Go &rarr;
						</button>
						</div>
					</div>
				),
				1: (
					<div>
						<h4>
							Reserving for Costco in Burnaby, British Columbia		
						</h4>
						<form onSubmit={onSubmit}>
							<div className="flex flex-wrap">
								<input type="number" name="phone" className="bg-gray-200 my-8 mr-2 p-4 flex-1" onChange={onChange} placeholder="Phone number" />
								<input type="number" name="group" className="bg-gray-200 my-8 p-4 ml-auto" style={{width: '50px'}} onChange={onChange} placeholder="Size" />
							</div>
							<button onClick={() => addToWaitlist} className="btn btn-black w-full py-6">
								Line up
							</button>
						</form>
					</div>
				),
				2: (
					<div className="text-center">
						<h4 className="pb-2">
							You are 5th in line
						</h4>
						<p>
							Estimated wait time: 5 minutes
						</p>
						<img src="/checkmark.png" className="mx-auto my-6" />
						<button onClick={() => removeFromWaitlist(newUser.id)} className="text-blue-500 underline">
							Leave queue
						</button>
					</div>
				),
				3: (
					<div className="text-center">
						<p>
							Thanks for visiting! You have left the queue
						</p>
						<button onClick={() => setRegisterProcess(0)} className="text-blue-500 underline">
							Return to main menu		
						</button>

					</div>
				)
			}[registerProcess]}
		</div>
	)
};

export default Thumb;
