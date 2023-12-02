"use client"
import React from 'react';
import { BsFillBellFill, BsArrowRight, BsArrowDown, BsSearch } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../tasks/calender.css'
import TaskRoomList from './TaskRoomList';
import TaskinsightpieChart from './TaskinsightpieChart';
import TaskinsightBarChart from './TaskinsightBarChart';

const TaskInsightsHome = () => {
    const [AddObs, setAddObs] = React.useState(false);
    const CalendarView = () => {
        return (
            <div className="calendar-container">


                <Calendar
                    className="react-calendar"
                    tileclassName={({ date, view }) => {
                        if (view === "month") {
                            const year
                                = date.getFullYear();
                            const month = date.getMonth() + 1;
                            const day = date.getDate();
                            const dateString = `${year}-${month}-${day}`;
                            //   const hasEvents = events[dateString];
                            //   return hasEvents ? "has-events" : null;
                        }
                    }}
                    tileContent={({ date, view }) => {
                        if (view === "month") {
                            const year = date.getFullYear();
                            const month = date.getMonth() + 1;
                            const day = date.getDate();
                            const dateString = `${year}-${month}-${day}`;
                            //   return <div className="event-dot-container" style={{display:'flex',justifyContent:'center'}}>{getEventDots(dateString)}</div>;
                        }
                    }}
                    //   value={date}
                    onClickDay={(date) => { handleTileClick(date); }}
                //    onMouseOver={handleTileMouseOver}
                //    onMouseOut={handleTileMouseOut}
                />
                {/* {showPopup && (
            <OutsideClickHandler onOutsideClick={() => setShowPopup(false)}>
        <div className="popup">
               <div className='TableHeadCalendar'>
                    <span>Task Name</span>
                    <span>Task Status</span>
                </div>

          <div className="popup-content">
       
            {getPopupContent()}
          </div>
          <button onClick={() => setShowPopup(false)} style={{float:'right'}}>Close</button>

        </div>
        </OutsideClickHandler>
       )} */}

            </div>
        )
    }
    return (
        <div className='insights_full_area'>
            <div className="insights_first_area">
                <div className="taskDashboardHeading">Task Dashboard</div>

                <div className='taskTeamInsight_notify' >
                    <div className='insight_notify_icon'>
                        <BsFillBellFill color='#fff' size={20} />
                    </div>
                    <div className='insight_notify_text'>
                        Jessica Reviewed Your Task!
                    </div>
                    <div className='insight_notify_close'>
                        <MdOutlineClose size={24} />
                    </div>
                </div>

                <div className="taskTeamDetails">
                    <div className="taskTeamInsight_info"><div>
                        <div className="AssigneeField insight">
                            <div className="userDropDownArea">
                                <ul className="usersGroup"></ul>
                                <div className="ellipsis flex flex-col justify-center relative cursor-pointer"><span className="selectOnew">Please select one</span>
                                </div>
                            </div>
                            <div className="dropdown bg-transparent">
                                <div className="dropdown-header">
                                    <i className={`fa fa-chevron-right icon ${AddObs && "open"}`} style={{ color: 'black' }}></i>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="AddKeywordsPopup_task_settings insightTaskBoard">
                            <div className="keywordItem">
                                <div className="searchAndFilterBar relative">
                                    <div className="selectedKeywordCont_task"></div>
                                    <div className="searchAndFilterKeyword"></div>
                                    <input type="text" className="Focus searchPeople" placeholder="Search name" />
                                    <div>
                                        <div className="keyword_list_task_settings workloadUsers">
                                            <div className="tagNotFound mt-[2px]">Not found</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className='task_dashboard_container'>
                <div className='task_dashboard'>
                    <div className='calendar_container'>
                        <div className='calendar_top'>
                            <div className='calendar_top_head'>10 tasks due this month</div>
                            {/* <div className='calendar_top_head'>{this_month_over_due} tasks due this month</div> */}
                            {/* <div className='calendar_top_head'>{totalTasks} tasks this month</div> */}
                        </div>
                        {/* <Calendar onChange={setDate} value={date} /> */}
                        {/* <Datepicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        inline
                                    /> */}
                        {/* <TaskDatePicker /> */}
                        {CalendarView()}
                    </div>
                    <div className="taskStatus_container">
                        <div className="taskStatus_area">
                            <div className="taskStatus_lists">
                                <ul className="tasks_ul">
                                    <li className="status_heading active">Assigned</li>
                                    <li className="status_heading">Created</li>
                                    <li className="status_heading">Observing</li>
                                    <li className="status_heading">All</li>
                                </ul>
                            </div>
                            <div className="totalTasks"> 1 Total Tasks</div></div><div className="tesk-status-container">
                            <div className="tesk-status-item">
                                <div className="firstPara">
                                    <div className="task_status_result">OverDue</div>
                                    <div className="task_status_circle" style={{ boxShadow: "rgb(223, 30, 57) 0px 0px 10px 0px", backgroundColor: "rgb(223, 30, 57)" }}>
                                    </div>
                                </div>
                                <div className="secoundPara">
                                    <div className="task_counter" style={{ color: "rgb(223, 30, 57)" }}>0</div>
                                </div>
                                <div className="lastPara">
                                    <div className="viewTasks">View Tasks</div>
                                    <div className="viewTasksIcon"></div>
                                </div>
                            </div>
                            <div className="tesk-status-item">
                                <div className="firstPara">
                                    <div className="task_status_result">In Progress</div>
                                    <div className="task_status_circle" style={{ boxShadow: "rgb(255, 145, 12) 0px 0px 10px 0px", backgroundColor: "rgb(255, 175, 76)" }}></div>
                                </div>
                                <div className="secoundPara">
                                    <div className="task_counter" style={{ color: "rgb(255, 175, 76)" }} >0</div>
                                </div>
                                <div className="lastPara">
                                    <div className="viewTasks">View Tasks</div>
                                    <div className="viewTasksIcon"></div>
                                </div>
                            </div>
                            <div className="tesk-status-item">
                                <div className="firstPara">
                                    <div className="task_status_result">On Hold</div>
                                    <div className="task_status_circle" style={{ boxShadow: "rgb(10, 37, 106) 0px 0px 10px 0px", backgroundColor: "rgb(3, 46, 132)" }}></div>
                                </div>
                                <div className="secoundPara">
                                    <div className="task_counter" style={{ color: "rgb(3, 46, 132)" }}>0</div>
                                </div>
                                <div className="lastPara">
                                    <div className="viewTasks">View Tasks</div>
                                    <div className="viewTasksIcon"></div>
                                </div>
                            </div>
                            <div className="tesk-status-item">
                                <div className="firstPara">
                                    <div className="task_status_result">Not Started</div>
                                    <div className="task_status_circle" style={{ boxShadow: "rgba(255, 0, 0, 0.75) 0px 0px 10px 0px", backgroundColor: "rgb(133, 143, 163)" }}></div>
                                </div>
                                <div className="secoundPara">
                                    <div className="task_counter" style={{ color: "rgb(133, 143, 163)" }}>0</div>
                                </div>
                                <div className="lastPara">
                                    <div className="viewTasks">View Tasks</div><div className="viewTasksIcon"></div>
                                </div>
                            </div>
                            <div className="tesk-status-item">
                                <div className="firstPara">
                                    <div className="task_status_result">Unassigned</div>
                                    <div className="task_status_circle" style={{ boxShadow: "rgba(255, 0, 0, 0.75) 0px 0px 10px 0px", backgroundColor: "rgb(133, 143, 163)" }}></div>
                                </div>
                                <div className="secoundPara">
                                    <div className="task_counter" style={{ color: "rgb(133, 143, 163)" }}>0</div>
                                </div>
                                <div className="lastPara">
                                    <div className="viewTasks">View Tasks</div>
                                    <div className="viewTasksIcon"></div>
                                </div>
                            </div>
                            <div className="tesk-status-item"><div className="firstPara"><div className="task_status_result">Completed</div>
                                <div className="task_status_circle" style={{ boxShadow: "rgb(166, 208, 104) 0px 0px 10px 0px", backgroundColor: "rgb(166, 208, 104)" }}></div>
                            </div>
                                <div className="secoundPara">
                                    <div className="task_counter" style={{ color: "rgb(166, 208, 104)" }}>0</div>
                                </div>
                                <div className="lastPara">
                                    <div className="viewTasks">View Tasks</div>
                                    <div className="viewTasksIcon"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='insights_work_load_area'>
                <div className="keyword_search_area">
                    <div className="keyword_search_top">
                        <div className="keyword_title">Search tasks by key words</div>
                    </div>
                    <div className="keyword_search">
                        <div className="right-inner-addon input-container">
                            <input type="text" className="form-control" placeholder="Search" />
                            <BsSearch className='keyword_search_icon absolute' />
                        </div>
                    </div>
                    <div id="task_item_area">
                        <ul className="task_item_list">
                            <li className="task_item_li">
                                <div className="ellipse_shape"></div>
                                <div className="task_Name">yuilui</div>
                                <div className="task_total">1</div>
                            </li>
                            <li className="task_item_li">
                                <div className="ellipse_shape"></div>
                                <div className="task_Name">uiluiol</div>
                                <div className="task_total">1</div></li>
                            <li className="task_item_li">
                                <div className="ellipse_shape"></div>
                                <div className="task_Name">ioio;</div>
                                <div className="task_total">1</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='insights_work_detail'>
                    <div className='insights_work_charts'>
                        <div className="insights_work_Left insights_work_item">
                            <div className="insights_work_title">How busy are you?</div>
                            <div className="insightupdate_text">
                                <div className="insightupdateIcon">
                                    <BsArrowDown className='text-[#ba0922]' />
                                </div>
                                <div className="insightupdatePara">Update these tasks to get an accurate report</div>
                            </div>
                            <div className="taskStatus_area">
                                <div className="task_update_item">
                                    <div className="tsks_hours_detail">
                                        <div className="tsks_hours_title"><span className="counterTasks" style={{ paddingRight: 5 }}>1</span><span>Task </span></div>
                                        <div className="tsks_hours_status">Missing Hours</div>
                                    </div>
                                    <div className="task_update_text">
                                        <span className="task_update_head">Update</span>
                                        <span className="task_update_icon">
                                            <BsArrowRight className='text-[#ba0922]' />
                                        </span>
                                    </div>
                                </div>
                                <div className="task_update_item">
                                    <div className="tsks_hours_detail">
                                        <div className="tsks_hours_title"><span className="counterTasks" style={{ paddingRight: 5 }}>1</span><span>Task </span></div>
                                        <div className="tsks_hours_status">Overdue</div>
                                    </div>
                                    <div className="task_update_text">
                                        <span className="task_update_head">Update</span>
                                        <BsArrowRight className='text-[#ba0922]' />
                                    </div>
                                </div>
                                <div className="task_update_item">
                                    <div className="tsks_hours_detail">
                                        <div className="tsks_hours_title"><span className="counterTasks" style={{ paddingRight: 5 }}>1</span><span>Task </span></div>
                                        <div className="tsks_hours_status">Unassigned</div>
                                    </div>
                                    <div className="task_update_text">
                                        <span className="task_update_head">Update</span>
                                        <BsArrowRight className='text-[#ba0922]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='insights_work_right insights_work_item' style={{ width: '31%' }}>
                            <div className='insights_work_right_top'>
                                <div className='piechartForInsight item'>
                                    <TaskinsightpieChart
                                    // total_overdue={total_overdue} 
                                    // setTotal_overdue={setTotal_overdue} 
                                    // unassigned={allSummary.unassigned} 
                                    // missingHours={missingHours}

                                    />
                                </div>
                                <div className="barChartInsight item">
                                    <TaskinsightBarChart
                                    // total_overdue={total_overdue} 
                                    // setTotal_overdue={setTotal_overdue} 
                                    // unassigned={allSummary.unassigned} 
                                    // missingHours={missingHours}
                                    />
                                </div>
                            </div>
                            <div className='insights_work_right_bottom'>
                                <div className='workloadReaportBtn'>Run workload report</div>
                                {/* <div className='workloadReaportBtn' onClick={() => { props.setTaskLoads(!props.taskLoads); props.setPopup({ type: 'WorkloadType', data: "this_week" }); props.setPopup({ type: 'dataChangeWorkLoad', data: true }) }}>Run workload report</div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <TaskRoomList />
        </div>
    );
};

export default TaskInsightsHome;