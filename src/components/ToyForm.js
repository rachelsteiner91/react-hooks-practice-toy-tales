import React, {useState} from "react";

function ToyForm({handleNewToy}) {
  const initialForm = {
    name: '',
    image: ''
  }
  const [form, setForm] = useState(initialForm)

  function handleChange(e) {
    setForm({...form,
      [e.target.name]: e.target.value
  })
}
function handleSubmit(e) {
  e.preventDefault()
  fetch('http://localhost:3001/toys', {
    method: 'POST',
    body: JSON.stringify({
      name: form.name,
      image: form.image
    }),
    headers:{
      'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then(newToy =>
      handleNewToy(newToy))
  }



  return (
    <div className="container">
      <form className="add-toy-form"  onSubmit = {(e) => handleSubmit(e)}>
        <h3>Create a toy!</h3>
        <input
          value={form.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          value={form.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
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
