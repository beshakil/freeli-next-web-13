/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
// import GuestsManage from './GuestsManage';
// import UsersManage from './UsersManage';
import OutsideClickHandler from 'react-outside-click-handler';
import CreateCategory from './CreateCategory';
// import InviteNewUser from './InviteNewUser';
// import CreateNewUser from './CreateNewUser';

const userData = [
    {
        id: 1,
        teamName: "Shakil Ahmed",
        teamSize: "5",
        teamCreatedBy: "Admin Admin",
        teamUpdatedBy: "Shakil Ahmed",
        role: "Member",
    },
    {
        id: 2,
        teamName: "Shakil Ahmed",
        teamSize: "10",
        teamCreatedBy: "Admin Admin",
        teamUpdatedBy: "Shakil Ahmed",
        role: "Member",
    },
    {
        id: 3,
        teamName: "Shakil Ahmed",
        teamSize: "10",
        teamCreatedBy: "Admin Admin",
        teamUpdatedBy: "Shakil Ahmed",
        role: "Member",
    },
    {
        id: 4,
        teamName: "Shakil Ahmed",
        teamSize: "10",
        teamCreatedBy: "Admin Admin",
        teamUpdatedBy: "Shakil Ahmed",
        role: "Member",
    },
    {
        id: 5,
        teamName: "Shakil Ahmed",
        teamSize: "10",
        teamCreatedBy: "Admin Admin",
        teamUpdatedBy: "Shakil Ahmed",
        role: "Member",
    }
]

