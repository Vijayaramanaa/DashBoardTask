import React, { useState } from 'react'
import ProductList from './components/Product';
import BarChart from './components/Bar';
import PieChart from './components/Pie';
import LineChart from './components/Line';
import AreaCharts from './components/Area';
import "./Main.scss"
import SideBar from './components/SideBar';

function App() {
  const [click,setClick] = useState(true)
  return (
    <div className='middle'> 
      <h1 className='hone'>DASH BOARD</h1>
      <div className='display'>
        <div >
          <button onClick={()=>setClick(!click)}>--&gt;</button>
      {click ?<SideBar/> :<div></div>
      }
        </div>
      <div className='right'> 
      <div className='chartComp'>
      <BarChart/>
      <PieChart/>
      <AreaCharts/>
      </div>
      
      </div>
      </div>
      <div className='line'>
      <LineChart/>
      </div>
    </div>
  )
}

export default App;