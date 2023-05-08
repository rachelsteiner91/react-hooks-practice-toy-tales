import React from "react";

//1c. After you have put the data in the proper component, your next job is to render the ToyCard components on the page
function ToyCard({toy}) {
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

//1c. your next job is to render the ToyCard components on the page