/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
// import GuestsManage from './GuestsManage';
// import UsersManage from './UsersManage';
import OutsideClickHandler from 'react-outside-click-handler';
import CreateTag from './CreateTag';
// import CreateCategory from './CreateCategory';
// import InviteNewUser from './InviteNewUser';
// import CreateNewUser from './CreateNewUser';

const userData = [
    {
        id: 1,
        tagColor: "#0A256A",
        teamSize: "5",
        tagTitle: "HR Document",
        tagTeam: "All Teams",
        files: "0",
        createdDate: "2022-01-01",
        createdBy: "Jahirul Islam",
    },
    {
        id: 2,
        tagColor: "#B246FF",
        teamSize: "5",
        tagTitle: "HR Document",
        tagTeam: "All Teams",
        files: "0",
        createdDate: "2022-01-01",
        createdBy: "Jahirul Islam",
    },
    {
        id: 3,
        tagColor: "#732BE2",
        teamSize: "5",
        tagTitle: "HR Document",
        tagTeam: "All Teams",
        files: "0",
        createdDate: "2022-01-01",
        createdBy: "Jahirul Islam",
    },
    {
        id: 4,
        tagColor: "#0036B6",
        teamSize: "5",
        tagTitle: "HR Document",
        tagTeam: "All Teams",
        files: "0",
        createdDate: "2022-01-01",
        createdBy: "Jahirul Islam",
    },
    {
        id: 5,
        tagColor: "#FF53D3",
        teamSize: "5",
        tagTitle: "HR Document",
        tagTeam: "All Teams",
        files: "0",
        createdDate: "2022-01-01",
        createdBy: "Jahirul Islam",
    }
]

function SharedTeamTagsHome() {

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
    const [createNewTag, setCreateNewTag] = useState(false);

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
                    <span className="user_Management_title text-5xl">Shared team tag(s)</span>
                    <span
                        onMouseEnter={() => handleMouseHover('element1')}
                        onMouseLeave={() => handleMouseLeave('element1')}
                        className="tooltip user_Management_title"><span className="info_tooltip_new"></span>
                        {
                            hoveredElements['element1'] &&
                            <span className="tooltiptext">
                                <p>Managing your files has never been easier with tags. Workfreeli elevates the experience by offering personal and team tags. <br /> <br />

                                    This unique approach to tagging files allows you and your team to keep track of your files in the manner that suits you best. <br /> <br />

                                    Create a team tag and make that tag available to all teams or to a specific team. Team tags are created by Admin, meaning tags are thoughtful, can avoid confusion and are controlled. <br /> <br />

                                    Personal Tags can help you manage your documents in your own way. They are unique and always remain private to each user. <br /> <br />

                                    Sort and search files by tags in each room or use the files dashboard to easily find documents across all rooms. Multiple team and personal tags can be used for any file.</p>
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
                                <p>Tags (22)</p>
                            </div>
                        </div>
                    </div>
                    <div className='usersTabSecDevide rightSide'>
                        <span className='relative'>
                            <input className="userSearchInput" type="text" placeholder="Search tags" />
                            <span className="leftSearchCloseBtn remove" ></span>
                        </span>
                        <button
                            style={{ marginRight: '10px' }}
                            onMouseEnter={() => handleMouseHover('element2')}
                            onMouseLeave={() => handleMouseLeave('element2')}
                            onClick={() => setCreateNewTag(true)}
                            className="userCreateBtn tooltip5">Create a tag</button>
                        {
                            hoveredElements['element2'] &&
                            <span className="user_Management_title" >
                                <span className="tooltiptext6">
                                    <p> Create a tag </p>
                                    <span className="tooltipClose"> </span>
                                </span>
                            </span>
                        }

                    </div>
                </div>
                <div className='usersTableContainer'>
                    <div className="userTableHead">
                        <ul className="">
                            <li className="_userName desc" style={{ width: "10%", justifyContent: "center"}}>
                                Tag color
                            </li>
                            <li className="_userEmail asce" style={{ width: "30%" }}>
                                <span className="sortIcons"></span>
                                Tag title</li>
                            <li className="_userRole asce" style={{ width: "20%" }} >
                                <span className="sortIcons"></span>
                                Team
                            </li>
                            <li className="_userStatus desc" style={{ width: "15%", justifyContent: "center" }}>
                                <span className="sortIcons"></span>
                                No. of files
                            </li>
                            <li className="_userAction desc sort_active" style={{ width: "20%" }}>
                                <span className="sortIcons"></span>
                                Created date</li>
                            <li className="_userAction" style={{ width: "5%", justifyContent: "center" }}>Actions</li>
                        </ul>
                    </div>
                    <div className='userTableBody'>
                        {
                            data.map((item) => {
                                return (
                                    <>
                                        <ul className="_userList" key={item.id}>

                                            <li className="_tagColor" style={{ width: "10%", justifyContent: "center" }}><span className="tag_color" style={{ backgroundColor: item.tagColor }}></span>
                                            </li>
                                            <li className="_userEmail" style={{ width: "30%" }}>
                                                <span className="userEmailText">{item.tagTitle}</span>
                                            </li>
                                            <li className="_userRole" style={{ width: "20%" }}>
                                                <span className=""> {item.tagTeam} </span>
                                            </li>
                                            <li className="_userStatus" style={{ width: "15%", justifyContent: "center" }}>
                                                {item.files}
                                            </li>

                                            <li class="_tagCreated _afileDate" style={{ width: "20%", flexDirection: "column" }}>
                                                <span><time>{item.createdDate}</time></span>
                                                <span style={{ color: "rgb(153, 147, 147)", fontSize: "12px" }}> by {item.createdBy} </span>
                                            </li>

                                            <li onClick={() => handleSettingsOptions(item.id)} className="_userAction" style={{ width: "5%", justifyContent: "center", position: "relative", pointerEvents: gustsSettingsOptions === item.id ? "none" : "" }}>
                                                <span className="userActionIcon"></span>
                                            </li>

                                        </ul>
                                        {
                                            gustsSettingsOptions === item.id &&
                                            <OutsideClickHandler onOutsideClick={() => setGustsSettingsOptions(false)}>
                                                <ul className="userActionPopup" style={{ position: "absolute" }}>
                                                    <li>Edit tags</li>
                                                    <li>Delete tags</li>
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
                createNewTag ? <CreateTag setCreateNewTag={setCreateNewTag} /> : null
            }
        </>
    );
}

export default SharedTeamTagsHome;