"use client"
import React, { useState, useEffect  } from 'react';
import OutsideClickHandler from "react-outside-click-handler";
import FileHubHead from '../../components/filehub_com/fileHubHead';
import Tags from '../../components/filehub_com/tagsComponent';
import TagRelatedPopup from '../../components/filehub_com/TagRelatedPopup';
import TagFilesComponent from '../../components/filehub_com/tagFilesComponent';
import LinkComponent from '../../components/filehub_com/linkComponent';

import "../../globals.css";
import './TagFile.css';
import '../../App.css';

function FileHub(props) {
const [fileViewType, setfileViewType] = useState('tagPanel');
const [tagPopupShow, setTagPopupShow] = useState(false);

    return (
        <>
            <OutsideClickHandler
                onOutsideClick={() => setTagPopupShow(false)}
            >
             {tagPopupShow ? <TagRelatedPopup  
                    tagPopupShow={tagPopupShow}
                    setTagPopupShow={setTagPopupShow}
                />:''}
        </OutsideClickHandler>
        <div className="right_container tagFileArea">
            <FileHubHead
                fileViewType={fileViewType}
                setfileViewType={setfileViewType}
            />
            {fileViewType === 'tagPanel' ?
                <Tags 
                tagPopupShow={tagPopupShow} 
                setTagPopupShow={setTagPopupShow} 
                />
            :''}
            {fileViewType === 'all_files_in_hub' ?
                    <TagFilesComponent
                        tagPopupShow={tagPopupShow}
                        setTagPopupShow={setTagPopupShow}
                    />
            :''}
                {fileViewType === 'all_links' ?
                    <LinkComponent
                        tagPopupShow={tagPopupShow}
                        setTagPopupShow={setTagPopupShow}
                    />
                    : ''}
        
        </div>
        </>
    );
}


export default FileHub;