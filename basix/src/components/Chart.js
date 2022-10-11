import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';

import ChartBar from './ChartBar';
const Chart=(props)=>{
    const datapointvalues=props.DataPoints.map(DataPoints=>DataPoints.value);

    const totalMax=Math.max(...datapointvalues);

    return(
        <div>

            {props.DataPoints.map((DataPoints)=>(<ChartBar value={DataPoints.value} maxvalue={null} label={DataPoints.label} key={DataPoints.label}/>))}
        
        </div>

    );


};

export default Chart;