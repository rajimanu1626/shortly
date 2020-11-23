

import 'bootstrap/dist/css/bootstrap.min.css';



import './App.scss';


import NavBar from './components/navigation/navigation';
import Description from './components/Description/description';
import UrlComp from './components/URL/urlComp';
import Cards from './components/cardsBundle/cardsComp';
import Footer1 from './components/footer-1/footer-1'
import Footer2 from './components/footer-2/footer-2'

function App() {
  return (
    <div className="app">
    <NavBar/>
    <Description/>
    <UrlComp/>
    <Cards/>
    <Footer1/>
    <Footer2/>
    </div>
  );
}

export default App;
