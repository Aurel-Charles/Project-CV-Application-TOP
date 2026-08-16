import { useState } from "react"
import { ButtonAddExperience, ButtonEdit, ButtonRemoveExperience, ButtonSubmit } from "./button"


function ExperienceItem({company, position, description, dateFrom, dateUntil, id}) {
    return(
        <div id={id} className="experience">
            {position && <p className="position">{position}</p>}
            {company && <p>Company: {company} {dateFrom && `(from: ${dateFrom}`} {dateUntil && `to: ${dateUntil})`}</p>}
            {description && <p>Description: {description}</p>}
        </div>
    )
}

function EditExperienceItem({company, position, description, dateFrom, dateUntil,id, handleChange}) {
    return(
        <div className="edit experience">
            <div>
                <label htmlFor="company">Company</label>
                <input name='company' type="text" value={company} onChange={(e) => handleChange(e, id)} />
            </div>
            <div>
                <label htmlFor="position">Position</label>
                <input name='position' type="text" value={position} onChange={(e) => handleChange(e, id)} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea name='description' rows={10} type="text" value={description} onChange={(e) => handleChange(e, id)}></textarea>
            </div> 
            <div>
                <label htmlFor="dateFrom">From</label>
                <input name='dateFrom' type="date" value={dateFrom} onChange={(e) => handleChange(e, id)}/>
            </div> 
            <div>
                <label htmlFor="dateUntil">Until</label>
                <input name='dateUntil' type="date" value={dateUntil} onChange={(e) => handleChange(e, id)}/>
            </div> 
        </div>
    )
}


function ExperienceInfo({experiences , changeMode}) {
    return (
        <div className="general-info">
            <h2>Experience</h2>
            <div className="infos">
                {experiences.map((experience) => {
                    return(
                    <div key={experience.key} className='work-experience'>
                        <ExperienceItem company={experience.company} position={experience.position} description={experience.description} dateFrom={experience.dateFrom} dateUntil={experience.dateUntil} id={experience.key}  />
                    </div>
                )})
                }
            </div>
            <ButtonEdit changeMode={changeMode} />
        </div>
    )
}

function EditExperienceInfo({experiences, changeMode, handleChange, addExperience, removeExperience}) {
    
    return (
        <div className="edit experience-info">
            <h2> Edit Experience Infos</h2>
            <div className="infos">
                {experiences.map((experience, index) => {
                    console.log(experience.id);
                    
                    return(
                    <div key={experience.key} className='work-experience'>
                        <p> {index + 1} </p>
                        <EditExperienceItem company={experience.company} position={experience.position} description={experience.description} dateFrom={experience.dateFrom} dateUntil={experience.dateUntil} id={experience.key} handleChange={handleChange} />
                        <ButtonRemoveExperience removeExperience={removeExperience} id={experience.key}/>
                    </div>
                )})
                }
            </div>
            <div className="cta">
                <ButtonAddExperience addExperience={addExperience} />
                <ButtonSubmit changeMode={changeMode} />
            </div>
        </div>
    )
}

function createNewItem() {
    return {company: '', position: '', description: '', dateFrom: '', dateUntil: '', key: crypto.randomUUID() }
}



export default function ExperienceInfoComponent() {

const [experiences, setExperiences] = useState([
    {company: 'Radio', position: 'technicien', description: 'Doing live show', dateFrom: '09-22-2020', dateUntil: '23-12-2023', key: crypto.randomUUID() },
])

function handleChange(e, targetKey) {
    setExperiences(experiences.map( 
        experience => experience.key === targetKey 
        ? {...experience, [e.target.name]: e.target.value}: 
            experience))
}

function addExperience() {
    const newItem = createNewItem()
    const copyExperiences = [...experiences]
    copyExperiences.push(newItem)
    setExperiences(copyExperiences)
}

function removeExperience(e, targetKey) {
    const newExperiences = experiences.filter((experience) => experience.key !== targetKey )
    setExperiences(newExperiences)
}

const [isEditing, setIsEditing] = useState(true)

function changeMode(e) {
    e.preventDefault()
    
    setIsEditing(!isEditing)
}


return(
    <div className='experience-info-wrapper'> 
    {!isEditing ? 
    <ExperienceInfo experiences={experiences} changeMode={changeMode}/> 
    :<EditExperienceInfo  experiences={experiences} changeMode={changeMode} handleChange={handleChange} addExperience={addExperience} removeExperience={removeExperience}/> 
    }
</div>
)
}