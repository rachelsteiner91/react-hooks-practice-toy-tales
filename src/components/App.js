import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]); 
  //1a and 1b. After you have put the data in the proper component, your next job is to RENDER the ToyCard components on the page - this tells me I need to do useEffect 

  //1a.  When our application loads, make a GET request to /toys to fetch the toy array.
  useEffect(() =>  {
    return fetch('http://localhost:3001/toys') 
    .then (response => response.json())
    .then (data => setToys(data));

  }, [])


  
 const addToy =(toy) => {
  setToys([...toys, toy])
 }
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;



  // function addToy(toy){
  //   fetch('http://localhost:3001/toys', {
  //   method: 'POST',
  //   headers: {'Content-Type': 'application/json'}
  //   // body: JSON.stringify(toy)

  // })
  // .then (response => response.json())
  // .then (data => getToys())
  // .catch(err => console.log(err))
  // }