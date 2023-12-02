"use client";
import Image from 'next/image';
import React from 'react';
import SharedTags from './SharedTags';
import PersonalTags from './PersonalTags';

const TagsContainer = ({ setTagsPopup }) => {
    const [hoveredElements, setHoveredElements] = React.useState({});
    const [tagsTab, setTagsTab] = React.useState('shared');
    // Function to handle mouse hover
    const handleMouseHover = (elementId) => {
        setHoveredElements((prevState) => ({
            ...prevState,
            [elementId]: true,
        }));
    };

    // Function to handle mouse leave
    const handleMouseLeave = (elementId) => {
        setHoveredElements((prevState) => ({
            ...prevState,
            [elementId]: false,
        }));
    };


    return (
        <div className='backwrap'>
            <div className='tagModal'>
                <div className="tagModalHead">
                    <h4 className="popupTitle">Assign tag(s) to the file</h4>
                    <span onClick={() => setTagsPopup(false)} className="closeModal"></span>
                </div>
                <div className='tagModalBody'>
                    <ul className="tagTab">
                        <li className={`${tagsTab === 'shared' ? "active" : ""}`} onClick={() => setTagsTab('shared')}>Shared team tag(s)</li>
                        <span
                            onMouseEnter={() => handleMouseHover('element1')}
                            onMouseLeave={() => handleMouseLeave('element1')}
                            className="tooltip2 user_Management_title" style={{ marginLeft: '3px', cursor: 'pointer' }}>
                            <span className="info_tooltip_new"></span>
                            {
                                hoveredElements['element1'] &&
                                <span className="tooltiptext2 teamtags" >
                                    <p>Team tags are created by Admin. Sort and search files by tags in each room or use the files dashboard to easily find documents across all rooms. Multiple team and personal tags can be used for any file.</p>
                                    <span className="tooltipClose"></span>
                                </span>
                            }
                        </span>
                        <li className={`${tagsTab === 'personal' ? "active" : ""}`} onClick={() => setTagsTab('personal')} style={{ marginLeft: '32px' }}>Personal tag(s)</li>
                        <span
                            onMouseEnter={() => handleMouseHover('element2')}
                            onMouseLeave={() => handleMouseLeave('element2')}
                            className="tooltip2 user_Management_title" style={{ marginLeft: '3px', cursor: 'pointer' }}>
                            <span className="info_tooltip_new"></span>
                            {
                                hoveredElements['element2'] &&
                                <span className="tooltiptext2 personal">
                                    <p>Personal Tags can help you manage your documents in your own way. They are unique and always remain private to each user.</p>
                                    <span className="tooltipClose"></span>
                                </span>
                            }
                        </span>
                    </ul>
                    {
                        tagsTab === 'shared' ? <SharedTags /> : <PersonalTags />
                    }
                </div>
                <div className="tagModalFoot">
                    <button className="btnCancel">Cancel</button>
                    <button className="btnAction">Update</button>
                </div>
            </div>
        </div>
    );
};

export default TagsContainer;