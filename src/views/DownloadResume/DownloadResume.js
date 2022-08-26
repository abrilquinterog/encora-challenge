import {PDFDownloadLink} from "@react-pdf/renderer";
import { Footer } from "../../components/Footer/Footer";
import { Results } from "../Results/Results";

export const DownloadResume = () => {

  return (
    <main>
    <PDFDownloadLink document={<Results />} fileName='cv-encora.pdf'><button>download</button></PDFDownloadLink>
    <Footer />
    </main>
  )
}
