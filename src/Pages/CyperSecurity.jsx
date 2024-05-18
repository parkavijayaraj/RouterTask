import React from 'react';
import Card from '../Component/Card';

const CyperSecurity = ({data}) => {
    const cyperdata=data.filter((ele)=>ele.head==="CyberSecurity")
    return (
        <div>
            <h1>CyperSecurity</h1>
        
                {
                    cyperdata.map((element,index)=>{
                        return(
                        <Card element={element} index={index} />)
                    })
                }
            
        </div>
    );
};

export default CyperSecurity;