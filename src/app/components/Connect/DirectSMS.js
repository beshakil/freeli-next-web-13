import Image from 'next/image';
import React, { useState } from 'react';
import userImage from '../../../../public/media/images/img.png';
import FileUpload from './FileUpload';

const userList = [
    {
        id: 1,
        name: 'John Smith',
        email: '2i8Zm@example.com',
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: '2i8Zm@example.com',
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: '2i8Zm@example.com',
    }
]

const DirectSMS = ({ setDirectSMSPopup }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [userData, setUserData] = useState(userList);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    const handleRemoveUser = () => {
        setSelectedUser(null);
    };

    const filteredUsersData = userData.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="backwrap" style={{ display: 'flex' }}>
            <div className="participantsModal">
                <div className="participantsModalHead">
                    <h4 className="popupTitle">Select a teammate for a direct message</h4>
                    <span className="closeModal" onClick={() => setDirectSMSPopup(false)}></span>
                </div>
                <div className="participantsModalBody">
                    <div className="searchParticipants">
                        <span style={{ width: 'calc(100% - 130px)', position: 'relative', float: 'left' }}>
                            <input
                                type="text"
                                className="participantsSearch"
                                placeholder="Search user"
                                style={{ width: '100%' }}
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                            <span className="leftSearchCloseBtn remove" style={{ top: '14px', right: '10px' }} onClick={() => setSearchQuery('')}></span>
                        </span>
                        <button className={`paricipantsSubmit ${!selectedUser ? 'inactive' : 'active'}`} onClick={() => setStartNext(true)}>Start</button>
                        <div className="selectedParticipants">
                            {selectedUser && (
                                <div key={selectedUser.id} className="miniItem">
                                    <div className="miniItem_image">
                                        <Image alt='user image' width={28} height={28} src={userImage} />
                                    </div>
                                    <div className="miniItem_name">{selectedUser.name}</div>
                                    <div className="miniItem_remove" onClick={handleRemoveUser}></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="participantsContainer">
                        {filteredUsersData.length === 0 ? (
                            <p className="NomemberFound">No member(s) found!</p>
                        ) : (
                            filteredUsersData.map((user) => (
                                <div key={user.id} className="participantItem active" onClick={() => handleSelectUser(user)}>
                                    <div className="participantImage online"><h3 className="nameLetters"> {user.name.slice(0, 1).toUpperCase()} </h3></div>
                                    <p className="participantTitle">{user.name}</p>
                                    <p className="participantEmail">{user.email}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectSMS;