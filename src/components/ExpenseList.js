import React, { useContext,useState } from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
	const [search, setSearch] = useState(' ');

	const filteredExpenses = expenses.filter(expense =>
        expense.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
		<div>
		<input 
                type="text" 
                placeholder="Search expenses" 
                value={search} 
                onChange={(event) => setSearch(event.target.value)} 
                className='form-control'
            />
		<ul className='list-group'>
			{filteredExpenses.map((expense) => (
				<ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
			))}
		</ul>
		</div>
    )
}

export default ExpenseList;