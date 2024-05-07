
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header/Header';
import DashboardContainer from './Components/Dashboard/DashboardContainer';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="container-fluid Appp m-0 p-0 pt-1">
      <Header />
      <DashboardContainer />
      <Footer />
    </div>
  );
}

export default App;
