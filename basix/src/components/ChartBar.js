import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';

const ChartBar=(props)=>{
    let barfilled='0';
    if(props.max>0){
        barfilled=Math.round((props.value/props.maxvalue)*1000);
    }
    return (
     <div className='flex'>
        <div className='flex-auto'>
            <div>
                <div className='text-slate-200 mx-16 mt-6 my-6 fill-slate-100'>{props.label}</div>
            </div>
            <div ClassName='text-slate-200 mt-6 my-6 fill-slate-100'> |"| </div>


        </div>
     </div>   
    );

}

export default ChartBar;