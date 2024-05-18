import React from 'react';
import Card from '../Component/Card';

const CyperSecurity = ({data}) => {
    const careerfetch=data.filter((ele)=>ele.head==="Career")
    return (
        <div className="container">
            <h1 className='text-center'>carrer</h1>
            <div className='row'>
            {
                careerfetch.map((element,index)=>{
                    return(
                        <Card element={element} index={index}/>
                    )
                })
            }
        </div>
        </div>
    );
};

export default CyperSecurity;