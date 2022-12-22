
import classes from './Contact.module.css';
import { Link } from 'react-router-dom';  
import ContactInfo from './ContactInfo';

function Contact (props) { 
    return (        
            <div className={classes.Contact}>
                <ContactInfo/>
                <div className={classes.ContactSiteNav}>
                <nav>
                    <ul>
                        
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/message'>Message Us</Link>
                        </li>
                    </ul>
                </nav>
                </div>

                {/* <div className={classes.Contact}>

                </div> */}

                {/* <div className={classes.Contact}>
                    
                </div> */}
            </div>                             
    )
}

export default Contact;