import React from 'react'
import headshot from '../../photos/profile-pic.jpg'
import './about.css'

const About = () => {
    return(
        <div id="about" className="card">
            <div className="left">
                <img src={headshot} alt="Jacob Leonhardt headshot"/>
            </div>
            <div className="left">
                <h3>About</h3>
                <p>I'm an enthusiastic developer of creative projects. Whether coding an applications, writing stories, or making board games, bringing something from concept to reality is an exciting process! What I love about JavaScript, React, Redux, and CSS, is that they allow developers to do this is a more visual way. Writing backend or frontend code that renders data on screen, then designing the presentation of that data is a creative adventure. And like all adventures, a few obstacles makes the story a little more interesting.</p>
                <p>On a personal side, I'm a Christian and nerd who drinks too much coffee. My favorite authors are C. S. Lewis, Agatha Christie, and Jane Austen. My favorite music styles are Contemporary Christian, Yacht Rock, and 80s. Favorite video games will be Nintendo. Favorite board games would be Carcassonne, Settlers of Catan, and Star Wars tabletop RPG.</p>
                <div id="additional">
                    <h4>Skills</h4>
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-react-original colored"></i>
                    <i class="devicon-redux-original colored"></i>
                    <i class="devicon-python-plain colored"></i>
                    <i class="devicon-flask-original colored"></i>
                    <i class="devicon-sqlalchemy-original-wordmark colored"></i>
                    <i class="devicon-postgresql-plain colored"></i>
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-css3-plain colored"></i>
                    <i class="devicon-git-plain colored"></i>
                    <i class="devicon-ubuntu-plain colored"></i>
                    <i class="devicon-github-original"></i>
                    <i class="devicon-vscode-plain colored"></i>
                    <i class="devicon-photoshop-plain colored"></i>
                    <i class="devicon-illustrator-plain colored"></i>

                    <button>Resume</button>
                </div>
            </div>
        </div>
    )
}

export default About;
