import React from 'react';
import Card from '../Component/Card';

const Career = ({data}) => {
    const careerfetch=data.filter((ele)=>ele.head==="Career")
    return (
        <div>
            <h1>carrer</h1>
            {
                careerfetch.map((element,index)=>{
                    return(
                        <Card element={element} index={index}/>
                    )
                })
            }
        </div>
    );
};

export default Career;