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
import CandidateService from "../services/CandidateCvService";

export default function CreateCv() {
  let candidateCvService = new CandidateService();
  const CandidateAddSchema = Yup.object.shape({

    linkedinAddress: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
    githubAddress: Yup.string().required("Bu alanın doldurulması zorunludur"),
    coverLetter: Yup.string().required("Bu alanın doldurulması zorunludur"),
    schoolName: Yup.string().required("Bu alanın doldurulması zorunludur"),
  talentName: Yup.string().required("Bu alanın doldurulması zorunludur"),
  department: Yup.string().required("Posizyon sayısı zorunludur"),
  graduationDate: Yup.number().required("Bu alanın doldurulması zorunludur"),
  entryDate: Yup.number().required("Bu alanın doldurulması zorunludur"),
  })

  const history = useHistory();
  const formik = useFormik({
    initialValues: {
        linkedinAddress: "",
        githubAddress: "",
        coverLetter: "",
        schoolName: "",
        talentName: "",
        department: "",
        graduationDate: "",
        entryDate: "",
    },

    validationSchema: CandidateAddSchema,
    onSubmit:(values) => {
        values.findByCandidateId = 3;
        candidateCvService.addCandidateCv(values).then((result) => console.log(result.data.data));
        alert("Cv Eklendi. Onay bekleniyor.");
        history.push("/")
    },
});

const [workTimes, setWorkTimes] = useState([]);
const [workPlaces, setWorkPlaces] = useState([]);

useEffect(() => {
    let workTimeService = new WorkTimeService();
    let workPlaceService = new WorkPlaceService();

    workTimeService
      .getWorkTimes()
      .then((result) => setWorkTimes(result.data.data));
    workPlaceService
      .getWorkPlaces()
      .then((result) => setWorkPlaces(result.data.data));
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



  return <div>
  </div>;
}
