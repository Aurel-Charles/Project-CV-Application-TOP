import { useState } from 'react'
import { ButtonAddEducation, ButtonEdit, ButtonRemoveEducation, ButtonSubmit } from './button';

function EducationItem({school, study, year, id}) {
    return(
        <p id={id} key={id}> {study} / {school} / {year} </p> 
    )
}
function EditEducationItem({school, study, year, id, handleChange}) {
    return(
        <div>
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
            <h1>Education Info</h1>
            <div className="infos">
                {educations.map((education, index) => {
                    return(
                    <div key={education.key} className='school-experience'>
                        <p> {index + 1} </p>
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
        <div className="general-info">
            <h1> Edit Education Info</h1>
            <div className="infos">
                {educations.map((education, index) => {
                    return(
                    <div key={education.key} className='school-experience'>
                        <p> {index + 1} </p>
                        <EditEducationItem school={education.school} study={education.study} year={education.year} id={education.key} handleChange={handleChange} />
                        <ButtonRemoveEducation removeEducation={removeEducation} id={education.key} />
                    </div>
                )})
                }
            </div>
            <ButtonAddEducation addEducation={addEducation}/>
            <ButtonSubmit changeMode={changeMode}/>
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