import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { dispatch } = useContext(AppContext);
	const [budget, setBudget] = useState('');

	const onClick = (event) => {
		event.preventDefault();
		const amount = parseInt(budget);

		dispatch({
			type: 'EDIT_BUDGET',
			payload: amount,
		});
	};

	return (
		<div className='alert alert-secondary d-flex flex-column align-items-start p-3'>
			<div className='mb-2'>
				<span className='font-weight-bold'>Budget: ₹{budget}/-</span>
			</div>
			<div className='d-flex'>
				<input
					required
					type='number'
					className='form-control mr-2'
					id='budget'
					value={budget}
					onChange={(event) => setBudget(event.target.value)}
					style={{ width: '150px' }} 
				/>
				<button 
					className='btn btn-primary' 
					onClick={onClick}
				>
					Edit Budget
				</button>	
			</div>
		</div>
	);
};

export default Budget;
