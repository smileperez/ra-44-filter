import React from 'react';

function ProjectList( {projects} ) {

    const elements = projects.map(item =>
        <>
            <img className='project' src={item.img} alt={item.category}/>
        </>
        );

    return (
        <>
            {elements}
        </>
    );
}

export default ProjectList;