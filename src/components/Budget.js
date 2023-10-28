import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const assignedBudget = event.target.value;
        if(assignedBudget > 20000) {
            alert("The value cannot exceed £20000");
            return;
        }
        if(assignedBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        setNewBudget(assignedBudget);
        handleBudgetState(assignedBudget)
    }

    const handleBudgetState = (budgetValue) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budgetValue,
        });
    };
    return (
        <div className='alert alert-secondary '>
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                style={{ width: '150px' }}
            ></input>
        </div>
    );
};
export default Budget;