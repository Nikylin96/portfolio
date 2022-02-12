import React from 'react';
import s from './Skills.module.css'
import sContainer from '../../src/common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <h2 className={s.title}>Навыки </h2>
                <div className={s.skills}>
                    <Skill title={'HTML'} description={'sasdas as da sd as da  asdasdasdasd  asdasd asda ad'}/>
                    <Skill title={'CSS'} description={'asd'}/>
                    <Skill title={'React'} description={'asd'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;