import React from 'react';
import s from './Nav.module.css'


const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="" className={s.color}>Главная</a>
            <a href="" className={s.color}>Мои навыки</a>
            <a href="" className={s.color}>Мои проекты</a>
            <a href="" className={s.color}>Контакты</a>

        </div>
    );
};

export default Nav;