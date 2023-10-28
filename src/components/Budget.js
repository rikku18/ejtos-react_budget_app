import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        handleBudgetState(event.target.value)
    }

    const handleBudgetState = (budgetValue) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budgetValue,
        });
    };
    return (
        <div className='alert alert-secondary'>
        <span>Budget: £{budget}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;