"use client";
import Image from 'next/image';
import React from 'react';
import userImage from '../../../../public/media/images/img.png';

const QuickView = ({ setQuickView, setReplyThread }) => {
    const handlePrivateReply = () => {
        setReplyThread(true);
        setQuickView(false);
    }
    return (
        <div className='backwrap'>
            <div className='userMiniModal' style={{ minWidth: '500px' }}>
                <div className="userMiniModalHead">
                    <h4 className="popupTitle">Quick view of private message to :</h4>
                    <span className="closeModal" onClick={() => setQuickView(false)}></span>
                </div>

                <div className='userMiniModalBody quick_view_msg !pb-0'>
                    <div className="selectedParticipants" style={{ marginTop: '-10px' }}>
                        <div className="miniItem"><div className="miniItem_name">Abdul Aual Sobuj</div></div>
                        <div className="miniItem"><div className="miniItem_name">Shakil Ahmed</div></div>
                        <div className="miniItem"><div className="miniItem_name">Dalim 9 Chowdhury</div></div>
                        <div className="edit_action_U">Add/Edit</div>
                    </div>
                </div>
                <div className="user_msg !px-6">
                    <span className="msgSelector"></span>
                    <div className="sender_img">
                        <Image
                            alt='user image'
                            objectFit='cover'
                            width={40}
                            height={40}
                            src={userImage} />
                    </div>
                    <div className="msg_info">
                        <div className="sender_info">
                            <p className="sender_name">Shakil Ahmed</p>
                            <p className="msg_time"><time datetime="1699689302496">1:55 PM</time></p>
                            <p className="is_delivered">- Delivered</p>
                        </div>
                        <div className="msg_body msgBodyArea" id="msgBody_9e56cea0-8067-11ee-ae94-ab954b293e21">
                            <p className="titleBar 1"><span className="msgLinkTitle">Private Title</span><span className="" data-for="rightSection_tooltip" data-tip="Add/Edit title"  ></span></p>
                            <div className="msg_txt 2" >Private Comment</div>
                            <div className="mediaContainer chatScreenArea">
                                <div className="single_file" filetype="image/jpeg">
                                    <span className="fileActiveActions"></span>
                                    <div className="fileContent audioFiles">
                                        <div className="img_holder">
                                            <Image
                                                alt='user image'
                                                objectFit='cover'
                                                width={50}
                                                height={45}
                                                src={userImage} />
                                        </div>
                                        <div className="file_info">
                                            <p className="file_name" title="profileImage.jpg">profileImage.jpg</p>
                                            <p className="file_size">
                                                392 KB<span className="fileRefHolder"><span className="fileRef" style={{ backgroundColor: 'rgb(115, 43, 226)' }}> Ref. SID: 12345</span></span>
                                            </p>
                                        </div>
                                        <div className="fileTagHolder"><span className="fileTag" style={{ backgroundColor: 'rgb(232, 42, 135)' }}>PRIVATE CHECK</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="freeliModalFoot">
                    <button className="btnCancel" onClick={() => setQuickView(false)}>Cancel</button>
                    <button className="btnAction" style={{ background: 'rgb(9, 38, 106)' }} onClick={handlePrivateReply}>Reply</button></div>
            </div>
        </div>
    );
};

export default QuickView;