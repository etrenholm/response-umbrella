import avatar from '../assets/Erica_Avatar.svg'


function About() {

    return (
        <div className="about">

            <div>
            <img className="avatar" src={avatar} alt="avatar" />
            </div>

            <div>
            <h2>About</h2>
            <p>I’m Front-end Web Developer with a background in Graphic Design and a keen eye for detail, effective at combining both sides of the brain to develop logical, creative and user-friendly designs and applications. I'm also known for having a strong work ethic and exceptional organizational skills.</p>
            <p>Currently, I work as a Graphic Designer at Spitfire Communications in Simsbury, Connecticut. I've recently earned a Certificate in Full Stack Web Development from the University of Connecticut and am eager to strengthen my coding skills.</p>
            <p>I was born and raised in Manchester, Connecticut until I attended Roger Williams University in Bristol, Rhode Island. I graduated in 2015 with a double major in Graphic Design and Music and a minor in Marketing.</p>
            <p>In my free time I enjoy spending time with my friends and family, running, hiking and just generally being active. By far, my biggest passion is music. I can usually be found singing. Throughout my life, I have been a member of multiple choral ensembles and also received my second degree in music just for fun.</p>
            <p>Currently, I live in Farmington, Connecticut and work as a Graphic Designer for Spitfire Communications in Simsbury.</p>
            </div>

        </div>
    )
}

export default About;