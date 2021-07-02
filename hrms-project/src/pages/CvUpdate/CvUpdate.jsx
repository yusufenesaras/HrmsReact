import React, { useState, useEffect } from "react";
import { Card, Label, Button,Icon } from "semantic-ui-react";
import SchoolUpdate from "./SchoolUpdate";
import CandidateCvService from "../../services/CandidateCvService";
import TalentUpdate from "./TalentUpdate";
import LanguageUpdate from "./LanguageUpdate";
import ExpreienceUpdate from "./ExpreienceUpdate";
import CvListUpdate from "./CvListUpdate";

export default function CvUpdate() {
  const [cv, setCvs] = useState();
  useEffect(() => {
    let candidateCvService = new CandidateCvService();
    candidateCvService.findByCvId(1).then((result) => setCvs(result.data.data));
  }, []);
  console.log(cv);

  return (
    <div>
      <div style={{ backgroundColor: "skyblue", height: "30px" }}>
        {" "}
        <Card.Header>
          {" "}
          <Label ribbon>Cv</Label>{" "}
        </Card.Header>
      </div>
      <Card.Content>
        {" "}
        <div style={{ fontSize: "15px" }}>
          {cv?.coverLetter} <br></br>
          <a href={cv?.avatarUrl} target={"_blank"} rel="noopener noreferrer">
            <Button yellow>
              <Icon name="image" color="whitesmoke" /> Resim
            </Button>
          </a>
          <a
            href={cv?.githubAddress}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <Button secondary>
              <Icon name="github" /> Github
            </Button>
          </a>
          <a
            href={cv?.linkedinAddress}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <Button color="linkedin">
              <Icon name="linkedin" /> LinkedIn
            </Button>
          </a>
          <CvListUpdate />
        </div>
      </Card.Content>

      <div style={{ backgroundColor: "skyblue", height: "30px" }}>
        {" "}
        <Card.Header>
          {" "}
          <Label ribbon>Eğitim Bilgisi</Label>{" "}
        </Card.Header>
      </div>
      {cv?.schools.map((education) => (
        <Card.Content>
          {" "}
          <div style={{ fontSize: "15px" }}>
            {education.schoolName + "---"}
            {education.entryDate + "---"}
            {education.graduationDate + "---"}
            {education.department}

            <SchoolUpdate education={education} />
          </div>
        </Card.Content>
      ))}
      <div style={{ backgroundColor: "skyblue", height: "30px" }}>
        {" "}
        <Card.Header>
          {" "}
          <Label ribbon>Yetenek</Label>{" "}
        </Card.Header>
      </div>
      {cv?.talents.map((talent) => (
        <Card.Content>
          {" "}
          <div style={{ fontSize: "15px" }}>
            {talent.talentName}

            <TalentUpdate talents={talent} />
          </div>
        </Card.Content>
      ))}
      <div style={{ backgroundColor: "skyblue", height: "30px" }}>
        {" "}
        <Card.Header>
          {" "}
          <Label ribbon>Dil</Label>{" "}
        </Card.Header>
      </div>
      {cv?.languages.map((language) => (
        <Card.Content>
          {" "}
          <div style={{ fontSize: "15px" }}>
            {language.languagesName + "-"}
            {language.level}

            <LanguageUpdate languages={language} />
          </div>
        </Card.Content>
      ))}
      <div style={{ backgroundColor: "skyblue", height: "30px" }}>
        {" "}
        <Card.Header>
          {" "}
          <Label ribbon>İş Geçmişi</Label>{" "}
        </Card.Header>
      </div>
      {cv?.jobExperience.map((exp) => (
        <Card.Content>
          {" "}
          <div style={{ fontSize: "15px" }}>
            {exp.workplaceName + "-"}
            {exp.jobtitle.title + "---"}
            {exp.entryDate + "---"}
            {exp.exitDate + "---"}
            {exp.jobDetail}

            <ExpreienceUpdate jobExperience={exp} />
          </div>
        </Card.Content>
      ))}
    </div>
  );
}
