"use client"
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Image from 'next/image';
import copyIcon from '../../../../public/media/images/copyLink.svg';
import userPics from '../../../../public/media/images/img.png';
import ResetLink from './ResetLink';

const ProfileSettings = ({ activeTab }) => {
    const [resetLinkPopup, setResetLinkPopup] = useState(false);
    const [inputData, setInputData] = useState({ phone: '' });

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

    const handleInput = (value, fieldName) => {
        setInputData({ ...inputData, [fieldName]: value });
    };

    const numberCheck = (event) => {
        // Add your number check logic here
        // For example, if you want to allow only numbers in the input
        const regex = /^[0-9\b]+$/;
        if (!regex.test(event.target.value)) {
            event.preventDefault();
        }
    };

    const [selectedImage, setSelectedImage] = useState(userPics);
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const handleImageChange = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.onloadend = () => {
            setSelectedImage(reader.result);
            setIsImageUploaded(true);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setSelectedImage(userPics);
        setIsImageUploaded(false);
    };
    return (
        <>
            <div className='createConv_body' style={{ padding: "8px 120px" }}>
                <div className='ProfileTab'>
                    <div className="name_and_profile">
                        <div className="inputGroup">
                            <label className="inputLabel">First name <span style={{ color: 'red' }}> *</span></label>
                            <input type="text" className="firstName" name="firstname" placeholder="First Name" required />
                        </div>
                        <div className="inputGroup">
                            <label className="inputLabel">Last name <span style={{ color: 'red' }}> *</span></label>
                            <input type="text" className="lastName" name="lastname" placeholder="Last Name" required />
                        </div>
                        <div className="inputGroup">
                            <label className="inputLabel">Email address</label>
                            <input className="disabled" type="email" name="useremail" placeholder="User Email" disabled />
                        </div>
                        <div className="inputGroup" style={{ position: 'relative' }}>
                            <label className="inputLabel" phone="8">Phone number (optional)</label>
                            <span className="tooltip3 user_Management_title" style={{ marginLeft: '5px', cursor: 'pointer', position: 'absolute', left: '170px', top: '-7px' }}>
                                <span
                                    onMouseEnter={() => handleMouseHover('element1')}
                                    onMouseLeave={() => handleMouseLeave('element1')}
                                    className="info_tooltip_new"></span>
                                {
                                    hoveredElements['element1'] &&
                                    <span className="tooltiptext3 phoneNumber">
                                        <p>This is for verification and security purposes only. If you do not provide this information, then account recovery in the event that you no longer have access to your email address will not be possible. We will never share your phone number with anyone.</p>
                                        <span className="tooltipClose"></span>
                                    </span>
                                }
                            </span>

                            <PhoneInput
                                className="inputClass userPhone"
                                enableSearch={true}
                                preferredCountries={["bd", "us", "ca", "in"]}
                                country="bd"
                                value={inputData.phone}
                                onChange={(value) => handleInput(value, 'phone')}
                                inputProps={{
                                    placeholder: "(000) 000-0000",
                                    onKeyUp: numberCheck,
                                    onKeyDown: numberCheck
                                }}
                            />

                            <span className="rgInputMsg">This is for verification and security purposes only. We will never share your phone number with anyone.</span>
                        </div>
                        <div className="inputGroup conferenceLink">
                            <div className="reset-link-div">
                                <label className="inputLabel">Call link</label>
                                <label onClick={() => setResetLinkPopup(true)} className="createUrl_reset" data-for="voip_tooltip" data-tip="Reset call link if you found the link vulnerable">Reset link</label>
                                <div className="opt_icons conv_voice" data-for="voip_tooltip" data-tip="Open a conference call to allow others to join here"></div>
                            </div>
                            <span>
                                <div className="copyIcon">
                                    <Image src={copyIcon} w={16} h={20} className="copyMeLink profile" alt="" />
                                </div>
                                <input name="conferenceLinkText" readOnly type="text" className="team-name short_id_input" placeholder="https://cacdn01.freeli.io/u/jD5rvWgA1oaR7iPnZerfpW" />
                            </span>
                            <span className="rgInputMsg">Share this link with teammates or guests to start a video/voice call.</span>
                        </div>
                    </div>
                    <div className="name_and_profile">
                        <p className="set_avatar">Set an avatar</p>
                        <div className="upload_section user_up">
                            <label className="img-div">
                                <div className="content-overlay"></div>
                                <Image src={selectedImage} alt="img" />
                                <div className="removeAndChange">
                                    <div className="changeButton">
                                        {/* Add logic for changing image */}
                                        <input
                                            type="file"
                                            id="upload_conv_img"
                                            name="photos"
                                            accept="image/x-png,image/jpeg,image/jpg"
                                            onChange={handleImageChange}
                                            style={{ display: 'none' }}
                                        />
                                        {/* <label htmlFor="upload_conv_img">Change</label> */}
                                    </div>
                                    <div className="removeButton" onClick={removeImage}>Remove</div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="createConv_foot">
                <button className="createConv_create">Save changes</button>
            </div>
            {
                resetLinkPopup && <ResetLink setResetLinkPopup={setResetLinkPopup} />
            }
        </>
    );
};

export default ProfileSettings;