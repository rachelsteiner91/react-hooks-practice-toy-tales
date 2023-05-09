import React, {useState} from "react";

function ToyForm({addToy}) {

  const initialForm = {
    name: "",
    image: "",
    likes: 0
  }
  const [form, setForm] = useState(initialForm)
//state describes the current state of something, the current state of our form. the current state of form is this blank slate below
//we are updating an object, so it needs to be within {}.
function handleChange(e) {
  setForm({
    ...form, //here I copied the object
    [e.target.name] : e.target.value //name doesn;'t change but my value does change
  
  })}

  function handleSubmit(e)  {
    e.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      body: JSON.stringify({...form}),
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then (response => response.json())
      .then ((data)=> {
        addToy(data)
        setForm(initialForm)
      })
    }

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={form.image}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;







//1. set form state in form component

//When the ToyForm is submitted
//make a POST request to /toys 
//to save a new toy to the server. Using the ideas of controlled form and inverse data flow, think about how to render a new ToyCard for the toy that you created.