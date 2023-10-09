import './App.css';
import  Navbar from './componentes-section/section/Navbar'
import Presentantion from './componentes-section/section/Presentation';
import Skills from './componentes-section/section/Skills';
import Projects from './componentes-section/section/Projects';
import Footer from './componentes-section/section/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentantion />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
