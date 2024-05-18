import React from 'react';
import Card from '../Component/Card';

const All = ({data}) => {
    return (
      <div className="container">
      <h1 className="text-center my-4">All Courses</h1>
      <div className="row">
        {data.map((element, index) => (
          <Card key={element.id} element={element} />
        ))}
      </div>
    </div>
    );
};

export default All;