import module from "./TipsPersonal.module.css";

export const TipsPersonal = () => {
  return (
    <aside className={module.tipsContainer}>
      <h3 className={module.someTips}>Some Tips</h3>
      <ol>
        <li className={module.list}>
          Each project is a bullet point, Name the project if it's relevant.{" "}
        </li>
        <li className={module.list}>
          Write down your project responsibilities.{" "}
        </li>
        <li className={module.list}>Quantify your results, use numbers.</li>
        <li className={module.list}>Be concise and impactful. </li>
        <li className={module.list}>
          Focus on your accomplishments. How did each project benefit the
          company?{" "}
        </li>
        <li className={module.list}>
          Write down the impact you had on each project, using bullet points and
          small sentences.{" "}
        </li>
        <li className={module.list}>
          You don't need to list all your projects, only the most relevant. If
          you have a long career, focus more on the latest projects and less on
          the older ones.{" "}
        </li>
      </ol>
    </aside>
  );
};
