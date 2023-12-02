"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Image from 'next/image';
import copyIcon from '../../../../public/media/images/copyLink.svg';
import userPics from '../../../../public/media/images/img.png';
import ProfileSettings from './ProfileSettings';
import SecuritySettings from './SecuritySettings';

const UserProfileContainer = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back(); // This navigates back to the previous page
    };

    const [activeTab, setActiveTab] = useState('profileTab');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        // Implement logic here based on the clicked tab, such as showing content related to that tab
    };



    return (
        <>
            <div className='createGroupConv userUpdatePopup'>
                <div className="createConv_head" style={{ height: '80px', borderBottom: '1px solid rgb(219, 219, 219)' }}>
                    <span onClick={handleGoBack} data-tip="Back" className="createConv_back profileBack"></span>
                    <p className="profileTitle" style={{ top: '22px' }}>
                        <span className="userProfileName">Shakil Ahmed</span>
                    </p>
                    <span onClick={handleGoBack} data-tip="Close" className="createConv_close profileClose" ></span>
                </div>
                <div className='' style={{ padding: "8px 50px 0px 50px", }}>
                <div className="usersTabSecDevide">
                    <div
                        id="profileTab"
                        className={`usersTabList teamManagementTitle ${activeTab === 'profileTab' ? 'active' : ''}`}
                        onClick={() => handleTabClick('profileTab')}
                    >
                        Profile settings
                    </div>
                    <div
                        id="security"
                        className={`usersTabList teamManagementTitle ${activeTab === 'security' ? 'active' : ''}`}
                        onClick={() => handleTabClick('security')}
                    >
                        Security settings
                    </div>
                </div>
                </div>
                {
                    activeTab === 'profileTab' ?
                        
                            <ProfileSettings activeTab={activeTab} />
          :
                        <div className='createConv_body' style={{ padding: "8px 120px" }}>
                            <SecuritySettings />
                        </div>
                }
            </div>
        </>
    );
};

export default UserProfileContainer;