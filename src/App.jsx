// src/App.jsx
import { useEffect, useState } from 'react';
import * as petService from './services/petService'
import PetList from './components/PetList';
import PetDetails from './components/petDetails';
import PetForm from './components/PetForm';
const App = () => {

  const [pets, setPets] = useState([])
  const [selected, setSelected] = useState(null)


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

  const handleSelect = (pet) => {
    setSelected(pet)
  }

  const handleAddPet = async (formData) => {
    await petService.create(formData)
    setPets([newPet, ...pets])
  }
  const handleUpdatePet = async(formData, petId) => {
    try{
      const updatePet = await petService.update(formData, petId)
      console.log(updatePet)
      const updateDataList = pets.map((pet) =>(
        pet._id !== updatePet._id ? pet :updatePet
      ))
      setPets(updateDataList)
      setSelected(updatePet)
    }
    catch(err){
      console.log(err)
    }
  };

  const handleDeletePet = async(petId) =>{
    try{
      const deletePet =await petService.deletePet(petId)
      setPets(pets.filter ((pet) =>
        pet._id !== deletePet._id 
      ))
      setSelected(null)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect} />
      <PetForm selected={selected} handleAddPet={handleAddPet} handleUpdatePet={handleUpdatePet} />
      <PetDetails selected={selected} handleDeletePet={handleDeletePet} />
    </>
  )

};

export default App;