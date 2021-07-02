import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import {
  Grid,
  Button,
  Divider,
  Form as SemanticForm,
  Icon,
  Message,
} from "semantic-ui-react";
import swal from "sweetalert";
import CandidateCvService from "../../services/CandidateCvService";
import CandidateJobExperienceService from "../../services/CandidateJobExperienceService";
import CandidateLanguageService from "../../services/CandidateLanguageService";
import CandidateTalentService from "../../services/CandidateTalentService";
import CandidateSchoolService from "../../services/CandidateSchoolService";
import CandidateService from "../../services/CandidateCvService";

export default function CandidateCvUpdate() {
  const candidateId = 1;

  const [cv, setCv] = useState({
    avatarUrl: "",
    githubAddress: "",
    linkedinAddress: "",
    coverLetter: "",
  });

  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [talents, setTalents] = useState([]);

  const deletedEducations = [];
  const deletedExperiences = [];
  const deletedLanguages = [];
  const deletedTalents = [];

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .findByCvId(candidateId)
      .then((results) => setCv(results.data.data));

    let candidateSchoolService = new CandidateSchoolService();
    candidateSchoolService.findByCandidateId(candidateId).then((results) => {
      results.data.data.forEach((result) => {
        result.entryDate = result.entryDate.slice(0, 10);
        result.graduationDate = result.graduationDate.slice(0, 10);
      });
      setEducations(results.data.data);
    });

    let candidateJobExperienceService = new CandidateJobExperienceService();
    candidateJobExperienceService
      .findByCandidateId(candidateId)
      .then((results) => {
        results.data.data.forEach((result) => {
          result.entryDate = result.entryDate.slice(0, 10);
          result.graduationDate = result.graduationDate.slice(0, 10);
        });
        setExperiences(results.data.data);
      });

    let candidateLanguageService = new CandidateLanguageService();
    candidateLanguageService
      .findByCandidateId(candidateId)
      .then((results) => setLanguages(results.data.data));

    let candidateTalentService = new CandidateTalentService();
    candidateTalentService
      .findByCandidateId(candidateId)
      .then((results) => setTalents(results.data.data));
  }, []);

  function addToDeletedEducations(id) {
    if (id !== -1) {
      deletedEducations.push(id);
    }
  }
  function addToDeletedExperiences(id) {
    if (id !== -1) {
      deletedExperiences.push(id);
    }
  }
  function addToDeletedLanguages(id) {
    if (id !== -1) {
      deletedLanguages.push(id);
    }
  }
  function addToDeletedTechnologies(id) {
    if (id !== -1) {
      deletedTalents.push(id);
    }
  }

  const initialValues = {
    id: candidateId,
    photoUrl: cv.avatarUrl,
    githubUrl: cv.githubAddress,
    linkedInUrl: cv.linkedinAddress,
    description: cv.coverLetter,
    entryDate: cv.entryDate,
    graduationDate: cv.graduationDate,
    educationEditDtoList: educations,
    experienceEditDtoList: experiences,
    languageEditDtoList: languages,
    technologyEditDtoList: talents,
    educationDeleteList: [],
    experienceDeleteList: [],
    languageDeleteList: [],
    technologyDeleteList: [],
  };

  const educationsValidationSchema = Yup.object().shape({
    id: Yup.number(),
    schoolName: Yup.string().required("Boş bırakılamaz"),
    department: Yup.string().required("Boş bırakılamaz"),
    entryDate: Yup.date().required("Boş bırakılamaz"),
    graduationDate: Yup.date().required("Boş bırakılamaz"),
  });

  const experiencesValidationSchema = Yup.object().shape({
    id: Yup.number(),
    schoolName: Yup.string().required("Boş bırakılamaz"),
    department: Yup.string().required("Boş bırakılamaz"),
    entryDate: Yup.date().required("Boş bırakılamaz"),
    graduationDate: Yup.date().required("Boş bırakılamaz"),
  });

  const languagesValidationSchema = Yup.object().shape({
    id: Yup.number(),
    languagesName: Yup.string().required("Boş bırakılamaz"),
    level: Yup.number().required("Boş bırakılamaz"),
  });

  const talentsValidationSchema = Yup.object().shape({
    id: Yup.number(),
    talents: Yup.string().required("Boş bırakılamaz"),
  });

  const validationSchema = Yup.object({
    id: Yup.number(),
    photoUrl: Yup.string(),
    linkedInUrl: Yup.string().required("Boş bırakılamaz"),
    githubUrl: Yup.string().required("Boş bırakılamaz"),
    description: Yup.string().required("Boş bırakılamaz"),
    educationEditDtoList: Yup.array().of(educationsValidationSchema),
    experienceEditDtoList: Yup.array().of(experiencesValidationSchema),
    languageEditDtoList: Yup.array().of(languagesValidationSchema),
    technologyEditDtoList: Yup.array().of(talentsValidationSchema),
  });

  return (
    <Grid.Row>
      <Grid.Column width={12}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            values.educationDeleteList = deletedEducations;
            values.experienceDeleteList = deletedExperiences;
            values.languageDeleteList = deletedLanguages;
            values.talentDeleteList = deletedTalents;
            let candidateCvService = new CandidateCvService();
            candidateCvService.update(values);
            swal("Başarılı!", "Yetenek bilgisi güncellendi!", "success");
          }}
        >
          {({ values }) => (
            <Form
              className="ui form"
              style={{
                padding: "1em",
                marginBottom: "2em",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
                borderRadius: "10px",
              }}
            >
              <Divider horizontal style={{ marginBottom: "2em" }}>
                CV Düzenle
              </Divider>
              <SemanticForm.Field>
                <label>Resim URL</label>
                <Field name="photoUrl" placeholder="Resim" />
                <ErrorMessage
                  name="photoUrl"
                  render={(msg) => (
                    <Message error header="Hata" content={msg} />
                  )}
                />
              </SemanticForm.Field>

              <SemanticForm.Field style={{ marginTop: "1em" }}>
                <label>Github</label>
                <Field name="githubUrl" placeholder="www.github.com/" />
                <ErrorMessage name="githubUrl" />
              </SemanticForm.Field>

              <SemanticForm.Field style={{ marginTop: "1em" }}>
                <label>LinkedIn</label>
                <Field name="linkedInUrl" placeholder="www.linkedin.com/" />
                <ErrorMessage name="linkedInUrl" />
              </SemanticForm.Field>

              <SemanticForm.Field
                style={{ marginTop: "1em", marginBottom: "3em" }}
              >
                <label>Açıklama</label>
                <Field name="description" placeholder="Açıklama" />
                <ErrorMessage name="description" />
              </SemanticForm.Field>

              <FieldArray
                name="educationEditDtoList"
                render={(arrayHelpers) => (
                  <div
                    style={{
                      clear: "both",
                      border: "1px solid #d1d4d7",
                      borderRadius: "10px",
                      padding: "1em 1em 0 1em",
                      overflow: "auto",
                      marginBottom: "2em",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          float: "left",
                          marginBottom: "1em",
                          paddingTop: "8px",
                        }}
                      >
                        Eğitim
                      </h3>
                      <Button
                        onClick={() =>
                          arrayHelpers.push({
                            id: -1,
                            schoolName: "",
                            department: "",
                            entryDate: "",
                            graduationDate: "",
                          })
                        }
                        type="button"
                        color="teal"
                        floated="right"
                      >
                        <Icon name="add" />
                      </Button>
                    </div>
                    {values.educationEditDtoList.map((education, index) => (
                      <div key={index}>
                        <SemanticForm.Group
                          widths="equal"
                          style={{ clear: "both" }}
                        >
                          <Field
                            name={`educationEditDtoList[${index}].schoolName`}
                            placeholder="Okul Adı"
                            style={{ marginRight: "1em" }}
                          />
                          <Field
                            name={`educationEditDtoList[${index}].department`}
                            placeholder="Bölümü"
                          />
                        </SemanticForm.Group>
                        <SemanticForm.Group widths="equal">
                          <Field
                            name={`educationEditDtoList[${index}].entryDate`}
                            type="date"
                            style={{ marginRight: "1em" }}
                          />
                          <Field
                            name={`educationEditDtoList[${index}].graduationDate`}
                            type="date"
                          />
                        </SemanticForm.Group>
                        <Button
                          onClick={() => {
                            arrayHelpers.remove(index);
                            addToDeletedEducations(education.id);
                          }}
                          type="button"
                          color="red"
                          icon
                          floated="right"
                          style={{ marginBottom: "1em", marginTop: "-0.5em" }}
                        >
                          <Icon name="trash" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              />

              <FieldArray
                name="experienceEditDtoList"
                render={(arrayHelpers) => (
                  <div
                    style={{
                      clear: "both",
                      border: "1px solid #d1d4d7",
                      borderRadius: "10px",
                      padding: "1em 1em 0 1em",
                      overflow: "auto",
                      marginBottom: "2em",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          float: "left",
                          marginBottom: "1em",
                          paddingTop: "8px",
                        }}
                      >
                        Tecrübe
                      </h3>
                      <Button
                        onClick={() =>
                          arrayHelpers.push({
                            id: -1,
                            name: "",
                            department: "",
                            entryDate: "",
                            graduationDate: "",
                          })
                        }
                        type="button"
                        color="teal"
                        floated="right"
                      >
                        <Icon name="add" />
                      </Button>
                    </div>
                    {values.experienceEditDtoList.map((experience, index) => (
                      <div key={index}>
                        <SemanticForm.Group
                          widths="equal"
                          style={{ clear: "both" }}
                        >
                          <Field
                            name={`experienceEditDtoList[${index}].workplaceName`}
                            placeholder="İşyeri Adı"
                            style={{ marginRight: "1em" }}
                          />
                          <Field
                            name={`experienceEditDtoList[${index}].department`}
                            placeholder="Departmanı"
                          />
                        </SemanticForm.Group>
                        <SemanticForm.Group widths="equal">
                          <Field
                            name={`experienceEditDtoList[${index}].entryDate`}
                            type="date"
                            style={{ marginRight: "1em" }}
                          />
                          <Field
                            name={`experienceEditDtoList[${index}].exitDate`}
                            type="date"
                          />
                        </SemanticForm.Group>
                        <Button
                          onClick={() => {
                            arrayHelpers.remove(index);
                            addToDeletedExperiences(experience.id);
                          }}
                          type="button"
                          color="red"
                          icon
                          floated="right"
                          style={{ marginBottom: "1em", marginTop: "-0.5em" }}
                        >
                          <Icon name="trash" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              />

              <FieldArray
                name="languageEditDtoList"
                render={(arrayHelpers) => (
                  <div
                    style={{
                      clear: "both",
                      border: "1px solid #d1d4d7",
                      borderRadius: "10px",
                      padding: "1em 1em 0 1em",
                      overflow: "auto",
                      marginBottom: "2em",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          float: "left",
                          marginBottom: "1em",
                          paddingTop: "8px",
                        }}
                      >
                        Dil
                      </h3>
                      <Button
                        onClick={() =>
                          arrayHelpers.push({
                            id: -1,
                            schoolName: "",
                            level: "",
                          })
                        }
                        type="button"
                        color="teal"
                        floated="right"
                      >
                        <Icon name="add" />
                      </Button>
                    </div>
                    {values.languageEditDtoList.map((language, index) => (
                      <div key={index}>
                        <SemanticForm.Group
                          widths="equal"
                          style={{ clear: "both" }}
                        >
                          <Field
                            name={`languageEditDtoList[${index}].languagesName`}
                            placeholder="Dil"
                            style={{ marginRight: "1em" }}
                          />
                          <Field
                            name={`languageEditDtoList[${index}].level`}
                            placeholder="Seviye"
                          />
                        </SemanticForm.Group>
                        <Button
                          onClick={() => {
                            arrayHelpers.remove(index);
                            addToDeletedLanguages(language.id);
                          }}
                          type="button"
                          color="red"
                          icon
                          floated="right"
                          style={{ marginBottom: "1em", marginTop: "-0.5em" }}
                        >
                          <Icon name="trash" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              />

              <FieldArray
                name="technologyEditDtoList"
                render={(arrayHelpers) => (
                  <div
                    style={{
                      clear: "both",
                      border: "1px solid #d1d4d7",
                      borderRadius: "10px",
                      padding: "1em 1em 0 1em",
                      overflow: "auto",
                      marginBottom: "2em",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          float: "left",
                          marginBottom: "1em",
                          paddingTop: "8px",
                        }}
                      >
                        Teknoloji
                      </h3>
                      <Button
                        onClick={() =>
                          arrayHelpers.push({
                            id: -1,
                            languagesName: "",
                            level: "",
                          })
                        }
                        type="button"
                        color="teal"
                        floated="right"
                      >
                        <Icon name="add" />
                      </Button>
                    </div>
                    {values.technologyEditDtoList.map((technology, index) => (
                      <div key={index}>
                        <Field
                          name={`technologyEditDtoList[${index}].talentName`}
                          placeholder="Dil"
                          style={{ clear: "both" }}
                        />
                        <Button
                          onClick={() => {
                            arrayHelpers.remove(index);
                            addToDeletedTechnologies(technology.id);
                          }}
                          type="button"
                          color="red"
                          icon
                          floated="right"
                          style={{ marginBottom: "1em", marginTop: "0.5em" }}
                        >
                          <Icon name="trash" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              />

              <div style={{ clear: "both" }}>
                <Button
                  as={Link}
                  to="/cvs"
                  type="button"
                  style={{ width: "49%" }}
                >
                  Vazgec
                </Button>
                <Button
                  color="linkedin"
                  type="submit"
                  style={{ width: "49%", marginLeft: "1%" }}
                >
                  Kaydet
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Grid.Column>
    </Grid.Row>
  );
}
