import React from 'react'
import {Grid,Form,Button} from 'semantic-ui-react'
import * as Yup from 'yup';
import { Formik } from 'formik';
import CandidateService from '../services/CandidateService';
// import { SubmitButton, Form } from 'formik-semantic-ui-react';

export default function CandidateRegister() {

    let candidateService = new CandidateService();

    let schema = Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        identificationNumber: Yup.string().required(),
        birthDate: Yup.date().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        programingLanguages: Yup.string(),
    });

    return (
        <div className="container-CandidateRegister">    
        <div className="magic-form">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    identificationNumber: '',
                    birthDate: '',
                    email: '',
                    password: '',
                    programingLanguages: '',
                    github: '',
                    linkedin: '',
                    coverLetter: ''
    
                }}
    
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    candidateService.addCandidates(values).then(response => console.log(response.data.message))
    
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
                    handleBlur
                }) => (
                    <Form className="magic-form" onSubmit={handleSubmit}>
                        <h1>Kayıt Ol</h1>
                        <Grid>
                            <Grid.Column width={8} >
                                <label htmlFor="firstName">İsim</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="..."
                                    className="input"
                                    value={values.firstName}
                                    onChange={handleChange}
    
                                />
                                {errors.firstName && touched.firstName && (
                                    <div className="input-feedback">{errors.firstName}</div>
                                )}
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <label htmlFor="lastName">Soy isim</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="..."
                                    className="input"
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && touched.lastName && (
                                    <div className="input-feedback">{errors.lastName}</div>
                                )}
                            </Grid.Column>
                        </Grid>
                        <Grid>
                            <Grid.Column width={8}>
                                <label htmlFor="identificationNumber">Tc kimlik no</label>
                                <input
                                    id="identificationNumber"
                                    type="text"
                                    placeholder="000"
                                    className="input"
                                    value={values.identificationNumber}
                                    onChange={handleChange}
                                />
                                {errors.identificationNumber && touched.identificationNumber && (
                                    <div className="input-feedback">{errors.identificationNumber}</div>
                                )}
    
    
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <label htmlFor="birthDate">Doğum Yılı</label>
                                <input
                                    id="birthDate"
                                    type="date"
                                    className="input"
                                    value={values.birthDate}
                                    onChange={handleChange}
                                />
                                {errors.birthDate && touched.birthDate && (
                                    <div className="input-feedback">{errors.birthDate}</div>
                                )}
                            </Grid.Column>
                        </Grid>
                        <Grid>
                            <Grid.Column width={8} >
                                <label htmlFor="email">E-mail</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="..."
                                    className="input"
                                    value={values.email}
                                    onChange={handleChange}
    
                                />
                                {errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )}
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="..."
                                    className="input"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                            </Grid.Column>
                        </Grid>
                        <Grid>
                            <Grid.Column width={8}>
                                <label htmlFor="programingLanguages">Bildiğin Programlar</label>
                                <input
                                    id="programingLanguages"
                                    type="text"
                                    placeholder="..."
                                    className="input"
                                    value={values.programingLanguages}
                                    onChange={handleChange}
                                />
    
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <label htmlFor="github">github linki</label>
                                <input
                                    id="github"
                                    type="text"
                                    placeholder="..."
                                    className="input"
                                    value={values.github}
                                    onChange={handleChange}
                                />
    
                            </Grid.Column>
                        </Grid>
                        <Grid>
                            <Grid.Column width={8}>
                                <label htmlFor="linkedin">linkedin adresi</label>
                                <input
                                    id="linkedin"
                                    type="text"
                                    placeholder="..."
                                    className="input"
                                    value={values.linkedin}
                                    onChange={handleChange}
                                />
    
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <label htmlFor="coverLetter">ön yazı</label>
                                <input
                                    id="coverLetter"
                                    type="text"
                                    placeholder="..."
                                    className="input"
                                    value={values.coverLetter}
                                    onChange={handleChange}
                                />
                                {errors.coverLetter && touched.coverLetter && (
                                    <div className="input-feedback">{errors.coverLetter}</div>
                                )}
                            </Grid.Column>
                        </Grid>
                       
                        {errors.agree && (
                            <div className="input-feedback">{errors.agree}</div>
                        )}
                        {/* <FormField
                            id="form-button-control-public"
                            control={SubmitButton}
                            content="Confirm"
                            type="submit"
    
                        /> */}
                        <div className="empAdd">
                    <Button color="teal" fluid size="large">
                      Kayıt Ol
                    </Button>
                  </div>
                    </Form>
                )}
    
    
            </Formik>
        </div>
    
    </div>
    )
}
