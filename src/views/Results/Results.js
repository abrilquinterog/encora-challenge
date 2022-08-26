import {
  Document,
  Page,
  Text,
  Image,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "../../assets/encora-jobs-logo.png";

export const Results = () => {
  let info = localStorage.getItem("userInfo");
  //console.log(info);
  let infoDestruc = JSON.parse(info);

  let personalProjects = localStorage.getItem("personalProjects");
  //console.log(personalProjects);
  let personalProjectsDestr = JSON.parse(personalProjects);

  let workExperience = localStorage.getItem("workExperience");
  //console.log(workExperience);
  let workExperienceDestr = JSON.parse(workExperience);

  let education = localStorage.getItem("education");
  //console.log(education);
  let educationDestr = JSON.parse(education);

  let extraInformation = localStorage.getItem("extrainfo");
  //console.log(extraInformation);
  let extraInformationDestr = JSON.parse(extraInformation);

  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 20,
      textAlign: "left",
      color: "#2D1154",
    },
    subtitle: {
      fontSize: 16,
      textAlign: "left",
      color: "#585360",
    },
    text: {
      margin: 5,
      fontSize: 12,
      textAlign: "justify",
    },
    image: {
      width: 100,
      position: "absolute",
      right: 35,
      top: 35,
    },
    container: {
      position: "absolute",
      top: 45,
      left: 35,
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

  return (
    <Document>
      <Page style={styles.body}>
        <Image style={styles.image} src={logo} />
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>
              {infoDestruc.firstName} {infoDestruc.lastName}
            </Text>
            <Text style={styles.subtitle}>{infoDestruc.job}</Text>
          </View>

          <View>
            <Text style={styles.title}>Summary</Text>
            <Text style={styles.text}>{infoDestruc.summary}</Text>
          </View>
          <View>
            <Text style={styles.title}>Technical Skills</Text>
            {workExperienceDestr.stack.map((technology) => {
              return <Text style={styles.text}>{technology}</Text>;
            })}
          </View>

          <View>
            <Text style={styles.title}>Work Experience</Text>
            <Text style={styles.text}>
              {workExperienceDestr.startYear}-{workExperienceDestr.endYear}
            </Text>
            <Text style={styles.text}>
              {workExperienceDestr.jobTittle} at {workExperienceDestr.company}
            </Text>
            <Text style={styles.subtitle}>Technologies</Text>
            <Text style={styles.text}>
              {workExperienceDestr.jobDescription}
            </Text>
            {workExperienceDestr.stack.map((technology) => {
              return <Text style={styles.text}> {technology} </Text>;
            })}
          </View>

          <View>
            <Text style={styles.title}>Education</Text>
            <Text style={styles.text}>{educationDestr.school}</Text>
            <Text style={styles.text}>
              {educationDestr.degree} in {educationDestr.study}
            </Text>
            <Text style={styles.text}>
              {educationDestr.start}-{educationDestr.end}
            </Text>
            <Text style={styles.title}>Other Training and Certifications</Text>
            <Text style={styles.text}>
              {extraInformationDestr.certification}
            </Text>
            <Text style={styles.text}>
              {extraInformationDestr.issuingCertification}
            </Text>
            <Text style={styles.text}>{extraInformationDestr.issueYear}</Text>
            <Text style={styles.text}>
              {extraInformationDestr.expirationYear}
            </Text>
            <Text style={styles.text}>{extraInformationDestr.award}</Text>
          </View>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};
