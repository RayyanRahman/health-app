import React from "react";
import { useState , useEffect} from "react";
import "./Medicine.css";
function Medicine(){
    const [name,setName]=useState("");
    const [time,setTime]=useState("");
    const [list,setList]=useState([]);
    const [addMed,setAddMed]=useState(false);

    useEffect(()=>{
        const med=JSON.parse(localStorage.getItem('medlist'));
        if(med && med.length > 0){
            setList(med);
        }
    },[addMed]);

    const handleAdd=()=>{
    const newMed = { name: name, time: time };
    const array = JSON.parse(localStorage.getItem("medlist")) || [];
    const updatedArray = [...array, newMed];
    localStorage.setItem("medlist", JSON.stringify(updatedArray));
    setName("");
    setTime("");
    setAddMed(!addMed);
    }

    return(
        <>
        <h2>How's your Day?</h2>
            <h3>Medicine Reminder</h3>
        <div className="medicine-container">
            <div className="input-med">
            <div className="medicine-input">
            <input type="text" value={name} placeholder="Medicine Name" onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder="Enter Time" value={time} onChange={(e)=>setTime(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            </div>
            {list.map((items)=> (
                <div className="med-container">
                    <div className="med-name">{items.name}</div>
                    <div className="med-time">{items.time}</div>
                </div>
            ))
            }
            </div>
            
            

        </div>
        </>
    )
}
export default Medicine;