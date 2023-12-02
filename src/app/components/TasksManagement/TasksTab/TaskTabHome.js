"use client";
import React, { useState } from 'react';
import { VscCalendar } from "react-icons/vsc";
import { BiReset } from "react-icons/bi";
import { BsArrowRight, BsXLg } from "react-icons/bs";
import DatePicker from "react-datepicker";
import OutsideClickHandler from 'react-outside-click-handler';
import TaskList from './TaskList';

const TaskTabHome = () => {

    const [statusOptionsVisible, setStatusOptionsVisible] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [moreColumns, setMoreColumns] = useState(false);
    const [searchVal, setSearchVal] = useState('');
    const toggleColumns = () => {
        setMoreColumns(!moreColumns);
    };
    const [isLoaded, setIsLoaded] = useState(false);
    const options = [
        { label: "In Progress", value: 'In Progress', customeName: 'In Progress' },
        { label: "Not Started", value: 'Not Started', customeName: 'Not Started' },
        { label: "OverDue", value: 'OverDue', customeName: 'OverDue' },
        { label: "Completed", value: 'Completed', customeName: 'Completed' },
        { label: "On Hold", value: 'On Hold', customeName: 'On Hold' },
        { label: "Canceled", value: 'Canceled', customeName: 'Canceled' }
    ];

    const [startDate, setStartDate] = useState(null); // State for the start date
    const [endDate, setEndDate] = useState(null); // State for the end date
    const [error2, setError2] = useState(false);

    const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

    const handleStartDateChange = (date) => {
        if (endDate && date > endDate) {
            setError2(true);
        } else {
            setStartDate(date);
            setError2(false);
        }
    };

    const handleEndDateChange = (date) => {
        if (startDate && date < startDate) {
            setError2(true);
        } else {
            setEndDate(date);
            setError2(false);
        }
    };

    const toggleStatusOptions = () => {
        setStatusOptionsVisible(!statusOptionsVisible);
    };

    const handleStatusOptionClick = (value) => {
        setSelectedStatus(value);
        setStatusOptionsVisible(false);
    };


    // Room List select
    const [searchQuery, setSearchQuery] = useState('');
    const [roomData] = useState(['Room 1', 'Room 2', 'Room 3', 'Room 4']); // Sample room data
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [roomListVisible, setRoomListVisible] = useState(false);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setRoomListVisible(true);
    };

    const handleSelectRoom = (room) => {
        if (!selectedRooms.includes(room)) {
            setSelectedRooms([...selectedRooms, room]);
        }
        setRoomListVisible(false);
    };

    const handleRemoveRoom = (room) => {
        setSelectedRooms(selectedRooms.filter((selectedRoom) => selectedRoom !== room));
    };

    const filteredRoomData = roomData.filter((room) =>
        room.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Assign List select
    const [searchAssignQuery, setSearchAssignQuery] = useState('');
    const [assignData] = useState(['Shakil Ahmed', 'Shakil Ahmed Shajib', 'Room 3', 'Room 4']); // Sample room data
    const [selectedAssign, setSelectedAssign] = useState(null);
    const [assignListVisible, setAssignListVisible] = useState(false);

    const handleAssignSearch = (e) => {
        setSearchAssignQuery(e.target.value);
        setAssignListVisible(true);
    };

    const handleSelectAssign = (assign) => {
        setSelectedAssign(assign);
        setAssignListVisible(false);
    };

    const handleRemoveAssign = () => {
        setSelectedAssign(null);
    };

    const filteredAssignData = assignData.filter((assign) =>
        assign.toLowerCase().includes(searchAssignQuery.toLowerCase())
    );

    // keyWord List select
    const [searchKeyWordQuery, setSearchKeyWordQuery] = useState('');
    const [keyWordData] = useState(['Room 1', 'Room 2', 'Room 3', 'Room 4']); // Sample room data
    const [selectedKeyWord, setSelectedKeyWord] = useState([]);
    const [keyWordListVisible, setKeyWordListVisible] = useState(false);

    const handleKeyWordSearch = (e) => {
        setSearchKeyWordQuery(e.target.value);
        setKeyWordListVisible(true);
    };

    const handleSelectKeyWord = (keyword) => {
        if (!selectedKeyWord.includes(keyword)) {
            setSelectedKeyWord([...selectedKeyWord, keyword]);
        }
        setKeyWordListVisible(false);
    };

    const handleRemoveKeyWord = (keyword) => {
        setSelectedKeyWord(selectedKeyWord.filter((selectedKeyword) => selectedKeyword !== keyword));
    };

    const filteredKeyWordData = keyWordData.filter((keyword) =>
        keyword.toLowerCase().includes(searchKeyWordQuery.toLowerCase())
    );

    return (
        <div className='right_container1 tagFileArea advancedFilePanel'>
            <div className="task_fulsearch_area">
                <div className="task_fulsearch_left">
                    <div className="task_basicSearch_area">
                        <div className="task_advance_button">
                            <div className="task_filterIcon"></div>
                            <div className="task_advance_text" data-for="taskList_tooltip" data-tip="Click to advanced search" currentitem="false">Advanced</div>
                            <div className="task_downArrowIcon up"></div>
                        </div>
                        <div className="task_input_area">
                            <div className="searchAndFilter" style={{ position: "relative", width: "100%", borderBottom: "unset" }}>
                                <input id="search_for_a_tag" className="_inputSearchBar searchMargin" type="text" placeholder="Search for a task" style={{ marginLeft: "0px", marginRight: "2px" }} />
                                <div className="srcBtnSection" data-for="top_head" data-tip="Search" style={{ right: "1px", height: "31px" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="task_advacedSearch_area">
                        <div className="first_row" style={{ paddingLeft: "45px" }}>
                            <div className="Advance_search_top_Task newclassName" style={{ paddingRight: "30px", paddingLeft: "0px", flexWrap: "nowrap", gap: "20px", borderBottom: "unset" }}>
                                <div className="col1" style={{ width: "36%" }}>
                                    <div className="row1" style={{ paddingRight: "0px", marginLeft: "0px" }}>
                                        <span className="calenderIcon_task">
                                            <VscCalendar size={22} />
                                        </span>
                                        <div className="fromDate_One_task col1_row2" style={{ width: "100%" }}>
                                            <DatePicker
                                                className="start_Date_task Focus"
                                                selected={startDate}
                                                onChange={handleStartDateChange}
                                                dateFormat="MMMM dd, yyyy"
                                                placeholderText="Due date"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col1" style={{ width: "36%" }}>
                                    <div className="row1" style={{ paddingLeft: "0px", marginLeft: "0px" }}>
                                        <span className="calenderIcon_task">
                                            <VscCalendar size={22} />
                                        </span>
                                        <div className="fromDate_One_task col1_row2">
                                            <div className="react-datepicker-wrapper">
                                                <DatePicker
                                                    className="start_Date_task Focus"
                                                    selected={endDate}
                                                    onChange={handleEndDateChange}
                                                    dateFormat="MMMM dd, yyyy"
                                                    placeholderText="Due date"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col4" style={{ width: "24%", marginLeft: "0px" }}>
                                    <OutsideClickHandler onOutsideClick={() => setStatusOptionsVisible(false)}>
                                        <div className='custom_dropdown_task'>
                                            <button
                                                style={selectedStatus === "Not Started" ? { backgroundColor: '#5b6477', color: 'white', borderRadius: '4px', width: "100%" } :
                                                    selectedStatus === "In Progress" ? { backgroundColor: '#ffaf4c', color: 'white', borderRadius: '4px', width: "100%" } :
                                                        selectedStatus === "Completed" ? { backgroundColor: '#7db52a', color: 'white', borderRadius: '4px', width: "100%" } :
                                                            selectedStatus === "OverDue" ? { backgroundColor: 'rgb(223, 30, 57)', color: 'white', borderRadius: '4px', width: "100%" } :
                                                                { backgroundColor: '#032e84', color: 'white', borderRadius: '4px', width: "100%" }}
                                                className={`custom_dropdown-header ${statusOptionsVisible ? 'selected-green' : ''}`}
                                                onClick={toggleStatusOptions}
                                            >
                                                {selectedStatus || 'Status'} <i className={`fa fa-chevron-right custom_icon ${statusOptionsVisible ? 'open' : 'false'}`}></i>
                                            </button>
                                            {statusOptionsVisible && (
                                                <div className="custom_dropdown-body-task-open">
                                                    {options.map((option, index) => (
                                                        <div
                                                            key={index}
                                                            className="custom_dropdown-item"
                                                            onClick={() => handleStatusOptionClick(option.value)}>
                                                            {option.label}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </OutsideClickHandler>
                                </div>
                            </div>
                        </div>
                        <div className="secound_row">
                            <div className="search_item leftSide" style={{ position: 'relative' }}>
                                <div className='searchAndFilter'>
                                    <OutsideClickHandler onOutsideClick={() => setAssignListVisible(false)}>
                                        <input
                                            className="_inputBar searchLeft"
                                            type="text"
                                            placeholder="Assign to or created by"
                                            value={searchAssignQuery}
                                            onClick={() => setAssignListVisible(true)}
                                            onChange={handleAssignSearch}
                                        />
                                        <div
                                            style={{
                                                right: '1px',
                                                height: '31px',
                                                top: '5px',
                                            }}
                                            className="srcBtnSection"
                                            data-for="top_head"
                                            data-tip="Search"
                                        ></div>
                                        {assignListVisible && (
                                            <div className="tag_room_list">
                                                {filteredAssignData.length === 0 ? <div className="tagNotFound">Not found</div> : filteredAssignData.map((assign, index) => (
                                                    <div className='' key={index} onClick={() => handleSelectAssign(assign)}>
                                                        <p className="_tag_rooms">{assign}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </OutsideClickHandler>
                                </div>
                                {selectedAssign && (
                                    <div className="selectedRoomCont">
                                        <span className='tags_Color'>{selectedAssign}
                                            <BsXLg className='TaskSerachListSelected' onClick={handleRemoveAssign} />
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="search_item rightSide" style={{ position: "relative" }}>
                                <div className='searchAndFilter'>
                                    <OutsideClickHandler onOutsideClick={() => setRoomListVisible(false)}>
                                        <input
                                            className="_inputBar searchLeft"
                                            type="text"
                                            placeholder="Search room"
                                            value={searchQuery}
                                            onClick={() => setRoomListVisible(true)}
                                            onChange={handleSearch}
                                        />
                                        <div
                                            style={{
                                                right: '1px',
                                                height: '31px',
                                                top: '5px',
                                            }}
                                            className="srcBtnSection"
                                            data-for="top_head"
                                            data-tip="Search"
                                        ></div>
                                        {roomListVisible && (
                                            <div className="tag_room_list">
                                                {filteredRoomData.length === 0 ? <div className="tagNotFound">Not found</div> : filteredRoomData.map((room, index) => (
                                                    <div className='' key={index} onClick={() => handleSelectRoom(room)}>
                                                        <p className="_tag_rooms">{room}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </OutsideClickHandler>
                                </div>
                                <div className="selectedRoomCont">
                                    {selectedRooms.map((room, index) => (
                                        <span key={index} className='tags_Color'>{room}
                                            <BsXLg className='TaskSerachListSelected' onClick={() => handleRemoveRoom(room)} />
                                        </span>

                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="third_row" style={{ paddingTop: "0px" }}>
                            <div className="searchAndFilterBar LeftSide" style={{ position: "relative", paddingLeft: "10px", paddingTop: "0px" }}>
                                <div className='searchAndFilter'>
                                    <OutsideClickHandler onOutsideClick={() => setKeyWordListVisible(false)}>
                                        <input
                                            className="_inputBar searchLeft"
                                            type="text"
                                            placeholder="Search keyword"
                                            value={searchKeyWordQuery}
                                            onClick={() => setKeyWordListVisible(true)}
                                            onChange={handleKeyWordSearch}
                                        />
                                        <div
                                            style={{
                                                right: '31px',
                                                height: '31px',
                                                top: '6px',
                                            }}
                                            className="srcBtnSection"
                                            data-for="top_head"
                                            data-tip="Search"
                                        ></div>
                                        {keyWordListVisible && (
                                            <div className="tag_room_list">
                                                {filteredKeyWordData.length === 0 ? <div className="tagNotFound">Not found</div> : filteredKeyWordData.map((keyword, index) => (
                                                    <div className='' key={index} onClick={() => handleSelectKeyWord(keyword)}>
                                                        <p className="_tag_rooms">{keyword}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </OutsideClickHandler>
                                </div>
                                <div className="selectedRoomCont">
                                    {selectedKeyWord.map((keyword, index) => (
                                        <span key={index} className='tags_Color'>{keyword}
                                            <BsXLg className='TaskSerachListSelected' onClick={() => handleRemoveKeyWord(keyword)} />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task_fulsearch_right">
                    <div className="buttonList">
                        <div className="buttonsDesign reset_button dissableReset">
                            <span className="goIconArea flex items-center">
                                <span className="goText" style={{ position: "relative" }}>Clear</span>
                                <BiReset className="arrow_go_icon" size={20} />
                            </span>
                        </div>
                        <div className="buttonsDesign go_button">
                            <span className="goIconArea flex items-center">
                                <span className="goText" style={{ position: "relative" }}>Search</span>
                                <BsArrowRight className="arrow_go_icon" size={20} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <TaskList />
        </div>
    );
};

export default TaskTabHome;