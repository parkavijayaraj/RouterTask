import React from 'react';

const Card = ({element,index}) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
    <div className="card">
      <img className="card-img-top img-fluid" src={element.image} alt="Card image" />
      <div className="card-body">
        <h2 className="card-text text-center">{element.head}</h2>
        <h3 className="card-text content text-center">{element.content}</h3>
        <h5 className="card-text text-center">{element.date}</h5>
        <h5 className="card-text text-center">{element.availableIn}</h5>
      </div>
    </div>
  </div>
  );
};

export default Card;


