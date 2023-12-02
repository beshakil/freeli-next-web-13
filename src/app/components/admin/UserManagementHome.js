/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
import GuestsManage from './GuestsManage';
import UsersManage from './UsersManage';
import OutsideClickHandler from 'react-outside-click-handler';
import InviteNewUser from './InviteNewUser';
import CreateNewUser from './CreateNewUser';

function UserManagementHome() {
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
    const [createNewUser, setCreateNewUser] = useState(false);

    const [selectedUsersOptions, setSelectedUsersOptions] = useState(false);

    const handleSelectedOptions = (e) => {
        setSelectedUsersOptions(e);
        setUsersOptions(false);

    }

    return (
        <>
            <div className='rightContent'>
                <div className='adminRightHead'>
                    <span className="user_Management_title text-5xl">User management</span>
                    <span
                        onMouseEnter={() => handleMouseHover('element1')}
                        onMouseLeave={() => handleMouseLeave('element1')}
                        className="tooltip user_Management_title"><span className="info_tooltip_new"></span>
                        {
                            hoveredElements['element1'] &&
                            <span className="tooltiptext">
                                <p>Invite your teammates to collaborate with. You can invite any teammate as a Member or as an Admin. Admin users will have full access to your account's Admin Settings and will be able to jointly manage this account with you. Both Admin and Member Users will be able to use all Workfreeli collaboration features.</p>
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
                        <div onClick={() => setUserTab('only_user')} className={`${userTab === 'only_user' ? "active" : ""} usersTabList teamManagementTitle`} >
                            <div style={{ cursor: 'pointer' }}>
                                <p>Users (22)</p>
                            </div>
                            <div className='adminUserFilter' onClick={() => setUsersOptions(true)}></div>
                        </div>
                        <div onClick={() => setUserTab('guest')} className={`${userTab === 'guest' ? "active" : ""} usersTabList teamManagementTitle`} >
                            <div style={{ cursor: 'pointer' }}>
                                <p>Guests (0)</p>
                            </div>
                            <div className='adminUserFilter' onClick={() => setGuestsOptions(true)}></div>
                        </div>
                    </div>
                    <div className='usersTabSecDevide rightSide'>
                        <span className='relative'>
                            <input className="userSearchInput" type="text" placeholder="Search user" />
                            <span className="leftSearchCloseBtn remove" ></span>
                        </span>
                        <button
                            style={{ marginRight: '10px' }}
                            onMouseEnter={() => handleMouseHover('element2')}
                            onMouseLeave={() => handleMouseLeave('element2')}
                            onClick={() => setInviteNewUser(true)}
                            className="userCreateBtn tooltip5">Invite new user</button>
                        {
                            hoveredElements['element2'] &&
                            <span className="user_Management_title" >
                                <span className="tooltiptext5" >
                                    <p> Invite your teammates to collaborate with. </p>
                                    <span className="tooltipClose"> </span>
                                </span>
                            </span>
                        }
                        <div
                            onMouseEnter={() => handleMouseHover('element3')}
                            onMouseLeave={() => handleMouseLeave('element3')}
                            onClick={() => setCreateNewUser(true)}
                            className="opt_icons conv_more addUser">
                        </div>
                        {
                            hoveredElements['element3'] &&
                            <span className="user_Management_title" >
                                <span className="tooltiptext5 newUserTool" >
                                    <p> Create a new user. </p>
                                    <span className="tooltipClose"></span>
                                </span>
                            </span>
                        }
                    </div>
                </div>
                <div className='usersTableContainer'>
                    <div className="userTableHead">
                        <ul className="">
                            <li className="_userName desc" style={{ width: "20%" }}> <span className="sortIcons"></span>Name</li>
                            <li className="_userEmail desc" style={{ width: "25%" }}><span className="sortIcons"></span>Login email</li>
                            <li className="_userRole" style={{ width: "7%" }} >Role</li>
                            <li className="_userStatus sort_active desc" style={{ width: "13%" }}><span className="sortIcons"></span> Added on</li>
                            <li className="_userStatus" style={{ width: "19%" }}>Added by</li>
                            <li className="_userStatus" style={{ width: "10%" }}>Status</li>
                            <li className="_userAction" style={{ width: "5%" }}>Action</li>
                        </ul>
                    </div>
                    {
                        userTab === 'only_user' ? <UsersManage /> :
                            <GuestsManage />
                    }
                </div>
            </div>
            {
                usersOptions &&
                <OutsideClickHandler onOutsideClick={() => setUsersOptions(false)}>
                    <ul className="userActionPopup showAll absolute" style={{ top: "150px", left: "40px", right: "unset" }}>
                        <li className="" onClick={() => handleSelectedOptions("admin")}>Admins</li>
                        <li className="">Members</li>
                        <li className="">Active</li>
                        <li className="">Inactive</li>
                        <li className="active">Show All</li>
                    </ul>
                </OutsideClickHandler>
            }
            {
                guestsOptions &&
                <OutsideClickHandler onOutsideClick={() => setGuestsOptions(false)}>
                    <div>
                        <ul className="userActionPopup active absolute" style={{ top: "150px", left: "160px", right: "unset" }}>
                            <li className="active">Active</li>
                            <li className="">Inactive</li>
                            <li className="">Show All</li>
                        </ul>
                    </div>
                </OutsideClickHandler>
            }
            {
                inviteNewUser ? <InviteNewUser setInviteNewUser={setInviteNewUser} /> : null
            }
            {
                createNewUser ? <CreateNewUser setCreateNewUser={setCreateNewUser} /> : null
            }
        </>
    );
}

export default UserManagementHome;
