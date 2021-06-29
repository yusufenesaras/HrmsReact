import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
// import { , SubmitButton } from 'formik-semantic-ui-react'
import { Grid, Form, Button } from "semantic-ui-react";
import EmployerService from "../services/EmployerService";

export default function EmployerRegister() {
  let employerService = new EmployerService();

  let schema = Yup.object().shape({
    companyName: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    webAdress: Yup.string().required(),
  });

  return (
    <div>
      <div className="container-EmployerRegister    ">
        <div className="magic-form">
          <Formik
            initialValues={{
              companyName: "",
              emailAddress: "",
              password: "",
              phoneNumber: "",
              webAddress: "",
            }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              employerService
                .addEmployer(values)
                .then((response) => console.log(response.data.message));
              console.log(values);

              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleSubmit,
              handleReset,
              handleChange,
              handleBlur,
            }) => (
              <Form className="magic-form" onSubmit={handleSubmit}>
                <h1>Kayıt Ol</h1>
                <Grid>
                  <Grid.Column width={8}>
                    <label htmlFor="companyName">Şirket İsmi</label>
                    <input
                      id="companyName"
                      type="text"
                      placeholder="..."
                      className="input"
                      value={values.companyName}
                      onChange={handleChange}
                    />
                    {errors.companyName && touched.companyName && (
                      <div className="input-feedback">{errors.companyName}</div>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label htmlFor="emailAddress">E-mail</label>
                    <input
                      id="emailAddress"
                      type="text"
                      className="input"
                      value={values.emailAddress}
                      onChange={handleChange}
                    />
                    {errors.emailAddress && touched.emailAddress && (
                      <div className="input-feedback">
                        {errors.emailAddress}
                      </div>
                    )}
                  </Grid.Column>
                </Grid>
                <Grid>
                  <Grid.Column width={8}>
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      className="input"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {errors.password && touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label htmlFor="phoneNumber">Telefon Numarası</label>
                    <input
                      id="phoneNumber"
                      type="text"
                      className="input"
                      value={values.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <div className="input-feedback">{errors.phoneNumber}</div>
                    )}
                  </Grid.Column>
                </Grid>
                <Grid>
                  <Grid.Column width={16}>
                    <label htmlFor="webAddress">Web Adres</label>
                    <input
                      id="webAddress"
                      type="text"
                      className="input"
                      value={values.webAddress}
                      onChange={handleChange}
                    />
                    {errors.webAddress && touched.webAddress && (
                      <div className="input-feedback">{errors.webAddress}</div>
                    )}
                  </Grid.Column>
                </Grid>
                {
                  <div className="empAdd">
                    <Button color="teal" fluid size="large">
                      Kayıt Ol
                    </Button>
                  </div>
                }
                {errors.agree && (
                  <div className="input-feedback">{errors.agree}</div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
