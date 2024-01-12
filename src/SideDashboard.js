import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome ,faBowlFood,faWeightScale,faShop,faUser,faVideo, faUtensils, faDumbbell, faRegistered, faBook, faPhone, faGears, faPause, faRefresh, faArrowRightFromBracket, faClose} from '@fortawesome/free-solid-svg-icons';

import "./SideDashboard.css";
const SideDashboard=({vis,toggle})=>{
    const handleClick=()=>{
        toggle();
        console.log("clicked");
    }
    return(
        <>
         <div className={`dashboard-container ${vis ? 'visible' : ''}`}>
            <div className='side-top'>
            <h2>Health App</h2>
            <FontAwesomeIcon icon={faClose} onClick={handleClick} className={`close ${vis ? 'open' : ''}`}/>
            </div>
            <div className="dash-item">
                <h3>DashBoard</h3>
                <ul>
                <li>
                <FontAwesomeIcon icon={faHome} className='icons-div'/>
                Overview
                </li>
                <li>
                <FontAwesomeIcon icon={faBowlFood} className='icons-div'/>
                Meal Planner
                </li>
                <li>
                <FontAwesomeIcon icon={faWeightScale} className='icons-div'/>
                Measurements
                </li>
                <li>
                <FontAwesomeIcon icon={faShop} className='icons-div'/>
                Shop
                </li>
                <li>
                <FontAwesomeIcon icon={faUser} className='icons-div'/>
                Profile
                </li>
                <li>
                <FontAwesomeIcon icon={faVideo} className='icons-div'/>
                Videos
                </li>
                </ul>
            </div>
            <div className="extras">
                <h3>Extras</h3>
                <ul>
                    <li>
                    <FontAwesomeIcon icon={faUtensils} className='icons-div'/>
                    Recipes
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faDumbbell} className='icons-div'/>
                    Fitness
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faRegistered} className='icons-div'/>
                    Resources
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faBook} className='icons-div'/>
                    About
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faPhone} className='icons-div'/>
                    Support
                    </li>
                    
                </ul>
            </div>
            <div className="account">
                <h3>Account</h3>
                <ul>
                <li>
                    <FontAwesomeIcon icon={faGears} className='icons-div'/>
                    Account Settings
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faPause} className='icons-div'/>
                    Pause
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faRefresh} className='icons-div'/>
                    Reset Week
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='icons-div'/>
                    Logout
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default SideDashboard;