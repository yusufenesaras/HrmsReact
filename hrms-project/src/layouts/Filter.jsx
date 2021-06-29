// import React, { useEffect, useState } from "react";
// import { Dropdown, Menu} from "semantic-ui-react";
// import CityService from "../services/CityService";
//  import EmployerService from "../services/EmployerService";
//  import JobPositionService from "../services/JobTitleService";
// import WorkHourService from "../services/WorkHourService";
// import WorkTypeService from "../services/WorkTypeService";

// export default function Filter({ onSelect }) {
//   const [cities, setCities] = useState([]);

//   useEffect(() => {
//     let cityService = new CityService();
//     cityService.getAll().then((result) => setCities(result.data.data));
//   }, []);

//   const cityOption = cities.map((city, index) => ({
//     key: index,
//     text: city.cityName,
//     value: city.id,
//   }));

//   const [workTypes, setWorkTypes] = useState([]);

//   useEffect(() => {
//     let workTypeService = new WorkTypeService();
//     workTypeService
//       .getWorkPlaces()
//       .then((result) => setWorkTypes(result.data.data));
//   }, []);

//   const workTypeService = workTypes.map((workType) => ({
//     key: workType.id,
//     text: workType.workType,
//     value: workType.id,
//   }));

//   return (
//     <div>
//       <Menu fluid compact icon="labeled" vertical>
//         <Menu.Item className="filter">
//           <Menu.Header>Şehir</Menu.Header>
//           <Menu.Menu>
//             <Dropdown
//               className="w100"
//               placeholder="Şehir seçiniz"
//               selection
//               search
//               clearable
//               options={cityOption}
//               onChange={handleChange}
//               style={{ border: "2px solid grey" }}
//             />
//           </Menu.Menu>
//         </Menu.Item>
//         <Menu.Item>
//           <Menu.Header>Çalışma Tipi</Menu.Header>
//           <Menu.Menu>
//             <Dropdown
//               className="w100"
//               placeholder="Çalışma tipi"
//               search
//               selection
//               options={workTypeService}
//               style={{ border: "2px solid grey" }}
//             />
//           </Menu.Menu>
//         </Menu.Item>
//       </Menu>
//     </div>
//   );
//   function handleChange(event,data){
//     onSelect(data.value)
    
//       }
// }
