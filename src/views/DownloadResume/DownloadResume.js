import { PDFDownloadLink } from "@react-pdf/renderer";
import { Footer } from "../../components/Footer/Footer";
import { Results } from "../Results/Results";
import module from "./DownloadResume.module.css";
import HandIllustration from "../../assets/Hand Illustration.png";
import Rectangle1 from "../../assets/Rectangle1.png";
import Rectangle2 from "../../assets/Rectangle2.png";
import Rectangle3 from "../../assets/Rectangle3.png";

export const DownloadResume = () => {
  return (
    <section className={module.resume}>
      <div className={module.container1}>
        <h1 className={module.resumeTitle}>Voilà! Your resume is ready </h1>
        <div className={module.btnContainer}>
          <img
            className={module.image}
            src={HandIllustration}
            alt="handsIllustration"
          />
          <div className={module.thanks}>
            <p className={module.description}>
              Thank you for sharing your experience with us.
            </p>
            <PDFDownloadLink document={<Results />} fileName="cv-encora.pdf">
              <button className={module.download}>Download PDF</button>
            </PDFDownloadLink>
          </div>
        </div>
      </div>

      <div className={module.container1}>
        <h3>We suggest you take these courses</h3>
        <img className={module.image} src={Rectangle1} alt="illustration" />
        <img className={module.image} src={Rectangle2} alt="illustration" />
        <img className={module.image} src={Rectangle3} alt="illustration" />
      </div>
      <Footer />
    </section>
  );
};
