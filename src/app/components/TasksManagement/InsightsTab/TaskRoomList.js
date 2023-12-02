"use client"
import React from 'react';
import { BsArrowRight, BsSearch } from "react-icons/bs";

const TaskRoomList = () => {
    return (
        <div className="task_search_area">
            <div className="tasksbyRoom_top">
                <div className="tasksbyRoom">
                    <ul className="tasks_roms_ul">
                        <li className="room_heading active">Room</li>
                        <li className="room_heading">Priority</li>
                        <li className="room_heading">Status</li>
                        <li className="room_heading">Recent</li>
                    </ul>
                </div>
                <div className="tasksbySearch priorityStatus">
                    <div className="right-inner-addon input-container flex items-center">
                        <input type="text" className="form-control" placeholder="Search" />
                        <BsSearch className='text-[#858fa3] -ml-6' />
                        {/* <span class="clearAllSrcTag" data-for="top_head" data-tip="Clear Search" style={{ position: "absolute", top: "2px", right: "18px", height: "31px", }}></span> */}
                    </div>
                </div>
                <div className="view_all_tasks">
                    <div className="createTaskButton viewAll flex items-center justify-center gap-1 pl-2">View all tasks
                        <BsArrowRight />
                    </div> 
                </div>
            </div>
            <div className="tasksbyRoom_header">
                <ul className="tasksbyRoom_heading">
                    <li className="tasksbyRoom_name" style={{ flexBasis: "75%" }}>Room Name</li>
                    <li className="tasksbyRoom_total" style={{ flexBasis: "10%" }}>Total Tasks</li>
                </ul>
            </div>
            <div className="tasksbyRoom_datas">
                <ul className="task_room_list">
                    <li className="task_room_Name" style={{ flexBasis: "75%" }}>Workfreeli Issue</li>
                    <li className="task_totalTasks" style={{ flexBasis: "10%" }}>1</li>
                </ul>
                <ul className="task_room_list">
                    <li className="task_room_Name" style={{ flexBasis: "75%" }}>Shakil Test</li>
                    <li className="task_totalTasks" style={{ flexBasis: "10%" }}>1</li>
                </ul>
            </div>
        </div>
    );
};

export default TaskRoomList;