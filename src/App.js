import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/OurServices/Services';
import Freelancer from './Components/Freelancer/Freelancer';
import Clients from './Components/OurClients/Clients';
import Works from './Components/OurWorks/Works';
import Blogs from './Components/OurBlog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Services/>
      <Freelancer/>
      <Clients/>
      <Works/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
