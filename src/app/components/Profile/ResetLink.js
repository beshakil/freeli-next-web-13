import React from 'react';

const ResetLink = ({ setResetLinkPopup }) => {
    return (
        <div className='backwrap'>
            <div className="resetLinkModal">
                <div className="shareLinkModalHead">
                <h4 className="popupTitle">Reset link ?</h4>
                <span onClick={() => setResetLinkPopup(false)}  className="closeModal"></span>
                </div>
                <div className='shareLinkModalBody'>
                    <p className="shareDesc text-center mt-4 text-lg">Do you want to reset the call link?</p>
                </div>

                <div className="shareLinkModalFoot">
                    <button onClick={() => setResetLinkPopup(false)} className="btnCancel">Cancel</button>
                    <button className="btnAction">Create link</button></div>
            </div>
        </div>
    );
};

export default ResetLink;