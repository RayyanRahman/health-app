import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faMessage, faUser} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import img1 from "./images/Screenshot 2024-01-12 022408.png";
import img2 from "./images/Screenshot 2024-01-12 022435.png";
import img3 from "./images/Screenshot 2024-01-12 022453.png";
import img4 from "./images/Screenshot 2024-01-12 022508.png";
import Medicine from './Medicine';
import "./SideMain.css";
const SideMain=({toggle})=>{
    const [search,setSearch]=useState('');
    const handleClick=()=>{
        toggle();
        console.log("clicked");
    }
    return(
        <>
        <div className="side-main">
            <div className="nav">
            <div>
            <input type='text'
            placeholder='Search Doctors' onChange={(e)=>setSearch(e)} value={search} />
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginLeft:"15px"}}/>
            </div>
            <div>
            <FontAwesomeIcon icon={faMessage} />
            <FontAwesomeIcon icon={faUser} style={{marginLeft:"25px"}}/>
            <span>Welcome Sunita</span>
            </div>
            </div>
            <div className='option-bar' >
                <FontAwesomeIcon icon={faBars} onClick={handleClick} />
            </div>
            <div className='progress'>
                <h2>YOUR PERSONAL SUMMARY</h2>
                <div className='cards'>
                    <div className='card'>
                        <h3>Body Mass Index (BMI)</h3>
                        <div className="bmi-circle">
                        <div className="bmi-circle-text"><div className='text'>BMI</div></div>
                        </div>
                        <h3>Your BMI:</h3>
                        <h3>UnderWeight</h3>
                    </div>
                    <div className='card'>
                        <h3>Calorie intake(per day)</h3>
                        <div className="bmi-circle2">
                        <div className="bmi-circle-text"><div className='text'>Calories</div></div>
                        </div>
                        <h3>1500(+/-100)</h3>
                        <h3>Per Day To Reach 70lbs</h3>
                    </div>
                    <div className='card'>
                        <h3>Miles-Stone 30 day weight</h3>
                        <div className="bmi-circle3">
                        <div className="bmi-circle-text"><div className='text'>Weight</div></div>
                        </div>
                        <h3>Achievable weight-within</h3>
                        <h4>First 30-days:65lbs</h4>
                    </div>
                    <div className='card'>
                        <h3>Macronutrient Ratio</h3>
                        <h3>Carbohydrates:18.5gm</h3>
                        <div className='bar1'></div>
                        <h3>Protein:50gm</h3>
                        <div className='bar2'></div>
                        <h3>Fats:136gm</h3>
                        <div className='bar3'></div>
                        <h3>Suggested:Daily Carb</h3>
                        <h3>Protein and Fat intake</h3>
                    </div>
                </div>
                <div className='meal-plan'>
                        <div className='upper'>
                            <div className='head'>
                                <div>
                            <h2>Personalized Meal plan</h2>
                            </div>
                            <div className='head-button'>
                                + Add New Meal Plan
                            </div>
                            </div>
                            <div className='recipes'>
                            <div className='card'><img src={img1} alt='img1' /></div>
                            <div className='card'><img src={img2} alt='img1' /></div>
                            <div className='card'><img src={img3} alt='img1' /></div>
                            <div className='card'><img src={img4} alt='img1' /></div>
                            </div>
                        </div>

                    </div>
                    <Medicine />
            </div>
        </div>
        </>
    )
}
export default SideMain;