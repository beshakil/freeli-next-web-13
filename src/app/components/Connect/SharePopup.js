import Image from 'next/image';
import React from 'react';
import copyIcon from '../../../../public/media/images/copyIconBlack.svg'

const SharePopup = ({ setSharePopup }) => {
    return (
        <div className='backwrap'>
            <div className="shareLinkModal">
                <div className="shareLinkModalHead">
                    <h4 className="popupTitle">Share</h4>
                    <span onClick={() => setSharePopup(false)} className="closeModal"></span>
                </div>

                <div className="shareLinkModalBody">
                    <p className="shareDesc">Create a shareable url/link and simply paste the link in any channel to share the file with anyone. You can always disable shareable link anytime.</p>
                    <input className="generateUrlInput" type="text" readonly="" value="https://cacdn01.freeli.io/f/3eNpfLnktBtYo8UzskXMgw"></input>
                    <div className="copyIcon">
                        <Image
                            data-tip="Click to copy link"
                            className="copyShareLink"
                            src={copyIcon} alt="" />
                    </div>
                </div>

                <div className="shareLinkModalFoot">
                    <button onClick={() => setSharePopup(false)} className="btnCancel">Cancel</button>
                    <button className="btnAction" style={{ backgroundColor: 'red' }}>Remove Share</button>
                    <button className="btnAction">Create link</button>
                </div>
            </div>
        </div>
    );
};

export default SharePopup;