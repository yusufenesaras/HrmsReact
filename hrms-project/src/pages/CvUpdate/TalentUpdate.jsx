import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import CandidateTalentService from "../../services/CandidateTalentService";

export default function TalentUpdate() {
  const initialValues = {
    id: 1,
    talentName: "",
  };

  const schema = Yup.object({
    talentName: Yup.string().required(),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          let candidateTalentService = new CandidateTalentService();
          candidateTalentService
            .update(values)
            .then((result) => console.log(result.data.data));
            alert("Başarılı!");
          window.location.reload();
        }}
      >
        <Form className="ui form">
          <HrmsTextInput name="talentName" placeholder="Talent Name" />
          <Button color="green" type="submit">
            Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
