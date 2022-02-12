import React from 'react';
import s from './Main.module.css'
import sContainer from '../../src/common/styles/Container.module.css'


const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.mainText}>
                    <span>Здарова</span>
                    <h1>I am Александр Апоносёнок</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;