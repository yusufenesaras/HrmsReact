import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Table,
  Button,
  GridColumn,
  GridRow,
  Pagination,
} from "semantic-ui-react";
import JobAdService from "../services/JobAdService";
import CityFilter from "../layouts/CityFilter";
import WorkTypeFilter from "../layouts/WorkTypeFilter";
import "react-toastify/dist/ReactToastify.min.css";
import FavService from "../services/FavService";
import AddFavourite from "./Favourite/AddFavourite";

export default function JobAds() {
  const [adverts, setAdverts] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedWorkType, setSelectedWorkType] = useState(null);
  const [filteredJobAdverts, setFilteredJobAdverts] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  let favService = new FavService();
  const [candidateFavJobAds, setCandidateFavJobAds] = useState([]);

  useEffect(() => {
    favService.findByCandidateId(1).then((result) => {
      setCandidateFavJobAds(result.data.data);
      // console.log(result.data.data)
    });
  }, [candidateFavJobAds]);

  let jobAdService = new JobAdService();
  useEffect(() => {
    jobAdService
      .getConfirmedJobAdsWithPageable(activePage, pageSize)
      .then((result) => setAdverts(result.data.data));
  }, [activePage, pageSize]);

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

  function handleSelectWorkType(id) {
    setSelectedWorkType(id);
  }

  function handleSelectCity(id) {
    setSelectedCity(id);
  }

  const saveHandler = (object) => {
    console.log(object);
    favService
      .add(object)
      .then((result) => console.log(result), 
      alert("Favorilere Eklendi"));
  };

  const saveToDB = (object, bool) => {
    if (bool) {
      favService.delete(object.candidateId, object.jobAdvertisementId);
      return;
    } else {
      favService.add(object);
    }
  };

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };

  let pageAble = (pageNo) => {
    setPageSize(pageNo);
  };

  return (
    <div>
      <GridRow>
        <GridColumn>
          <CityFilter onSelect={handleSelectCity} /> <br></br>
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
                    <AddFavourite
                      onSubmit={saveHandler}
                      data={candidateFavJobAds}
                      jobId={jobAdvert.id}
                      onClick={saveToDB}
                    ></AddFavourite>
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
                    <AddFavourite
                      onSubmit={saveHandler}
                      data={candidateFavJobAds}
                      jobId={jobAdvert.id}
                      onClick={saveToDB}
                    ></AddFavourite>
                  </Table.Cell>
                </Table.Row>
              ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Pagination
                    activePage={activePage}
                    onPageChange={onChange}
                    totalPages={10}
                  />
                  <Button.Group color="teal" className="pageButtons">
                    <Button onClick={() => pageAble(10)}>10</Button>
                    <Button onClick={() => pageAble(20)}>20</Button>
                    <Button onClick={() => pageAble(50)}>50</Button>
                    <Button onClick={() => pageAble(100)}>100</Button>
                  </Button.Group>
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
