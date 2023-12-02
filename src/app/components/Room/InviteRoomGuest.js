"use client";
import Image from 'next/image';
import React from 'react';
import SharedTags from '../Connect/SharedTags';
import InviteGuestList from './InviteGuestList';
import PersonalTags from '../Connect/PersonalTags';
import InviteNewUser from '../admin/InviteNewUser';
// import SharedTags from './SharedTags';
// import PersonalTags from './PersonalTags';

const InviteRoomGuest = ({ setInviteGuestRoomPopup }) => {
    const [tagsTab, setTagsTab] = React.useState('inviteGuest');
    // Function to handle mouse hover

    return (
        <div className='backwrap'>
            <div className='tagModal'>
                <div className="tagModalHead">
                    <h4 className="popupTitle">Invite guest(s) to this room</h4>
                    <span onClick={() => setInviteGuestRoomPopup(false)} className="closeModal"></span>
                </div>
                <div className='tagModalBody'>
                    <ul className="tagTab">
                        <li className={`${tagsTab === 'inviteGuest' ? "active" : ""}`} onClick={() => setTagsTab('inviteGuest')}>Invite guest</li>
                        <span
                            className="tooltip2 user_Management_title" style={{ marginLeft: '3px', cursor: 'pointer' }}>
                        </span>
                        <li className={`${tagsTab === 'addInviteGuest' ? "active" : ""}`} onClick={() => setTagsTab('addInviteGuest')} style={{ marginLeft: '32px' }}>Add a new guest to Invite</li>
                        <span
                            className="tooltip2 user_Management_title" style={{ marginLeft: '3px', cursor: 'pointer' }}>
                        </span>
                    </ul>
                    {
                        tagsTab === 'inviteGuest' ? <InviteGuestList /> : <InviteNewUser />
                    }
                </div>
                <div className="tagModalFoot">
                    <button className="btnCancel" onClick={() => setInviteGuestRoomPopup(false)}>Cancel</button>
                    <button className="btnAction">Invite Guest</button>
                </div>
            </div>
        </div>
    );
};

export default InviteRoomGuest;