import React from 'react';
import s from './Contacts.module.css'
import Contact from "./contact/Contact";


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contacts}>
                <h3 className={s.title}>Контакты</h3>
                <Contact/>
                <button className={s.button}>Отправить</button>

            </div>

        </div>
    );
};

export default Contacts;