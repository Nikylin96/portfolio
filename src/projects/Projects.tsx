import React from 'react';
import s from './Projects.module.css'
import sContainer from "../common/styles/Container.module.css";

const Projects = () => {
    return (
        <div className={s.projectBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Мои работы</h2>
            </div>
        </div>
    );
};

export default Projects;