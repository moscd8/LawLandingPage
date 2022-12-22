 
import './App.css';
import Layout  from './Componets/layouts/Layout';
import About from './Componets/About/About';
import { Route, Routes } from 'react-router-dom';
import Home from './Componets/Home/Home';
import Contact from './Componets/Contact/Contact';
import Forum from './Componets/Forum/ContactForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Layout>        
          <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/home' exact element={<Home/>}/>
              <Route path='/about' exact element={<About/>}/>
              <Route path='/contact' exact element={<Contact/>}/>
              <Route path='/message' exact element={<Forum/>}/>                  

          </Routes>
       </Layout>
      </header>
    </div>
  );
}

export default App;
