import Project from '../Project'
import { useState } from 'react'


function Portfolio() {

    const [projects] = useState([
        {
            name: 'TravelSphere',
            skills: 'Full Stack, Sequelize',
            className: 'work1',
            link: 'https://travel-sphere.herokuapp.com/',
            github: 'https://github.com/etrenholm/TravelSphere',
        },
        {
            name: 'Team Profile Generator',
            skills: 'Node.js',
            className: 'work4',
            link: 'https://github.com/etrenholm/team-profile-generator',
            github: 'https://github.com/etrenholm/team-profile-generator',
        },
        {
            name: 'Another Tech Blog',
            skills: 'Sequelize, Express.js',
            className: 'work3',
            link: 'https://desolate-reaches-38004.herokuapp.com/',
            github: 'https://github.com/etrenholm/another-tech-blog',
        },
        {
            name: 'Trivia Blast',
            skills: 'Front-end, APIs',
            className: 'work2',
            link: 'https://etrenholm.github.io/trivia-blast/',
            github: 'https://github.com/etrenholm/trivia-blast',
        },
        {
            name: 'Run Buddy',
            skills: 'HTML, CSS',
            className: 'work6',
            link: 'https://etrenholm.github.io/run-buddy/',
            github: 'https://github.com/etrenholm/run-buddy',
        },
        {
            name: 'Weather Dashboard',
            skills: 'JavaScript, APIs',
            className: 'work5',
            link: 'https://etrenholm.github.io/weather-dashboard',
            github: 'https://github.com/etrenholm/weather-dashboard',
        }

    ])

    return (
        <div className="portfolio">
                <Project projects={projects} />
        </div>
    )
}

export default Portfolio;