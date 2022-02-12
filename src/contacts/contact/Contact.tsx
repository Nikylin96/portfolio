import React from 'react';
import s from './Contact.module.css'


const Contact = () => {
    return (
        <div className={s.contactsBlock}>
                    <form className={s.forms}>
                    <input type="text"/>
                    <input type="text" className={s.inputMargin}/>
                    <textarea ></textarea>
                </form>
        </div>
    );
};

export default Contact;