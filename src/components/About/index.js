import React from 'react';
import './styles.scss';

const About = () => (
    <div className="About" id="about">
        <div className="About-container">
            <div className="About-container_text">
                <h2>O mnie</h2>
                <hr className="h-underline" />
                <h3>Joanna Kawalec</h3>
                <p>Z wykształcenia filolog germanista, z zamiłowania kobieta treściwa, czyli „ta od treści”. Wieloletnie doświadczenie w różnych dziedzinach pozwala mi na dostosowywanie słowa pisanego do danego języka branżowego, tak aby przemawiał do konkretnej grupy odbiorów, a nic mnie tak nie kręci, jak zabawa słowem właśnie.
                Prywatnie żeglarka, chórzystka, górołaz, tancerka, psiara, kociara i kobieta szyjąca. Człowiek orkiestra, no i zawsze w terminie – w końcu „słowna” babka!</p>
            </div>
            <div className="About-container_pic">
                <img src="https://images.unsplash.com/photo-1560510051-0a8471dcc293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1033&q=80" alt="Łasica the boss" />
            </div>
        </div>
    </div>
)

export default About
