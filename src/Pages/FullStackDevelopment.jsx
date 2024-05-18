import React from 'react';
import Card from '../Component/Card';

const FullStackDevelopment = ({data}) => {
    const fetchfsd=data.filter((ele)=>ele.head==="Full Stack Development")
    return (
        <div>
           <h1>FullStackDevelopment</h1>
{fetchfsd.map((element,index)=>{
    return(
        <Card element={element} index={index}/>
    )
})}

        </div>
    );
};

export default FullStackDevelopment;