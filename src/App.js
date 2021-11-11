import img from './BarflyLogo.png';
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
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Barfly  をも受ける
        </p>
        
      </header>
    </div>
  );
}

export default withAuthenticator(App);
