import React, {useState} from "react";

function ToyForm({addToy}) {

  const initialForm = {
    image: "",
    likes: 0,
    name: ""
  }
  const [form, setForm] = useState(initialForm)
  /* 
    MAKE FORM CONTROLLED
    1. make state for form values
    2. add state values as values in individual inputs
    3. create onChaange to update state on input change 
    4. onSubmit - POST REQUEST  
  */

  //  const [name, setName] =useState("")
  // const [image, setImage] = useState("")


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
   
     } )}


  const handleFormSubmit =  (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/toys', {
      method: 'POST',
    body: JSON.stringify(form),
    headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {

      addToy(data)
      setForm(initialForm)
    })
  }
  //   addToy({
  //     likes:0,
  //     name: name,
  //     image: image,
  //   })
  //   setName("")
  //   setImage("")
  // }
  // useEffect(() => {
 //create post reqeust
    
// }
// })
// .then((res => res.json())
// .then((data) => setToys(data))
  return (
    <div className="container">
      <form onSubmit={(e) => handleFormSubmit(e)}className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => handleChange(e)}
          // onChange={e => setName(e.target.value)}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={(e) => handleChange(e)}
          // onChange={e => setImage(e.target.value)}
          placeholder="Enter a toy's image URL..."
          className="input-text"
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

// /* const [name, setName] =useState("")
//   const [image, setImage] = useState("")

//   const handleFormSubmit =  (e) => {
//     e.preventDefault();
//     addToy({
//       likes:0,
//       name: name,
//       image: image,
//     })
//     setName("")
//     setImage("")
//   }
//   useEffect(() => {
//     console.log(name, image) */
