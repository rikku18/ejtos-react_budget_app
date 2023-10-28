import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
         
    }
    
  return (
    
    <select className='alert alert-secondary' name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)}>
      <option value="$">$ Dollar</option>
      <option value="£">£ Pound</option>
      <option value="€">€ Euro</option>
      <option value="₹">₹ Ruppee</option>
    </select>


    );
};

export default Currency;