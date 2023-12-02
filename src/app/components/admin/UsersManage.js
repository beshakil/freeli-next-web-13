"use client";
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const userData = [
    {
        id: 1,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 2,
        name: "Shakil Ahmed Shajib Shakil Ahmed",
        email: "rakib15020r@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 3,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 4,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 5,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 6,
        name: "Shakil Ahmed Shajib Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 7,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 8,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 9,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 10,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 11,
        name: "Shakil Ahmed Shajib Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 12,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 13,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 14,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 15,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 16,
        name: "Shakil Ahmed Shajib Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 17,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 18,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 19,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    },
    {
        id: 20,
        name: "Shakil Ahmed",
        email: "rakib15020rakib15020rakib15020@gmail.com",
        role: "Member",
        status: "Oct 26th, 2023",
        action: "Progress",
    }
]

const UsersManage = () => {
    const [data, setData] = useState(userData);

    const [gustsSettingsOptions, setGustsSettingsOptions] = useState(false);

    const handleSettingsOptions = (id) => {
        setGustsSettingsOptions(gustsSettingsOptions === id ? null : id);

    }

    return (
        <div className='userTableBody'>
            {
                data.map((item) => {
                    return (
                        <>
                            <ul className="_userList" key={item.id}>
                                <li className="_userName" style={{ width: "20%" }}>
                                    <span className="_userImgage">
                                        <span className="nameLetters"></span>
                                    </span>
                                    <span className="_userNameTxt">{item.name}</span>
                                </li>
                                <li className="_userEmail" style={{ width: "25%" }}>
                                    <span className="userEmailText" title="rakib15020@gmail.com">{item.email}</span>
                                </li>
                                <li className="_userRole" style={{ width: "7%" }}>
                                    <span className=""> Member </span>
                                </li>
                                <li className="_userStatus" style={{ width: "13%" }}>
                                    <time className="userDateText"> Oct 26th, 2023 </time>
                                </li>
                                <li className="_userStatus" style={{ width: "19%" }}>
                                    <span className="_userNameTxt">{item.role}</span>
                                </li>
                                <li className="_userStatus" style={{ width: "10%" }}>
                                    {item.action}
                                </li>
                                <li onClick={() => handleSettingsOptions(item.id)} className="_userAction" style={{ width: "5%", position: "relative", pointerEvents: gustsSettingsOptions === item.id ? "none" : ""  }}>
                                    <span className="userActionIcon"></span>
                                </li>

                            </ul>
                            {
                                gustsSettingsOptions === item.id &&
                                <OutsideClickHandler onOutsideClick={() => setGustsSettingsOptions(false)}>
                                    <ul className="userActionPopup" style={{ position: "absolute" }}>
                                        <li>Reset Password</li>
                                        <li>Change password</li>
                                        <li>Delete</li>
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
    );
};

export default UsersManage;