function RoomCategoryHome() {

    const [data, setData] = useState(userData);

    const [gustsSettingsOptions, setGustsSettingsOptions] = useState(false);

    const [userTab, setUserTab] = useState('only_user');
    const handleUserTab = (e) => {
        setUserTab(e.target.id);
    }
    const [hoveredElements, setHoveredElements] = useState({});
    // Function to handle mouse hover
    const handleMouseHover = (elementId) => {
        setHoveredElements((prevState) => ({
            ...prevState,
            [elementId]: true,
        }));
    };

    // Function to handle mouse leave
    const handleMouseLeave = (elementId) => {
        setHoveredElements((prevState) => ({
            ...prevState,
            [elementId]: false,
        }));
    };

    const [usersOptions, setUsersOptions] = useState(false);
    const [guestsOptions, setGuestsOptions] = useState(false);
    const [inviteNewUser, setInviteNewUser] = useState(false);
    const [createNewTeam, setCreateNewTeam] = useState(false);

    const [selectedUsersOptions, setSelectedUsersOptions] = useState(false);

    const handleSelectedOptions = (e) => {
        setSelectedUsersOptions(e);
        setUsersOptions(false);

    }

    const handleSettingsOptions = (id) => {
        setGustsSettingsOptions(gustsSettingsOptions === id ? null : id);

    }



    return (
        <>
            <div className='rightContent'>
                <div className='adminRightHead'>
                    <span className="user_Management_title text-5xl">Room category</span>
                    <span
                        onMouseEnter={() => handleMouseHover('element1')}
                        onMouseLeave={() => handleMouseLeave('element1')}
                        className="tooltip user_Management_title"><span className="info_tooltip_new"></span>
                        {
                            hoveredElements['element1'] &&
                            <span className="tooltiptext">
                                <p>You need to select a room category when creating a new Room. This is a useful feature to help sort and categorize data such as files, images, links and working documents using the files dashboard on Workfreeli. Create custom room categories as needed.</p>
                                <span className="tooltipClose"></span>
                            </span>}
                    </span>
                    {
                        selectedUsersOptions &&
                        <div className="miniItem" style={{ marginLeft: "15px" }}>
                            <div className="miniItem_image" style={{ margin: "0px" }}>
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="miniItem_name" style={{ marginLeft: "3px" }}>Filter Active Users only</div>
                            <div onClick={() => handleSelectedOptions(false)} className="miniItem_remove"></div>
                        </div>
                    }
                </div>

                <div className='usersTabSection'>
                    <div className="usersTabSecDevide lefttSide" style={{ gap: '10px' }}>
                        <div onClick={() => setUserTab('only_user')} className={`usersTabList teamManagementTitle`} >
                            <div style={{ cursor: 'pointer' }}>
                                <p>Room category (22)</p>
                            </div>
                        </div>
                    </div>
                    <div className='usersTabSecDevide rightSide'>
                        <span className='relative'>
                            <input className="userSearchInput" type="text" placeholder="Search category" />
                            <span className="leftSearchCloseBtn remove" ></span>
                        </span>
                        <button
                            style={{ marginRight: '10px' }}
                            onMouseEnter={() => handleMouseHover('element2')}
                            onMouseLeave={() => handleMouseLeave('element2')}
                            onClick={() => setCreateNewTeam(true)}
                            className="userCreateBtn tooltip5">Create Category</button>
                        {
                            hoveredElements['element2'] &&
                            <span className="user_Management_title" >
                            <span className="tooltiptext6">
                                <p> Create a category </p>
                                <span className="tooltipClose"> </span>
                            </span>
                        </span>
                        }
                        
                    </div>
                </div>
                <div className='usersTableContainer'>
                    <div className="userTableHead">
                        <ul className="">
                            <li className="_userName desc sort_active" style={{ width: "25%" }}> <span className="sortIcons"></span>Category Name</li>
                            <li className="_userEmail desc " style={{ width: "15%" }}>No. of rooms</li>
                            <li className="_userRole" style={{ width: "30%" }} >Created on</li>
                            <li className="_userStatus desc" style={{ width: "30%" }}>
                                Created by
                            </li>
                            <li className="_userAction" style={{ width: "5%" }}>Action</li>
                        </ul>
                    </div>
                    <div className='userTableBody'>
                        {
                            data.map((item) => {
                                return (
                                    <>
                                        <ul className="_userList" key={item.id}>
                                            <li className="_userName" style={{ width: "25%" }}>
                                                <span className="_userNameTxt">{item.teamName}</span>
                                            </li>
                                            <li className="_userEmail" style={{ width: "15%" }}>
                                                <span className="userEmailText" title="rakib15020@gmail.com">{item.teamSize}</span>
                                            </li>
                                            <li className="_userRole" style={{ width: "30%" }}>
                                                <span className=""> {item.teamCreatedBy} </span>
                                            </li>
                                            <li className="_userStatus" style={{ width: "30%" }}>
                                                <time className="userDateText">{item.teamUpdatedBy}</time>
                                            </li>
                                            <li onClick={() => handleSettingsOptions(item.id)} className="_userAction" style={{ width: "5%", position: "relative", pointerEvents: gustsSettingsOptions === item.id ? "none" : "" }}>
                                                <span className="userActionIcon"></span>
                                            </li>

                                        </ul>
                                        {
                                            gustsSettingsOptions === item.id &&
                                            <OutsideClickHandler onOutsideClick={() => setGustsSettingsOptions(false)}>
                                                <ul className="userActionPopup" style={{ position: "absolute" }}>
                                                    <li>Edit Category</li>
                                                    <li>Delete Category</li>
                                                </ul>
                                            </OutsideClickHandler>
                                        }
                                    </>
                                )
                            })
                        }



                        {/* <div className='h-[500px]'>
                    <p className='guestEmptyMsg'>Workfreeli allows you to invite guest users who are not your company or workspace users. Guests can only participate in specific rooms that they are invited. Only the admin(s) for each room can do so after creating the room. Once a guest user added to your account by a room admin, any admin from any room can pick the guest from guestlist to invite that guest to other rooms as well. You will be able to manage all your guest users in this page as they are invited.</p>
                    </div> */}

                    </div>
                </div>
            </div>

            {
                createNewTeam ? <CreateCategory setCreateNewTeam={setCreateNewTeam} /> : null
            }
        </>
    );
}

export default RoomCategoryHome;