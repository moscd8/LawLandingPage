import classes from './Contact.module.css';

function ContactInfo (props) { 
    return (  
        <div className={classes.ContactInfo}> 
                    <p>נייד : 05048645212</p>
                    <p>משרד : 08048645212</p>
                    <p>פקס : 08048645212</p>
                    <p>מייל : testEmail@gmail.com</p>
                    <p>כתובת : תל אביב רוטשילד 2 </p> 
        </div> 
    )
}

export default ContactInfo;