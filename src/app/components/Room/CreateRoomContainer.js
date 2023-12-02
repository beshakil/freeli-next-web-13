"use client"
import React, { useState } from 'react';
import Select from 'react-select';
import CreateRoomTeam from './CreateRoomTeam';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import userImage from '../../../../public/media/images/img.png'
import InviteRoomGuest from './InviteRoomGuest';

const members = [
    {
        id: 1,
        name: 'Shakil Ahmed',
        role: '[Creator]',
        // Add more member data as needed
    },
    // Add more members as necessary
];

const workcate = [
    { value: 'design', label: 'Design' },
    { value: 'development', label: 'Development' },
    { value: 'marketing', label: 'Marketing' },
    // Add more dummy data as needed
];

const CreateRoomContainer = () => {
    const [roomName, setRoomName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [conferenceLink, setConferenceLink] = useState('');

    const handleRoomNameChange = (e) => {
        setRoomName(e.target.value);
    };

    const getWorkCateValue = (selectedOption) => {
        setSelectedCategory(selectedOption);
    };

    const handleFileUpload = (e) => {
        // Handle file upload logic here
    };

    const handleAddMember = () => {
        // Logic to add default shared team tags
    };

    const [hoveredElements, setHoveredElements] = React.useState({});

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

    const router = useRouter();

    const handleGoBack = () => {
        router.back(); // This navigates back to the previous page
    };

    const [inviteGuestRoomPopup, setInviteGuestRoomPopup] = useState(false);


    return (
        <>
            <div className='createGroupConv'>
                <div className="createConv_head" style={{ height: '80px', borderBottom: '1px solid rgb(219, 219, 219)' }}>
                    <span className="createConv_back updateRoom" data-for="createConv_tooltip" data-tip="Back" onClick={handleGoBack}></span>
                    <span className="createConv_close updateRoom" data-for="createConv_tooltip" data-tip="Close" onClick={handleGoBack}></span>
                    <h2 className="createConv_title" style={{ margin: '0px 0px 0px 60px' }}>Create a room</h2>
                </div>
                <div className='createConv_body'>
                    <div className="name_and_profile">
                        <div className="inputGroup">
                            <label className="inputLabel">Title of room<span className="red_star">*</span></label>
                            <input
                                type="text"
                                name="team-name"
                                className="team-name"
                                maxLength="64"
                                placeholder="Name of the room"
                                value={roomName}
                                onChange={handleRoomNameChange}
                            />
                        </div>
                        <div className="inputGroup">
                            <label className="inputLabel">
                                Room category<span className="red_star">*</span>
                                <span
                                    style={{ marginLeft: '5px', cursor: 'pointer' }}
                                    onMouseEnter={() => handleMouseHover('element1')}
                                    onMouseLeave={() => handleMouseLeave('element1')}
                                    className="tooltip2 user_Management_title">
                                    <span className="info_tooltip_new"></span>
                                    {
                                        hoveredElements['element1'] &&
                                        <span className="tooltiptext2 inRoom" >
                                            <p>
                                                You need to select a room category when creating a new Room. This is a useful feature to help sort and categorize data such as files, images, links and working documents using the files dashboard on Workfreeli. Create custom room categories as needed.
                                            </p>
                                            <span className='tooltipClose'></span>
                                        </span>
                                    }
                                </span>
                            </label>
                            <Select
                                className="select-ecosystem"
                                closeMenuOnSelect={true}
                                options={workcate}
                                isSearchable
                                onChange={getWorkCateValue}
                                placeholder={<span className="selectPlaceholder">Select a room category</span>}
                            />
                        </div>
                        <div className="inputGroup roomConferenceLink">
                            <div className="reset-link-div">
                                <label className="inputLabel">Room call link</label>
                                <label
                                    className="createUrl_reset"
                                    data-for="voip_tooltip"
                                    data-tip="Reset call link if you found the link vulnerable"
                                >
                                    Reset link
                                </label>
                                <div
                                    className="opt_icons conv_voice"
                                    data-for="voip_tooltip"
                                    data-tip="Open a conference call to allow others to join here"
                                ></div>
                            </div>
                            <input
                                name="roomConferenceLink"
                                readOnly
                                type="text"
                                className="team-name short_id_input"
                                placeholder="The conference link will be created as soon as the room is created"
                                style={{ fontSize: '16px', pointerEvents: 'none', paddingRight: '16px' }}
                                value={conferenceLink}
                            />
                            <span className="rgInputMsg">Share this link with teammates or guests to start a video/voice call.</span>
                        </div>
                    </div>
                    <div className="name_and_profile teamProfile" style={{ marginBottom: '40px' }}>
                        <div className="upload_section user_up roomRelated">
                            <label className="img-div teamImage empty" htmlFor="upload_conv_img">
                                <div className="removeAndChange" style={{ display: 'none' }}>
                                    <div className="changeButton inRoom"></div>
                                </div>
                            </label>
                            <form className="roomImgUp_form" encType="multipart/form-data">
                                <div className="file-up-div">
                                    <input
                                        type="file"
                                        id="upload_conv_img"
                                        name="photos"
                                        accept="image/x-png,image/jpeg,image/jpg"
                                        hidden
                                        onChange={handleFileUpload}
                                    />
                                </div>
                            </form>
                            <div className="teamTextArea">
                                <p className="set_avatar">Set up a group image</p>
                                <p className="set_avatar_click">Click here to add a photo</p>
                            </div>
                        </div>
                        <div className="addGuest backGroundCololor" style={{ marginTop: '172px', padding: '10px 20px' }}>
                            <label className="inputLabel">
                                Shared team tags<span className="red_star">*</span>
                                <span
                                    style={{ marginLeft: '5px', cursor: 'pointer' }}
                                    onMouseEnter={() => handleMouseHover('element3')}
                                    onMouseLeave={() => handleMouseLeave('element3')}
                                    className="tooltip2 user_Management_title">
                                    <span className="info_tooltip_new"></span>
                                    {
                                        hoveredElements['element3'] &&
                                        <span className="tooltiptext2 inRoom" >
                                            <p>
                                                Use Shared Team Tags to stay organized with your team. These are tags created by an Admin for anyone in your team to use.
                                                You can set default tags to be added to all files in this room uploaded by any room members.
                                            </p>
                                            <span className='tooltipClose'></span>
                                        </span>
                                    }
                                </span>
                            </label>
                            <div className="selectedParticipants tag_container_mini teamTag">
                                <div className="addArea">
                                    <div className="miniItem" count="0" style={{ backgroundColor: 'rgb(2, 61, 103)' }}>
                                        <div className="miniItem_name">Final</div>
                                        <div className="miniItem_remove"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="inputGroup" style={{ marginBottom: '10px', paddingRight: '0px' }}>
                                <button className="addMemberBtn" onClick={handleAddMember}>
                                    Add default shared team tag(s) to this room
                                </button>
                            </div>
                        </div>
                        <div className="addGuest" style={{ display: 'none' }}>
                            <div className="inputGroup">
                                <div className="selectedParticipants"></div>
                                <input type="email" className="guestEmail" placeholder="Enter email" value="" />
                                <span className="errorLabel" style={{ position: 'relative' }}></span>
                                <span className="rgInputMsg">
                                    Press any key (enter, coma, semicolon) to add another email.
                                </span>
                            </div>
                            <div className="addedGuestList"></div>
                        </div>
                    </div>
                    <div className="borderarea"></div>
                    <CreateRoomTeam />
                    <div className="name_and_profile">
                        <div className="addMember">
                            <div className="inputGroup" style={{ marginBottom: '12px' }}>
                                <button className="addMemberBtn" style={{ pointerEvents: 'auto', opacity: 1 }}>
                                    Add member(s) to this room
                                </button>
                                <label className="inputLabel" style={{ fontSize: '14px', marginTop: '12px', marginBottom: '0px' }}>
                                    Room member[s]
                                    <span
                                        onMouseEnter={() => handleMouseHover('element2')}
                                        onMouseLeave={() => handleMouseLeave('element2')}
                                        className="info_tooltip"></span>
                                    {
                                        hoveredElements['element2'] &&
                                        <span style={{ marginLeft: '5px', cursor: 'pointer' }} className="tooltip2 user_Management_title">
                                            <span className="tooltiptext2 roomMem" >
                                                <p>
                                                    Add member(s) to this room for team collaboration.
                                                </p>
                                                <span className='tooltipClose'></span>
                                            </span>
                                        </span>
                                    }
                                </label>
                            </div>
                            <div className="addedMemberList">
                                {members.map((member) => (
                                    <div className="memberItem online" key={member.id}>
                                        <div className="memberItemImage">
                                            <Image src={userImage} alt="profilepic" width={30} height={30} />
                                        </div>
                                        <div className="memberItemData">
                                            <p className="memberItemTitle">
                                                {member.name} <span className="memberItemDesignation">{member.role}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="name_and_profile teamProfile">
                        <div className="addGuest" style={{ paddingLeft: '20px' }}>
                            <div className="inputGroup guestButton" style={{ paddingLeft: '20px', marginBottom: '12px' }}>
                                <button onClick={() => setInviteGuestRoomPopup(true)} className="addMemberBtn" style={{ pointerEvents: 'auto', opacity: 1 }}>
                                    Invite guest(s) to this room
                                </button>
                                <label className="inputLabel" style={{ fontSize: '16px', marginTop: '12px' }}>
                                    Room guest[s]<span className="info_tooltip"></span>
                                </label>
                            </div>
                            {/* <div className="addedGuestList teamGuest">
                            <div className="addedMemberList"></div>
                            <div className="noGust">No guest has been invited yet!</div>
                        </div> */}
                            <div className="addedGuestList teamGuest">
                                <div className="addedMemberList">
                                    <div className="memberItem">
                                        <div className="memberItemImage">
                                            <span className="nameLetters"></span>
                                        </div>
                                        <div className="memberItemData">
                                            <p className="memberItemTitle">
                                                Fandoss Official <span className="memberItemDesignation">[Guest]</span>
                                            </p>
                                        </div>
                                        <div className="memberItemAction">
                                            <span className="removeAdmin">Remove</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                inviteGuestRoomPopup && <InviteRoomGuest setInviteGuestRoomPopup={setInviteGuestRoomPopup} />
            }
        </>
    );
};

export default CreateRoomContainer;