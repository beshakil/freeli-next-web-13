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

const PrivateChat = ({ setPrivateSms }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [userData, setUserData] = useState(userList);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [startNext, setStartNext] = useState(false);
    const [attachPrivateFile, setAttachPrivateFile] = useState(false);

    const handleStartNextFileUpload = () => {
        setAttachPrivateFile(true);
        // setPrivateSms(false);
    }

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
        <div className="backwrap" style={{ display: 'flex' }}>
            {
                !attachPrivateFile === true ?
                    <div className="participantsModal">
                        <div className="participantsModalHead">
                            {
                                startNext === true ? <h4 className="popupTitle"> Private message to : </h4> :
                                    <h4 className="popupTitle">Select member(s) to start a private message</h4>
                            }
                            <span className="closeModal" onClick={() => setPrivateSms(false)}></span>
                        </div>
                        {
                            startNext === false ?
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
                                </div> :
                                <div>
                                    <div className="selectedParticipants px-8">
                                        <div className="miniItem">
                                            <div className="miniItem_image">
                                                <Image
                                                    alt='user image'
                                                    width={28}
                                                    height={28}
                                                    src={userImage} />
                                            </div>
                                            <div className="miniItem_name">Abdul Aual Sobuj</div>
                                        </div>
                                        <div className="miniItem">
                                            <div className="miniItem_image">
                                                <Image
                                                    alt='user image'
                                                    width={28}
                                                    height={28}
                                                    src={userImage} />
                                            </div>
                                            <div className="miniItem_name">Dalim 9 Chowdhury</div>
                                        </div>
                                        <div className="edit_action_U" onClick={() => setStartNext(false)}>Add/Edit</div>
                                    </div>
                                    <div className="customTitleBody !pb-0">
                                        <label className="inputLabel">Add a title for private message</label>
                                        <input type="Text" id="customTitleInput" className="customTitleInput" placeholder="Add a title for private message" />
                                        <span className="passwordInfoLabel" style={{ position: 'unset' }}>This title will be visible to private user(s) in this room.</span>
                                    </div>

                                    <div className='chat-file-upload-comment px-8'>
                                        <label>Write a message/comment</label>
                                        <div className="secretUserList"></div>
                                        <div>
                                            <textarea placeholder='Write a message/comment' className='file_comment_box' type="text" />
                                        </div>
                                    </div>
                                    <div className="customTitleFoot">
                                        <button className="btnCancel" style={{ marginTop: '10px' }} onClick={() => setPrivateSms(false)}>Cancel</button>
                                        {/* <button className="saveTitle inactive" style={{ marginTop: '10px' }} onClick={() => setStartNextFileUpload(true)}>Next</button> */}
                                        <button className="saveTitle active" style={{ marginTop: '10px' }} onClick={handleStartNextFileUpload}>Next</button>
                                    </div>
                                </div>
                        }
                    </div> : <div></div>
            }
            {
                attachPrivateFile && <FileUpload attachPrivateFile={attachPrivateFile} setAttachFile={setAttachPrivateFile} />
            }
        </div>
    );
};

export default PrivateChat;
