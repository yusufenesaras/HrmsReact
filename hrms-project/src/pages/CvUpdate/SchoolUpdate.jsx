import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {  Button } from "semantic-ui-react";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput"
import CandidateSchoolService from "../../services/CandidateSchoolService";


export default function SchoolUpdate() {

  const initialValues = 
  { 
    id: 1,
  schoolName: "",
  entryDate:"",
  graduationDate: "",
  department: "",

  };

 const schema = Yup.object({
  schoolName: Yup.string().required(),
  entryDate: Yup.date().required(),
  graduationDate: Yup.string().required(),
  department: Yup.string().required()
 });

  return (
    <div>
        <Formik 
       
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit = {(values)=>{
        let candidateSchoolService = new CandidateSchoolService();
        candidateSchoolService
        .update(values).then((result) => console.log(result.data.data))
        // alert("Başarılı!")
        // window.location.reload();
      }}
      >
        <Form className="ui form">
          <HrmsTextInput name="schoolName" placeholder="School Name"/>
          <HrmsTextInput name="entryDate" placeholder="Date Of Entry"/>
          <HrmsTextInput name="graduationDate" placeholder="Date of Graduation"/>
          <HrmsTextInput name="department" placeholder="Department"/>
          <Button color="green" type="submit">Update</Button>
        </Form>
      </Formik>
    </div>
  )
}
