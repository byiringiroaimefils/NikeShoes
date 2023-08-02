import {BrowserRouter, Routes,Route,Link} from'react-router-dom'

//pages
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return(
   
    <BrowserRouter>
    <header>
      <nav>
        <Link to="/">Offwhite</Link>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>

      </nav>
    </header>
    <main>
      <Routes>
        <Route  path="/" element ={<Home/>}/>
        <Route  path="About" element ={<About/>}/>
      </Routes>
    </main>
     </BrowserRouter>

)
}

export default App;
