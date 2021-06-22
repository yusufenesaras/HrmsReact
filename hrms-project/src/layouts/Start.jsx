import React from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Get() {
  return (
    <div>
      <Segment className="startDesign">
        <div>
          <Segment placeholder className="getSegment">
            <Grid columns={2} stackable textAlign="center">
              <Divider vertical className="dvider">
                HRMS
              </Divider>

              <Grid.Row verticalAlign="">
                <Grid.Column>
                  <Header icon>
                    <Icon name="world" color="blue" />
                    İnsan Kaynakları <br />
                    Yönetim Sistemi
                  </Header>
                </Grid.Column>

                <Grid.Column>
                  <br />

                  <Button inverted color="blue" size="massive">
                    <Link as={Link} to={"/jobAdCreate"}>
                      İlan Ekle
                    </Link>
                    <Icon name="right arrow" />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <div>
            <Image
              className="imageS"
              src="https://www.akinsoft.com.tr/kurumsal-kaynak-planlamasi/resim/insan-kaynaklari/mobil.png"
            />
          </div>
        </div>
        <Segment color="blue" ui tertiary inverted lightblue>
          <h4 style={{ position: "absolute" }}>
            <Header as="h2" color="grey" textAlign="center"></Header>
          </h4>
          Human Resource Management System
        </Segment>
      </Segment>
    </div>
  );
}
