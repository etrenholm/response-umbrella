import avatar from '../../assets/Erica_Avatar.svg'


function About() {

    return (
        <div className="about">

            <div>
            <img className="avatar" src={avatar} alt="avatar" />
            </div>

            <div>
            <h2>About</h2>
            <p>I’m a graphic designer and aspiring front-end web developer, passionate about utilizing the right-brain and left-brain to develop logical, structural and creative design.</p>
            <p>I was born and raised in Manchester, Connecticut until I attended Roger Williams University in Bristol, Rhode Island. I graduated in 2015 with a double major in Graphic Design and Music and a minor in Marketing.</p>
            <p>In my free time I enjoy spending time with my friends and family, running, hiking and just generally being active. By far, my biggest passion is music. I can usually be found singing. Throughout my life, I have been a member of multiple choral ensembles and also received my second degree in music just for fun.</p>
            <p>Currently, I live in Farmington, Connecticut and work as a Graphic Designer for Spitfire Communications in Simsbury.</p>
            </div>

        </div>
    )
}

export default About;