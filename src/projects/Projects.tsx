import React from 'react';
import s from './Projects.module.css'
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <h2 className={s.title}>Мои работы</h2>
                <div className={s.projects}>
                    <Project title={'Todolist'} description={'Описание'}/>
                    <Project title={'Социальная сеть'} description={'Описание'}/>
                    <Project title={'Счетчик'} description={'Описание'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;