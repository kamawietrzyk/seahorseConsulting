import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoll, faUsers, faCopyright } from '@fortawesome/free-solid-svg-icons';

const Company = () => (
    <div className="Company" id="company">
        <div className="Company-main">
            <h2>Firma</h2>
            <hr className="h-underline" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <h3>Jakieś fajne motto!</h3>
        </div>
        <div className="Company-grid">
            <div className="Company-grid_one">
                <FontAwesomeIcon icon={faPoll} size="3x" />
                <h4>Marketing</h4>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </div>
            <div className="Company-grid_two">
                <FontAwesomeIcon icon={faUsers} size="3x" />
                <h4>PR</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
            </div>
            <div className="Company-grid_three">
                <FontAwesomeIcon icon={faCopyright} size="3x" />
                <h4>Copyrighting</h4>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
        </div>
    </div>
)

export default Company