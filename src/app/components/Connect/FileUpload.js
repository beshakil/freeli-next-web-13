"use client";
import Image from 'next/image';
import React from 'react';
import userImage from '../../../../public/media/images/img.png';

const FileUpload = ({ setAttachFile, attachPrivateFile }) => {
    const [editFileName, setEditFileName] = React.useState(false);
    return (
        <div className={`${attachPrivateFile ? "" : "backwrap"}`} attachPrivateFile>
            <div className='fileUploadModal'>
                <div className="fileUploadModalHead">
                    {
                        attachPrivateFile === true ?
                            <span onClick={() => setAttachFile(false)} className="backToChat" data-for="galleryTooltip" data-tip="Back" ></span> : ""
                    }

                    <h4 className="popupTitle"> Upload file(s) [max. 20 files &amp; 500MB/file] </h4>
                    <span onClick={() => setAttachFile(false)} className="closeModal" data-for="rightSection_tooltip" data-tip="Close"></span>
                </div>
                <div className="fileUploadModalBody">
                    <form method="POST">
                        <label className="file_upload_label">
                            Drop file(s) or click here to browse &amp; upload</label>
                        <div className="upload_file_container">
                            <div className="uploaded_file" id="file_container_16995095903900" data-status="0">
                                <span className="removeFile" data-id="editNameFile_0" sl="16995095903900" name="profileImage.jpg"></span>
                                <div className='uplogo'>
                                    <Image
                                        alt='user image'
                                        width={50}
                                        height={50}
                                        src={userImage} />
                                </div>
                                <div className="upFileDetail">
                                    <span className="upFileName" id="editNameFile_0" suppressContentEditableWarning={true} contentEditable={editFileName === true ? 'true' : 'false'}>
                                        <span id="nameFile_0" data-originalname="profileImage.jpg">profileImage</span>
                                        <span className="ext">.jpg</span>
                                    </span>
                                    <span className="editFile" name="profileImage.jpg" onClick={() => setEditFileName(true)}></span>
                                    <span className="fileUpAction">
                                        <span className="cancelfEdit" onClick={() => setEditFileName(false)}>Cancel</span>
                                        <span className="savefEdit">Save</span>
                                    </span>
                                    <span className="upFileSize">392 KB</span>
                                </div>
                                <div className="progressContainer" >
                                    <div className="progressStatus">40%</div>
                                    <div className="progressBar"><span className="progressColor" style={{ width: '40%' }}></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="chat-file-upload-comment" id="file_comment_box">
                            <div className="fileRefDiv">
                                <div className="fileRefType">
                                    <label>Select reference type (optional)</label>
                                    <select className="refTitleInput">
                                        <option value="">Select reference type</option>
                                        <option value="SID">Student ID (SID)</option>
                                        <option value="EID">Employee ID (EID)</option>
                                        <option value="ID">No specific ref. (ID)</option>
                                    </select>
                                </div>
                                <div className="fileRefBody"><label>Add a reference ID (optional)</label><input type="text" className="refTitleInput" placeholder="Add a reference ID (optional)" /></div>
                            </div>
                            <label>Write a message/comment</label>
                            <div className="secretUserList"></div>
                            <div>
                                <textarea placeholder='Write a message/comment' className='file_comment_box' type="text" />
                            </div>
                        </div>
                        <input type="file" name="file_upload" id="msgFile" style={{ display: 'none' }} />
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button onClick={() => setAttachFile(false)} type="button" className="btnCancel" style={{ marginTop: '16px' }}>Cancel</button>
                            {/* <button type="button" className="uploadbtn inactive">Continue</button> */}
                            <button type="button" className="uploadbtn active">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;