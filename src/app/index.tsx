import Header from "../components/header";
import Main from "../components/main";
import TourGuide from '../components/guide/tourGuide'; 

function App() {
  return (
    <>
      <Header />
      <Main />
      <TourGuide /> {/* O tour será sempre renderizado */}
    </>
  );
}

export default App;
