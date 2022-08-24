import { useNavigate } from "react-router-dom";

export const Extras = () => {
    const navigate = useNavigate();

		const handleOnClick = () => {
        navigate('/soft-skills');
         }
    /*const handleOnClickNext = () => {
        navigate('/download-cv');
    }*/

         return (
            <section>
            <section className="form-container">
        <h2 className="second-step">Step 5</h2>
        <h1 className="work-tittle">Extras</h1>
        <form className="form-work">
            <label className="form-label">Certification<br/>
            <input type="text" placeholder="e.g. Data Science"/><br/>
            </label>

            <label className="form-label">Issuing Organization<br/>
            <input type="text" placeholder="e.g. Deep Teaching Solutions"/><br/>
            </label>

            <label>Years of certification <br/>
            <select className="selector">
                <option selected value="Start Year">Issue Year</option>
            </select>

            <select className="selector">
                <option selected value="End Year">Expiration Year</option>
            </select>
            </label><br/>

            
            <input type="checkbox" placeholder="This certification doesn’t expire" /> <br />
            <label>Add Certification</label><br/>

            <label className="form-label">Award<br/>
            <input type="text" placeholder="e.g. Data Analytics Award"/><br/>
            </label>

            <label>Add Award</label><br/>

            <div className="nav-container">
              <button className="btn-nav" onClick={handleOnClick}>BACK</button>
              <button className="btn-nav">CREATE RESUME</button>
            </div>
            </form>
            </section>
            </section>
         )
         }