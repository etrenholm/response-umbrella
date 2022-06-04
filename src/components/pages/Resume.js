import resume from '../../assets/Resume_2022.pdf'

function Resume() {

    return (
        <div className="resume">

            <h2>Resume</h2>

            <p>View my full <a href={resume} target="_blank" rel="noreferrer">resume</a>.</p>

            <div className="skills">
                <div>
                    <h3>Design</h3>
                        <p>InDesign</p>
                        <p>Illustrator</p>
                        <p>Photoshop</p>
                        <p>Acrobat</p>
                </div>

                <div>
                    <h3>Front-end</h3>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Bootstrap</p>
                        <p>Tailwind</p>
                        <p>jQuery</p>
                        <p>Handlebars</p>
                        <p>React</p>
                </div>

                <div>
                    <h3>Back-end</h3>
                        <p>APIs</p>
                        <p>Node</p>
                        <p>Express</p>
                        <p>MySQL</p>
                        <p>Sequelize</p>
                        <p>MongoDB</p>
                        <p>Mongoose</p>
                </div>
            </div>

        </div>
    )
}

export default Resume;