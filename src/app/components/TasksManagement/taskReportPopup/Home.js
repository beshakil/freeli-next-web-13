"use client"
import React,{useState} from 'react';
import './TaskReport.css';
import { TbBulb } from "react-icons/tb";
import ReportingPeriod from './ReportingPeriod';
import TaskMissingHours from './TaskMissingHours';
import TasksOverdue from './TasksOverdue';
import TaskUnassigned from './TaskUnassigned';

function Home(props) {
  const [index, setIndex] = useState(0); 
  
const Next = () => {
  setIndex((prevState)=> prevState  == 0 ? 1 : prevState  == 1 ? 2 : prevState  == 2 ? 3 : prevState  == 3 && 0 );
};
  return (
    <>
			<div className="backwrap">
			  <div className="ReportSlider">
				  <div className="ReportHeader">
                    <div className='HeaderLeft'>
                    <div className='firstChild'>WorkLoad Insights  Wizard</div>
                    <div className='secondChild'>{index === 1 ? 'Task Missing Hours' : index === 2 ? 'Task Overdue' : index === 3 ? 'Task Unassigned'  : 'Reporting Period'}</div>
                    </div>
                    <div className='HeaderImage'><TbBulb  color="rgba(139, 87, 219, 0.15)" className='TbBulbCss' /></div>
                     
                  </div>

                  <div className='ReportBody'>
                    {index == 0 &&  <ReportingPeriod />}
                    {index == 1 && <TaskMissingHours />}
                    {index == 2 && <TasksOverdue />}
                    {index == 3 && <TaskUnassigned />}
                  </div>

                  <div className='ReportFooter'>
                    <div className='BtnCancel' onClick={props.onRunReportHandaler} data-for="chooseConv_tooltip" data-tip="Close" style={{background:'#0A256A'}}>Cancel</div>
                      <div className='slideToggle'>
                          <span onClick={()=>setIndex(0)} className={index == 0 ? 'sliderActive' : ''}></span>
                          <span onClick={()=>setIndex(1)} className={index == 1 ? 'sliderActive' : ''} ></span>
                          <span onClick={()=>setIndex(2)} className={index == 2 ? 'sliderActive' : ''} ></span>
                          <span onClick={()=>setIndex(3)}  className={index == 3 ? 'sliderActive' : ''}></span>
                      </div>
                    <div className='BtnCancel' onClick={Next}  style={{background:'#318FFF'}}>Next</div>
                  </div>
					
				  </div>
			  </div>
		
    
    </>
  )
}

export default Home