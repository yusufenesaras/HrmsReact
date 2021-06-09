import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from "./layouts/Dashboard";
import { Container } from 'semantic-ui-react';
import Footer from './layouts/Footer';


function App() {
  return (
    <div className="App">
   {/* navi html' de*/ }
    <Container className="main">
        <Dashboard/>
        
      </Container>
      <Footer/>
    
    </div>
  );
}

export default App;
