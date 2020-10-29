import React, { useState } from 'react'
import './App.css';
import thingData from '../src/data/thingData'
import Card from '../src/components/card'

function App() {

  const [cardData, setCardData] = useState(thingData)

  return (
    <div>
      <h1>Many Things</h1>
      <main>

        {cardData.map((value) => {
          return <Card key={value.id} data={value} />
        })}
      </main>
    </div>
  );
}

export default App;
