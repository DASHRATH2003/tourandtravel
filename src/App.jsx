import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Package from './Components/Package';
import CarList from './Components/CarList';

// Service Components
import EmployeeTransport from './Components/Services/EmployeeTransport';
import AirportPickup from './Components/Services/AirportPickup';
import OutStation from './Components/Services/OutStation';
import TourPackage from './Components/Services/TourPackage';
import CorporateTour from './Components/Services/CorporateTour';
import EventVehicles from './Components/Services/EventVehicles';
import AppDuty from './Components/Services/AppDuty';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/package/:type" element={<Package />} />
            <Route path="/package" element={<Package />} />
            <Route path="/carlist" element={<CarList />} />
            
            {/* Service Routes */}
            <Route path="/services/employee-transport" element={<EmployeeTransport />} />
            <Route path="/services/airport-pickup" element={<AirportPickup />} />
            <Route path="/services/out-station" element={<OutStation />} />
            <Route path="/services/tour-package" element={<TourPackage />} />
            <Route path="/services/corporate-tour" element={<CorporateTour />} />
            <Route path="/services/event-vehicles" element={<EventVehicles />} />
            <Route path="/services/app-duty" element={<AppDuty />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;