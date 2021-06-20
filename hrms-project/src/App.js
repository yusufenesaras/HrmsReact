import './App.css';
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="container">
      {/* <Route exact path="/" component={Start} />
      <Route exact path="/home" component={Dashboard} /> */}
      <Dashboard/>
      </div>
    </div>
  );
}

export default App;
