import './App.css';
import Navb from './componentes/section/Navb';
import Footer from './componentes/section/Footer'
import Presentation from './componentes/section/Presentation'
import Projects from './componentes/section/Projects';
import Skills from './componentes/section/Skills';

function App() {
  return (
    <div className="App">
     <Navb/>
     <Presentation/>
     <Skills/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;
