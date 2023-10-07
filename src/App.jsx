import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//pages
import Home from './Components/Home';
import About from './Components/About';
import Nike from './Components/Nike';
import Contact from './Components/Contact';

import User from './assets/user.png'
function App() {
  return (

    <BrowserRouter>
      <header>
        <div className="container container-nav">
          <div className="Logo">
            <h2>Nike</h2>
            <p>New Summer Running with us</p>
          </div>
          <nav class="navigation text-center">

            <Link to="/">Home</Link>
            <Link to="Nike">Nike</Link>
            <Link to="about">About </Link>
            <Link to="Contact">Contact</Link>

          </nav>
          <div className='user'>

            <img src={User} alt=""  className=' w-11 cursor-pointer ml-30 md:mr-12' />
          </div>
          
        </div>
      </header>


      {/* Functionality */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Nike" element={<Nike />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>

  )
}

export default App;

