"use client";
import React, { useState } from 'react';
// import { Editor } from 'react-draft-wysiwyg';

const EditMsg = ({setEditMsg}) => {

    const [editorState, seteditorState] = useState('');
    const [wrongText, setWrongText] = useState(false);
    const [clear_text_icon, set_clear_text_icon] = useState(false);
    const [clearText, setClearText] = useState(false);

    const onEditorStateChange = (event) => {
        seteditorState(event);
        set_clear_text_icon(true)
    }
    console.log(editorState)
    // Rest of your code...

    const clearS = () => {
        const newState = EditorState.createEmpty()
        setWrongText(false)
        seteditorState(EditorState.moveFocusToEnd(newState));
       set_clear_text_icon(false)
    }

    return (
        <div>
            <div className="editMsgContainer" id="msgEditBox">
                {/* <Editor
                    toolbarHidden
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={(event) => onEditorStateChange(event)}
                    onBlur={() => setWrongText(false)}
                    spellCheck={true}
                /> */}
                <div className="editMsgBtnSection">
                    <button className="btnCancel" onClick={() => setEditMsg(false)}>Cancel</button>
                    <button className="btnAction">Save</button>
                </div>
            </div>

        </div>
    );
};

export default EditMsg;