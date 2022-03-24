import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import DrawitThumb from "../assets/Draw it_thumbnail.png";
import bakitThumb from "../assets/Bakeit_Thumbnail.png";
import jetPackthumb from "../assets/Jetpackjump_thumbnail.png";
import rocketThumb from "../assets/Rocket Sky_thumbnail.jpeg";
import "../views/GameDetail.scss";

import DRAW1 from "../assets/draw-it-22926-1.jpeg";
import DRAW2 from "../assets/draw-it-22926-6.jpeg";
import DRAW3 from "../assets/Drawit_2.jpeg";
import DRAW4 from "../assets/Drawit_1.png";

import BK1 from '../assets/bake-it-27383-1.jpeg';
import BK2 from '../assets/Bake-it-Guide-.jpeg';
import BK3 from '../assets/Bakeit_1.jpeg';
import BK4 from '../assets/bakeit_2.png';

import JJ1 from '../assets/Jetpack-Jump-cover-720x360-c.jpeg';
import JJ2 from '../assets/Jetpack-Jump-Mod-Icon.jpeg';
import JJ3 from '../assets/Jetpack-Jump.png';

import RS1 from '../assets/Rocket sky_2.png';
import RS2 from '../assets/Rocket-Sky-Before-and-After.jpeg';
import RS3 from '../assets/rocketsky_1.jpeg';

const GAMEJSON = [
  {
    title: "DRAW IT",
    thumb: DrawitThumb,
    images:[DRAW1,DRAW2,DRAW3,DRAW4],
    description: `Is it a moustache, or is it a sandwich? And will your drawing be good enough to tell the difference? Put it to the test in Draw It, a rapid-fire drawing game where you compete against others (and the clock!) by doodling the prompts that appear on-screen!
    `,
    launched: "MARCH 2019",
    age: "6+",
    size: "20Mb",
    features: null,
    downloads: `90 MILLION+ DOWNLOADS!`,
    ranking: `#1 GAME IN 'ARCADE' CATEGORY IN 48 COUNTRIES`,
    ratings: null,
    compatibility: null,
    price: "FREE",
    subscriptionInformation: [
      {
        value: `A product of our 'Creative Wednesdays', where anyone in the company gets the chance to pitch chart-topping game concepts!`,
      }
    ]
  },
  {
    title: "Rocket Sky",
    images:[RS1,RS2,RS3],
    thumb: rocketThumb,
    description: `Developed by DP Space AG, Rocket Sky! was an incredible publishing success story and a great collaboration between us and the developer.
    `,
    launched: "JULY 2019",
    age: "12+",
    size: "454mb",
    features: [
      { value: "Simple and addictive gameplay" },
      { value: "Numerous upgrades to keep you exploring" },
      { value: "Variety of planets and rockets to unlock" },
      { value: "Colourful 2D design" }
    ],
    downloads: "30 MILLION+ DOWNLOADS",
    ranking: `#1 APP IN UK, CANADA, GERMANY AND MANY MORE`,
    ratings: "4.5 out of 5",
    price: "Paid subscription",
    compatibility: null,
    subscriptionInformation: [
      {
        value:
          "A weekly subscription costing $5.49 per week after a 3 day FREE trial period",
      },
      { value: "A monthly subscription costing $14.49 per month" }    ]
  },
  {
    title: "BAKE IT",
    images:[BK1,BK2,BK3,BK4],
    thumb: bakitThumb,
    description: `Bake it is a fun and addictive game where you have to match what you are baking with the order.
    It's time to perfect your bakes and wow your customers with your amazing skills! Use your mixture and toppings to create a masterpiece that matches up with what the customer desires.`,
    launched: "APRIL 2020",
    age: "16+",
    size: "102 Mb",
    features: null,
    downloads: "",
    ranking: ` #1 GAME IN 'SIMULATION' CATEGORY IN 20 COUNTRIES`,
    ratings: `4.0 out of 5`,
    price: "Free",
    subscriptionInformation: null,
    compatibility: [
      { value: "iPhone - Requires iOS 10.0 or later" },
      { value: "iPad - Requires iPadOS 10.0 or later." },
      { value: "iPod touch - Requires iOS 10.0 or later." },
      {
        value:
          "Mac - Requires macOS 11.0 or later and a Mac with the Apple M1 chip.",
      },
    ],
  },
  {
    title: "JETPACK JUMP",
    thumb: jetPackthumb,
    images:[JJ1,JJ2,JJ3],

    description: ` It’s track and field, but not as you know it! Time your initial jumps perfectly to get ready for launch, before taking a jetpack-powered leap into the stratosphere to reach new distances. Upgrade your jetpack and use all your rocket fuel to keep soaring further and earning more cash!
    `,
    launched: "MAY 2019",
    age: "12+",
    size: "95Mb",
    features: null,
    downloads: "42 MILLION+ DOWNLOADS",
    ranking: "A TOP 3 APP IN 24 COUNTRIES INCLUDING USA AND UK",
    ratings: null,
    price: "Free",
    compatibility: null,
    subscriptionInformation: null  }
];
const GameDetail = () => {
  let navigate = useNavigate();
  const selectedGame = (gameData) => {
    console.log(gameData);
    localStorage.setItem("selectedGameData", JSON.stringify(gameData));
    navigate(`/Game-Detail`);
  };

  return (
    <div className="container-fluid">
      <div>
        <Carousel
          dynamicHeight={false}
          emulateTouch={true}
          infiniteLoop={true}
          showThumbs={false}
          width={700}
          className="slider"
        >
          {GAMEJSON.map((game, index) => (
            <div className="card" onClick={() => selectedGame(game)}>
              <div className="container">
                <div className="thumb-name">
                  <img src={game.thumb} className="carou-img" alt="" />
                  <div className="Game-studio-name">
                    <div className="game-name">{game.title}</div>
                    <div className="studio-name">Neon play</div>
                  </div>
                </div>

                <div className="publish-row">
                  <span className="ranking">
                    {game.ranking}
                    {" . "}
                    {game.downloads}
                  </span>
                </div>
                <div>{game.description}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default GameDetail;
