import React from 'react';
import Card from '../Component/Card';

const DataScience = ({data}) => {
    const datasci=data.filter((ele)=>ele.head==="Data Science")
    return (
        <div>
            <h1>DataScience</h1>
            {datasci.map((element,index)=>{
               return(
                <Card element={element} index={index} />
                
               )
            })}
        </div>
    );
};

export default DataScience;