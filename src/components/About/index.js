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
                <img src="https://images.unsplash.com/photo-1501562146-c66d8ef18068?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Joanna Kawalec" />
            </div>
        </div>
    </div>
)

export default About
