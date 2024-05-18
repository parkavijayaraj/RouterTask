import React from 'react';

const Card = ({element,index}) => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
      <div  key={element.id} className="cardbot col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
      <div className="card h-100">
               <img className="card-img-top img-box  img-fluid" src={element.image} />
             <div className="card-body">
                   <h2 className="card-text text-center ">{element.head}</h2>
                   <h3 className="card-text content text-center ">{element.content}</h3>
                   <h5 className="card-text text-center "> {element.date}</h5>
                   <h5 className="card-text text-center ">{element.availableIn}</h5>
             </div>
             </div>
             </div>
             </div>
      </div>
      </div>
  );
};

export default Card;


// import React from "react";

// const Card = ({ element, index }) => {
  

//   return (
//     <div>
      
//       <div className=" d-flex flex-row bd-highlight mb-3 flex-card " >
//       <div key={element.id} className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
//             <div className="card ">
//               <img className="card-img-top  img-fluid" src={element.image} />
//             <div className="card-body">
//                   <h2 className="card-text text-center ">{element.head}</h2>
//                   <h3 className="card-text content text-center ">{element.content}</h3>
//                   <h5 className="card-text text-center "> {element.date}</h5>
//                   <h5 className="card-text text-center ">{element.availableIn}</h5>
//             </div>
//             </div>
//          </div> 
//         </div>
       
//           </div>
      
//   );
// };

// export default Card;

{/* <div>
  <div classNameName="d-flex flex-row bd-highlight mb-3 flex-card">
    {elements.map(element => (
      <div key={element.id} classNameName="col-md-6 col-lg-4 mb-3"> {/* Adjust column width for different screen sizes */}
        // <div classNameName="card">
        //   <img classNameName="card-img-top img-fluid" src={element.image} alt="Card image" /> {/* Use 'img-fluid' for responsive images */}
        //   <div classNameName="card-body">
        //     <h2 classNameName="card-title text-center">{element.head}</h2> {/* */}
