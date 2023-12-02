"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import ReactTooltip from 'react-tooltip';
import Tooltip from 'rc-tooltip';
import OutsideClickHandler from 'react-outside-click-handler';
import Image from 'next/image';
import userImage from '../../../../public/media/images/img.png';
import EditorBox from '../Editor/EditorBox';
import EditMsg from '../Editor/EditMsg';
import EmojiContainer from '../Connect/EmojiContainer';
import PerMsgEmoji from '../Connect/PerMsgEmoji';
import ReplyThread from '../Connect/ReplyThread';
import ForwardPopup from '../Connect/ForwardPopup';
import AddTitleMsg from '../Connect/AddTitleMsg';
import QuickView from '../Connect/QuickView';
import DeleteContainer from '../Connect/DeleteContainer';
import SharePopup from '../Connect/SharePopup';
import TagsContainer from '../Connect/TagsContainer';

const MainLayout = dynamic(() => import('../../components/layouts/mainLayout'), {
    ssr: false
});


function ConnectPageCon() {
    const [editMsg, setEditMsg] = React.useState(false);
    const [replyThread, setReplyThread] = React.useState(false);
    const [forwardPopup, setForwardPopup] = React.useState(false);
    const [perMsgEmoji, setPerMsgEmoji] = React.useState(false);
    const [addTitle, setAddTitle] = React.useState(false);
    const [deleteOptPopup, setDeleteOptPopup] = React.useState(false);
    const [flagged, setFlagged] = React.useState(false);
    const [quickView, setQuickView] = React.useState(false);
    const [privateSms, setPrivateSms] = React.useState(false);
    const [deleteSms, setDeleteSms] = React.useState(false);
    const [sharePopup, setSharePopup] = React.useState(false);
    const [tagsPopup, setTagsPopup] = React.useState(false);

    const toggleEditMsg = () => {
        setEditMsg(!editMsg);
    }

    return (
        <>
            <MainLayout>
                <ReactTooltip id="rightSection_tooltip" place="top" type="dark" />
                <div className='msg_Container' id="main_msg_scroll_div">
                    <div className="msgSeparator"><p>Aug 5th, 2023</p></div>
                    <div className="user_msg">
                        <div className="sender_img nameL"><span className="nameLetters">MA</span></div>
                        <div className="msg_info">
                            <div className="sender_info"><p className="sender_name">Manzurul Alam</p>
                                <p className="msg_time"> <time dateTime="1691230457705">4:14 PM</time></p>
                                <p className="is_delivered"> - Delivered</p>
                            </div>
                            <div className='msg_body msgBodyArea'>
                                {/* {
                                    editMsg ? <EditMsg setEditMsg={setEditMsg} /> : <div className="msg_txt 1">sdfasdfsad</div>
                                } */}
                        <div className="msg_txt 1">sdfasdfsad</div>
                                <div className='mediaContainer chatScreenArea'>
                                    <div className="multi_value single_file" filetype="image/jpeg">
                                        <span className="fileActiveActions"></span>
                                        <div className="file_hover_option">
                                            <div data-for="rightSection_tooltip" data-tip="Add to Starred" className="fileOpts star_opts"  ></div>
                                            <div onClick={() => setTagsPopup(true)} data-for="rightSection_tooltip" data-tip="Add a tag" className="fileOpts tag_opts"  ></div>
                                            <div
                                                data-for="rightSection_tooltip"
                                                data-tip="Download"
                                                class="fileOpts download_opts"
                                                data-name="309777938_111376838401868_4107813248896793991_n.jpg"
                                                data-link="https://wfss001.freeli.io/dev-shakilshajib-gmail-com/Photos/309777938_111376838401868_4107813248896793991_n@1699692684139.jpg"

                                            ></div>
                                            <div data-for="rightSection_tooltip" data-tip="Forward" className="fileOpts forward_opts"  ></div>
                                            <div onClick={() => setSharePopup(true)} data-for="rightSection_tooltip" data-tip="Share" className="fileOpts share_opts"  ></div>
                                            <div onClick={() => setDeleteSms(true)} data-for="rightSection_tooltip" data-tip="Delete" className="fileOpts delete_opts"  ></div>
                                        </div>
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
                                                <p className="file_name" title="309777938_111376838401868_4107813248896793991_n.jpg">user image.jpg</p>
                                                <p className="file_size">241 KB<span className="fileRefHolder"></span></p>
                                            </div>
                                            <div className="fileTagHolder"><span className="fileTag" style={{ backgroundColor: 'rgb(232, 42, 135)' }}>PRIVATE CHECK</span></div>
                                        </div>
                                    </div>
                                    <div className="multi_value single_file" filetype="image/jpeg">
                                        <span className="fileActiveActions"><span className="starredIcon"></span></span>
                                        <div className="file_hover_option">
                                            <div data-for="rightSection_tooltip" data-tip="Add to Starred" className="fileOpts star_opts"  ></div>
                                            <div data-for="rightSection_tooltip" data-tip="Add a tag" className="fileOpts tag_opts"  ></div>
                                            <div
                                                data-for="rightSection_tooltip"
                                                data-tip="Download"
                                                class="fileOpts download_opts"
                                                data-name="309777938_111376838401868_4107813248896793991_n.jpg"
                                                data-link="https://wfss001.freeli.io/dev-shakilshajib-gmail-com/Photos/309777938_111376838401868_4107813248896793991_n@1699692684139.jpg"

                                            ></div>
                                            <div data-for="rightSection_tooltip" data-tip="Forward" className="fileOpts forward_opts"  ></div>
                                            <div data-for="rightSection_tooltip" data-tip="Share" className="fileOpts share_opts"  ></div>
                                            <div data-for="rightSection_tooltip" data-tip="Delete" className="fileOpts delete_opts"  ></div>
                                        </div>
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
                                                <p className="file_name" title="309777938_111376838401868_4107813248896793991_n.jpg">user image.jpg</p>
                                                <p className="file_size">241 KB<span className="fileRefHolder"></span></p>
                                            </div>
                                            <div className="fileTagHolder"><span className="fileTag" style={{ backgroundColor: 'rgb(232, 42, 135)' }}>PRIVATE CHECK</span></div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    perMsgEmoji ? <PerMsgEmoji setPerMsgEmoji={setPerMsgEmoji} /> : ''
                                }
                                <EmojiContainer />
                                <div class="divReplySection">
                                    <div className="msgReplySection">
                                        <span className="rep_left" data_length="1">View threaded chat (1) </span>
                                        <span className="rep_mid">Last reply <time>2 minutes ago</time> from </span>
                                        <span className="rep_righ">You</span>
                                    </div>
                                </div>
                                <div className="msgFlagReplyOption">
                                    {
                                        flagged ? <div className="msgFlagBtn flaged" onClick={() => setFlagged(!flagged)}>Flagged</div> :
                                            <div className="msgFlagBtn" onClick={() => setFlagged(!flagged)}>Flag</div>
                                    }
                                    <div className="msgReplyBtn" onClick={() => setReplyThread(!replyThread)}>Reply </div>
                                </div>

                            </div>
                        </div>
                        {
                            editMsg === false ?
                                <div className="msg_hover_options">
                                    <Tooltip placement="top" overlay={<span>Add message title</span>}>
                                        <div class="opts download" data-for="rightSection_tooltip" ></div>
                                    </Tooltip>
                                    <Tooltip placement="top" overlay={<span>Add message title</span>}>
                                        <div class="opts tag_opts" data-for="rightSection_tooltip"></div>
                                    </Tooltip>
                                    <Tooltip placement="top" overlay={<span>Add message title</span>}>
                                        <div className="opts edit_opts edit_newpen" onClick={() => setAddTitle(!addTitle)}></div>
                                    </Tooltip>
                                    <Tooltip placement="top" overlay={<span>Copy to clipboard</span>}>
                                        <div className="opts copy_opts" ></div>
                                    </Tooltip>
                                    <Tooltip placement="top" overlay={<span>Emoji</span>}>
                                        <div className="opts emoji_opts" onClick={() => setPerMsgEmoji(!perMsgEmoji)}></div>
                                    </Tooltip>
                                    <Tooltip placement="top" overlay={<span>Forward</span>}>
                                        <div className="opts forward_opts" onClick={() => setForwardPopup(!forwardPopup)}></div>
                                    </Tooltip>
                                    <Tooltip placement="top" overlay={<span>Reply thread</span>}>
                                        <div className="opts reply_opts" onClick={() => setReplyThread(!replyThread)} ></div>
                                    </Tooltip>
                                    <Tooltip placement="top" overlay={<span>Edit</span>}>
                                        <div className="opts edit_opts" onClick={toggleEditMsg}></div>
                                    </Tooltip>
                                    <div className="opts more_opts" data-for="rightSection_tooltip" data-tip="More options" onClick={() => setDeleteOptPopup(!deleteOptPopup)}></div>
                                    {
                                        deleteOptPopup ?
                                            <OutsideClickHandler onOutsideClick={() => setDeleteOptPopup(false)}>
                                                <ul className="msgMorePopup">
                                                    <li onClick={() => setDeleteSms(!deleteSms)} className="msgOpts deleteMsgOpt">Delete message</li>
                                                </ul>
                                            </OutsideClickHandler> : ''
                                    }
                                </div> : ''
                        }
                    </div>

                    <div className="user_msg">
                        <div className="sender_img nameL"><span className="nameLetters">MA</span></div>
                        <div className="msg_info">
                            <div className="sender_info"><p className="sender_name">Manzurul Alam</p><p className="msg_time"> <time dateTime="1691230457705">4:14 PM</time></p><p className="is_delivered"> - Delivered</p></div>
                            <div className='msg_body msgBodyArea'>
                                <p className="titleBar 1">
                                    <span className="msgLinkTitle">Private SMS Title</span>
                                    <span onClick={() => setAddTitle(!addTitle)} className="editTpen" data-for="rightSection_tooltip" data-tip="Add/Edit title"></span>
                                </p>
                                <div className="privateMsgContainer">
                                    <span>Private message to </span>
                                    <span style={{ paddingLeft: '5px', fontWeight: '500', lineHeight: '26px' }}>Abdul Aual Sobuj, Shakil Ahmed, Dalim 9 Chowdhury </span>
                                    <span className="privateMsgV" onClick={() => setQuickView(!quickView)}>Quick view</span>
                                    <span className="privateMsgV" onClick={() => setReplyThread(!replyThread)}>View &amp; reply</span>
                                    <span className="privateMsgV" onClick={() => setPrivateSms(!privateSms)} data-for="rightSection_tooltip" data-tip="Click to update the participants"> Add / Edit </span>
                                    <span onClick={() => setDeleteSms(!deleteSms)} className="privateMsgV" data-for="rightSection_tooltip" data-tip="Click to delete"> Delete </span>
                                </div>
                                <div className="msgFlagReplyOption">
                                    <div className="msgFlagBtn">Flag</div>
                                    <div className="msgReplyBtn">Reply </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user_msg">
                        <div className="sender_img nameL"><span className="nameLetters">MA</span></div>
                        <div className="msg_info">
                            <div className="sender_info"><p className="sender_name">Manzurul Alam</p><p className="msg_time"> <time dateTime="1691230457705">4:14 PM</time></p><p className="is_delivered"> - Delivered</p></div>
                            <div className='msg_body msgBodyArea'>
                                <div className="msg_txt 1" id="copy_d1909670-3378-11ee-9650-097bc1846f8d">sdfasdfsad</div>
                                <div className="msgReactionContainer"></div>
                                <div className="msgFlagReplyOption"><div className="msgFlagBtn">Flag</div><div className="msgReplyBtn">Reply </div></div>
                            </div>
                        </div>
                    </div>
                    <div className="user_msg">
                        <div className="sender_img nameL"><span className="nameLetters">MA</span></div>
                        <div className="msg_info">
                            <div className="sender_info"><p className="sender_name">Manzurul Alam</p><p className="msg_time"> <time dateTime="1691230457705">4:14 PM</time></p><p className="is_delivered"> - Delivered</p></div>
                            <div className='msg_body msgBodyArea'>
                                <div className="msg_txt 1" id="copy_d1909670-3378-11ee-9650-097bc1846f8d">sdfasdfsad</div>
                                <div className="msgReactionContainer"></div>
                                <div className="msgFlagReplyOption"><div className="msgFlagBtn">Flag</div><div className="msgReplyBtn">Reply </div></div>
                            </div>
                        </div>
                    </div>
                    <div className="user_msg">
                        <div className="sender_img nameL"><span className="nameLetters">MA</span></div>
                        <div className="msg_info">
                            <div className="sender_info"><p className="sender_name">Manzurul Alam</p><p className="msg_time"> <time dateTime="1691230457705">4:14 PM</time></p><p className="is_delivered"> - Delivered</p></div>
                            <div className='msg_body msgBodyArea'>
                                <div className="msg_txt 1" id="copy_d1909670-3378-11ee-9650-097bc1846f8d">sdfasdfsad</div>
                                <div className="msgReactionContainer"></div>
                                <div className="msgFlagReplyOption"><div className="msgFlagBtn">Flag</div><div className="msgReplyBtn">Reply </div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <EditorBox
                    privateSms={privateSms}
                    setPrivateSms={setPrivateSms}
                    quickView={quickView}
                    setQuickView={setQuickView} />

            </MainLayout>

            {
                replyThread ? <ReplyThread setReplyThread={setReplyThread} /> : ''
            }
            {
                forwardPopup ? <ForwardPopup setForwardPopup={setForwardPopup} /> : ''
            }
            {
                addTitle ? <AddTitleMsg setAddTitle={setAddTitle} /> : ''
            }
            {
                quickView ? <QuickView setQuickView={setQuickView} setReplyThread={setReplyThread} /> : ''
            }
            {
                deleteSms ? <DeleteContainer setDeleteSms={setDeleteSms} /> : ''
            }
            {
                sharePopup ? <SharePopup setSharePopup={setSharePopup} /> : ''
            }
            {
                tagsPopup ? <TagsContainer setTagsPopup={setTagsPopup} /> : ''
            }
        </>
    );
}

export default ConnectPageCon;