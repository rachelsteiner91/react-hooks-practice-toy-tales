import React, {useState} from "react";

//When the Donate to Goodwill button is clicked, make a DELETE request to /toys/:id with the ID of the toy that was clicked to delete the toy from the server. The ToyCard that you clicked on should also be removed from the DOM.
function ToyCard({toy}) {
  const [isDonated, setIsDonated] = useState(true)

  function handleDonateClick(e) {
    setIsDonated(!isDonated)
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        value={toy.id}
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={(e)=>handleDonateClick(e)} >Donate to GoodWill</button> 
    </div>
  );
}

export default ToyCard;


// //  "toys": [
//   {
//     "id": 1,
//     "name": "Woody",
//     "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//     "likes": 8