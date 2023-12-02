/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useEffect, useState, useRef } from 'react';
import { EditorState, Editor, convertToRaw, ContentState, Modifier } from 'draft-js';
import ReactTooltip from 'react-tooltip';
import Tooltip from 'rc-tooltip';
import { Picker } from 'emoji-mart';
import FileUpload from '../Connect/FileUpload';
// import VoiceSMS from '../Connect/VoiceSMS';
import PrivateChat from '../Connect/PrivateChat';


function EditorBox({ privateSms, setPrivateSms }) {

    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );
    const [wrongText, setWrongText] = useState(false);
    const [clear_text_icon, set_clear_text_icon] = useState(false);
    const [clearText, setClearText] = useState(false);
    const [emojiPopup, setEmojiPopup] = useState(false);
    const [attachFile, setAttachFile] = useState(false);
    const [voiceSms, setVoiceSms] = useState(false);
    const [attachPrivateFile, setAttachPrivateFile] = useState(false);

    return (
        <>
            <ReactTooltip id="rightSection_tooltip" place="top" type="dark" />
            <div id="bottomBox" className="bottom_bar group_conv">

                <div className="send_msg_info"></div>
                <div className="privateMsg_btn" data-for="rightSection_tooltip" data-tip="Send a private message to selected user[s]" onClick={() => setPrivateSms(true)}>Private</div>

                <div className="emojiContainer"></div>
                <div>
                    <Tooltip placement="top" overlay={<span>Click voice to text. 'send', == message send, 'clear' == clear text, 'Enter' == new line</span>}>
                        <div className="voiceIcon1MsgBox"></div>
                    </Tooltip>
                    <div className='demo-wrapper rdw-editor-wrapper'>
                        <Editor
                            toolbarHidden
                            editorState={editorState}
                            onChange={setEditorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            placeholder="message"y
                            spellCheck={true}
                        />
                    </div>

                </div>
                {clear_text_icon && <span className="clearAllSrcTestMain" onClick={() => clearS()} data-for="top_head" data-tip="Clear Search"></span>}
                {/* <span className="clearAllSrcTestMain" data-for="rightSection_tooltip" data-tip="Clear Search"  ></span> */}
                <div className="msg_bottom_bar online">
                    <div className="send_msg_opt">
                        <div className="microphone_audio_on" data-for="rightSection_tooltip" data-tip="Send a voice message." onClick={() => setVoiceSms(!voiceSms)} ></div>
                        <div className="attachment_selector" data-for="rightSection_tooltip" data-tip="Attach files" onClick={() => setAttachFile(!attachFile)}  ></div>
                        <div className="emojiPlus" data-for="rightSection_tooltip" data-tip="Insert emoji" onClick={() => setEmojiPopup(!emojiPopup)}></div>
                        <div className="msgSend_btn" data-for="rightSection_tooltip" data-tip="Click to send"  ></div>
                    </div>
                </div>
            </div>
            {
                emojiPopup &&
                <div className="emojiContainer" >
                    <Picker />
                </div>
            }
            {
                attachFile && <FileUpload setAttachFile={setAttachFile} />
            }
            {/* {
                voiceSms && <VoiceSMS setVoiceSms={setVoiceSms}/>
            } */}
            {
                privateSms && <PrivateChat
                    setPrivateSms={setPrivateSms}
                    attachPrivateFile={attachPrivateFile}
                    setAttachPrivateFile={setAttachPrivateFile} />
            }
        </>
    )
}

export default EditorBox;