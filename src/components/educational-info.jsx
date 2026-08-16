import { useState } from 'react'
import { ButtonAddEducation, ButtonEdit, ButtonRemoveEducation, ButtonSubmit } from './button';

function EducationItem({school, study, year, id}) {
    return(
        <p id={id} key={id}>
            {study} 
            {school && ` - ${school}`}
            {year && ` - ${year}`} </p> 
        
    )
}
function EditEducationItem({school, study, year, id, handleChange}) {
    return(
        <div className='edit educational'>
            <div>
                <label htmlFor="study">Study</label>
                <input name='study' type="text" value={study} onChange={(e) => handleChange(e, id)} />
            </div>
            <div>
                <label htmlFor="school">School</label>
                <input name='school' type="text" value={school} onChange={(e) => handleChange(e, id)} />
            </div>
            <div>
                <label htmlFor="year">Year</label>
                <input name='year' type="text" value={year} onChange={(e) => handleChange(e, id)}/>
            </div> 
        </div>
    )
}

function EducationalInfo({educations, changeMode}) {
    return (
        <div className="general-info">
            <h2>Education</h2>
            <div className="infos">
                {educations.map((education) => {
                    return(
                    <div key={education.key} className='school-experience'>
                        <EducationItem school={education.school} study={education.study} year={education.year} id={education.key} />
                    </div>
                )})
                }
            </div>
            <ButtonEdit changeMode={changeMode}/>
        </div>
    )
}

function EditEducationalInfo({educations,handleChange, changeMode, addEducation, removeEducation}) {
    return (
        <div className="edit educational-info">
            <h2> Edit Education Infos</h2>
            <div className="infos">
                {educations.map((education, index) => {
                    return(
                    <div key={education.key} className='school-experience'>
                        <p className='index'> {index + 1} </p>
                        <EditEducationItem school={education.school} study={education.study} year={education.year} id={education.key} handleChange={handleChange} />
                        <ButtonRemoveEducation removeEducation={removeEducation} id={education.key} />
                    </div>
                )})
                }
            </div>
            <div className='cta'>
                <ButtonAddEducation addEducation={addEducation}/>
                <ButtonSubmit changeMode={changeMode}/>
            </div>
        </div>
    )
}


function createNewItem() {
    return {school: '', study: '', year: '', key: crypto.randomUUID()}
}


export default function EducationalInfoComponent(){
    const [educations, setEducations] = useState([
        {school: 'R.deLuzarche', study: 'BAC', year: '2007', key: crypto.randomUUID()},
        {school: 'H.Thuillier', study: 'BTS', year: '2009', key: crypto.randomUUID()},
    ])

    function handleChange(e, targetKey) {
        setEducations(educations.map( 
            education => education.key === targetKey 
            ? {...education, [e.target.name]: e.target.value}: 
                education))
    }

    function addEducation() {
        const newItem = createNewItem()
        const copyEducations = [...educations]
        copyEducations.push(newItem)
        setEducations(copyEducations)
    }

    function removeEducation(e, targetKey) {
        const newEductation = educations.filter((education) => education.key !== targetKey)
        setEducations(newEductation)
    }

    const [isEditing, setIsEditing] = useState(true)

    function changeMode(e) {
        e.preventDefault()
        
        setIsEditing(!isEditing)
    }



    return (
        <div className='education-info-wrapper'> 
            {!isEditing ? 
            <EducationalInfo educations={educations} changeMode={changeMode}/> 
            : <EditEducationalInfo educations={educations} handleChange={handleChange} changeMode={changeMode} addEducation={addEducation} removeEducation={removeEducation}/> 
        }
        </div>
    )
}