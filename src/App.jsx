// src/App.jsx
import { useEffect, useState } from 'react';
import * as petService from './services/petService'
import PetList from './components/PetList';
import PetDetails from './components/petDetails';
const App = () => {

  const [pets, setPets] = useState([])
  const [selected , setSelected ] = useState(null)

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

  const handleSelect =(pet) =>{
    setSelected(pet)
  }
  petService.index()

  return (
    <>
    <PetList pets = {pets} handleSelect={handleSelect}/>
    <PetDetails selected={selected}/>
    </>
  )

};

export default App;