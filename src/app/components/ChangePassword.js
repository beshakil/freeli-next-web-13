"use client"
import React, { useState } from 'react';

const ChangePassword = ({setChangePasswordPopup}) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const updatePassword = () => {
        // Logic for updating the password
        // You can perform password validation here

        if (newPassword === confirmPassword && newPassword.length >= 6) {
            // Passwords match and meet the required length criteria
            // Perform update action
            console.log('Updating password...');
        } else {
            // Show error message or handle validation failure
            console.log('Invalid password or passwords do not match.');
        }
    };
    return (
        <div className='backwrap'>
            <div className="passwordModal">
            <div className="passwordModalHead">
                <h4 className="popupTitle">Change Password</h4>
                <span onClick={() => setChangePasswordPopup(false)} className="closeModal" data-for="rightSection_tooltip" data-tip="Close"></span>
            </div>
            <div className="passwordModalBody">
                <div className="passInputGroup">
                    <label className="passInputLabel">New Password</label>
                    <span className="passwordLock"></span>
                    <span className="passwordView" data-for="loginTooltip" data-tip="Click to view the password as plain text" style={{ pointerEvents: 'none' }}></span>
                    <input
                        type="password"
                        className="passInput"
                        id="newPass"
                        autoComplete="new-password"
                        required
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                    />
                    <span className="rgInputMsg errorLabel">Invalid password.</span>
                    <span className="rgInputMsg">Create a strong password that is at least 6 characters long. Include numbers, lower case characters to increase the strength of your password.</span>
                    <span className="passwordPlaceholder">......</span>
                </div>
                <div className="passInputGroup">
                    <label className="passInputLabel">Confirm Password</label>
                    <span className="passwordLock"></span>
                    <span className="passwordView" data-for="loginTooltip" data-tip="Click to view the password as plain text" style={{ pointerEvents: 'none' }}></span>
                    <input
                        type="password"
                        className="passInput"
                        id="confPass"
                        autoComplete="new-password"
                        required
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <span className="rgInputMsg" style={{ color: 'red' }}></span>
                    <span className="passwordPlaceholder">......</span>
                </div>
            </div>
            <div className="passwordModalFoot">
                <button className="btnCancel">Cancel</button>
                <button className={`btnAction ${newPassword !== confirmPassword || newPassword.length < 6 ? 'inactive' : ''}`} style={{ opacity: newPassword !== confirmPassword || newPassword.length < 6 ? 0.5 : 1 }} onClick={updatePassword}>
                    Update
                </button>
            </div>
        </div>
        </div>
    );
};

export default ChangePassword;