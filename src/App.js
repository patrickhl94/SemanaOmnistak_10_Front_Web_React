import React, { useEffect, useState } from 'react';

import DevItem from './components/DevItem/index'
import DevForm from './components/DevForm/index'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await fetch('http://localhost:3333/devs')
      const respJSON = await response.json()
      setDevs(respJSON)
    }
    loadDevs()
  }, [])

  async function handleAddDev(data) {

    const response = await fetch(`http://localhost:3333/devs`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const respJSON = await response.json()

    setDevs([...devs, respJSON])

  }

  return (
    <div id="app" >

      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {
            devs.map(devs => (
              <DevItem key={devs._id} devs={devs} />
            ))
          }
        </ul>
      </main>

    </div>
  );
}

export default App;
