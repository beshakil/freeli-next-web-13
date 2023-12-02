import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const ComingSoon = ({ setComingSoon }) => {
    return (
        <OutsideClickHandler>
            <div className='backwrap'>
                <div className="chooseCreateConv animate__animated animate__zoomIn animate__faster">
                    <div className="closePopup" onClick={() => setComingSoon(false)}></div>
                    <p className="popup_title">Profile</p>
                    <div>
                        <p className="commingSoon" style={{ paddingTop: '0px', paddingBottom: '10px', textAlign: 'center' }}>
                            Coming soon!
                        </p>
                    </div>
                    <div onClick={() => setComingSoon(false)} className="customTitleFoot pb-0 pr-0"><button className="btnCancel">Cancel</button></div>
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default ComingSoon;