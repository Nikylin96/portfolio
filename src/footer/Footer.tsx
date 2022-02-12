import React from 'react';
import s from './Footer.module.css'


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerBorder}>
                <h2>Александр Апоносёнок</h2>
                <div className={s.footers}>
                   <span className={s.foooter}></span>
                   <span className={s.foooter}></span>
                   <span className={s.foooter}></span>
                   <span className={s.foooter}></span>
                </div>

                <h3>© 2022 Все права защищены</h3>
            </div>
        </div>
    );
};

export default Footer;