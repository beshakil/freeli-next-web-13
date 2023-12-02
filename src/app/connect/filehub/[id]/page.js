"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Redirect } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import classNames from "classnames";
import { BsXLg, BsArrowRight } from "react-icons/bs";
import Moment from "react-moment";

import gsap from "gsap";
// import FloatingAction from "./Popups/FloatingAction";
import "moment-timezone";
import toast from 'react-hot-toast';
import DatePicker from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import {
    BiReset
} from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";
// import PlayerPopup from './Popups/PlayerPopup';
import {
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft,
    MdKeyboardArrowDown,
} from "react-icons/md";
import ReactTooltip from "react-tooltip";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import Image from "next/image";
const FileDownload = require("js-file-download");


function TagFilePanelDetails(props) {

    const [selectButton,] = useState('filesText');
    const [roomListPopup, setRoomListPopup] = useState(false);
    const [tagListPopup, setTagListPopup] = useState(false);
    const from_room = props.conversation_gallery
        ? props.logindata.active_conv.details.conversation_id
        : "";
    const [uploaderListPopup, setuploaderListPopup] = useState(false);
    const [selectedCreators, setSelectedCreators] = useState([]);
    const [Uploader_list, setUploader_list] = useState(from_room === '' ? [] : props.logindata.all_users.filter(u => props.logindata.active_conv.details.participants.indexOf(u.id) > -1));
    const [searchByUploaderVal, setsearchByUploaderVal] = useState('');

    const [selectedRooms, setSelectedRooms] = useState(
        // props.conversation_gallery
        //     ? [props.logindata.active_conv.details.conversation_id]
        //     : 
        []
    );
    const [selectedTags, setSelectedTags] = useState([]);
    const [roomList, setRoomList] = useState([]);
    const [tag_list, setTag_list] = useState([
        // ...props.tag_list,
    ]);
    const [searchByRoomVal, setSearchByRoomVal] = useState("");
    const [searchByTagVal, setSearchByTagVal] = useState("");
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [pageState, setpageState] = useState({ page: 0, total: 0, totalPages: 0 });
    const [initialLoader, setInitialLoader] = useState(true);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [files, setFiles] = useState([]);
    const [, setTagsData] = useState([]);
    const [input_val, setInputVal] = useState("");
    const [search_val, setSearch_val] = useState("Advanced search");
    const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

    const options = [
        { label: "All file(s)", value: 'all', customeName: 'All file(s)' },
        { label: "Doc(s)", value: 'docs', customeName: 'Doc(s)' },
        { label: "Image(s)", value: 'image', customeName: 'Image(s)' },
        { label: "Voice(s)", value: 'voice', customeName: 'Voice(s)' },
        { label: "Audio(s)", value: 'audio', customeName: 'Audio(s)' },
        { label: "Video(s)", value: 'video', customeName: 'Video(s)' },
        { label: "Shared by URL(s)", value: 'share', customeName: 'Shared by URL(s)' }
    ];
    const [isOpen, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("all");
    const toggleDropdown = () => setOpen(!isOpen);
    const [buttonStatus, setButtonStatus] = useState(false);
    const [redirectCovId,] = useState(null);
    const [expandTotal, setExpandTotal] = useState(true);
    const [expandTotalLoader, setExpandTotalLoader] = useState(true);
    const [expanSummary, setExpandSummary] = useState(false);
    const [petchLoading, setpetchLoading] = useState(false);
    const [expandResult, setExpandResult] = useState({
        total: 0,
        other: 0,
        image: 0,
        audio: 0,
        video: 0,
        voice: 0,
        share: 0
    });
    const [selectItemText, setSelectItemText] = useState('all');
    let scrl = useRef([]);
    const [scrollX, setscrollX] = useState(0);
    const [, setscrolEnd] = useState(false);
    const slide = (shift, index) => {
        scrl.current[index].scrollLeft += shift;
        setscrollX(scrollX[index] + shift);

        if (
            Math.floor(scrl.current[index].scrollWidth - scrl.current[index].scrollLeft) <=
            scrl.current[index].offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    //Anim
    const anim = (e) => {
        gsap.from(e.target, { scale: 1 });
        gsap.to(e.target, { scale: 1.5 });
    };
    const anim2 = (e) => {
        gsap.from(e.target, { scale: 1.5 });
        gsap.to(e.target, { scale: 1 });
    };

    const scrollCheck = (index) => {
        setscrollX(scrl.current[index].scrollLeft);
        if (
            Math.floor(scrl.current[index].scrollWidth - scrl.current[index].scrollLeft) <=
            scrl.current[index].offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    const [countFilter, setFilterCount] = useState(0);
    useEffect(() => {
        if (countFilter > 0 && petchLoading) {
            // getdata('initial');
        }
    }, [countFilter])
    const handleItemClick = (value) => {
        setSelectedItem(value)
        setSelectItemText(value)
        setFilterCount((countFilter + 1))
        setOpen(false);
    }

    const KeyUpHandle = (event) => {
        if (event.keyCode === 13 && petchLoading) {
            // pageState.page = 0;
            // getdata("initial");
        }
    };
    useEffect(() => {
        // getdata('initial');
        setpetchLoading(true)
        // window.triggerSearch = '';

    }, []);

    const [resetCounter, setResetCounter] = useState(0);
    useEffect(() => {
        if (resetCounter > 0 && petchLoading) {
            //setpageState(null);
            // getdata("initial");
        }
    }, [resetCounter]);

    const resetFun = () => {
        setError1(false);
        setError2(false);
        setsearchByUploaderVal('');
        setSearchByRoomVal("");
        setSearchByTagVal("");
        setSelectedCreators([]);
        setInputVal("");
        setSelectedRooms(
            // props.conversation_gallery
            //     ? [props.logindata.active_conv.details.conversation_id]
            //     :
            []
        );
        // setSelectedTags([props.selectTag.tag_id]);
        setStartDate("");
        setEndDate("");
        setSelectedItem("all");
        setSelectItemText("all");
        setResetCounter(resetCounter + 1);
    };

    const searchByUploader = (v) => {
        setsearchByUploaderVal(v);
        if (v !== '') {
            setuploaderListPopup(true)
        } else {
            setuploaderListPopup(false)
        }
    }
    useEffect(() => {
        //console.log(193, Uploader_list)
        if (searchByUploaderVal === '') {
            setUploader_list(Uploader_list.map(v => searchByUploaderVal === '' ? { ...v, l_show: true } : v))
        } else {
            setUploader_list(Uploader_list.map(v => (v.firstname.toLowerCase().indexOf(searchByUploaderVal.toLowerCase()) > -1 || v.lastname.toLowerCase().indexOf(searchByUploaderVal.toLowerCase()) > -1) ? { ...v, l_show: true } : { ...v, l_show: false }))
        }
        //console.log()
    }, [searchByUploaderVal]);
    const selectCreate = (v) => {
        //console.log(175, v)
        setsearchByUploaderVal('');
        setuploaderListPopup(false);
        setSelectedCreators([v.id]);
    }

    useEffect(() => {
        //setpageState(null);
        // getdata("initial");
        setpetchLoading(true)
        // console.log(3500, pageState);
    }, []);

    const searchByRoom = (v, type) => {
        setSearchByRoomVal(v);
        if (type === "clear") {
            setRoomListPopup(false);
        } else {
            setRoomListPopup(true);
        }
    };

    useEffect(() => {
        if (searchByRoomVal === "") {
            setRoomList(
                roomList.map((v) =>
                    searchByRoomVal === "" ? { ...v, l_show: true } : v
                )
            );
        } else {
            setRoomList(
                roomList.map((v) =>
                    v.title.toLowerCase().indexOf(searchByRoomVal.toLowerCase()) > -1
                        ? { ...v, l_show: true }
                        : { ...v, l_show: false }
                )
            );
        }
    }, [searchByRoomVal]);

    const searchByTag = (v, type) => {
        setSearchByTagVal(v);
        if (type === "clear") {
            setTagListPopup(false);
        } else {
            setTagListPopup(true);
        }
    };

    useEffect(() => {
        if (searchByTagVal === "") {
            setTag_list(
                tag_list.map((v) =>
                    searchByTagVal === "" ? { ...v, l_show: true } : v
                )
            );
        } else {
            setTag_list(
                tag_list.map((v) =>
                    v.title.toLowerCase().indexOf(searchByTagVal.toLowerCase()) > -1
                        ? { ...v, l_show: true }
                        : { ...v, l_show: false }
                )
            );
        }
        // console.log();
    }, [searchByTagVal]);

    const selectRooms = (v) => {
        setSearchByRoomVal("");
        setRoomListPopup(false);
        setSelectedRooms([...selectedRooms, v.conversation_id]);
    };

    const selectTags = (v) => {
        setSearchByTagVal("");
        setTagListPopup(false);
        setSelectedTags([...selectedTags, v.tag_id]);
    };

    const AfileDownload = (event, url, filename) => {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();

        props.setPopup({ type: "downloadingPopup", data: true });
        props.set_downloading_file([filename]);
        Axios({
            url: url,
            method: "GET",
            responseType: "blob",
            onDownloadProgress(progressEvent) {

            },
        }).then((response) => {
            FileDownload(response.data, filename);
            props.setPopup({ type: "downloadingPopup", data: false });
        });
    };

    const shareSingleFile = (event, file) => {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        if (file.user_id === props.logindata.user.id) {
            props.setPopup({ type: "shareLinkPopup", data: true });
            props.set_popup_action_data({ ...file, files: files, setFiles: setFiles });
        }
    };

    const showForward = (event, file) => {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        props.set_popup_action_data(file);
        props.setPopup({ type: "participants_popup", data: true });
    };

    const fileTag = (event, file) => {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        if (props.popup.tagPopup) {
            props.set_popup_action_data({});
            props.setPopup({ type: "tagPopup", data: false });
        } else {
            props.set_popup_action_data(file);
            props.setPopup({ type: "tagPopup", data: true });
        }
    };


    const deleteSingleFile = (event, file) => {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        let d = file;
        d['setFiles'] = setFiles;
        d['files'] = files;
        d['expandResult'] = expandResult;
        d['setExpandResult'] = setExpandResult;
        props.set_popup_action_data(d);
        props.setPopup({ type: 'deleteFile', data: true })

    }

    const [, setActivesort] = useState("created_at");
    const [activesortCol, setActivesortCol] = useState("created_at");
    const [activeOrdering, setActiveOrdering] = useState("desc");
    const [markIteam, setMarkIteam] = useState([]);

    const sorting = (e, type, class_name) => {
        let actionType = class_name === "desc" ? true : false;
        setActivesortCol(type);

        if (actionType) {
            //Ascending Sort
            // console.log("Ascending Sort");
            setActiveOrdering("asce");
            // console.log(1, e.target.classList);
            if (type === "file_size") {
                setFiles([
                    ...files.sort((a, b) => parseFloat(a[type]) - parseFloat(b[type])),
                ]);
            } else {
                setFiles([
                    ...files.sort((a, b) =>
                        a[type].toUpperCase() > b[type].toUpperCase() ? 1 : -1
                    ),
                ]);
            }
            setActivesort("");
        } else {
            //Descending Sort
            //console.log("Descending");
            setActiveOrdering("desc");
            if (type === "file_size") {
                setFiles([
                    ...files.sort((a, b) => parseFloat(b[type]) - parseFloat(a[type])),
                ]);
            } else {
                setFiles([
                    ...files.sort((a, b) =>
                        a[type].toUpperCase() < b[type].toUpperCase() ? 1 : -1
                    ),
                ]);
            }
            setActivesort(type);
        }
    };
    useEffect(() => {
        if (!props.conversation_gallery) {
            if (
                startDate === "" &&
                endDate === "" &&
                selectedItem === "all" &&
                input_val === "" &&
                searchByRoomVal === "" &&
                searchByTagVal === "" &&
                selectedRooms.length === 0 &&
                selectedTags.length < 2

            ) {
                setButtonStatus(false);
            } else {
                setButtonStatus(true);
            }
        }
        else {
            if (
                startDate === "" &&
                endDate === "" &&
                selectedItem === "all" &&
                input_val === "" &&
                searchByRoomVal === "" &&
                searchByTagVal === "" &&
                selectedRooms.length === 1 &&
                selectedTags.length < 2 &&
                selectedCreators.length < 1

            ) {
                setButtonStatus(false);
            } else {
                setButtonStatus(true);
            }
        }
    }, [
        startDate,
        endDate,
        selectedItem,
        input_val,
        searchByRoomVal,
        searchByTagVal,
        selectedRooms,
        selectedTags,
        selectedCreators
    ]);

    useEffect(() => {
        // getdata('initial');
    }, [selectedTags, selectedRooms])
    const ButtonArea = () => {
        return (
            <div className="buttonList">

                <div
                    className={classNames(
                        "buttonsDesign reset_button",
                        buttonStatus ? "activeButton" : "inactiveButton"
                    )}
                    onClick={resetFun}

                >
                    <Tooltip placement="top" overlay={<span>Clear</span>}>
                        <span className="goIconArea"

                        >
                            <span
                                className="goText"
                                style={{
                                    position: "relative",
                                    top: "-7px",
                                }}
                            >
                                Clear
                            </span>
                            <BiReset size={20} className="arrow_go_icon clear" />
                        </span>
                    </Tooltip>
                </div>
                <div
                    className="buttonsDesign go_button"
                //  onClick={() => getdata("initial")}

                >
                    <Tooltip placement="top" overlay={<span>Search</span>}>
                        <span className="goIconArea"

                        >
                            <span
                                className="goText"
                                style={{
                                    position: "relative",
                                    top: "-7px",
                                }}
                            >
                                Search
                            </span>
                            <BsArrowRight size={20} className="arrow_go_icon" />
                        </span>
                    </Tooltip>
                </div>
            </div>
        );
    };
    const keyPress = useCallback((event) => {
        if (event.key === 'Escape') {
            props.setPopup({ type: 'floatingAction', data: false })
            setRoomListPopup(false);
            setTagListPopup(false);
            setOpen(false)
            props.setPopup({ type: 'tagPopup', data: false });
            setuploaderListPopup(false);
            props.setPopup({ type: 'participants_popup', data: false });
            props.setPopup({ type: 'shareLinkPopup', data: false });
            props.setPopup({ type: 'deleteFile', data: false })
            setSelectedItemIndex(-1);

        }

    }, [])
    useEffect(() => {
        document.addEventListener("keydown", keyPress, false);

        return () => {
            document.removeEventListener("keydown", keyPress, false);
        };
    }, [keyPress]);


    const showHoverItemHandler = (i) => {
        // setOverShowTags(true);
        setSelectedItemIndex(i);
    };

    const BlurEffect = (type) => {
        setTimeout(() => {
            if (type === 'searchByRoom') {
                setRoomListPopup(false)
            }
            if (type === 'searchByTag') {
                setTagListPopup(false)
            }
            if (type === 'searchByUploaderVal') {
                setuploaderListPopup(false)
            }


        }, 500)

    }
    const removeTags = (str) => {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();
        // Regular expression to identify HTML tags in 
        // the input string. Replacing the identified 
        // HTML tag with a null string.
        return str.replace(/(<([^>]+)>)/ig, '');
    }

    // document.onkeydown = function (event) {
    //     if (event.keyCode === 27) {
    //         setSelectedItemIndex(-1);
    //         props.setPopup({ type: "tagPopup", data: false });
    //         props.setPopup({ type: 'participants_popup', data: false });
    //         props.setPopup({ type: 'shareLinkPopup', data: false });
    //         props.setPopup({ type: 'deleteFile', data: false })
    //     }
    // }

    return (
        <>
            <ReactTooltip id="tagDetails_tooltip" type="dark" />
            {redirectCovId !== null ? <Redirect push to={redirectCovId} /> : ""}
            {/* {props.popup.floatingAction ? <FloatingAction /> : ""} */}
            {search_val === "Basic search" ? (
                <div className="search_total_area">
                    <div className="search_right_area" style={{ flexBasis: "100%" }}>
                        <div className="Advance_search">
                            <div
                                className="Advance_search_top"
                                style={{ paddingRight: "0px" }}
                            >
                                <div
                                    style={{ flexBasis: "20%" }}
                                    onClick={() => {
                                        setSearch_val("Advanced search");
                                    }}
                                    className="Advance_search_text Advance_item"
                                >
                                    Advanced search{" "}
                                    <span>
                                        {/* <BiMinus color='#ff0000' className='icon_Color' size={14}/> */}
                                        <MdKeyboardArrowDown size={16} />
                                    </span>
                                </div>
                                <div
                                    style={{
                                        flexBasis: "84%",
                                        borderBottom: "unset",
                                        borderRight: "unset",
                                        padding: "5px 0px 0 20px",
                                    }}
                                    className="Advance_search_list Advance_item"
                                    name="fontSize"
                                >
                                    <div
                                        className="searchAndFilter"
                                        style={{ borderBottom: "unset", position: "relative", width: '98%' }}
                                    >
                                        <input
                                            className="_inputSearchBar"
                                            type="text"
                                            id="_inputBar_tagdetails"
                                            placeholder="Search"
                                            value={input_val}
                                            onChange={(event) => {
                                                setInputVal(event.target.value);
                                            }}
                                            onKeyUp={(event) => KeyUpHandle(event)}
                                            style={{ marginRight: "0px" }}
                                            autoFocus
                                        />
                                        {input_val === "" ? (
                                            <div
                                                style={{
                                                    right: "108px",
                                                    height: "31px",
                                                }}
                                                className="srcBtnSection"
                                                data-for="top_head"
                                                data-tip="Search"
                                            ></div>
                                        ) : (
                                            <span
                                                style={{ right: "112px" }}
                                                className="clearAllSrcTest"
                                                onClick={() => {
                                                    setInputVal("");
                                                    //  getdata("initial");
                                                }}
                                                data-for="top_head"
                                                data-tip="Clear Search"
                                            ></span>
                                        )}

                                        <div
                                            className="SearchButton"
                                            onClick={() => getdata("initial")}
                                        >
                                            Go
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <>
                    <div className="search_total_area">
                        <div className="search_right_area">
                            <div className="Advance_search">
                                <div
                                    className="Advance_search_top"
                                    style={{ padding: "0px 0px 0 30px" }}
                                >
                                    <div
                                        style={{ flexBasis: "20%" }}
                                        onClick={() => {
                                            setSearch_val("Basic search");
                                        }}
                                        className="Advance_search_text Advance_item"
                                    >
                                        Advanced search{" "}
                                        <span>
                                            {/* <BsPlus className='icon_Color' size={14} /> */}
                                            <MdKeyboardArrowRight size={16} />
                                        </span>
                                    </div>
                                    <div className="Advance_search_list Advance_item"
                                        name="fontSize" style={{ paddingLeft: '10px', paddingRight: '10px' }}
                                    >
                                        <div className="custom_dropdown">
                                            <OutsideClickHandler
                                                onOutsideClick={() => setOpen(false)}
                                            >
                                                <div
                                                    className="custom_dropdown-header"
                                                    onClick={toggleDropdown}
                                                >
                                                    {options.find((i) => i.value === selectedItem).customeName}
                                                    <i
                                                        className={`fa fa-chevron-right custom_icon ${isOpen && "open"
                                                            }`}
                                                    ></i>
                                                </div>

                                                <div
                                                    className={`custom_dropdown-body ${isOpen && "open"}`}
                                                >
                                                    {options.map((item) => (
                                                        <div
                                                            className={classNames("custom_dropdown-item", item.value === selectedItem ? 'selected' : '')}
                                                            onClick={(e) => {
                                                                handleItemClick(item.value);
                                                            }}
                                                            key={item.value}
                                                        >
                                                            {/* <span
                                className={`custom_dropdown-item-dot ${item.value === selectedItem && "selected"
                                  }`}
                              >
                                •{" "}
                              </span> */}
                                                            {item.label}
                                                        </div>
                                                    ))}
                                                </div>
                                            </OutsideClickHandler>
                                        </div>
                                    </div>
                                    <div
                                        className="date_area Advance_item responsive_serch"
                                        style={{ flexBasis: "67.5%" }}
                                    >
                                        <span className="calenderIcon">
                                            <VscCalendar size={22} />
                                        </span>
                                        {/* <span className='fromDate'>From </span>  */}
                                        <div className="fromDate_One">
                                            <DatePicker
                                                className={error1 === true ? "start_Date errorDate" : "start_Date"}

                                                dateFormat="yyyy-MM-dd"
                                                placeholderText="From   YYYY-MM-DD"
                                                // selected={startDate}
                                                // onChange={(date) => setStartDate(date)}
                                                renderCustomHeader={({
                                                    date,
                                                    changeYear,
                                                    changeMonth,
                                                    decreaseMonth,
                                                    increaseMonth,
                                                    prevMonthButtonDisabled,
                                                    nextMonthButtonDisabled,
                                                }) => (
                                                    <div className="CalendarDiv">
                                                        <button
                                                            onClick={decreaseMonth}
                                                            disabled={prevMonthButtonDisabled}
                                                        >
                                                            {"<"}
                                                        </button>
                                                        <select
                                                            value={getYear(date)}
                                                            onChange={({ target: { value } }) =>
                                                                changeYear(value)
                                                            }
                                                        >
                                                            {years.map((option) => (
                                                                <option key={option} value={option}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        <select
                                                            value={months[getMonth(date)]}
                                                            onChange={({ target: { value } }) =>
                                                                changeMonth(months.indexOf(value))
                                                            }
                                                        >
                                                            {months.map((option) => (
                                                                <option key={option} value={option}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        <button
                                                            onClick={increaseMonth}
                                                            disabled={nextMonthButtonDisabled}
                                                        >
                                                            {">"}
                                                        </button>
                                                    </div>
                                                )}
                                                selected={startDate}
                                                onChange={(date) => {

                                                    if (new Date(date) > new Date(endDate)) {
                                                        toast.error('Start date should be smaller than  or equal to end date', { duration: 4000 });
                                                        setStartDate('')
                                                        setError1(true)
                                                        setTimeout(() => {
                                                            setError1(false)
                                                        }, 4000)
                                                    } else {
                                                        setStartDate(date);
                                                        setError1(false)
                                                    }
                                                }}
                                            />

                                            {startDate !== "" ? (
                                                <span
                                                    className="clearInput"
                                                    onClick={() => {
                                                        setStartDate("");
                                                    }}
                                                ></span>
                                            ) : (
                                                ""
                                            )}
                                            {/* <span className='fromTo'>To </span>  */}
                                        </div>
                                        <span className="calenderIcon2">
                                            <VscCalendar
                                                //  color="rgb(151 171 187)"
                                                size={22}
                                            />
                                        </span>
                                        <div className="fromDate_two">
                                            <DatePicker
                                                className={error2 === true ? "start_Date errorDate" : "start_Date"}
                                                dateFormat="yyyy-MM-dd"
                                                placeholderText="To   YYYY-MM-DD"
                                                // selected={startDate}
                                                // onChange={(date) => setStartDate(date)}
                                                renderCustomHeader={({
                                                    date,
                                                    changeYear,
                                                    changeMonth,
                                                    decreaseMonth,
                                                    increaseMonth,
                                                    prevMonthButtonDisabled,
                                                    nextMonthButtonDisabled,
                                                }) => (
                                                    <div className="CalendarDiv">
                                                        <button
                                                            onClick={decreaseMonth}
                                                            disabled={prevMonthButtonDisabled}
                                                        >
                                                            {"<"}
                                                        </button>
                                                        <div>
                                                            <select
                                                                value={getYear(date)}
                                                                onChange={({ target: { value } }) =>
                                                                    changeYear(value)
                                                                }
                                                            >
                                                                {years.map((option) => (
                                                                    <option key={option} value={option}>
                                                                        {option}
                                                                    </option>
                                                                ))}
                                                            </select>

                                                            <select
                                                                value={months[getMonth(date)]}
                                                                onChange={({ target: { value } }) =>
                                                                    changeMonth(months.indexOf(value))
                                                                }
                                                            >
                                                                {months.map((option) => (
                                                                    <option key={option} value={option}>
                                                                        {option}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>

                                                        <button
                                                            onClick={increaseMonth}
                                                            disabled={nextMonthButtonDisabled}
                                                        >
                                                            {">"}
                                                        </button>
                                                    </div>
                                                )}
                                                selected={endDate}
                                                onChange={(date) => {
                                                    if (new Date(date) < new Date(startDate)) {
                                                        toast.error('End date should be greater than  or equal to start date', { duration: 4000 });
                                                        setError2(true)
                                                        setEndDate('')
                                                        setTimeout(() => {
                                                            setError2(false)
                                                        }, 4000)
                                                    } else {
                                                        setEndDate(date);
                                                        setError2(false)
                                                    }
                                                }}
                                            />

                                            {endDate !== "" ? (
                                                <span
                                                    className="clearInput"
                                                    onClick={() => {
                                                        setEndDate("");
                                                    }}
                                                ></span>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>

                                </div>
                                <div className="Advance_search_bottom">
                                    <div className="searchAndFilterBar LeftSide" style={{ position: 'relative' }}>
                                        {from_room === '' ?
                                            <>
                                                <div className="searchAndFilter">
                                                    <OutsideClickHandler onOutsideClick={() => setRoomListPopup(false)}>
                                                        <input value={searchByRoomVal} onFocus={() => setRoomListPopup(true)} onChange={(event) => searchByRoom(event.target.value)} onBlur={() => BlurEffect('searchByRoom')} className="_inputBar searchLeft" type="text" placeholder="Search by room" />
                                                        {searchByRoomVal === '' ?
                                                            <div style={{
                                                                right: '31px',
                                                                height: '31px',
                                                                top: '17px'
                                                            }}
                                                                className="srcBtnSection" data-for="top_head" data-tip="Search"></div>
                                                            : <span style={{ right: '32px', top: '20px' }} className="clearAllSrcTest" onClick={(event) => searchByRoom('')} data-for="top_head" data-tip="Clear Search"></span>}


                                                        {roomListPopup &&
                                                            <div className="tag_room_list">
                                                                {
                                                                    roomList.filter(e => (e.l_show === undefined || e.l_show) && selectedRooms.indexOf(e.conversation_id) === -1).map((v) =>
                                                                        <p className="_tag_rooms" onClick={() => selectRooms(v)} key={'conv_' + v.conversation_id}>{v.title}</p>
                                                                    )
                                                                }
                                                                {roomList.filter(e => (e.l_show === undefined || e.l_show)).length === 0 && <div className="tagNotFound">Not found</div>}
                                                            </div>
                                                        }

                                                    </OutsideClickHandler>
                                                </div>
                                                <div className="selectedRoomCont">
                                                    {
                                                        roomList.filter(r => from_room === r.conversation_id).map(v =>
                                                            <span className="tags_Color" key={'conv1' + v.conversation_id}>{v.title}</span>
                                                        )
                                                    }
                                                    {
                                                        roomList.filter(r => selectedRooms.indexOf(r.conversation_id) > -1 && from_room !== r.conversation_id).map(v =>
                                                            <span className="tags_Color" key={'conv1' + v.conversation_id}>{v.title} <BsXLg size={14} style={{
                                                                cursor: 'pointer',
                                                                color: '#000000',
                                                                position: 'relative',
                                                                top: '2px',
                                                                marginLeft: '5px',
                                                                border: '1px solid #9b9b9b',
                                                                borderRadius: '50%',
                                                                padding: '2px'
                                                            }} onClick={() => { setSelectedRooms(selectedRooms.filter(r => r !== v.conversation_id)); }} /></span>
                                                        )
                                                    }
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="searchAndFilter">
                                                    <OutsideClickHandler onOutsideClick={() => setuploaderListPopup(false)}>
                                                        <input value={searchByUploaderVal}
                                                            onChange={(event) => searchByUploader(event.target.value)}
                                                            className="_inputBar searchRight" type="text"
                                                            onFocus={() => setuploaderListPopup(true)}
                                                            onBlur={() => BlurEffect('searchByUploaderVal')}
                                                            placeholder="Uploaded By" />
                                                        {searchByUploaderVal === '' ?
                                                            <div style={{
                                                                right: '31px',
                                                                height: '31px',
                                                                top: '17px'
                                                            }}
                                                                className="srcBtnSection" data-for="top_head" data-tip="Search"></div>
                                                            : <span style={{ right: '34px', top: '21px' }} className="clearAllSrcTest" onClick={(event) => searchByUploader('')} data-for="top_head" data-tip="Clear Search"></span>}
                                                        {uploaderListPopup &&
                                                            <div className="tag_room_list">
                                                                {
                                                                    Uploader_list.filter(e => (e.l_show === undefined || e.l_show) && selectedCreators.indexOf(e.id) === -1).map((v) =>
                                                                        <p className="_tag_rooms" key={'tag' + v.id} onClick={() => selectCreate(v)}>{v.firstname + ' ' + v.lastname}</p>
                                                                    )
                                                                }
                                                                {Uploader_list.filter(e => (e.l_show === undefined || e.l_show) && selectedCreators.indexOf(e.id) === -1).length === 0 && <div className="tagNotFound">Not found</div>}
                                                            </div>
                                                        }
                                                    </OutsideClickHandler>
                                                </div>
                                                <div className="selectedRoomCont">


                                                    {
                                                        Uploader_list.filter(r => selectedCreators.indexOf(r.id) > -1).map(v =>
                                                            <span className="tags_Color" key={'tag1' + v.id}>{v.firstname + ' ' + v.lastname}
                                                                <BsXLg style={{
                                                                    cursor: 'pointer',
                                                                    color: '#000000',
                                                                    position: 'relative',
                                                                    top: '2px',
                                                                    marginLeft: '5px',
                                                                    border: '1px solid #9b9b9b',
                                                                    borderRadius: '50%',
                                                                    padding: '2px'
                                                                }} size={14} onClick={() => { setSelectedCreators(selectedCreators.filter(r => r !== v.id)); }} />
                                                            </span>
                                                        )
                                                    }


                                                </div>
                                            </>
                                        }


                                    </div>

                                    <div
                                        className="searchAndFilterBar rightSide"
                                        style={{ position: "relative" }}
                                    >
                                        <div
                                            className="searchAndFilter"
                                            style={{ height: "auto !important" }}
                                        >
                                            <OutsideClickHandler
                                                onOutsideClick={() => setTagListPopup(false)}
                                            >
                                                <input
                                                    value={searchByTagVal}
                                                    onChange={(event) => searchByTag(event.target.value)}
                                                    onFocus={() => setTagListPopup(true)}
                                                    className="_inputBar searchRight"
                                                    type="text"
                                                    onBlur={() => BlurEffect('searchByTag')}
                                                    placeholder="Search by tag"
                                                />
                                                {searchByTagVal === "" ? (
                                                    <div
                                                        style={{
                                                            right: "31px",
                                                            height: "31px",
                                                            top: "17px",
                                                        }}
                                                        className="srcBtnSection"
                                                        data-for="top_head"
                                                        data-tip="Search"
                                                    ></div>
                                                ) : (
                                                    <span
                                                        style={{ right: "32px", top: "20px" }}
                                                        className="clearAllSrcTest"
                                                        onClick={(event) => searchByTag("", "clear")}
                                                        data-for="top_head"
                                                        data-tip="Clear Search"
                                                    ></span>
                                                )}
                                                {tagListPopup && (
                                                    <div className="tag_room_list">
                                                        {tag_list
                                                            .filter(
                                                                (e) =>
                                                                    (e.l_show === undefined || e.l_show) &&
                                                                    selectedTags.indexOf(e.tag_id) === -1
                                                            )
                                                            .map((v) => (
                                                                <p
                                                                    className="_tag_rooms"
                                                                    key={"tag" + v.tag_id}
                                                                    onClick={() => selectTags(v)}
                                                                >
                                                                    {v.title}
                                                                </p>
                                                            ))}
                                                        {tag_list.filter(
                                                            (e) => e.l_show === undefined || e.l_show
                                                        ).length === 0 && (
                                                                <div className="tagNotFound">Not found</div>
                                                            )}
                                                    </div>
                                                )}
                                            </OutsideClickHandler>
                                        </div>
                                        <div className="selectedRoomCont">
                                            {tag_list
                                                .filter((r) => r.tag_id === props.selectTag.tag_id)
                                                .map((v) => (
                                                    <span className="tags_Color" key={"tag1" + v.tag_id}>
                                                        {v.title}
                                                    </span>
                                                ))}

                                            {tag_list
                                                .filter(
                                                    (r) =>
                                                        selectedTags.indexOf(r.tag_id) > -1 &&
                                                        r.tag_id !== props.selectTag.tag_id
                                                )
                                                .map((v) => (
                                                    <span className="tags_Color" key={"tag1" + v.tag_id}>
                                                        {v.title}
                                                        {v.tag_id === props.selectTag.tag_id ? (
                                                            ""
                                                        ) : (
                                                            <BsXLg
                                                                style={{
                                                                    cursor: "pointer",
                                                                    color: "#000000",
                                                                    position: "relative",
                                                                    top: "2px",
                                                                    marginLeft: "5px",
                                                                    border: "1px solid #9b9b9b",
                                                                    borderRadius: "50%",
                                                                    padding: "2px",
                                                                }}
                                                                size={14}
                                                                onClick={() => {
                                                                    setSelectedTags(
                                                                        selectedTags.filter((r) => r !== v.tag_id)
                                                                    );
                                                                }
                                                                }
                                                            />
                                                        )}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="searchAndFilter"
                                style={{
                                    borderBottom: "1px solid #eeeeee",
                                    position: "relative",
                                }}
                            >
                                <input
                                    className="_inputSearchBar"
                                    type="text"
                                    id="_inputBar_tagdetails"
                                    placeholder="Search"
                                    value={input_val}
                                    onChange={(event) => {
                                        setInputVal(event.target.value);
                                    }}
                                    onKeyUp={(event) => KeyUpHandle(event)}
                                    autoFocus
                                />
                                {input_val === "" ? (
                                    <div
                                        style={{
                                            right: "31px",
                                            height: "31px",
                                        }}
                                        className="srcBtnSection"
                                        data-for="top_head"
                                        data-tip="Search"
                                    ></div>
                                ) : (
                                    <span
                                        style={{ right: "32px" }}
                                        className="clearAllSrcTest"
                                        onClick={(event) => {
                                            setInputVal("");
                                            setResetCounter(resetCounter + 1);
                                        }}
                                        data-for="top_head"
                                        data-tip="Clear Search"
                                    ></span>
                                )}

                            </div>
                        </div>
                        <div className="serarchButton area">
                            <ButtonArea />

                        </div>
                    </div>
                </>
            )}

            <div className="show_search_results_area">


                {expandTotal ?
                    ''
                    :
                    <div className="show_results_eachfiles innerCounter">
                        {expanSummary ?
                            <span className="counter_section innnerResult" >
                                <span className="counterText innnerText"
                                    style={{
                                        color: '#000000',
                                        fontSize: '16px'
                                    }}>
                                    {/* {options.find(i => i.value === selectedItem).label} </span>  <span className="counterN">{expandResult[selectedItem === 'all' ? 'total' : selectedItem === 'docs' ? 'other' : selectedItem]}</span> found */}
                                    <span className="counterN">{expandResult[selectedItem === 'all' ? 'total' : selectedItem === 'docs' ? 'other' : selectedItem]}</span>{options.find(i => i.value === selectedItem).customeName} {" found"}
                                </span>
                            </span>
                            : ''}
                    </div>
                }

                {expandTotal ? (
                    <div className="show_results_eachfiles">

                        {expandTotalLoader ? (
                            <span className={"btn_loader"} style={{ width: "158px", float: "left", border: 'none', height: "20px" }}></span>
                        ) : (
                            <ul className={classNames("file_count_list", expandTotalLoader ? 'blur_effect' : '')} >
                                <Tooltip placement="top" overlay={<span>All file(s)</span>}>
                                    <li className="file_ul_list liststyl" style={selectItemText === "all" ? { backgroundColor: '#0b1f47' } : { backgroundColor: '#318fff' }} onClick={() => { handleItemClick('all'); setSelectItemText('all') }}>
                                        {/* <li className="file_ul_list liststyl"  onClick={() =>{ handleItemClick('all')}}> */}
                                        <span className="file_count">All file(s)</span>
                                        <span className="file_count_num"> <span>{expandResult.total}</span> </span>
                                    </li>
                                </Tooltip>
                                <Tooltip placement="top" overlay={<span>Document(s)</span>}>
                                    <li className="file_ul_list liststyl" style={selectItemText === "docs" ? { backgroundColor: '#0b1f47' } : { backgroundColor: '#318fff' }} onClick={() => { handleItemClick('docs'); setSelectItemText('docs') }}>

                                        <span className="file_count"> Doc(s)</span>
                                        <span className="file_count_num"><span>{expandResult.other}</span></span>
                                    </li>
                                </Tooltip>
                                <Tooltip placement="top" overlay={<span>Image(s)</span>}>

                                    <li className="file_ul_list liststyl" style={selectItemText === "image" ? { backgroundColor: '#0b1f47' } : { backgroundColor: '#318fff' }} onClick={() => { handleItemClick('image'); setSelectItemText('image') }}>
                                        <span className="file_count">Image(s)</span>

                                        <span className="file_count_num"><span> {expandResult.image}</span></span>
                                    </li>
                                </Tooltip>
                                <Tooltip placement="top" overlay={<span>Voice(s)</span>}>
                                    <li className="file_ul_list liststyl" style={selectItemText === "voice" ? { backgroundColor: '#0b1f47' } : { backgroundColor: '#318fff' }} onClick={() => { handleItemClick('voice'); setSelectItemText('voice') }}>

                                        <span className="file_count">Voice(s)</span>

                                        <span className="file_count_num"> <span>{expandResult.voice}</span></span>
                                    </li>
                                </Tooltip>
                                <Tooltip placement="top" overlay={<span>Audio(s)</span>}>
                                    <li className="file_ul_list liststyl" style={selectItemText === "audio" ? { backgroundColor: '#0b1f47' } : { backgroundColor: '#318fff' }} onClick={() => { handleItemClick('audio'); setSelectItemText('audio') }}>

                                        <span className="file_count">Audio(s)</span>

                                        <span className="file_count_num"> <span>{expandResult.audio}</span></span>
                                    </li>
                                </Tooltip>
                                <Tooltip placement="top" overlay={<span>Video(s)</span>}>
                                    <li className="file_ul_list liststyl" style={selectItemText === "video" ? { backgroundColor: '#0b1f47' } : { backgroundColor: '#318fff' }} onClick={() => { handleItemClick('video'); setSelectItemText('video') }}>

                                        <span className="file_count ">Video(s)</span>

                                        <span className="file_count_num"> <span>{expandResult.video}</span></span>
                                    </li>
                                </Tooltip>

                                {/* <Tooltip placement="top" overlay={<span>File(s) shared by URL(s)</span>}>
                  <li className="file_ul_list liststyl" style={selectItemText === "share" ? { backgroundColor: '#0b1f47' } : { backgroundColor: '#318fff' }} onClick={() => { handleItemClick('share'); setSelectItemText('share') }}>

                    <span className="file_count">Shared by URL(s)</span>
                    <span className="file_count_num"><span>{expandResult.share}</span></span>
                  </li>
                </Tooltip> */}

                                <Tooltip placement="top" overlay={<span>Refresh</span>}>
                                    <li className="file_ul_list refreshIco" onClick={() => getdata("initial")} ></li>
                                </Tooltip>

                            </ul>

                        )}
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div className="tagFlieList_body">
                {initialLoader ? (
                    <div
                        className="loaderMain"
                        style={{ height: search_val === 'Advanced search' ? "calc(100vh - 350px)" : "calc(100vh - 217px)" }}
                    ></div>
                ) : (
                    ""
                )}
                <div className="tagFlieList_top">
                    <div className="taskListTableHead">
                        <ul
                            className="fileHeadRow"
                            style={{ borderTop: "1px solid #e5eef4" }}
                        >
                            <li className="_afileMark"></li>

                            <li
                                className={classNames(
                                    "_afileName ",
                                    activesortCol === "originalname"
                                        ? "sort_active " + activeOrdering
                                        : "desc"
                                )}

                                style={{
                                    justifyContent: "flex-start",
                                    paddingLeft: "8px",
                                    width: "50%",
                                    paddingRight: "0px",
                                    cursor: 'default'
                                }}
                            >
                                <span className="sortIcons" style={{ cursor: 'pointer' }} onClick={(event) =>
                                    sorting(
                                        event,
                                        "originalname",
                                        activesortCol === "originalname" ? activeOrdering : "desc"
                                    )
                                }></span>
                                <span className="columnNum" onClick={(event) =>
                                    sorting(
                                        event,
                                        "originalname",
                                        activesortCol === "originalname" ? activeOrdering : "desc"
                                    )
                                } style={{ cursor: 'pointer' }}>File name</span>
                            </li>
                            <li
                                className={classNames(
                                    "_afileSize",
                                    activesortCol === "file_size"
                                        ? "sort_active " + activeOrdering
                                        : "desc"
                                )}
                                // onClick={(event) =>
                                //   sorting(
                                //     event,
                                //     "file_size",
                                //     activesortCol === "file_size" ? activeOrdering : "desc"
                                //   )
                                // }
                                style={{ width: "7%", cursor: 'default' }}
                            >
                                {/* <span className="sortIcons" ></span> */}
                                <span className="columnNum changeColor">File size</span>
                            </li>
                            <li
                                className={classNames(
                                    "_afileDate ",
                                    activesortCol === "created_at"
                                        ? "sort_active " + activeOrdering
                                        : "desc"
                                )}
                                // onClick={(event) =>
                                //   sorting(
                                //     event,
                                //     "created_at",
                                //     activesortCol === "created_at" ? activeOrdering : "desc"
                                //   )
                                // }
                                style={{
                                    justifyContent: "flex-start",
                                    width: "12%",
                                    paddingLeft: "4px",
                                    cursor: 'default'
                                }}
                            >
                                {/* <span className="sortIcons"></span> */}
                                <span className="columnNum">Date uploaded</span>
                            </li>
                            <li
                                className="_afileDate sort_active desc"
                                style={{
                                    justifyContent: "flex-start",
                                    width: "25%",
                                    paddingLeft: "22px",
                                    // paddingRight: "30px",
                                    cursor: 'default'
                                }}
                            >
                                <span className="columnNum">Other tags</span>
                            </li>
                            <li
                                className="_afileSize"
                                style={{
                                    justifyContent: "flex-start",
                                    width: "3%",
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                    flexBasis: "3%",
                                }}
                            ></li>

                        </ul>
                        <div
                            className={classNames(
                                "fileBody_area",
                                search_val === "Basic search" ? "newHeight" : ""
                            )}
                            id="infiniteScroll"
                            style={{ position: "relative" }}
                        >

                            {/* <InfiniteScroll
                                dataLength={files.length}
                                next={fetchData}
                                hasMore={pageState.totalPages > 1 && pageState.totalPages !== pageState.page ? true : false}
                                loader={<span className="InfiniteScrollLoader"></span>}
                                scrollableTarget="infiniteScroll"
                            > */}
                            {files.length > 0 ? (
                                files.map((v, index) => (
                                    <>
                                        {v.tag_list_details.length > 3 ?
                                            <>
                                                {selectedItemIndex !== index ? (
                                                    ""
                                                ) : (
                                                    <div className="backwrap">
                                                        <div
                                                            className="tagareaList"
                                                            style={{
                                                                right: "0%",
                                                                top: "0px",
                                                                maxHeight: "500px",
                                                                maxWidth: "500px",
                                                                position: "relative",
                                                                paddingTop: "20px",
                                                                minWidth: "250px",
                                                            }}
                                                        >
                                                            <span
                                                                className="closeModal forTag"
                                                                onClick={() => {
                                                                    setSelectedItemIndex(-1);
                                                                }}
                                                                data-for="rightSection_tooltip"
                                                                data-tip="Close"
                                                                style={{
                                                                    position: "absolute",
                                                                    right: "25px",
                                                                    top: "25px",
                                                                }}
                                                            ></span>
                                                            <h2
                                                                className="popupTitle tagfileTitle"
                                                                style={{

                                                                }}
                                                            >
                                                                Tags
                                                            </h2>

                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                            : ''}
                                        <ul
                                            key={"file_id" + v.id}
                                            className="fileBodyRow inFileTagRow"
                                            style={{
                                                padding: "10px 0px",
                                                height: "auto",
                                                position: "relative",
                                            }}
                                        >

                                            <li
                                                className="_afileMark ovalClick"
                                                onClick={() =>
                                                    setMarkIteam(
                                                        markIteam.indexOf(v.id + v.msg_id) > -1
                                                            ? markIteam.filter((m) => m !== v.id + v.msg_id)
                                                            : [...markIteam, v.id + v.msg_id]
                                                    )
                                                }
                                            >
                                                <span
                                                    className={classNames(
                                                        "ovalCircle",
                                                        markIteam.indexOf(v.id + v.msg_id) > -1
                                                            ? "ovalActive"
                                                            : ""
                                                    )}
                                                ></span>
                                            </li>
                                            <li
                                                onClick={() => { v.file_type.indexOf('video') > -1 || v.file_type.indexOf('audio') > -1 ? openFilePOP(v, props) : openFile(v) }}
                                                className="_afileName fileName_list"
                                                style={{
                                                    justifyContent: "flex-start",
                                                    paddingLeft: "8px",
                                                    width: "50%",
                                                    paddingRight: "0px",
                                                }}
                                            >
                                                <span className="_fileIcon">
                                                    <Image fill src={''} data-link={v.location} alt="galleryImage" />
                                                </span>

                                                <div className="filenameAndIcon">
                                                    {v.originalname.length < 60 ?
                                                        <span className="workfreeliFileText"
                                                            style={{ marginLeft: "15px", top: '-10px', width: 'auto' }}>
                                                            {removeTags(v.originalname)}
                                                        </span>
                                                        :

                                                        <Tooltip placement="top" overlay={<span>{v.originalname} </span>}>
                                                            <span className="workfreeliFileText" style={{ marginLeft: "15px", top: '-10px', width: 'auto' }}>
                                                                {
                                                                    v.originalname.length < 60
                                                                        ? `${removeTags(v.originalname)}`
                                                                        : `${removeTags(v.originalname).substring(0, 59)}...`
                                                                }

                                                            </span>
                                                        </Tooltip>


                                                    }
                                                    {v.url_short_id !== null && v.url_short_id !== "" ? <span style={{ width: 'auto', position: 'relative', top: '-5px' }} class="sharedIcon"></span> : ''}
                                                </div>
                                                <p
                                                    style={{ fontWeight: "normal", top: "19px" }}
                                                    className="room_name"
                                                >
                                                    {v.conversation_title}
                                                </p>
                                                <div
                                                    className={classNames(
                                                        "gFileHoverLists",
                                                        v.url_short_id !== null && v.url_short_id !== ""
                                                            ? "alreadyShared"
                                                            : "",
                                                        // gFileHoverLists === index ? "" : "hiddenPop"
                                                    )}
                                                    style={{ right: "15px", top: "0px" }}
                                                >

                                                    <Tooltip
                                                        placement="top"
                                                        overlay={<span>Add a tag</span>}
                                                    >
                                                        <div
                                                            className="fileOpts tag_opts"
                                                            onClick={(e) => {
                                                                fileTag(e, v);
                                                            }}
                                                        ></div>
                                                    </Tooltip>

                                                    {props.logindata.user.role !== "Guest" ? (
                                                        <Tooltip
                                                            placement="top"
                                                            overlay={<span>Forward</span>}
                                                        >
                                                            <div
                                                                // data-for={v.id}
                                                                // data-tip="Forward"
                                                                className="fileOpts forward_opts"
                                                                onClick={(e) => showForward(e, v)}
                                                            ></div>
                                                        </Tooltip>
                                                    ) : (
                                                        ""
                                                    )}
                                                    {props.logindata.user.role !== "Guest" ? (
                                                        <Tooltip
                                                            placement="top"
                                                            overlay={
                                                                <span>
                                                                    {v.user_id !== props.logindata.user.id
                                                                        ? "You can't share files uploaded by others"
                                                                        : "Share"}
                                                                </span>
                                                            }
                                                        >
                                                            <div

                                                                className="fileOpts share_opts filedetails"
                                                                style={
                                                                    v.user_id !== props.logindata.user.id
                                                                        ? {
                                                                            opacity: "0.4",
                                                                            cursor: "initial",
                                                                            backgroundColor: "gray",
                                                                        }
                                                                        : {}
                                                                }
                                                                onClick={(e) => shareSingleFile(e, v)}
                                                            ></div>
                                                        </Tooltip>
                                                    ) : (
                                                        ""
                                                    )}
                                                    <Tooltip
                                                        placement="top"
                                                        overlay={<span>Download</span>}
                                                    >
                                                        <div
                                                            // data-for={v.id}
                                                            // data-tip="Download"
                                                            className="fileOpts download_opts"
                                                            onClick={(event) =>
                                                                AfileDownload(event, v.location, v.originalname)
                                                            }
                                                        ></div>
                                                    </Tooltip>
                                                    {v.user_id === props.logindata.user.id && <Tooltip placement="top" overlay={<span>Delete</span>} >
                                                        <div onClick={(e) => { deleteSingleFile(e, v) }} className="fileOpts delete_opts"></div>
                                                    </Tooltip>}

                                                </div>
                                            </li>
                                            <li
                                                className="_afileSize"
                                                style={{ width: "7%", paddingLeft: "2px" }}
                                            >
                                                <span style={{ fontWeight: "normal" }}>
                                                    {niceBytes(v.file_size)}
                                                </span>
                                            </li>
                                            <li
                                                className="_afileDate"
                                                style={{
                                                    justifyContent: "flex-start",
                                                    width: "12%",
                                                    paddingLeft: "2px",
                                                }}
                                            >

                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        justifyContent: "center",
                                                        padding: "7px 0px",
                                                        paddingLeft: "4px",
                                                    }}
                                                >
                                                    <p className="linkTextTable newText">
                                                        <Moment format="DD/MM/YYYY">
                                                            {v.created_at}
                                                        </Moment>
                                                    </p>
                                                    <p className="linkTextTable newText">
                                                        <Moment format="h:mm a">{v.created_at}</Moment>
                                                    </p>
                                                </div>
                                                {/* <span className="uploaded_time">5:00pm</span> */}
                                            </li>
                                            <li
                                                className="_afileDate"
                                                style={{
                                                    justifyContent: "left",
                                                    width: "25%",
                                                    paddingLeft: "20px",
                                                    flexBasis: "25%",
                                                    paddingRight: "1px",
                                                }}
                                            >

                                                <>
                                                    {scrollX[index] !== 0 ?

                                                        <button className={classNames("back_tags", v.tag_list_details.filter(t => t.title !== 'UNTAGGED FILES').length > 3 ? '' : 'disable')}>
                                                            <MdKeyboardArrowLeft
                                                                className={classNames("tagPrevtIcon", v.tag_list_details.filter(t => t.title !== 'UNTAGGED FILES').length > 3 ? '' : 'disable')}
                                                                onClick={() => slide(-100, index)}
                                                                onMouseEnter={(e) => anim(e)}
                                                                onMouseLeave={(e) => anim2(e)}
                                                                size={24}

                                                            >

                                                            </MdKeyboardArrowLeft>

                                                        </button>
                                                        : ""
                                                    }
                                                </>

                                                <ul className={classNames("your_tags", v.tag_list_details.filter(t => t.title !== 'UNTAGGED FILES').length > 3 ? '' : 'your_tags_warp')} ref={el => scrl.current[index] = el} onScroll={() => scrollCheck(index)}>
                                                    {v.tag_list_details.filter(t => t.title !== 'UNTAGGED FILES').map((t, i) => (
                                                        // <TagFileLists data={d} key={i} />
                                                        <li key={i}>
                                                            <span
                                                                key={"mini" + v.id + t.tag_id}
                                                                style={{
                                                                    backgroundColor: t.tag_color,

                                                                    // overflow:'hidden !important',
                                                                    // whiteSpace:'nowrap',
                                                                    // textOverflow: "ellipsis !important",
                                                                    color: "#FFF",
                                                                    marginRight: "5px",
                                                                    // width:'auto',
                                                                    // maxWidth: "120px",

                                                                }}
                                                                className="tags_Color"
                                                            >
                                                                {t.title}


                                                            </span>
                                                        </li>
                                                    ))}
                                                    {v.tag_list_details.length === 1 ? v.tag_list_details.filter(t => t.title === 'UNTAGGED FILES').map((t, i) => (
                                                        // <TagFileLists data={d} key={i} />
                                                        <li key={i}>
                                                            <span
                                                                key={"mini" + v.id + t.tag_id}
                                                                style={{
                                                                    backgroundColor: t.tag_color,

                                                                    // overflow:'hidden !important',
                                                                    // whiteSpace:'nowrap',
                                                                    // textOverflow: "ellipsis !important",
                                                                    color: "#FFF",
                                                                    marginRight: "5px",
                                                                    // width:'auto',
                                                                    // maxWidth: "120px",

                                                                }}
                                                                className="tags_Color"
                                                            >
                                                                {t.title}


                                                            </span>
                                                        </li>
                                                    )) : ''}

                                                </ul>


                                                <>
                                                    {/* {!scrolEnd ? */}
                                                    <button className={classNames("prev_tags", v.tag_list_details.filter(t => t.title !== 'UNTAGGED FILES').length > 3 ? '' : 'disable')}>

                                                        <MdKeyboardArrowRight
                                                            className={classNames("tagNextIcon", v.tag_list_details.filter(t => t.title !== 'UNTAGGED FILES').length > 3 ? '' : 'disable')}
                                                            onClick={() => slide(+100, index)}
                                                            onMouseEnter={(e) => anim(e)}
                                                            onMouseLeave={(e) => anim2(e)}
                                                            size={24}
                                                        >

                                                        </MdKeyboardArrowRight>

                                                    </button>

                                                </>



                                            </li>
                                            <li
                                                className="_afileDate"
                                                style={{
                                                    justifyContent: "flex-start",
                                                    width: "3%",
                                                    paddingLeft: "0px",
                                                    flexBasis: "3%"

                                                }}
                                            >

                                                {v.tag_list_details.filter(t => t.title !== 'UNTAGGED FILES').length > 3 ?
                                                    <Tooltip placement="left" overlay={<span> Click to view all tags</span>}>

                                                        <div
                                                            className="circleTag"
                                                            onClick={(e) => {
                                                                showHoverItemHandler(index);
                                                            }}

                                                        >
                                                            {
                                                                v.tag_list_details.filter(t => t.title !== 'UNTAGGED FILES').length

                                                            }
                                                        </div>
                                                    </Tooltip>
                                                    : ''}
                                            </li>

                                        </ul>
                                    </>
                                ))
                            ) : !initialLoader ? (
                                <div
                                    className="fileNotFound"
                                    style={{ height: "calc(100% - 10px)" }}
                                >
                                    <h2>No data found matching the criteria! </h2>
                                </div>
                            ) : (
                                ""
                            )}
                            {/* </InfiniteScroll> */}


                        </div>
                    </div>
                </div>
            </div>
            {/* {props.popup.playerPopup ? <PlayerPopup /> : ''}
            {props.popup.downloadingPopup ? <Downloading /> : ""} */}
        </>
    );
}


export default TagFilePanelDetails;
