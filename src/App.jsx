// src/App.jsx
import { useEffect, useState } from 'react';
import * as petService from './services/petService'
import PetList from './components/PetList';
const App = () => {

  const [pets, setPets] = useState([])
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petService.index()
        setPets(fetchedPets)
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchPets()

  }, [])
  petService.index()

  return (
    <>
    <PetList pets = {pets}/>
    </>
  )

};

export default App;