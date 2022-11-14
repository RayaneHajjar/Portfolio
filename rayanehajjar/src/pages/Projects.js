import React, { useEffect, useState } from 'react';
import classes from '../styles/projects.module.scss';
import ProjectCard from '../components/ProjectCard.js';

import 'aos/dist/aos.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch(
                'https://portfolio-1e0de-default-rtdb.europe-west1.firebasedatabase.app/projects.json'
            );
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseData = await response.json();
            const loadedProjects = [];
            for (const key in responseData) {
                loadedProjects.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    github: responseData[key].github,
                    site: responseData[key].site,
                    image: responseData[key].image,
                    tags: responseData[key].tags,
                });
            }
            setProjects(loadedProjects);
            console.log(loadedProjects);
            setIsLoading(false);
        };

        fetchProjects().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <div className={classes.container} id='projects'>
                <p className={classes.loading}>Loading...</p>
            </div>
        );
    }

    if (httpError) {
        return (
            <div className={classes.container} id='projects'>
                <p className={classes.error}>{httpError}</p>
            </div>
        );
    }

    const projectsList = projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
    ));
    return (
        <div className={classes.container} id='projects'>
            <h1
                data-aos='zoom-in'
            >
                Projects
            </h1>
            <div className={classes.cards}>{projectsList}</div>
        </div>
    );
};

export default Projects;
