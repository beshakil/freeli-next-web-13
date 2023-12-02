"use client";
import React from 'react';

const DeleteContainer = ({setDeleteSms}) => {
    return (
        <div className='backwrap'>
            <div className="freeliModal">
                <div className="freeliModalHead">
                    <h4 className="popupTitle">Delete message</h4>
                    <span onClick={() => setDeleteSms(false)} className="closeModal" data-for="rightSection_tooltip" data-tip="Close" ></span>
                </div>
                <div className="freeliModalBody">
                    <p className="delDesc">Are you sure you want to delete this message? This cannot be <span className="undone">undone</span>.</p>
                </div>
                <div className="freeliModalFoot">
                <button onClick={() => setDeleteSms(false)} className="btnCancel">Cancel</button>
                <button className="btnAction">Delete for me</button>
                <button className="btnAction">Delete for all</button></div>
            </div>
        </div>
    );
};

export default DeleteContainer;