const PetDetails = (props) => {
    if (!props.selected) {
        return (
            <div>

                <h2>Not pet is selected</h2>
            </div>
        )
    }
    return (
        <>
            <h2>{props.selected.name}</h2>
            <h3>Breed : {props.selected.breed}</h3>
            <h3>Age: {props.selected.age}</h3>
            <div>
                <button onClick={() => props.handleDeletePet(props.selected._id)}>
                    Delete Pet
                </button>
            </div>
        </>
    )

}

export default PetDetails