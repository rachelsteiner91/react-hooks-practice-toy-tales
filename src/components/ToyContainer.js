import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  return (
    <div id="toy-collection">
      {
        [...toys].map ((el) => {
          return <ToyCard toy={el} key={el.id} />

         })
        
      }
       
        
    
        
    
   
    
    </div>
  );
}

export default ToyContainer;

//I added <ToyCard /> to the div here to render the ToyCard components on the page

//1b. first deliverable "After you have put the data in the proper component"
// toys.map((el) => {
//   return <ToyCard key={el.id} toy={el} 


/// [...toys].map is making a COPY of the original. use the spreada operator to copy