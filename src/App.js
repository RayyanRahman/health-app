import './App.css';
import SideDashboard from './SideDashboard';
import SideMain from './SideMain';
import { useState } from 'react';

function App() {
  const [visible,setvisible]=useState(false);
  
  const handleVisible=()=>{
    setvisible(!visible);
  }
  return (
    <>
    <div className='app-main'>
    <SideDashboard vis={visible} toggle={handleVisible}/>
    <SideMain toggle={handleVisible} />
    </div>
    </>
  );
}

export default App;
