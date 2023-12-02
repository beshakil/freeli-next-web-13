import React from 'react';
import EditorBox from '../Editor/EditorBox';

const ReplyThread = ({ setReplyThread }) => {
    return (
        <div className='rightSideFullMainContainer' >
            <div className="replyMsg_head">
                <div className="replyHeadTitle">
                    <span onClick={() => setReplyThread(false)} className="backToChat" data-for="replyThread_tooltip" data-tip="Back" style={{ marginLeft: '20px' }}></span>
                    <h3><span>Reply thread(s)</span></h3>
                    <span onClick={() => setReplyThread(false)} className="backToChat closeBtn" data-for="replyThread_tooltip" data-tip="Back" style={{ right: '0px', marginRight: '0px' }}></span>
                </div>
                <span className="flash_msg_updated"></span>
            </div>
            <div class="replySeparator"><p>0 Replies</p></div>
            <div className="user_msg">
                <div className="sender_img nameL"><span className="nameLetters">MA</span></div>
                <div className="msg_info">
                    <div className="sender_info"><p className="sender_name">Manzurul Alam</p><p className="msg_time"> <time dateTime="1691230457705">@ 4:14 PM</time></p></div>
                    <div className='msg_body msgBodyArea'>
                        <div className="msg_txt 1" id="copy_d1909670-3378-11ee-9650-097bc1846f8d">sdfasdfsad</div>
                    </div>
                </div>
            </div>
            <EditorBox />
        </div>
    );
};

export default ReplyThread;