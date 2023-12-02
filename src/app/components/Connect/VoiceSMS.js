"use client";
import React, { useState, useEffect } from 'react';
import AudioAnalyser from "react-audio-analyser"
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";
import { AiFillDelete, AiFillSave } from "react-icons/ai";
import ReactTooltip from 'react-tooltip';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState } from 'draft-js';
import classNames from "classnames";

const VoiceSMS = ({ setVoiceSms }) => {


    const [RecordingState, setRecordingState] = useState("inactive");
    const [RecordingSrc, setRecordingSrc] = useState("");
    const [RecordingFile, setRecordingFile] = useState("");
    const [RecordingGraph, setRecordingGraph] = useState(false);
    const [RecordingError, setRecordingError] = useState(false);

    const [RecordingStart, setRecordingStart] = useState(true);
    const [RecordingPause, setRecordingPause] = useState(false);
    const [RecordingStop, setRecordingStop] = useState(false);
    const [RecordingDel, setRecordingDel] = useState(false);
    const [isClose, setIsClose] = useState(false);
    const [, seteditorState] = useState(EditorState.createEmpty());

    // useEffect(() => {

    //     let draftMsg = '';
    //     if (props.popup.replyThread) {
    //         draftMsg = localStorage.getItem('draft_' + props.threadMsg_id) !== null && localStorage.getItem('draft_' + props.threadMsg_id) !== undefined ? localStorage.getItem('draft_' + props.threadMsg_id) : '';
    //     } else {
    //         draftMsg = localStorage.getItem('draft_' + props.logindata.active_conv.details.conversation_id) !== null && localStorage.getItem('draft_' + props.logindata.active_conv.details.conversation_id) !== undefined ? localStorage.getItem('draft_' + props.logindata.active_conv.details.conversation_id) : '';
    //     }
    //     setTimeout(() => {
    //         const contentBlock = htmlToDraft(draftMsg);
    //         if (contentBlock) {
    //             const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    //             const editorState = EditorState.createWithContent(contentState);
    //             seteditorState(editorState);
    //         }
    //     }, 100);
    // }, [])

    const delAudio = (type) => {
        setRecordingDel(false);
        setRecordingSrc("");
        setRecordingFile("")
        if (type === "close") {
            const e = document.querySelector(".audiograph audio");
            e.parentElement.removeChild(e);
            props.setPopup({ type: 'voice_msg_popup', data: false });
        }
    }
    const controlAudio = (e, type) => {

        if (e === "recording") {
            setRecordingStart(false);
            setRecordingPause(true);
            setRecordingStop(true);
            setRecordingGraph(true);
            delAudio("open");

        }
        else if (e === "paused") {
            setRecordingStart(true);
            setRecordingPause(false);
            setRecordingStop(true);
            setRecordingGraph(true);

        }
        else if (e === "inactive") {
            setRecordingStart(true);
            setRecordingPause(false);
            setRecordingStop(false);
            setRecordingDel(true);

        }
        setRecordingState(e);
    }

    const continueToUpload = async () => {
        let blob = await fetch(RecordingSrc).then(r => r.blob());
        const file = new File([blob], RecordingFile, {
            type: 'audio/mp3',
            lastModified: Date.now()
        });
        file['file_category'] = 'voice';
        var dt = new DataTransfer();
        dt.items.add(file);
        props.handleDropVoice(dt.files);

        // window.voice_set_title = title;
        // window.voice_set_type = 'voice';
    }
    // useEffect(() => {
    //     controlAudio("recording", "init");
    //     // setRecordingStatus("recording");
    //     props.setVoiceMsgStage(1);
    // }, []);

    // useEffect(() => () => {
    //     console.log("unmount");
    //     delete window.voice_set_title;
    //     delete window.voice_set_type;
    // }, []);

	const [title,setTitle] = useState('');
    
    const changeTitle = (e)=>{
        setTitle(e.target.value);
    }

    const audioProps = {
        audioType: 'audio/mp3',
        className: 'audiograph',
        // audioOptions: {sampleRate: 30000},
        status: RecordingState,
        audioSrc: RecordingSrc,
        backgroundColor: '#ffffff',
        strokeColor: '#0c1e47',
        timeslice: 1000, // timeslice（https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start#Parameters）
        startCallback: (e) => {
            console.log("succ start", e)
        },
        pauseCallback: (e) => {
            console.log("succ pause", e)
        },
        stopCallback: (e) => {
            console.log('stopCallback', e);
            // setRecordingSrc(window.URL.createObjectURL(e));

            setRecordingFile(`voice-message-${Date.now()}.mp3`);

            if (isClose) props.setPopup({ type: 'voice_msg_popup', data: false });
            console.log("succ stop", e)
        },
        onRecordCallback: (e) => {
            console.log("recording", e)
        },
        errorCallback: (err) => {
            setRecordingError(true);
            setRecordingStart(false);
            setRecordingPause(false);
            setRecordingStop(false);
            setRecordingGraph(false);
            setRecordingDel(false);
            if (isClose) props.setPopup({ type: 'voice_msg_popup', data: false });
            console.log("error", err)
        }
    }

    return (
        <div className='backwrap'>
            <div className='fileUploadModal'>
                <div className="fileUploadModalHead">
                    <h4 className="popupTitle">Send a voice message.</h4>
                    <span onClick={() => setVoiceSms(false)} className="closeModal" data-for="rightSection_tooltip" data-tip="Close" ></span>
                </div>
                <div className="fileUploadModalBody" >
					<form method="POST" encType="multipart/form-data">
						<div className={classNames("send_voice_opt", RecordingError ? 'hide':'show')}>
							<div className="voice_control">
								{RecordingStart === true ?
									<div className="voice_upload_label" onClick={() => controlAudio("recording","again")}>
										<BiPlayCircle className="voice-icon" />
										<span className="voice_upload_text">Record</span>
									</div> : ''
								}
								{RecordingPause === true ?
									<div className="voice_upload_label"
									onClick={() => controlAudio("paused")}>
										<BiPauseCircle className="voice-icon" />
										<span className="voice_upload_text">Pause</span>
									</div>
									: ''
								}
								{RecordingStop === true ?
									<>
									<div className="voice_upload_label"
									onClick={() => controlAudio("inactive")}>
										<AiFillSave className="voice-icon" />
										<span className="voice_upload_text">Save</span>
									</div>
									</> : ''
								}
								{RecordingDel === true ?
									<>
									<div className="voice_upload_label"
									onClick={() => delAudio("close")}>
										<AiFillDelete className="voice-icon del" />
										<span className="voice_upload_text">Delete</span>
									</div>
									</> : ''
								}
							</div>
							<div className={classNames("voice-graph", RecordingGraph ? 'show':'hide', RecordingFile ? 'hidegraph' : 'showgraph' )}>
								{RecordingFile ? <div className="voiceTitleBody">
									{/* <label className="inputLabel" >Message title</label> */}
									<input type="Text" className="customTitleInput" placeholder="Enter a title to this voice message" 
									value={title}  onChange={(event)=>changeTitle(event)}  autoFocus />
								</div>: ''}
								<AudioAnalyser {...audioProps}> </AudioAnalyser>
								{RecordingFile? <span className="voice_upload_text">File: {RecordingFile}</span> : '' }
								
							</div>
						</div>
						{ RecordingError ? <div className="voice_device_error">
							To record voice messages, Workfreeli needs access to your microphone.
							</div> : ''}
						
						
						<div style={{display:'flex', justifyContent:'flex-end'}}>
						<button type="button" style={{ marginTop: '16px'}} className="btnCancel" onClick={()=>{
							
							if(RecordingState === "recording") setIsClose(true); 
							else props.setPopup({type:'voice_msg_popup',data:false}) ;
							setRecordingState("inactive"); 
							}}>Cancel</button>
							{ RecordingSrc ? 
								<button type="button" className="uploadbtn active" onClick={()=>continueToUpload()}>Continue</button> 
								:
								<button type="button" className="uploadbtn inactive" >Continue</button>
							}
						</div>
					</form>
				</div>
            </div>
        </div>
    );
};

export default VoiceSMS;