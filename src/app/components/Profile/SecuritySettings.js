/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react';
import freeliLaptop from '../../../../public/media/images/img.png';
import Image from 'next/image';

const SecuritySettings = () => {
    const securityActivityData = [
        { action: 'New sign-in on Windows', date: 'Aug-25', location: 'Bangladesh' },
        { action: 'New sign-in on Windows', date: 'Aug-25', location: 'Bangladesh' },
        { action: 'New sign-in on Windows', date: 'Aug-25', location: 'Bangladesh' },
        { action: 'New sign-in on Windows', date: 'Aug-25', location: 'Bangladesh' },
        { action: 'New sign-in on Windows', date: 'Aug-25', location: 'Bangladesh' },
        { action: 'New sign-in on Windows', date: 'Aug-25', location: 'Bangladesh' },
        { action: 'New sign-in on Windows', date: 'Aug-25', location: 'Bangladesh' },
        { action: 'New sign-in on Windows', date: 'Aug-25', location: 'Bangladesh' },
    ];

    const [deviceDetailsPopup, setDeviceDetailsPopup] = useState(false);

    const filterDeviceDetails = (index) => {
        setDeviceDetailsPopup(true);
    }

    return (
        <>
            <div className="userProfileArea">
                <div className="security">
                    <div className="security_head">Recent Security Activity</div>
                    <table>
                        {securityActivityData.map((activity, index) => (
                            <tr key={index} onClick={() => filterDeviceDetails(index)}>
                                <td>{activity.action}</td>
                                <td>{activity.date} {activity.location}</td>
                                <td style={{ paddingRight: '20px' }}>
                                    <i className="fa fa-chevron-right custom_icon open}"></i>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            {
                deviceDetailsPopup &&
                <div className="backwrap">
                    <div className="userMiniModal">
                        <div className="userMiniModalHeadSecurity">
                            <h5 className="">
                                August 25, 12:38 pm <span className="newDevice"> New</span>
                            </h5>
                            <span
                                className="closeModal"
                                data-for="rightSection_tooltip"
                                data-tip="Close"
                                onClick={() => setDeviceDetailsPopup(false)}
                            ></span>
                        </div>
                        <div className="security_body">
                            <div className="body1">New Sign-in on Windows</div>
                            <div className="HasColor">Your Account is at risk if this wasn't you!</div>
                            <div className="deviceInfo">
                                <Image className='deviceInfo1' src={freeliLaptop} alt='freeliLaptop' width={100} height={100} />
                                <div className="deviceInfo2">
                                    <div style={{ fontWeight: 'bold', fontSize: '17px' }}>Windows</div>
                                    <div className="HasColor">
                                        <p className="HasColor" style={{ marginBottom: '3px' }}>
                                            Acer Aspire 7
                                        </p>
                                        <p className="HasColor">Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default SecuritySettings;