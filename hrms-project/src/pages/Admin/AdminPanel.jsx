import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default function AdminPanel() {
  return (
    <div>
      <Grid columns="3">
        <Grid.Row>
          <Grid.Column>
            <Link to="/adminjobadvertlist">
              <Card>
                <Image
                  src={
                    "https://png.pngtree.com/png-vector/20190623/ourlarge/pngtree-documentfindjobsearch-blue-dotted-line-line-icon-png-image_1491365.jpg"
                  }
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>Hrms Personeli için <br></br> İş ilanları</Card.Header>
                  <Card.Meta>
                   
                  </Card.Meta>
                  <Card.Description>
                    Sistemdeki iş ilanlarının durumunu gözlemleyebilirsiniz
                  </Card.Description>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>

          <Grid.Column>
            <Link to="/adminemployer">
              <Card>
                <Image
                  src={
                    "https://www.nicepng.com/png/detail/674-6741279_employer-icon.png"
                  }
                  wrapped
                  ui={false}
                  size="mini"
                />
                <Card.Content>
                  <Card.Header>Hrms Personeli için <br></br> İş veren görüntüle</Card.Header>
                  <Card.Description>
                    Onay durumuna bak<br></br>
                  </Card.Description>
                </Card.Content>
                {/* <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    
                  </a>
                </Card.Content> */}
              </Card>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link>
              <Card>
                <Image
                  src={
                    "https://www.pngitem.com/pimgs/m/128-1280822_check-mark-box-clip-art-blue-admin-icon.png"
                  }
                  wrapped
                  ui={false}
                  size="mini"
                />
                <Card.Content>
                  <Card.Header>Hrms Personel Güncelleme</Card.Header>
                  <Card.Meta>

                  </Card.Meta>
                  <Card.Description>
                    Bilgilerini Güncelle<br></br>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
