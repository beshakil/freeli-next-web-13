"use client";
import React, { useState } from 'react';
import { MdOutlineAdd } from "react-icons/md";

const TaskPropertiesCon = ({ setTaskPropertiesPopup }) => {
    const [selectedUser, setSelectedUser] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const demoUsers = ['Shakil Ahmed', 'Abdul Aual Sobuj', 'Fifth Room From Next', 'Shakil Test', 'Md. Mamun Or rashid rajon', 'Md. Sadequr Rahman', 'Hasnat Ovee'];

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleRemoveUser = () => {
        setSelectedUser('');
    };
    return (
        <div className='task_right_container forQuickViewTask'>
            <div className="adminRightHead taskHeader" style={{ paddingLeft: '20px' }}>
                <span className="closeAdminPanel" onClick={() => setTaskPropertiesPopup(false)}></span>
                <div className="taskHeader_right_area">
                    <span className="Duetomorrow"></span>
                </div>
            </div>
            <div className='task_body_area'>
                <div className='task_body_container'>
                    <div className="task_body_left quickShowTask">
                        <div className="quickViewTop">
                            <div className="task-room-name selectBox">
                                <div className="conversation_name_label">
                                    <span className="taskRoomTitleLabel">Shakil Test</span>
                                    <span className="editFile"></span>
                                </div>
                            </div>
                            {/* <div className="task-room-name taskTitle_area taskTitle_area_Updated" style={{ position: 'relative', marginTop: '4px' }}>
                                <div className="taskTitle_div">
                                    <p className="titleHeading">dfsfas</p>
                                </div>
                            </div> */}
                            <div className="task-room-name selectBox newRow">
                                <div>
                                    <div>
                                        <div className="taskTeamDetails forTaskproperties true">
                                            <div className="taskTeamInsight_info">
                                                <div className="AssigneeField roomTaskproperties true">
                                                    <div className="userDropDownArea">
                                                        <ul className="usersGroup"></ul>
                                                        <div className="ellipsis" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', cursor: 'pointer' }}>
                                                            {selectedUser ? (
                                                                <>
                                                                    <span className="selectOnew" style={{ width: 'auto' }}>{selectedUser}</span>
                                                                </>
                                                            ) : (
                                                                <span className="selectOnew" style={{ width: 'auto' }}>No user selected</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="dropdown" style={{ backgroundColor: 'transparent' }}>
                                                        <div className="dropdown-header"><i className="fa fa-chevron-right icon open" style={{ color: 'black' }}></i></div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                                <div className="AddKeywordsPopup_task_settings insightTaskBoard" style={{ marginTop: '1px', marginLeft: '0px', width: '100%' }}>
                                                    <div className="keywordItem">
                                                        <div className="searchAndFilterBar " style={{ position: 'relative' }}>
                                                            <div className="selectedRoomCont">
                                                                <span className="tags_Color">{selectedUser && (
                                                                    <span>
                                                                        {selectedUser}
                                                                        <svg onClick={handleRemoveUser} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(255, 255, 255)', cursor: 'pointer', position: 'relative', top: '2px', marginLeft: '5px', border: '1px solid rgb(155, 155, 155)', borderRadius: '50%', padding: '2px' }}>
                                                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
                                                                        </svg>
                                                                    </span>
                                                                )}</span>
                                                            </div>
                                                            <div className="searchareaDiv">
                                                                <input
                                                                    className="_inputBar searchLeft"
                                                                    type="text"
                                                                    placeholder="Search Room"
                                                                    value={searchValue}
                                                                    onChange={handleSearchChange}
                                                                />
                                                                <div className="keyword_list_task_settings workloadUsers">
                                                                    {demoUsers
                                                                        .filter((user) => user.toLowerCase().includes(searchValue.toLowerCase()))
                                                                        .map((user, index) => (
                                                                            <p key={index} className="_tag_rooms" onClick={() => handleUserSelect(user)}>
                                                                                {user}
                                                                            </p>
                                                                        ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="creator_area leftArea" style={{ height: '34.5px', borderBottom: 'unset', paddingLeft: '0px', marginTop: '0px' }}>
                                <div className="creator_label inlineText" style={{ width: 'auto' }}>
                                    Created by <p>Manzurul Alam</p><span>dated on Nov 26th, 2023</span>
                                </div>
                            </div>
                            <div className="new_area">
                                <div className="flagIcom_area">
                                    <div className="fill_flagIcom"></div>
                                    <div className="keywords_area"></div>
                                    <div className="addKeyword_section myTask">
                                        <div className="addselectKeywords">
                                            <MdOutlineAdd style={{ color: '#5b6477', height: '16px', width: '16px' }} />
                                            <span className="newAddText">Add</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskPropertiesCon;