import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';





function App() {
  return (
    <div className="App">
      <Header className='NavBar'/>

   <section className='Home'>
    <Home/>
   </section>
   <section className='About'>
    <About/>

   </section>
   <section className='Skills'>
    <Skills/>

   </section>
   {/* <section className='Projects'>

   </section> */}
   <section className='Contact'>
    <Contact/>

   </section>
    
    </div>
  );
}

export default App;
