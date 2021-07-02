import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {  Button } from "semantic-ui-react";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput"
import CandidateJobExperienceService from '../../services/CandidateJobExperienceService';

export default function ExpreienceUpdate() {

    const initialValues = 
    { 
    id: 1,
    continue: "",
    entryDate: "",
    exitDate: "",
    jobDetail: "",
    workplaceName: "",

    };
  
   const schema = Yup.object({
    workplaceName: Yup.string().required("Boş geçilemez"),
    continue: Yup.boolean().required(),
    entryDate: Yup.date().required(),
    exitDate: Yup.date().required(),
    jobDetail: Yup.string().required(),
   });


    return (
        <div>
              <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          let candidateJobExperienceService = new CandidateJobExperienceService();
          candidateJobExperienceService
            .update(values)
            .then((result) => console.log(result.data.data));
          alert("Başarılı!");
          window.location.reload();
        }}
      >
        <Form className="ui form">
          <HrmsTextInput name="workplaceName" placeholder="Workplace Name" />
          <HrmsTextInput name="continue" placeholder="continue" />
          <HrmsTextInput name="entryDate" placeholder="entryDate" />
          <HrmsTextInput name="exitDate" placeholder="exitDate" />
          <HrmsTextInput name="jobDetail" placeholder="jobDetail" />
          <Button color="green" type="submit">
            Update
          </Button>
        </Form>
      </Formik>
        </div>
    )
}
