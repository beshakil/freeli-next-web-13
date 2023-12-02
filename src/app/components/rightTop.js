
"use client"
import React, { useState, useEffect, useRef } from 'react';
import classNames from "classnames";
import ReactTooltip from 'react-tooltip';
import ImgsViewer from "react-images-viewer";
import OutsideClickHandler from 'react-outside-click-handler';
import toast from 'react-hot-toast';
import { FaAngleDown } from "react-icons/fa6";
import Tooltip from 'rc-tooltip';
// const mykey = 'D1583ED51EEB8E58F2D3317F4839A';
function RightTop(props) {
    // console.log(28,props)
    const [exitLoader, setExitLoader] = useState(false)
    const [read_loader, setRead_loader] = useState(false);

    const [searchSelection, setSearchSelection] = useState(false);
    const [groupPopup, setGroupPopup] = useState(false);
    const [isFilter, setIsFilter] = useState(props.filter_active_for !== '' ? true : false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [get_callMembers, set_callMembers] = useState([]);
    const [openHeadMoreOptions, setOpenHeadMoreOptions] = useState(false);
    const [headSearchOptions, setHeadSearchOptions] = useState(false);
    const [searchRoomListOptions, setSearchRoomListOptions] = useState(false);
    // const [searchVal, setSearchVal] = useState('')

    useEffect(() => {
        setIsFilter(props.filter_active_for !== '' ? true : false);
    }, [props.filter_active_for]);

    useEffect(() => {
        //   debugger
        const results = get_callMembers.filter(person => {
            if (props.logindata.user.id === person.id) return false;
            console.log(999, person.firstname)
            return person.firstname.toLowerCase().trim().indexOf(searchTerm.toLowerCase().trim()) > -1
        });

        setSearchResults(results);
    }, [searchTerm, get_callMembers]);



    const MyFilesTooltip = () => {
        return (
            <>
                {props.hideComponent ?
                    <span style={{ cursor: 'pointer' }} className="tooltip user_Management_title filetooltip">
                        <span className="tooltiptext filetooltip" >
                            <p>
                                Click here to find files!
                            </p>
                            <span
                                // onClick={e => { props.setHideComponent(false); 
                                // localStorage.setItem("hideCompTool", false); }} 
                                className='tooltipClose'></span>
                        </span>
                    </span>
                    : ''
                }
            </>
        )
    }
    useEffect(() => {
        const hideCom = localStorage.getItem("hideCompTool");
        // console.log("visible", visible);
        if (hideCom === 'true') {
            //  props.setHideComponent(true);

        } else {
            // props.setHideComponent(false);
        }

    }, []);

    return (
        <>

            <ReactTooltip id="top_head" place="bottom" type="dark" />
            <div className={classNames("top_bar",
                //props.popup.convSearchSec ? 'convSearchActive' : ''

            )}>
                <div className={classNames("part_top_bar single",
                    // props.logindata.active_conv.details.group === 'yes' ? 'group' : 'single'
                )

                }>
                    <div className={"conv_img online"}>

                        <h3 className="nameLetters">{'M'}</h3>
                    </div>

                    <div className="conv_desc"
                    //onClick={() => props.setPopup({ type: 'roomUpdate', data: true })}
                    >
                        <h3 className="conv_name"
                        //title={props.logindata.active_conv.details.title}
                        >
                            {/* {props.logindata.active_conv.details.title} */}
                            Manzurul Alam
                        </h3>
                        <p className="conv_info"><span className="">6</span> <span className="middleBar" style={{ padding: '0px' }}>|</span> <span className=""> ITL Dev Team</span> </p>
                        {/* <p className="conv_info"><span className="">
                            Team Itl
                        </span> <span className="middleBar" style={{ padding: '0px' }}>|</span> <span className="">
                                {props.logindata.active_conv.details.group_keyspace_name}
                                ITL
                            </span> {props.logindata.active_conv.details.b_unit_id_name !== '' ? <><span style={{padding:'0px'}}>|</span> <span className="">{props.logindata.active_conv.details.b_unit_id_name}</span></>:'' }</p> */}
                    </div>


                </div>

                {headSearchOptions === true ?
                    <>
                        <div className="allSearchSection">
                            <div className="searchPartsContainer">
                                <div className="searchSelectionSection" style={searchRoomListOptions ? { pointerEvents: 'none' } : {}} onClick={() => setSearchRoomListOptions(!searchRoomListOptions)}><span>Room</span>
                                    <FaAngleDown className='ml-1 mr-1' />
                                </div>
                                <input id="searchSecTop" className="allSearchInput" type="text" placeholder="Search a message" value="" /><span class="clearAllSrcTest" data-for="top_head" data-tip="Clear Search"></span>
                                <div className="vl"></div>
                                <div className="voiceIcon1" data-for="top_head" data-tip="Voice to text. Say 'clear' to clear text and 'search' for searching"></div>
                                <div className="srcBtnSection" data-for="top_head" data-tip="Search"></div>
                            </div>
                            <span className="closeConnectSearch" onClick={() => setHeadSearchOptions(false)}></span>
                            {
                                searchRoomListOptions &&
                                <OutsideClickHandler onOutsideClick={() => setSearchRoomListOptions(false)}>
                                    <ul className="searchSelectionPopup">
                                        <li className="">All file(s)</li>
                                        <li className="">Image(s)</li>
                                        <li className="">Video(s)</li>
                                        <li className="">Audio(s)</li>
                                        <li className="">Docs(s)</li>
                                    </ul>
                                </OutsideClickHandler>
                            }
                        </div>

                    </>
                    :
                    <div className="part_top_bar">
                        <div className="part_top_bar">
                            <h3 style={{ width: '120px' }} className="file_opt tooltip2"
                                data-for="top_head" data-tip="Create a task">
                                Create task
                            </h3>
                        </div>
                        <div className="part_top_bar">
                            <h3 className="file_opt tooltip2"
                                //onClick={() => { props.set_fileViewType('tag_files_new'); props.set_conversation_gallery(true); }}
                                data-for="top_head" data-tip="Files"
                            >Files</h3>
                        </div>
                        <div className="part_top_bar">
                            {/* {!props.popup.flagged_view && !props.popup.private_view && !props.popup.link_view && !props.popup.thread_view ? */}

                            <div onClick={() => setOpenHeadMoreOptions(!openHeadMoreOptions)}
                                className={classNames("opt_icons conv_filter", openHeadMoreOptions ? 'active' : ""
                                    // props.popup.convFilter ? 'active' : isFilter ? 'active' : ''
                                )
                                }
                                // {/* onClick={convFilterClick}  */}
                                data-for="top_head" data-tip="Filters"></div>
                            {/* : ''} */}
                        </div>
                        <div className={classNames("opt_icons conv_voice")} data-for="top_head" data-tip="Start a call"></div>
                        <Tooltip placement="left" overlay={<span>Search this channel</span>}>
                            <div className="opt_icons conv_search" onClick={() => setHeadSearchOptions(!headSearchOptions)}></div>
                        </Tooltip>
                    </div>
                }
            </div>
            {
                openHeadMoreOptions &&
                <OutsideClickHandler onOutsideClick={() => setOpenHeadMoreOptions(false)}>
                    <div className="moreMenuPopup">
                        <span className="viewOnly">View only:</span>
                        <li className="moreOpt_list _threadFilter lock">Private messages</li>
                        <li className="moreOpt_list _callFilter">Threaded messages</li>
                        <li className="moreOpt_list _threadFilter link">Messages with links</li>
                        <li className="moreOpt_list _threadFilter msg_title">Messages with title</li>
                        <li className="moreOpt_list _threadFilter file media">Messages with files</li>
                        <li className="moreOpt_list _threadFilter file voice">Messages with voice</li>
                        <li className="moreOpt_list _threadFilter star">Messages with starred files</li>
                        <li className="moreOpt_list _threadFilter flag">Flagged messages</li>
                        <li className="moreOpt_list _threadFilter" style={{ display: 'block' }}>New/Unread messages</li>
                    </div>
                </OutsideClickHandler>
            }
        </>
    )
}

export default RightTop;