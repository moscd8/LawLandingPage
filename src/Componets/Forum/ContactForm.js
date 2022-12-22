 
import classes from './ContactForm.module.css';
import { useRef  } from 'react';
import ContactInfo from '../Contact/ContactInfo';
import { send } from 'emailjs-com';
import * as SHARE from '../../Assest/Common'; 

function ContactForm(props){ 
    
    const nameInputRef = useRef();
    const titleInputRef = useRef();
    const phoneInputRef = useRef();
    const emailInputRef = useRef();
    const descriptionInputRef = useRef(); 
 
    function submitHandler(event) {
        event.preventDefault();
    
        const enteredName = nameInputRef.current.value;
        const enteredTitle = titleInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const emaildAddress = emailInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
    
        let messageToSend= "Message From " + enteredName + ": \n Title: " +enteredTitle + ".\n Description: " + enteredDescription + ".\n Phone= " +enteredPhone;
        console.log(messageToSend);

        let messageObjtoSend = {
            from_name :  enteredName,
            to_name : "moswnd@gmail.com",
            message: messageToSend,
            reply_to : emaildAddress
        };
 
        send(
            SHARE.EmailJSConnection.serviceKey,
            SHARE.EmailJSConnection.templateKey,
            messageObjtoSend,
            SHARE.EmailJSConnection.publicKey
          )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email Was sent , thank you for choosing us!");
             
            window.location.reload(); 
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    }

    return(
        <div className={classes.Container}>  
            <div className={classes.ContactForm}>
            <form className={classes.form} onSubmit={submitHandler}>
                <h1>השאירו הודעה ונשתדל לחזור בהקדם </h1>
                <div className={classes.Control}>
                    <label className={classes.Controllabel} htmlFor='name'>שם</label>
                    <input type='text' required id='name' ref={nameInputRef} />
                </div>
                <div className={classes.Control}>
                    <label className={classes.Controllabel} htmlFor='title'>נושא הפנייה</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className={classes.Control}>
                    <label className={classes.Controllabel} htmlFor='number'>טלפון</label>
                    <input type='number' required id='number' ref={phoneInputRef} />
                </div> 
                <div className={classes.Control}>
                    <label htmlFor='address'>אימייל</label>
                    <input type='text' required id='address' ref={emailInputRef} />
                </div>
                <div className={classes.ControlDescription}>
                    <label htmlFor='description'>תיאור הפנייה</label>
                    <textarea
                        id='description'
                        required
                        rows='5'
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                <button>Add Meetup</button>
                </div>
            </form> 
                
            </div>

                <div className={classes.ContactInfo}>        
                     <ContactInfo/>
                </div>

        </div> 
    )
};

export default ContactForm;