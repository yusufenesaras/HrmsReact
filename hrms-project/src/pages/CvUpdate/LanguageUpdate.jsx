import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, } from "semantic-ui-react";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import CandidateLanguageService from "../../services/CandidateLanguageService";
import { useState, useEffect } from "react";
import CandidateCvService from '../../services/CandidateCvService'
export default function LanguageUpdate() {

  const [cv, setCvs] = useState(null);

  useEffect(() => {
    let candidateCvService = new CandidateCvService();
    candidateCvService.findByCvId(1).then((result) => setCvs(result.data.data));

  }, []);

  const initialValues = {
    id: 1,
    languagesName: "",
    level: "",
  };

  const schema = Yup.object({
    languagesName: Yup.string().required(),
    level: Yup.number().required("Boş geçilemez"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          let candidateLanguageService = new CandidateLanguageService();
          candidateLanguageService
            .update(values)
            .then((result) => console.log(result.data.data));
            alert("Başarılı!");
          window.location.reload();
        }}
      >
        <Form className="ui form">
          <HrmsTextInput name="languagesName" placeholder="Language Name" />
          <HrmsTextInput name="level" placeholder="Level" />
          <Button color="green" type="submit">
            Update <br></br>
          </Button> 
        </Form>
      </Formik>
    </div>
  );
}
