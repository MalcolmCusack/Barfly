import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import { API, Storage, graphqlOperation } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {listBeers} from './graphql'

const initialFormState = { name: '', description: ''}

function App() {
  
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    fetchBeer();
  }, []);

  
  async function fetchBeer() {
    const apiData = await API.graphql({ query: listBeers });
    setBeer(apiData.data.listBeers.items)
  }


  console.log(beer)



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
