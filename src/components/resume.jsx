import EducationalInfoComponent from "./educational-info";
import ExperienceInfoComponent from "./experience-info";
import GeneralInfoComponent from "./general-info";

export default function Resume() {
    return(
        <div className="resume">
            <h1 className="title">Resume</h1>
            <GeneralInfoComponent/>
            <hr/>
            <EducationalInfoComponent/>
            <hr/>
            <ExperienceInfoComponent/>
    </div>
    )
}