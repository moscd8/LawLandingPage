
import classes from '../About/About.module.css';
import About from '../About/About';
import ContactForm from '../Forum/ContactForm';
import AboutOffice from '../About/AboutOffice';
import Contact from '../Contact/Contact';


function Home (props) { 
    return (        
            <div className={classes.Home}>
                <About/> 
                <ContactForm/>
                <AboutOffice/>
                <Contact/>
            </div>                             
    )
}

export default Home;