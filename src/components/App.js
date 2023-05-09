import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(()=> {
    fetch ('http://localhost:3001/toys')
    .then (response => response.json())
    .then (toys => setToys(toys))
  }, []) 
  
  const addToy= (toy) => {
    setToys([...toys, toy])

  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;



//When our application loads, make a GET request to /toys to fetch the toy array
//. Given your component tree, think about which component should be responsible for the array. After you have put the data in the proper component, your next job is to render the ToyCard components on the page.






















