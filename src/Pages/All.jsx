import React from 'react';
import Card from '../Component/Card';

const All = ({data}) => {
    return (
        <div>
            <h1>All Course</h1>
            {data.map((element,index)=>{
              return(
                <Card element={element} index={index}/>
              )
            })}
        </div>
    );
};

export default All;