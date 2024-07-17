import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';  
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Nav from './component/Nav';



const AppRoutes = () => {
  const location = useLocation();
  const getBackgroundClass = (pathname) => {
    switch (pathname) {
      case '/destination':
        return 'md:bg-destination-tablet bg-destination-mobile xl:bg-destination-desktop';
      case '/crew':
        return 'md:bg-crew-tablet bg-crew-mobile xl:bg-crew-desktop';
      case '/technology':
        return 'md:bg-technology-tablet bg-technology-mobile xl:bg-technology-desktop';
      default:
        return 'md:bg-home-tablet bg-home-mobile xl:bg-home-desktop';
    }
  };

  const backgroundClass = getBackgroundClass(location.pathname);

  return (
    <main className={`relative bg-cover bg-no-repeat min-h-screen bg-center flex flex-col ${backgroundClass}`}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew/>} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </main>
  );
};

export default AppRoutes;
