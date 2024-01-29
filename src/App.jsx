import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import data from './components/imgData';
import ImgGallary from './components/ImgGallary';
import Header from './components/header';


function App() {
  return (
    <div>
      <Header />
      <ImgGallary Data={data}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;