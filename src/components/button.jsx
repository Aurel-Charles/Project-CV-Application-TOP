export function ButtonEdit({changeMode}) {
    return(
        <button  onClick={changeMode} >Edit</button>
    )
}

export function ButtonSubmit({changeMode}) {
    return(
        <button  onClick={changeMode} >Submit</button>
    )
}

export function ButtonAddEducation({addEducation}) {
    return(
        <button  onClick={addEducation} >Add education</button>
    )
}

export function ButtonRemoveEducation({removeEducation, id}) {
    return(
        <button  onClick={(e)=> removeEducation(e, id)} >X</button>
    )
}

export function ButtonAddExperience({addExperience}) {
    return(
        <button  onClick={addExperience} >Add experience</button>
    )
}

export function ButtonRemoveExperience({removeExperience, id}) {
    console.log(removeExperience, id);
    
    return(
        <button  onClick={(e)=> removeExperience(e, id)} >X</button>
    )
}