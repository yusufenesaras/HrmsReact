/* eslint-disable no-unused-vars */
import React, {
  useEffect,
  useState,
  useDispatch,
  useParams,
} from "react";
import { Link } from "react-router-dom";
import {
  Icon,
  Menu,
  Table,
  Button,
  Radio,
  Segment,
  GridColumn,
  GridRow,
  Rating,
} from "semantic-ui-react";
import JobAdService from "../services/JobAdService";
import CityFilter from "../layouts/CityFilter";
import WorkTypeFilter from "../layouts/WorkTypeFilter";

export default function JobAds() {
  const [adverts, setAdverts] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedWorkType, setSelectedWorkType] = useState(null);
  const [filteredJobAdverts, setFilteredJobAdverts] = useState(null); //filtrelenmiş state

  useEffect(() => {
    let jobAdService = new JobAdService();
    jobAdService.getActiveJobAds().then((result) => {
      setAdverts(result.data.data);
    });
  }, []);

  useEffect(() => {
    let filteredJobByJobAdverts;
    if (selectedCity && selectedWorkType) {
      filteredJobByJobAdverts = adverts.filter(
        (jobAdvert) =>
          jobAdvert.city.id === selectedCity &&
          jobAdvert.workType.id === selectedWorkType
      );
    } else if (selectedCity) {
      filteredJobByJobAdverts = adverts.filter(
        (jobAdvert) => jobAdvert.city.id === selectedCity
      );
    } else if (selectedWorkType) {
      filteredJobByJobAdverts = adverts.filter(
        (jobAdvert) => jobAdvert.workType.id === selectedWorkType
      );
    } else {
      filteredJobByJobAdverts = null;
    }
    setFilteredJobAdverts(filteredJobByJobAdverts);
  }, [selectedCity, selectedWorkType]);

  return (
    <div>
      <GridRow columns={3}>
        <GridColumn>
          {" "}
          <CityFilter onSelect={handleSelectCity} />
        </GridColumn>
        <GridColumn>
          {" "}
          <WorkTypeFilter onSelect={handleSelectWorkType} />
        </GridColumn>
      </GridRow>
      <Table celled color={"teal"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
            <Table.HeaderCell>Favorilere Ekle</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {filteredJobAdverts
            ? filteredJobAdverts.map((jobAdvert) => (
                <Table.Row key={jobAdvert.id}>
                  <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                  <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
                  <Table.Cell>{jobAdvert?.jobtitle.title}</Table.Cell>
                  <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
                  <Table.Cell>{jobAdvert.workHour.workHours}</Table.Cell>
                  <Table.Cell>
                    {" "}
                    <Link to={`/jobadverts/${jobAdvert.id}`}>
                      <Button color="grey">Details</Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))
            : adverts.map((jobAdvert) => (
                <Table.Row key={jobAdvert.id}>
                  <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                  <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
                  <Table.Cell>{jobAdvert.jobtitle.title}</Table.Cell>
                  <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
                  <Table.Cell>{jobAdvert.workHour.workHours}</Table.Cell>
                  <Table.Cell>
                    <Button
                      as={Link}
                      to={`/jobads/${jobAdvert.id}`}
                      content="Detayları Gör"
                      icon="right arrow"
                      labelPosition="right"
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Segment compact>
                      <Radio toggle />
                    </Segment>
                  </Table.Cell>
                </Table.Row>
              ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
  function handleSelectWorkType(workTypeId) {
    setSelectedWorkType(workTypeId);
  }

  function handleSelectCity(cityId) {
    setSelectedCity(cityId);
  }
}
