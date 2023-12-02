/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
// import GuestsManage from './GuestsManage';
// import UsersManage from './UsersManage';
import OutsideClickHandler from 'react-outside-click-handler';
import CreateTeam from './CreateTeam';
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

function TeamManageHome() {

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
                    <span className="user_Management_title text-5xl">Team management</span>
                    <span
                        onMouseEnter={() => handleMouseHover('element1')}
                        onMouseLeave={() => handleMouseLeave('element1')}
                        className="tooltip user_Management_title"><span className="info_tooltip_new"></span>
                        {
                            hoveredElements['element1'] &&
                            <span className="tooltiptext !w-[600px]">
                                <p>Teams are a great way for a group of users to collaborate. You can select one or more users in any team. A user can be part of multiple teams. Only users in a team can participate in a room chat, share files etc. You only need more than one team if you would like to group of users to remain completely private. For example, your Toronto Office and Vancouver Office are completely two separate operations where your staff in each office do not interact. However, as admin, you would like to control Workfreeli settings for both offices. Or for example, the majority of the staff for both offices do not interact, but some users do such as senior managers or shared common personnel. In this scenario, you can add those common personnel to both teams so that they have full access to all you staff in both offices and can participate in any team/work rooms. <br /> <br />

                                    As another example, you may want to create a specific team with users from numerous departments and offices to handle a specific project or activity or responsibility. If that project or activity is long-term, then you may consider setting up a team with those users in order to elevate their privacy and to prevent access by other staff to this team. You may not want users of this particular team to share any information on their activity with any other staff members who are not authorized. This would be a great way to do that. <br /> <br />

                                    If no users are active yet while creating team: User selection page will show yourself only and if there are any pending users. Pending users cannot be selected.</p>
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
                                <p>Teams (22)</p>
                            </div>
                        </div>
                    </div>
                    <div className='usersTabSecDevide rightSide'>
                        <span className='relative'>
                            <input className="userSearchInput" type="text" placeholder="Search teams" />
                            <span className="leftSearchCloseBtn remove" ></span>
                        </span>
                        <button
                            style={{ marginRight: '10px' }}
                            onMouseEnter={() => handleMouseHover('element2')}
                            onMouseLeave={() => handleMouseLeave('element2')}
                            onClick={() => setCreateNewTeam(true)}
                            className="userCreateBtn tooltip5">Create team</button>
                        {
                            hoveredElements['element2'] &&
                            <span className="user_Management_title" >
                                <span className="tooltiptext6">
                                    <p> Create a team </p>
                                    <span className="tooltipClose"> </span>
                                </span>
                            </span>
                        }

                    </div>
                </div>
                <div className='usersTableContainer'>
                    <div className="userTableHead">
                        <ul className="">
                            <li className="_userName desc sort_active" style={{ width: "25%" }}> <span className="sortIcons"></span>Team Name</li>
                            <li className="_userEmail desc " style={{ width: "10%" }}>Team Size</li>
                            <li className="_userRole" style={{ width: "20%" }} >Team created by</li>
                            <li className="_userStatus desc" style={{ width: "20%" }}>
                                Team updated by
                            </li>
                            <li className="_userStatus" style={{ width: "20%" }}>Your role</li>
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
                                            <li className="_userEmail" style={{ width: "10%" }}>
                                                <span className="userEmailText" title="rakib15020@gmail.com">{item.teamSize}</span>
                                            </li>
                                            <li className="_userRole" style={{ width: "20%" }}>
                                                <span className=""> {item.teamCreatedBy} </span>
                                            </li>
                                            <li className="_userStatus" style={{ width: "20%" }}>
                                                <time className="userDateText">{item.teamUpdatedBy}</time>
                                            </li>
                                            <li className="_userStatus" style={{ width: "20%" }}>
                                                <span className="_userNameTxt">{item.role}</span>
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
                createNewTeam ? <CreateTeam setCreateNewTeam={setCreateNewTeam} /> : null
            }
        </>
    );
}

export default TeamManageHome;
