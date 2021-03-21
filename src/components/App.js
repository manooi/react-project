import React from 'react';
import Card from './Card';
import contacts from '../contacts'

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        email={contacts[0].email}
        imgUrl={contacts[0].imgURL}
        phone={contacts[0].phone} />
      <Card
        name={contacts[1].name}
        email={contacts[1].email}
        imgUrl={contacts[1].imgURL}
        phone={contacts[1].phone} />
      <Card
        name={contacts[2].name}
        email={contacts[2].email}
        imgUrl={contacts[2].imgURL}
        phone={contacts[2].phone} />
    </div>
  );
}

export default App;
