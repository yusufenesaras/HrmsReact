import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import CityService from "../services/CityService";
import JobPositionService from "../services/JobTitleService";
import WorkTimeService from "../services/WorkHourService";
import WorkPlaceService from "../services/WorkTypeService";
import JobAdService from "../services/JobAdService";
import { useHistory } from "react-router-dom";

export default function JobAdCreate() {
  let jobAdService = new JobAdService();
  const JobAdvertAddSchema = Yup.object().shape({
    appealExpirationDate: Yup.date()
      .nullable()
      .required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobtitleId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workHourId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workTypeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    quota: Yup.string()
      .required("Posizyon sayısı zorunludur")
      .min(1, "Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    minSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
    maxSalary: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
  });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      description: "",
      jobtitleId: "",
      workHourId: "",
      workTypeId: "",
      quota: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      appealExpirationDate: "",
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {
      values.employerId = 2;
      jobAdService.add(values).then((result) => console.log(result.data.data));
      alert("İş ilanı eklendi personelin onayı ardından listelenecektir");
      console.log(values);
      history.push("/jobads");
    },
  });

  const [workTimes, setWorkTimes] = useState([]);
  const [workPlaces, setWorkPlaces] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let workTimeService = new WorkTimeService();
    let workPlaceService = new WorkPlaceService();
    let cityService = new CityService();
    let jobPositionService = new JobPositionService();

    workTimeService
      .getWorkTimes()
      .then((result) => setWorkTimes(result.data.data));
    workPlaceService
      .getWorkPlaces()
      .then((result) => setWorkPlaces(result.data.data));
    cityService.getCitys().then((result) => setCities(result.data.data));
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const workPlaceOption = workPlaces.map((workPlace, index) => ({
    key: index,
    text: workPlace.workType,
    value: workPlace.id,
  }));
  const workTimeOption = workTimes.map((workTime, index) => ({
    key: index,
    text: workTime.workHours,
    value: workTime.id,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const jobPositionOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.title,
    value: jobPosition.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Card fluid>
        <Card.Content header="İş ilanı Ekle" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field style={{ marginBottom: "1rem" }}>
              <Dropdown
                clearable
                item
                placeholder="İş pozisyonu"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "jobtitleId")
                }
                onBlur={formik.onBlur}
                id="jobtitleId"
                value={formik.values.jobtitleId}
                options={jobPositionOption}
              />
              {formik.errors.jobtitleId && formik.touched.jobtitleId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.jobtitleId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Şehir"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "cityId")
                }
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.cityId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Çalışma Yeri"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workHourId")
                }
                onBlur={formik.onBlur}
                id="workHourId"
                value={formik.values.workHourId}
                options={workTimeOption}
              />
              {formik.errors.workHourId && formik.touched.workHourId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workHourId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Çalışma Süresi"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workTypeId")
                }
                onBlur={formik.onBlur}
                id="workTypeId"
                value={formik.values.workTypeId}
                options={workPlaceOption}
              />
              {formik.errors.workTypeId && formik.touched.workTypeId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workTypeId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maaş aralığı MİNİMUM"
                    value={formik.values.minSalary}
                    name="minSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.minSalary && formik.touched.minSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.minSalary}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maaş aralığı MAKSİMUM"
                    value={formik.values.maxSalary}
                    name="maxSalary"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.maxSalary && formik.touched.maxSalary && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.maxSalary}
                    </div>
                  )}
                </Grid.Column>
              </Grid>
            </Form.Field>

            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    id="quota"
                    name="quota"
                    error={Boolean(formik.errors.quota)}
                    onChange={formik.handleChange}
                    value={formik.values.quota}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Açık Posisyon sayısı"
                  />
                  {formik.errors.quota && formik.touched.quota && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.quota}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <Input
                    style={{ width: "100%" }}
                    type="datetime-local"
                    error={Boolean(formik.errors.lastDate)}
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "appealExpirationDate")
                    }
                    value={formik.values.appealExpirationDate}
                    onBlur={formik.handleBlur}
                    name="appealExpirationDate"
                    s
                    placeholder="Son başvuru tarihi"
                  />
                  {formik.errors.appealExpirationDate &&
                    formik.touched.appealExpirationDate && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.appealExpirationDate}
                      </div>
                    )}
                </Grid.Column>
              </Grid>
            </Form.Field>

            <Form.Field>
              <TextArea
                placeholder="Açıklama"
                style={{ minHeight: 100 }}
                error={Boolean(formik.errors.description).toString()}
                value={formik.values.description}
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.description && formik.touched.description && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.description}
                </div>
              )}
            </Form.Field>
            <Button
              content="Ekle"
              labelPosition="right"
              icon="add"
              positive
              type="submit"
              style={{ marginLeft: "20px" }}
            />
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
