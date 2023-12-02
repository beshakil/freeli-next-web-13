"use client";
import React from 'react';
import { IoMdAdd } from "react-icons/io";
import TaskInsightsHome from './InsightsTab/TaskInsightsHome';
import NotificationsTabHome from './NotificationsTab/NotificationsTabHome';
import ReviewTabHome from './ReviewTab/ReviewTabHome';
import TaskTabHome from './TasksTab/TaskTabHome';
import CreateTask from './CreateTaskTab/CreateQuickTask';
import TaskRunReport from './taskReportPopup/Home';

const TaskManagementHome = () => {
    const [tasksTab, setTasksTab] = React.useState('insights');
    const [CreatetasksTab, setCreatetasksTab] = React.useState(false);
    const [runReportTab, setRunReportTab] = React.useState(false);
    const onCreateTaskHandaler=()=>{
        setCreatetasksTab(!CreatetasksTab);
    }
    const onRunReportHandaler = () => {
        setRunReportTab(!runReportTab);
    }
    return (
        <>
            {runReportTab ? <TaskRunReport 
                runReportTab={runReportTab}
                setRunReportTab={setRunReportTab}
                onRunReportHandaler={onRunReportHandaler}
            
            /> :""}
        { !CreatetasksTab ? 
                <>
                    <div className="taskTopHead">
                        <div className="breadcrumb_area">
                            <ol className="custom_breadcrumb">
                                <li className="breadcrumb-item">Task </li>
                                <li className="breadcrumb-item">Insights</li>
                            </ol>
                        </div>
                    </div>
                    <div className="taskHeadSection topHead">
                        <div className="task_column ">
                            <ul className="task_menu_Lists">

                                <li className={`taskLists_tab ${tasksTab === 'insights' ? 'activeTaskMenu' : ''}`} onClick={() => setTasksTab('insights')}>Insights</li>
                                <li className={`taskLists_tab ${tasksTab === 'tasks' ? 'activeTaskMenu' : ''}`} onClick={() => setTasksTab('tasks')}>Tasks</li>
                                <li className={`taskLists_tab ${tasksTab === 'notifications' ? 'activeTaskMenu' : ''}`} onClick={() => setTasksTab('notifications')}>Notifications
                                    <span className="numberCircle" onClick={() => setTasksTab('notifications')}><span>24</span></span>
                                </li>
                                <li className={`taskLists_tab ${tasksTab === 'review' ? 'activeTaskMenu' : ''}`} onClick={() => setTasksTab('review')}>Review</li>
                            </ul>
                        </div>
                        <div className="task_column button_area">
                            <div onClick={onRunReportHandaler} className="runReportButton">Run Report</div>
                            <div onClick={onCreateTaskHandaler} className="createTaskButton flex justify-center gap-1 items-center">
                                <p>Create a Task</p>
                                <IoMdAdd />
                            </div>
                        </div>
                    </div>
                    {/* <TaskInsightsHome /> */}
                    {
                        tasksTab === 'insights' ? <TaskInsightsHome /> :
                            tasksTab === 'tasks' ? <TaskTabHome 
                            CreatetasksTab={CreatetasksTab} 
                            setCreatetasksTab={setCreatetasksTab}
                            /> :
                                tasksTab === 'notifications' ? <NotificationsTabHome /> :
                                    tasksTab === 'review' ? <ReviewTabHome /> : ""
                    }
                </>
        
                : 
                <CreateTask 
                    CreatetasksTab={CreatetasksTab}
                    setCreatetasksTab={setCreatetasksTab}
                    tasksTab={tasksTab}
                    setTasksTab={setTasksTab}
                />
                }
        </>
    );
};

export default TaskManagementHome;