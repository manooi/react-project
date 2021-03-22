import React from 'react';
import Avartar from './Avartar';
import Detail from './Detail';

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <p className="info">{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avartar img={props.imgUrl} />
        </div>
        <div className="bottom">
          <Detail info={props.email} />
          <Detail info={props.phone} />
        </div>
      </div>
    </div>
  );
}

export default Card;
