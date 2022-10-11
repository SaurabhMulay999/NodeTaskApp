import React from 'react';
import ReactDOM from 'react-dom';

const Filter=(props)=>{
    const filterchangehandler=(event)=>{
       //console.log(event.target.value);
       props.FilterEventHandle(event.target.value);


    };

    return(
        <div className='justify-center mx-60 mt-1 animate-pulse'>
            <div className='mx-auto justify-center'>
                <label className='text-gray-100 animate-pulse'>Filter By Year</label>
                <br/>
                <select onChange={filterchangehandler}>
                <option value='2022'>AllExpenses</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>

            </div>
        </div>
    );
}
export default Filter;
