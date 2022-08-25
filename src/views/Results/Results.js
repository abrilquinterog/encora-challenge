export const Results = () => {


           let info= localStorage.getItem('userInfo');
           //console.log(info);
           let infoDestruc = JSON.parse(info);

           let personalProjects= localStorage.getItem('personalProjects');
           //console.log(personalProjects);
           let personalProjectsDestr = JSON.parse(personalProjects);

           let workExperience= localStorage.getItem('workExperience');
           //console.log(workExperience);
           let workExperienceDestr = JSON.parse(workExperience);

           let education= localStorage.getItem('education');
           //console.log(education);
           let educationDestr = JSON.parse(education);

           let softSkills= localStorage.getItem('soft skills');
           //console.log(softSkills);
           let softSkillsDestr = JSON.parse(softSkills);

           let extraInformation= localStorage.getItem('extrainfo');
           //console.log(extraInformation);
           let extraInformationDestr = JSON.parse(extraInformation);
           

        return (
            <>
            <header>
            </header>
            <h1>{infoDestruc.firstName} {infoDestruc.lastName}</h1>
            <p>{infoDestruc.job}</p>

            <h2>{infoDestruc.summary}</h2>
            <div>
                {workExperienceDestr.stack.map(technology=>{
                    return(
                        <p>{technology}</p>)
                })}
            </div><br/>

            <div>
                <p>{workExperienceDestr.startYear}-{workExperienceDestr.endYear}</p>
                <p>{workExperienceDestr.jobTittle} at {workExperienceDestr.company}</p>
                <p>{workExperienceDestr.jobDescription}</p>
                <div>
                {workExperienceDestr.stack.map(technology=>{
                    return(
                        <span>  {technology} </span>)
                })}
            </div><br/>
            </div>

            <div>
                <p>{educationDestr.school}</p>
                <p>{educationDestr.degree} in {educationDestr.study}</p>
                <p>{educationDestr.start}-{educationDestr.end}</p>
                <h2>Other Training and Certifications</h2>
                <p>{extraInformationDestr.certification}</p>
                <p>{extraInformationDestr.issuingCertification}</p>
                <p>{extraInformationDestr.issueYear}</p>
                <p>{extraInformationDestr.expirationYear}</p>
                <p>{extraInformationDestr.award}</p>
            </div>
            </>
        );
        }
