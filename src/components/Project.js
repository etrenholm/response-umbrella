function Project({ projects }) {

return (

    <div className="work">
        {projects.map((project) => (
            <a href={ project.link } target="_blank" rel="noreferrer">
                <div id="project" className={ project.className }>
                    <div className="hover-box">
                        <h4>{ project.name }</h4>
                        <p>{ project.skills }</p>
                        <a href={ project.github } target="_blank" rel="noreferrer" className="fa fa-github"><i></i></a>
                    </div>
                </div>
            </a>
        ))}
    </div>
)


}

export default Project;