import React from 'react';

const AddTitleMsg = ({ setAddTitle }) => {
    return (
        <div className="backwrap">
            <div className="customTitleModal">
                <div className="customTitleHead">
                    <h4 className="popupTitle">Add a title to this message</h4>
                    <p>This title will be visible to everyone in this room.</p>
                    <span className="closeModal" onClick={() => setAddTitle(false)}></span>
                </div>
                <div className="customTitleBody">
                    <input type="Text" className="customTitleInput" placeholder="Enter message title" maxlength="64" value="" />
                </div>
                <div className="customTitleFoot">
                    <button className="btnCancel" onClick={() => setAddTitle(false)}>Cancel</button>
                    <button className="saveTitle activeTitlebtn">Save</button>
                </div>
            </div>
        </div>
    );
};

export default AddTitleMsg;