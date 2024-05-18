import React from 'react';
import Card from '../Component/Card';

const DataScience = ({data}) => {
    const datasci=data.filter((ele)=>ele.head==="Data Science")
    return (
        <div className="container">
            <h1 className='text-center'>DataScience</h1>
            <div className='row'>
            {datasci.map((element,index)=>{
               return(
                <Card element={element} index={index} />
                
               )
            })}

            </div> 
        </div>
    );
};

export default DataScience;