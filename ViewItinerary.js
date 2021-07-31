import React from "react";
import Lottie from 'react-lottie';
import animationData from '../lotties/42499-fire-loop.json';
import "../App.css" ;
import ClickingButton from "../components/ClickingButton";
import { Checkbox } from "@material-ui/core";


export default function ViewItinerary() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
   
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
    },
  };

return (
  <div className= "backgroundCover"> 
    <Lottie className= '.flarelottie1'
          options={defaultOptions}
          height={50}
          width={40}
          />

  <div class="container">
<div class="row">
  <div class="HeaderTitle">
  <h1>Adventure Awaits
  </h1>
  <h5>
    Checkout out the events below and RSVP today!
  </h5>
</div>
<div class="row row-cols-1 row-cols-md-2 g-3">
  
<div class="fun-card">
  <div class="fun-card-image">
    <img src="https://pbs.twimg.com/media/ETZ0o1vXkAEhjOK.jpg:large" alt=""/>
  </div>
  <div class="fun-card-content">
    <div class="fun-card-fun-name"><h2><strong>Yot Bar</strong></h2></div>
    
    <div class="fun-card-about"> A Uniquely Fort Lauderdale Dining Destination On The New River. The next best thing to being on the water, is being at YOT.Fort Lauderdale’s celebrated new bar and kitchen, with 360°waterway views and a cool, blue vibe throughout.
    <div class="buttongirl"><Checkbox></Checkbox></div>  
     </div>
  </div>
</div>
<div class="fun-card">
  <div class="fun-card-image">
    <img src="https://texashillcountry.com/wp-content/uploads/33058552_200199997281956_2854300226854846464_n-660x400.jpg" alt=""/>
  </div>
  <div class="fun-card-content">
    <div class="fun-card-fun-name"><h2><strong>Glow Paddle</strong></h2></div>
    
    <div class="fun-card-about"> Night SUP Glow Adventure. Night Paddle boarding Adventure on beautiful Singer Island! We will paddle out just before sunset to enjoy the beautiful South Florida sunset. Then once the sun goes down we will turn on the Nocqua LED lights underneath our paddle boards and watch the water glow!!!! 
    <div class="buttongirl"><Checkbox></Checkbox></div>
    </div>
  </div>
</div>
<div class="fun-card">
  <div class="fun-card-image">
    <img src="https://mk0wharfmiamicofqx8l.kinstacdn.com/wp-content/uploads/2020/08/unnamed-2-1060x707-1-1060x675.jpg" alt=""/>
  </div>
  <div class="fun-card-content">
    <div class="fun-card-fun-name"><h1><strong>The Wharf</strong></h1></div>
    <div class="fun-card-about">EVERY Thursday... IT'S ON like Donkey Kong at The Wharf Miami! 🦍
Join us for the ultimate gaming experience by the Miami River featuring GIANT BEER PONG, ARCADE GAMES, FOOSBALL, SKEE-BALL, PING-PONG, JENGA, CORN-HOLE + MORE!
<div class="buttongirl"><Checkbox></Checkbox></div>
    </div>
  </div>
</div>
<div class="fun-card">
  <div class="fun-card-image">
    <img src="https://wannadotours.com/wp-content/uploads/2018/10/thriller-yellow-img8154-20120525a-1489160083.jpg" alt=""/>
  </div>
  <div class="fun-card-content">
    <div class="fun-card-fun-name"><h1><strong>Speedboat</strong></h1></div>
    <div class="fun-card-about">Thrill seekers that want to experience the Miami coastline should look no further than this speedboat adventure—the only speedboat sightseeing tour that takes you offshore for a blistering ride. Just hop aboard, and get ready to feel the wind whipping your face as you zoom through the surf. <div class="buttongirl"><Checkbox></Checkbox></div>
    </div>
  </div>
</div>
</div>
<div class="row row-cols-2 row-cols-md-2 g-3">
<div class="fun-card">
  <div class="fun-card-image">
    <img src="https://cdn.fortlauderdaleillustrated.com/wp-content/uploads/sites/142/2021/02/Boatyard-Ext-2.jpg" alt=""/>
  </div>
  <div class="fun-card-content">
    <div class="fun-card-fun-name"><h2><strong>BoatYard</strong></h2></div>
    
    <div class="fun-card-about"> This laid-back-dining destination is a must for watching boats cruise up and down the Intracoastal. You can dock your own vessel and dine—just be sure to add an order of the oh-so addictive Bimini Bread to your meal. The restaurant is known for its dock that’s anchored by a sprawling gumbo limbo tree, providing shade for those sweltering afternoons.<div class="buttongirl"><Checkbox></Checkbox></div>
     </div>
  </div>
</div>

<div class="fun-card">
  <div class="fun-card-image">
    <img src="http://www.leisurepro.com/blog/wp-content/uploads/2018/08/shutterstock_664589182-1366x800@2x.jpg" alt=""/>
  </div>
  <div class="fun-card-content">
    <div class="fun-card-fun-name"><h2><strong>Snorkel tour</strong></h2></div>
    
    <div class="fun-card-about"> Enjoy the scenic and breathtaking drive on the Overseas Highway One passing Key Largo and the famous Seven Mile bridge to America’s southernmost city Key West. Beer, wine, margaritas and sodas are provided as well as basic snorkel gear. This is a tour ideal for snorkel beginners. <div class="buttongirl"><Checkbox></Checkbox></div>
     </div> 
  </div>
</div>
</div>
</div>
</div>
<div class="clicking-button-girl"> <div><ClickingButton myLabel={"SPARK!!!!!!!!!!!!!"} myLink = {"/LoadingPage2"}/></div></div>
</div>

  );
}