import React from 'react';
import classes from '../styles/projectcard.module.scss';

import 'aos/dist/aos.css';

import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = (props) => {
    const project = props.project;
    const tags = project.tags;
    return (
        <div className={classes.card} data-aos="flip-left">
            <figure className={classes.thumb}>
                <img src={project.image} alt={project.name} className={classes.image} />
                <figcaption className={classes.caption}>
                    <h2 className={classes.name}>{project.name}</h2>
                    <p className={classes.description}>
                        {project.description}
                    </p>
                    <div className={classes.tags}>
                        {tags.map((tag) => (
                            <span key={tag} className={classes.tag}>{tag}</span>
                        ))}
                    </div>
                    <div className={classes.links}>
                        <span className={classes.link}>
                            <FaGithub
                                onClick={() => {
                                    window.open(
                                        project.github,
                                        '_blank'
                                    );
                                }}
                            />
                        </span>
                        {project.site && <span className={classes.link}>
                            <FaExternalLinkSquareAlt
                                onClick={() => {
                                    window.open(
                                        project.site,
                                        '_blank'
                                    );
                                }}
                            />
                        </span>}
                    </div>
                </figcaption>
            </figure>
        </div>
    );
};

export default ProjectCard;
