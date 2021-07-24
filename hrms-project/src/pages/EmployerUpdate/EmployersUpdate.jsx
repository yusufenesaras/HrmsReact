import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import EmployerService from "../../services/EmployerService";


export default function EmployersUpdate() {

  
  const initialValues = {
    id: 1,
    companyName: "",
    email: "",
    phoneNumber: "",
    webAdress: "",
    password:"",
    verified: false,
  };

  const schema = Yup.object({
    companyName: Yup.string().required(),
    email: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    webAdress: Yup.string().required(),
    password: Yup.string().required(),

  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          let employerService = new EmployerService();
          employerService
            .update(values)
            .then((result) => console.log(result.data.data));
          alert("Başarılı","Kayıt alındı bilgileriniz personellerimiz tarafından onaylandığında güncellenecektir");
        }}
      >
        <Form className="ui form">
          <HrmsTextInput name="companyName" placeholder="Şirket Adı" />
          <HrmsTextInput name="email" placeholder="Email" />
          <HrmsTextInput name="phoneNumber" placeholder="Telefon" />
          <HrmsTextInput name="webAdress" placeholder="Web adresi" />
          <HrmsTextInput name="password" placeholder="password"/>

          <Button color="green" type="submit">
            Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
