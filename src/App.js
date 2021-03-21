import React from 'react';
import './App.css';



const imgSize = {
  width: "200px"
}

function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img style={imgSize} src={props.image} alt="image-ka" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>);
}

function App() {
  return (
    <div>
      <Card name="Beyonce" tel="087-174-4290" email="sirawit.mn@gmail.com" image="https://pyxis.nymag.com/v1/imgs/6c0/570/056961772f9239c7ad26e784b020e410ae-beyonce.rsquare.w1200.jpg" />
      <Card name="Wit" tel="02-3536-333" email="wit.mn@gmail.com" image="https://static.bangkokpost.com/media/content/20200813/c1_1967767.jpg" />
    </div>
  );
}

export default App;
