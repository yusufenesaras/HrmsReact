import React from "react";
import SideBar from "./SideBar";
import Navi from "./Navi";
import { Container, Grid } from "semantic-ui-react";
import "./Dashboard.css";
import JobAds from "../pages/JobAds";
import Employers from "../pages/Employers";
import { Route } from "react-router";
import JobAdDetail from "../pages/JobAdDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobAdCreate from "../pages/CreateJobAdvert";
import Footer from "./Footer";
import Start from "./Start";
import CvList from "../pages/CvList";
import CvDetail from "../pages/CvDetail";
import EmployerRegister from "../pages/EmployerRegister";
import CandidateRegister from "../pages/CandidateRegister";
import AdminPanel from "../pages/AdminPanel";
import AdminJobAdvertList from "../pages/AdminJobAdvertList";
import AdminEmployers from "../pages/AdminAllEmployers";
import AdminAllEmployers from "../pages/AdminAllEmployers";
import AdminAllEmployersVerifyFalse from "../pages/AdminAllEmployersVerifyFalse";
import CvUpdate from "../pages/CvUpdate/CvUpdate";
import EmployerUpdate from "../pages/EmployerUpdate";
import ActiveEmployer from "../pages/ActiveEmployer";
import EmployerJobAdvertList from "../pages/EmployerJobAdvertList";
import ActiveEmployerUpdate from "../pages/ActiveEmployerUpdate";
import TalentUpdate from "../pages/CvUpdate/TalentUpdate";
import LanguageUpdate from "../pages/CvUpdate/LanguageUpdate"
import SchoolUpdate from "../pages/CvUpdate/SchoolUpdate";
import ExpreienceUpdate from "../pages/CvUpdate/ExpreienceUpdate";
import CvListUpdate from "../pages/CvUpdate/CvListUpdate";
export default function Dashboard() {
  return (
    <div>
      <Navi />
      <Container className="main">
        <Grid stackable>
          <Grid.Column width={4}>
            <SideBar /> <br/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={Start} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/employers" component={Employers} />
            <Route path="/employersUpdate" component={EmployerUpdate}/>
            <Route exact path="/jobads" component={JobAds} />
            <Route exact path="/jobAdCreate" component={JobAdCreate} />
            <Route exact path="/jobads/:id" component={JobAdDetail} />
            <Route exact path="/cvs" component={CvList} />
            <Route exact path="/cvs/:id" component={CvDetail} />
            <Route exact path="/employerRegister" component={EmployerRegister} />
            <Route exact path="/candidateRegister" component={CandidateRegister} />
            <Route path="/adminpanel" component={AdminPanel}/>
            <Route path="/adminjobadvertlist" component={AdminJobAdvertList}/>
            <Route path="/adminemployer" component={AdminEmployers} />
            <Route path="/adminallemployers" component={AdminAllEmployers}/>
            <Route path="/adminallemployersverifyfalse" component={AdminAllEmployersVerifyFalse}/>
            <Route path="/activeemployer" component={ActiveEmployer} />
            <Route path="/employerjobadvertlist" component={EmployerJobAdvertList}/>
            <Route path="/activeEmployerUpdate" component={ActiveEmployerUpdate}/>
            <Route path="/talentUpdate" component={TalentUpdate} />
            <Route path="/langUpdate" component={LanguageUpdate} />
            <Route path="/schoolUpdate" component={SchoolUpdate} />
            <Route path="/expUpdate" component={ExpreienceUpdate} />
            <Route path="/candidateUpdate" component={CvListUpdate} />
            <Route path="/cvs/edit/:id" component={CvUpdate} />
          </Grid.Column>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
