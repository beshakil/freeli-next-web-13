"use client";
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import TaskPropertiesCon from '../TaskProperties/TaskPropertiesCon';

const demoTasks = [
    {
        id: 1,
        taskName: "Task 1",
        roomName: "Room A",
        startDate: "2023-10-29",
        dueDate: "2023-10-31",
        progress: 30,
        status: "In Progress",
        Priority: "High",
        "Assigned to": "John Doe",
        "Created by": "Alice",
        Review: "Pending",
        Observer: "Bob",
        Keywords: "React, JavaScript",
        Cost: "$100",
        Hours: "20",
    },
    {
        id: 2,
        taskName: "Task 2",
        roomName: "Room B",
        startDate: "2023-11-01",
        dueDate: "2023-11-05",
        progress: 70,
        status: "Completed",
        Priority: "Medium",
        "Assigned to": "Jane Smith",
        "Created by": "Eve",
        Review: "Approved",
        Observer: "Charlie",
        Keywords: "HTML, CSS",
        Cost: "$50",
        Hours: "10",
    },
    // Add more tasks as needed
];

const TaskList = () => {
    const [addColumnsPopup, setAddColumnsPopup] = useState(false);
    const [addSelectedColumns, setAddSelectedColumns] = useState([]);
    const [widthSize, setWidthSize] = useState();

    const availableColumns = [
        "Priority",
        "Assigned to",
        "Created by",
        "Review",
        "Observer",
        "Keywords",
        "Cost",
        "Hours",
    ];

    const newWidth = availableColumns && availableColumns
        .filter(column => addSelectedColumns.includes(column))
        .reduce((totalWidth) => totalWidth + widthSize, 0);
    const totalWidth = newWidth + 100;

    const handleAddColumnsPopup = () => {
        setAddColumnsPopup(!addColumnsPopup);
    }

    const handleAddSelectedColumn = (type, size) => {
        if (!addSelectedColumns.includes(type)) {
            setAddSelectedColumns([...addSelectedColumns, type]);
        }
        setWidthSize(size)
    };

    const handleRemoveSelectedColumn = (type) => {
        setAddSelectedColumns(addSelectedColumns.filter(column => column !== type));
    };

    const [taskPropertiesPopup, setTaskPropertiesPopup] = useState(false);

    return (
        <>
            <div className='tagFlieList_body' style={{ overflowX: 'auto' }}>
                <div className='TaskTable taskTotalArea' style={{ width: `${totalWidth}%` }} >
                    <div className="TaskHeading">
                        <span className="adminUserFilter forChecklist"></span>
                        <div className="_afileMark"></div>
                        <div className="_task_title desc" style={{ width: '30%' }} ><span className="sortIcons"></span>Task name</div>
                        <div className="_conversationName desc" style={{ width: '15%' }} ><span className="sortIcons"></span><span>Room Name</span></div>
                        <div className="_startdate sort_active desc" style={{ width: '12%' }}><span className="sortIcons"></span><span>Start Date</span></div>
                        <div style={{ width: '12%', paddingLeft: '5px' }}>Due Date</div>
                        <div style={{ width: '15%' }}>Progress</div>
                        <div style={{ width: '11%' }}>Status</div>

                        {availableColumns.map((column) => (
                            addSelectedColumns.includes(column) && (
                                <div style={{ width: '10%' }} key={column}>
                                    {column}
                                </div>
                            )
                        ))}

                        <div className="custom_dropdown_click" id="moreItem">
                            <div onClick={handleAddColumnsPopup}>
                                <div data-for="left_tooltip" data-tip="Create a new Room" id="moreItem" style={{ cursor: 'pointer', width: '20px', margin: '0px 10px 0px auto' }}><i className="fa fa-plus custom_icon false"></i></div>
                                {
                                    addColumnsPopup &&
                                    <OutsideClickHandler onOutsideClick={() => setAddColumnsPopup(false)}>
                                        <div className="custom_dropdown_more moreColums" style={{ position: 'absolute' }}>
                                            <div><span className="addColumns">Add Columns</span></div>
                                            {availableColumns.map((column) => (
                                                <div key={column} onClick={addSelectedColumns.includes(column) ? () => handleRemoveSelectedColumn(column) : () => handleAddSelectedColumn(column, 10)}>
                                                    <label>{column}</label>
                                                    <span
                                                        className={`${addSelectedColumns.includes(column)
                                                            ? "removeIcon"
                                                            : "addIcons"
                                                            }`}
                                                    >
                                                    </span>
                                                </div>
                                            )
                                            )}
                                        </div>
                                    </OutsideClickHandler>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='fileBody_area taskListBody_area prime_search' style={{ position: 'relative' }}>
                        {demoTasks.map((task) => (
                            <div className="TaskBody" key={task.id} onClick={() => setTaskPropertiesPopup(!taskPropertiesPopup)}>
                                <div className="circleArea" style={{ width: "3%", paddingLeft: "0px" }}>
                                    <div className="task_circle"></div>
                                </div>
                                <div className="taskTitle_text" style={{ width: "30%", paddingLeft: "0px" }}>
                                    {task.taskName}
                                </div>
                                <div style={{ width: "15%", paddingLeft: "0px" }}>{task.roomName}</div>
                                <div style={{ width: "12%", paddingLeft: "0px" }}>{task.startDate}</div>
                                <div style={{ width: "12%", paddingLeft: "0px" }}>{task.dueDate}</div>
                                <div style={{ width: "15%", paddingLeft: "20px" }}>
                                    <div style={{ height: '15px', width: '100%', backgroundColor: 'rgb(217, 226, 232)', borderRadius: '40px' }}>
                                        <div style={{ height: '100%', width: '100%, background-color: rgb(91, 100, 119); border-radius: 40px; text-align: right' }}>
                                            {/* <span style={{ padding: '10px', color: 'black', fontWeight: '900' }}>
                                                {task.progress}%
                                            </span> */}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '11%', display: 'flex' }}>
                                    <div className="task_status" style={{ backgroundColor: 'rgb(91, 100, 119)', color: 'rgb(255, 255, 255)' }}>
                                        {task.status}
                                    </div>
                                </div>
                                {addSelectedColumns.map((column) => (
                                    <div style={{ width: '10%' }} key={column}>
                                        {task[column]}
                                    </div>
                                ))}
                                <div style={{ width: '20px', margin: '0px auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {
                taskPropertiesPopup && <TaskPropertiesCon setTaskPropertiesPopup={setTaskPropertiesPopup} />
            }
        </>
    );
};

export default TaskList;