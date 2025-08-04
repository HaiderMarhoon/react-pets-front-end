import { useState } from "react"


const intiData = {
    name: "",
    age: "",
    breed: ""
}

const PetForm = (props) => {

    const [formData, setFormData] = useState(intiData)

     const handleSumit = (event) => {
        event.preventDefault()
        if(props.selected){
            props.handleUpdatePet(formData,props.selected._id)
        }
        else{
            props.handleAddPet(formData)
            setFormData(intiData)

        }
     }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSumit}>
                <label htmlFor="name"> Name </label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="age"> Age </label>
                <input
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="breed"> Breed </label>
                <input
                    id="breed"
                    name="breed"
                    value={formData.breed}
                    onChange={handleChange}
                />
                <button type="submit">{ props.selected ? "Update pet":"Add New Pet"}</button>
            </form>

        </div>
    )


}

export default PetForm