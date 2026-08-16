import { useState } from 'react'
import { ButtonEdit, ButtonSubmit } from './button';

function GeneralInfo({generalInfo, changeMode}) {
    return (
        <div className="general-info">
            <h2>General</h2>
            <div className="infos general">
                {generalInfo.firstname && <p>Firstname: {generalInfo.firstname}</p>}
                {generalInfo.lastname && <p>Lastname: {generalInfo.lastname}</p>}
                {generalInfo.phone && <p>Phone: {generalInfo.phone}</p>}
                {generalInfo.email && <p>Email: {generalInfo.email}</p>}
            </div>
            <ButtonEdit changeMode={changeMode}/>
        </div>
    )
}

function EditGeneralInfo({generalInfo, handleChange , changeMode}) {

    return (
        <div className="edit general-info">
            <h2>Edit General Infos</h2>
            <div className="edit infos">
                    <div>
                        <label htmlFor="firstname">Firstname</label>
                        <input 
                            name="firstname" 
                            type="text" 
                            value={generalInfo.firstname}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname">Lastname</label>
                        <input 
                            name="lastname" 
                            type="text" 
                            value={generalInfo.lastname}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input 
                            name="phone" 
                            type="tel" 
                            value={generalInfo.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            name="email" 
                            type="email" 
                            value={generalInfo.email}
                            onChange={handleChange}
                        />
                    </div>
            </div>
                    <div className='cta'>
                        <ButtonSubmit changeMode={changeMode}/>
                    </div>
        </div>
    )
}


export default function GeneralInfoComponent(){
    const [generalInfo, setGeneralInfo] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
    })

    function handleChange(e) {
        setGeneralInfo({
            ...generalInfo,
            [e.target.name]:  e.target.value
        })
    }
    
    const [isEditing, setIsEditing] = useState(true)

    function changeMode(e) {
        e.preventDefault()
        
        setIsEditing(!isEditing)
    }

    return (
        <div className='general-info-wrapper'>
            {!isEditing ? 
            <GeneralInfo generalInfo={generalInfo} changeMode={changeMode} /> 
            : <EditGeneralInfo generalInfo={generalInfo} handleChange={handleChange} changeMode={changeMode}/>}
            
        </div>
    )
}