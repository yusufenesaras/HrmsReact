/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";
import {Icon,Menu,Table,Button,GridColumn,GridRow,Pagination,Rating,} from "semantic-ui-react";
import JobAdService from "../services/JobAdService";
import CityFilter from "../layouts/CityFilter";
import WorkTypeFilter from "../layouts/WorkTypeFilter";
import { addToFavorite } from "../store/actions/favoriteAction";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function JobAds() {
  const [adverts, setAdverts] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedWorkType, setSelectedWorkType] = useState(null);
  const [filteredJobAdverts, setFilteredJobAdverts] = useState(null); //filtrelenmiş state
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  const dispatch = useDispatch();

  // const dispatch = useDispatch();
  let jobAdService = new JobAdService();
  useEffect(() => {
    jobAdService
      .getPageNoPageSize(activePage, pageSize)
      .then((result) => setAdverts(result.data.data));
  }, [activePage, pageSize]);

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

  const handleAddToFavorite = (adverts) => {
    dispatch(addToFavorite(adverts));
    toast.success(`${adverts.jobtitle.title} Sepete eklendi!`);
    console.log(adverts.jobtitle.title);
  };

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };

  let pageAble = (pageNo) => {
    setPageSize(pageNo);
  };

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
                  <Table.Cell>{jobAdvert?.jobtitle?.title}</Table.Cell>
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
                  <Rating
                        onClick={() => handleAddToFavorite(jobAdvert)}
                        icon="heart"
                        defaultRating={0}
                        maxRating={1}
                      />
                  </Table.Cell>
                  <Table.Footer></Table.Footer>
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
                  <p></p>
                
                  <Button.Group>
                    <Button onClick={() => pageAble(10)}>10</Button>
                    <Button.Or />
                    <Button onClick={() => pageAble(20)}>20</Button>
                    <Button.Or />
                    <Button>50</Button>
                    <Button.Or />
                    <Button>100</Button>
                  </Button.Group>
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
