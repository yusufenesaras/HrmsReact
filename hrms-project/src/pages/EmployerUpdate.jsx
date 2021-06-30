// import React, { useState, useEffect } from "react";
// import { useFormik } from "formik";
// import {
//   Button,
//   Form,
//   Grid,
//   GridColumn,
//   Label,
//   Modal,
//   Icon,
// } from "semantic-ui-react";
// import * as Yup from "yup";
// import { toast } from "react-toastify";
// import EmployerService from "../services/EmployerService"

// export default function EmployerUpdate({employer}) {

//     const [open, setOpen] = useState(false);

//     let employerService = new EmployerService();

//     const { values, errors, handleChange, handleSubmit, touched } = useFormik({
//             initialValues: {
//           id: employer?.id,
//           password: employer?.password,
//           companyName: employer?.companyName,
//           website: employer?.webAddres,
//           phoneNumber: employer?.phoneNumber,
//           active: true,
//           deleted: false,
//           verified: true,
//         },
//         enableReinitialize: true,
//         validationSchema: Yup.object({
//           password: Yup.string().required("şifre boş bırakılamaz"),
//           companyName: Yup.string().required("şirket Adı boş bırakılamaz"),
//           website: Yup.string().required("website adı boş bırakılamaz"),
//         }),
//         onSubmit: (values) => {
//          console.log("güncellendi")
//          //changeIsVerified(employer?.id)
//           employerService
//             .update(values)
//             .then(()=>{changeIsVerified(employer?.id);})
            
//         },
//       });
    
//       let changeIsVerified= (id)=>{
//     employerService.changeVerifiedStatus(id);
//       }
//     return (
//         <div>
            
//         </div>
//     )
// }
