import React from 'react';
import './styles.scss';

const About = () => (
    <div className="About" id="about">
        <div className="About-container">
            <div className="About-container_text">
                <h4>O mnie</h4>
                <hr className="h-underline" />
                <h5>Joanna Kawalec</h5>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
            </div>
            <div className="About-container_pic">
                <img src="https://images.unsplash.com/photo-1560510051-0a8471dcc293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1033&q=80" alt="Łasica the boss" />
            </div>
        </div>
    </div>
)

export default About
