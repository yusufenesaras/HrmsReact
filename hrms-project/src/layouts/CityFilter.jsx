import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import CityService from "../services/CityService";


export default function CityFilter({ onSelect }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));
  }, []);

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  return (
    <div>

        <Menu.Item className="filter">
          <Menu.Header>Şehir</Menu.Header>
          <Menu.Menu>
            <Dropdown
              className="w100"
              placeholder="Şehir seçiniz"
              selection
              search
              clearable
              options={cityOption}
              onChange={handleChange}
              style={{ border: "2px solid grey" }}
            />
          </Menu.Menu>
        </Menu.Item>

    </div>
  );
  function handleChange(event, data) {
    onSelect(data.value);
  }
}
