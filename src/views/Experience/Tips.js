import module from "./Tips.module.css";

export const Tips = () => {
  return (
    <aside className={module.tipsContainer}>
      <h3 className={module.someTips}>Some Tips</h3>
      <ol>
        <li className={module.list}>
          Write your work experience in reverse chronological order.
        </li>
        <li className={module.list}>
          Demonstrate your suitability via your work experience.
        </li>
        <li className={module.list}>
          Be specific—if the job description states you must have customer
          support experience, then give the details that show that you have the
          experience and more.{" "}
        </li>
        <li className={module.list}>
          Point out your achievements in your work experience.{" "}
        </li>
        <li className={module.list}>
          Demonstrate results with numbers and metrics.{" "}
        </li>
        <li className={module.list}>
          Check for errors: Triple-check your own work, and then have someone
          else look over your resume to ensure it's 100% clean{" "}
        </li>
      </ol>
    </aside>
  );
};
