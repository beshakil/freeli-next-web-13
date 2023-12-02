"use client"
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Image from 'next/image';
import userPics from '../../../../public/media/images/img.png';

const InviteNewUser = ({ activeTab }) => {
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
            <div className='createUserFrom' style={{ padding: "8px 0px" }}>
                <div className="inputGroup" style={{paddingRight:"0px"}}>
                    <label className="inputLabel">Email <span style={{ color: 'red' }}> *</span></label>
                    <input type="email" className="firstName" name="useremail" placeholder="User Email" required />
                </div>
                <div style={{ display: 'flex' }}>
                    <div className="inputGroup">
                        <label className="inputLabel">First name <span style={{ color: 'red' }}> *</span></label>
                        <input type="text" className="firstName" name="firstname" placeholder="First Name" required />
                    </div>
                    <div className="inputGroup" style={{paddingRight:"0px"}}>
                        <label className="inputLabel">Last name <span style={{ color: 'red' }}> *</span></label>
                        <input type="text" className="lastName" name="lastname" placeholder="Last Name" required />
                    </div>
                </div>
                <div className="inputGroup" style={{ position: 'relative', paddingRight:"0px" }}>
                    <label className="inputLabel" phone="8">Phone number (optional)</label>
                    <span className="tooltip3 user_Management_title" style={{ marginLeft: '5px', cursor: 'pointer', position: 'absolute', left: '170px', top: '-7px' }}></span>

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
                </div>
                <div className="inputGroup" style={{paddingRight:"0px"}}>
                    <label className="inputLabel">Company Name <span style={{ color: 'red' }}> *</span></label>
                    <input type="text" className="firstName" name="compnayName" placeholder="Company name" required />
                </div>
            </div>
        </>
    );
};

export default InviteNewUser;