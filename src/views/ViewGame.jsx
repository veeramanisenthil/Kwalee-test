import React from "react";
import "../views/ViewGame.scss";

const GamesDisplay = () => {
  let gameObject = localStorage.getItem("selectedGameData");
  console.log(gameObject);
  const GAME = JSON.parse(gameObject);
  console.log("GAMEs", GAME);
  return (
    <div className="container-fluids">
      {/* <div>{gameObject}</div> */}
      <div className="parent-div">
        <div className="row">
          <div className="thumb-and-game-detail">
            <img src={GAME.thumb} alt="" className="img-class" />
          </div>
          <div className="thumb-content">
            <div className="title">{GAME.title}</div>
            <div>Launched : {GAME.launched}</div>
            <div>Price : {GAME.price}</div>
            <div>{GAME.ratings}</div>
            <div> {GAME.age}</div>
            <div> {GAME.size}</div>
            <div> Downloads: {GAME.downloads}</div>
          </div>
        </div>

        <div className="screenshots">
          <h2>Screen Shots</h2>
          {GAME.images && GAME.images.map((val, i) => {
            return <img src={val} alt="" className="screenshot-image" height={300} width={300}/>
          })}
        </div>

        <section className="description-section">
        <h2>Description</h2>
        {GAME.description}
        </section>
        <section className="description-section">
        <h2>Subscription Information</h2>
        {GAME.subscriptionInformation &&GAME.subscriptionInformation.map((info,i)=>{
          return <li>{info.value}</li>
        })}
        </section>
        <section className="feature-section">
        <h2>Fetures</h2>
        {GAME.features&&GAME.features.map((info,i)=>{
          return <li>{info.value}</li>
        })}
        </section>
      </div>
    </div>
  );
};

export default GamesDisplay;
