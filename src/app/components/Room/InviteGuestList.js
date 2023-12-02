import Image from 'next/image';
import React, { useState } from 'react';
import userImage from '../../../../public/media/images/img.png';

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

const InviteGuestList = ({ setPrivateSms }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [userData, setUserData] = useState(userList);
    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSelectUsers = (user) => {
        const updatedUserData = userData.filter((u) => u.id !== user.id);
        setUserData(updatedUserData);
        setSelectedUsers([...selectedUsers, user]);
    };

    const handleRemoveUsers = (user) => {
        setSelectedUsers(selectedUsers.filter((selectedUser) => selectedUser.id !== user.id));
        setUserData([...userData, user]);
    };

    const filteredUsersData = userData.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (

            <div className="participantsContainer" style={{marginTop : '20px'}}>
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
                    <button className={`paricipantsSubmit ${selectedUsers.length === 0 ? 'inactive' : 'active'}`} onClick={() => setStartNext(true)}>Start</button>
                    <div className="selectedParticipants">

                        {selectedUsers.map((user) => (
                            <div key={user.id} className="miniItem">
                                <div className="miniItem_image">
                                    <Image
                                        alt='user image'
                                        width={28}
                                        height={28}
                                        src={userImage} />
                                </div>
                                <div className="miniItem_name">{user.name}</div>
                                <div className="miniItem_remove" onClick={() => handleRemoveUsers(user)}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="participantsContainer">
                    {filteredUsersData.length === 0 ? (
                        <p class="NomemberFound">No member(s) found!</p>
                    ) : (
                        filteredUsersData.map((user) => (
                            <div key={user.id} className="participantItem active" onClick={() => handleSelectUsers(user)}>
                                <div className="participantImage online"><h3 className="nameLetters"> {user.name.slice(0, 1).toUpperCase()} </h3></div>
                                <p className="participantTitle">{user.name}</p>
                                <p className="participantEmail">{user.email}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
    );
};

export default InviteGuestList;