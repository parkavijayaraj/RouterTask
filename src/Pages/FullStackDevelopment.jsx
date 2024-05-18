import React from 'react';
import Card from '../Component/Card';

const FullStackDevelopment = ({data}) => {
    const fetchfsd=data.filter((ele)=>ele.head==="Full Stack Development")
    return (
        <div className='container'>
           <h1 className='text-center'>FullStackDevelopment</h1>
           <div className='row'>
{fetchfsd.map((element,index)=>{
    return(
        <Card element={element} index={index}/>
    )
})}
</div>
        </div>
    );
};

export default FullStackDevelopment;