"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from 'next/image'
import OutsideClickHandler from "react-outside-click-handler";
import classNames from "classnames";
import { BsXLg, BsArrowRight, BsStarFill } from "react-icons/bs";
import { MdFolder } from "react-icons/md";

import Moment from "react-moment";
import "moment-timezone";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { getMonth, getYear } from "date-fns";
import range from "lodash/range";
import { BiReset } from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

function TagFiles(props) {
  // // console.log("FilePanelAdvanced",props);
  const from_room = "";
  const [resetCounter, setResetCounter] = useState(0);
  const [uploaderListPopup, setuploaderListPopup] = useState(false);
  const [selectedCreators, setSelectedCreators] = useState([]);
  const [Uploader_list, setUploader_list] = useState("");
  const [searchByUploaderVal, setsearchByUploaderVal] = useState("");
  const [roomListPopup, setRoomListPopup] = useState(false);
  const [tagListPopup, setTagListPopup] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [markIteam, setMarkIteam] = useState([]);
  const [roomList, setRoomList] = useState([
    {
      conversation_id: 1,
      title: "Checker Room",
    },
    {
      conversation_id: 2,
      title: "Test two",
    },
    {
      conversation_id: 3,
      title: "Manzurul alam",
    },
    {
      conversation_id: 4,
      title: "Room one",
    },
    {
      conversation_id: 5,
      title: "Room two",
    },
    {
      conversation_id: 6,
      title: "Room Three",
    },
  ]);
    const [tag_list, setTag_list] = useState(
        [
            {
                tag_id: 1,
                title: "Policy Document",
                tag_type: "public",
                use_count: 12,
                tag_color: "#023d67",
            },
            {
                tag_id: 2,
                title: "Agreement",
                tag_type: "public",
                use_count: 13,
                tag_color: "#023d67",
            },
            {
                tag_id: 3,
                title: "Contract",
                tag_type: "private",
                use_count: 12,
                tag_color: "#023d67",
            },
            {
                tag_id: 4,
                title: "Invoice",
                tag_type: "public",
                use_count: 13,
                tag_color: "#023d67",
            },
            {
                tag_id: 5,
                title: "Draft",
                tag_type: "private",
                use_count: 12,
                tag_color: "#023d67",
            },
            {
                tag_id: 6,
                title: "Proposal",
                tag_type: "public",
                use_count: 13,
                tag_color: "#023d67",
            },
        ]);
  const [searchByRoomVal, setSearchByRoomVal] = useState("");
  const [searchByTagVal, setSearchByTagVal] = useState("");
  const [pageState, setpageState] = useState({
    page: 0,
    total: 0,
    totalPages: 0,
  });
  const [initialLoader, setInitialLoader] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [endDate, setEndDate] = useState("");
  const data = [
    {
      id: 1, originalname: "Server Config.zipa", FileSize: "74Kb", created_at: "24 May 2023", uploaded_by: "Md. Mahfuzur", RoomName: "Work_Freeli_Web", file_category:"DOC",
      fileExtention:"/media/images/file_icon/doc.svg",tag_list_details:[
      {
        tag_id: 1,
        title: "Policy Document",
        tag_type: "public",
        use_count: 12,
        tag_color: "#023d67",
      },
      {
        tag_id: 2,
        title: "Agreement",
        tag_type: "public",
        use_count: 13,
        tag_color: "#023d67",
      },
      {
        tag_id: 3,
        title: "Contract",
        tag_type: "private",
        use_count: 12,
        tag_color: "#023d67",
      },
      {
        tag_id: 4,
        title: "Invoice",
        tag_type: "public",
        use_count: 13,
        tag_color: "#023d67",
      },
      {
        tag_id: 5,
        title: "Draft",
        tag_type: "private",
        use_count: 12,
        tag_color: "#023d67",
      },
    ]
  },
    { id: 2, originalname: "Server Config.zipb", FileSize: "40Kb", created_at: "24 May 2023", uploaded_by: "Md. Mahfuzur", RoomName: "Work_Freeli_Web",
      file_category:"DOC", fileExtention: "/media/images/file_icon/doc.svg",tag_list_details: [
        {
          tag_id: 1,
          title: "Policy Document",
          tag_type: "public",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 2,
          title: "Agreement",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 3,
          title: "Contract",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
     
      ] },
    {
      id: 3, originalname: "Server Config.zipc", FileSize: "74Kb", created_at: "24 May 2023", uploaded_by: "Md. Rajon Hossain", RoomName: "Work_Freeli_Web", file_category:"DOC", fileExtention: "/media/images/file_icon/doc.svg", tag_list_details: [
        {
          tag_id: 1,
          title: "Policy Document",
          tag_type: "public",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 2,
          title: "Agreement",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 3,
          title: "Contract",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 4,
          title: "Invoice",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 5,
          title: "Draft",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
      ] },
    { id: 4, originalname: "Server Config.zipd", FileSize: "40Kb", created_at: "25 May 2023", uploaded_by: "Md. Monzur Rahman", RoomName: "Work_Freeli_Web",
      file_category:"DOC", fileExtention: "/media/images/file_icon/doc.svg",tag_list_details: [
        {
          tag_id: 1,
          title: "Policy Document",
          tag_type: "public",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 2,
          title: "Agreement",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 3,
          title: "Contract",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
    
      ] },
    { id: 5, originalname: "Server Config.zipe", FileSize: "74Kb", created_at: "25 May 2023", uploaded_by: "Md. Mahfuzur", RoomName: "Work_Freeli_Web",
      file_category:"DOC", fileExtention: "/media/images/file_icon/doc.svg",tag_list_details: [
        {
          tag_id: 1,
          title: "Policy Document",
          tag_type: "public",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 2,
          title: "Agreement",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 3,
          title: "Contract",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 4,
          title: "Invoice",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 5,
          title: "Draft",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
      ] },
    { id: 6, originalname: "Server Config.zipf", FileSize: "40Kb", created_at: "25 May 2023", uploaded_by: "Md. Alomgir", RoomName: "Work_Freeli_Web",
      file_category:"DOC", fileExtention: "/media/images/file_icon/doc.svg",tag_list_details: [
        {
          tag_id: 1,
          title: "Policy Document",
          tag_type: "public",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 2,
          title: "Agreement",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 3,
          title: "Contract",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 4,
          title: "Invoice",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 5,
          title: "Draft",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
      ] },
    { id: 7, originalname: "Server Config.zipg", FileSize: "74Kb", created_at: "26 May 2023", uploaded_by: "Md. Mahfuzur", RoomName: "Work_Freeli_Web",
      file_category:"DOC", fileExtention: "/media/images/file_icon/doc.svg",tag_list_details: [
        {
          tag_id: 1,
          title: "Policy Document",
          tag_type: "public",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 2,
          title: "Agreement",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 3,
          title: "Contract",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 4,
          title: "Invoice",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 5,
          title: "Draft",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
      ] },
    { id: 8, originalname: "Server Config.ziph", FileSize: "40Kb", created_at: "26 May 2023", uploaded_by: "Md. Mahfuzur", RoomName: "Work_Freeli_Web",
      file_category:"DOC", fileExtention: "/media/images/file_icon/doc.svg",tag_list_details: [
        {
          tag_id: 1,
          title: "Policy Document",
          tag_type: "public",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 2,
          title: "Agreement",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 3,
          title: "Contract",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 4,
          title: "Invoice",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 5,
          title: "Draft",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
      ] },
    { id: 9, originalname: "Server Config.zipi", FileSize: "74Kb", created_at: "27 May 2023", uploaded_by: "Md. Mahfuzur", RoomName: "Work_Freeli_Web",
      file_category:"DOC", fileExtention: "/media/images/file_icon/doc.svg",tag_list_details: [
        {
          tag_id: 1,
          title: "Policy Document",
          tag_type: "public",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 2,
          title: "Agreement",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 3,
          title: "Contract",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 4,
          title: "Invoice",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 5,
          title: "Draft",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
      ] },
    { id: 10, originalname: "Server Config.zipj", FileSize: "40Kb", created_at: "27 May 2023", uploaded_by: "Md. Mahfuzur", RoomName: "Work_Freeli_Web",
      file_category:"DOC", fileExtention: "/media/images/file_icon/doc.svg",tag_list_details: [
        {
          tag_id: 1,
          title: "Policy Document",
          tag_type: "public",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 2,
          title: "Agreement",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 3,
          title: "Contract",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 4,
          title: "Invoice",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 5,
          title: "Draft",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
      ] },
    { id: 11, originalname: "Server Config.zipk", FileSize: "40Kb", created_at: "27 May 2023", uploaded_by: "Md. Mahfuzur", RoomName: "Work_Freeli_Web",
      file_category:"DOC", fileExtention: "/media/images/file_icon/doc.svg",tag_list_details: [
        {
          tag_id: 1,
          title: "Policy Document",
          tag_type: "public",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 2,
          title: "Agreement",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 3,
          title: "Contract",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 4,
          title: "Invoice",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 5,
          title: "Draft",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
      ] },
    { id: 12, originalname: "Server Config.zipl", FileSize: "40Kb", created_at: "27 May 2023", uploaded_by: "Md. Mahfuzur", RoomName: "Work_Freeli_Web",
      file_category:"DOC", fileExtention: "/media/images/file_icon/doc.svg",tag_list_details: [
        {
          tag_id: 1,
          title: "Policy Document",
          tag_type: "public",
          use_count: 12,
          tag_color: "#023d67",
        },
        {
          tag_id: 2,
          title: "Agreement",
          tag_type: "public",
          use_count: 13,
          tag_color: "#023d67",
        },
        {
          tag_id: 3,
          title: "Contract",
          tag_type: "private",
          use_count: 12,
          tag_color: "#023d67",
        },
        
      ] },
   
  ]
  const [files, setFiles] = useState(data);
  const [input_val, setInputVal] = useState("");
  const [search_val, setSearch_val] = useState("Advanced search");
  const [activesortCol, setActivesortCol] = useState("created_at");
  const [activeOrdering, setActiveOrdering] = useState("desc");
  const options = [
    { label: "All file(s)", value: "all", customeName: "Total file(s)" },
    { label: "Doc(s)", value: "docs", customeName: "Doc(s)" },
    { label: "Image(s)", value: "image", customeName: "Image(s)" },
    { label: "Voice(s)", value: "voice", customeName: "Voice(s)" },
    { label: "Audio(s)", value: "audio", customeName: "Audio(s)" },
    { label: "Video(s)", value: "video", customeName: "Video(s)" },
    {
      label: "Shared by URL(s)",
      value: "share",
      customeName: "Shared by URL(s)",
    },
  ];
  const [isOpen, setOpen] = useState(false);
  // const [selectedItem, setSelectedItem] = useState(
  //   window.triggerSearch === "" || window.triggerSearch === undefined
  //     ? "all"
  //     : window.triggerSearch
  // );
  const toggleDropdown = () => setOpen(!isOpen);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [selectedTagsIndex, setSelectedTagsIndex] = useState(-1);
  const [selectButton, setSelectButton] = useState("filesText");
  const [petchLoading, setpetchLoading] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false);
  const years = range(2000, getYear(new Date()) + 10, 1);
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
  const [expandTotal] = useState(true);

  const [expandTotalLoader, setExpandTotalLoader] = useState(false);
  const [expanSummary, setExpandSummary] = useState(false);
  const [expandResult, setExpandResult] = useState({
    total: 0,
    other: 0,
    image: 0,
    audio: 0,
    video: 0,
    voice: 0,
    share: 0,
  });
  // const [selectItemText, setSelectItemText] = useState(
  //   window.triggerSearch === "" || window.triggerSearch === undefined
  //     ? "all"
  //     : window.triggerSearch
  // );

  const sorting = (e, type, class_name) => {
    let actionType = class_name === "desc" ? true : false;
    setActivesortCol(type);
    if (actionType) {
      setActiveOrdering("asce");
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
      };
    } else {

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
      // setActivesort(type);
    }
  };
  const [countFilter, setFilterCount] = useState(0);
  useEffect(() => {
    if (countFilter > 0 && petchLoading) {
      // getdata('initial', false);
    }
  }, [countFilter, petchLoading]);
  const handleItemClick = (value) => {
    if (value !== "share") setSelectedItem(value);
    setSelectItemText(value);
    setFilterCount(countFilter + 1);
    setOpen(false);
    if (value === "share") setSelectButton(value);
    // // console.log("11111111",value);
  };
  const searchByRoom = (v) => {
    setSearchByRoomVal(v);
    if (v !== "") {
      setRoomListPopup(true);
    } else {
      setRoomListPopup(false);
    }
  };

  const searchByTag = (v) => {
    setSearchByTagVal(v);
    if (v !== "") {
      setTagListPopup(true);
    } else {
      setTagListPopup(false);
    }
  };

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
  const showHoverItemHandler = (i) => {
    setSelectedItemIndex(i);
  };
  const showHoverTagsHandler = (i) => {
    setSelectedTagsIndex(i);
  };

  const hideHoverTagsHandler = () => {
    // setOverShowTags(false)
    setSelectedTagsIndex(-1);
  };

  const resetFun = () => {
    setError1(false);
    setError2(false);
    setSearchByRoomVal("");
    setSearchByTagVal("");
    setsearchByUploaderVal("");
    setInputVal("");
    setSelectedRooms([]);
    setSelectedTags([]);
    setSelectedCreators([]);
    setStartDate("");
    setEndDate("");
    setSelectedItem("all");
    setResetCounter(resetCounter + 1);
    setSelectItemText("all");
    // window.triggerSearch = "";
  };
  const searchByUploader = (v) => {
    setsearchByUploaderVal(v);
    if (v !== "") {
      setuploaderListPopup(true);
    } else {
      setuploaderListPopup(false);
    }
  };
  useEffect(() => {
    if (searchByUploaderVal === "") {
      setUploader_list("");
    } else {
      setUploader_list("");
    }
  }, [searchByUploaderVal]);
  const selectCreate = (v) => {
    // // console.log(175, v)
    setsearchByUploaderVal("");
    setuploaderListPopup(false);
    setSelectedCreators([v.id]);
    // // console.log(5555,selectedCreators)
  };

  useEffect(() => {
    setpetchLoading(true);
    // window.triggerSearch = "";
  }, [ resetCounter ]);

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
        selectedTags.length === 0
      ) {
        // // console.log("startDate", startDate);
        setButtonStatus(false);
        // getdata('initial')
      } else {
        setButtonStatus(true);
      }
    } else {
      if (
        startDate === "" &&
        endDate === "" &&
        // selectedItem === 'all' &&
        input_val === "" &&
        searchByRoomVal === "" &&
        searchByTagVal === "" &&
        selectedTags.length === 0 &&
        selectedCreators.length < 1
      ) {
        // // console.log("startDate", startDate);
        setButtonStatus(false);
        //getdata('initial')
      } else {
        setButtonStatus(true);
      }
    }
  }, [
    startDate,
    endDate,
    input_val,
    searchByRoomVal,
    searchByTagVal,
    selectedTags,
    selectedRooms,
    selectedCreators,
    selectedItem,
    petchLoading,
    props.conversation_gallery,
    resetCounter,
  ]);

  // useEffect(() => {
  //   if (petchLoading) {
  //     resetFun();
  //   }
  // }, [search_val, petchLoading]);

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
          <span className="goIconArea">
            <span
              className="goText"
              style={{
                position: "relative",
                top: "0px",
              }}
            >
              Clear
            </span>
            <BiReset size={20} className="arrow_go_icon clear" />
          </span>
        </div>
        <div
          className="buttonsDesign go_button"
          //onClick={() => getdata('filter')}
        >
          <span className="goIconArea">
            <span
              className="goText"
              style={{
                position: "relative",
                top: "0px",
              }}
            >
              Search
            </span>
            <BsArrowRight size={20} className="arrow_go_icon" />
          </span>
        </div>
      </div>
    );
  };

  const keyPress = useCallback((event) => {
    if (event.key === "Escape") {
      setRoomListPopup(false);
      setuploaderListPopup(false);
      setTagListPopup(false);
      setOpen(false);
      setSelectedItemIndex(-1);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyPress, false);

    return () => {
      document.removeEventListener("keydown", keyPress, false);
    };
  }, [keyPress]);
  useEffect(() => {
    if (resetCounter > 0) {
      setpageState(null);
      // getdata('initial');
    }
  }, [resetCounter]);

  const fileTag = (event, file) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
   
  };

  const BlurEffect = (type) => {
    setTimeout(() => {
      if (type === "searchByRoom") {
        setRoomListPopup(false);
      }

      if (type === "searchByTag") {
        setTagListPopup(false);
      }
      if (type === "searchByUploaderVal") {
        setuploaderListPopup(false);
      }
    }, 500);
  };
  const removeTags = (str) => {
    if (str === null || str === "") return false;
    else str = str.toString();
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  };
  const toggleItemActive = (itemId) => {
    setFiles((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, active: !item.active } : item
      )
    );
  };
  return (
    <>
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
                    style={{
                      borderBottom: "unset",
                      position: "relative",
                      width: "98%",
                    }}
                  >
                    <input
                      className="_inputSearchBar"
                      type="text"
                      id="_inputBar_tagdetails"
                      placeholder="Search"
                      autoFocus
                      value={input_val}
                      onChange={(event) => {
                        setInputVal(event.target.value);
                      }}
                      onKeyUp={(event) => KeyUpHandle(event)}
                      style={{ marginRight: "0px" }}
                    />
                    {input_val === "" ? (
                      <div
                        style={{
                          right: "104px",
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
                        }}
                        data-for="top_head"
                        data-tip="Clear Search"
                      ></span>
                    )}

                    <div
                      className="SearchButton"
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
                      <MdKeyboardArrowRight size={16} />
                    </span>
                  </div>
                  <div
                    className="Advance_search_list Advance_item"
                    name="fontSize"
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    <div className="custom_dropdown">
                      <OutsideClickHandler
                        onOutsideClick={() => setOpen(false)}
                      >
                        <div
                          className="custom_dropdown-header"
                          onClick={toggleDropdown}
                        >
                          {options.find((i) => i.value === selectedItem).label}
                          <i
                            className={`fa fa-chevron-right custom_icon ${
                              isOpen && "open"
                            }`}
                          ></i>
                        </div>

                        <div
                          className={`custom_dropdown-body ${isOpen && "open"}`}
                        >
                          {options.map((item) => (
                            <div
                              className={classNames(
                                "custom_dropdown-item",
                                item.value === selectedItem ? "selected" : ""
                              )}
                              onClick={(e) => {
                                handleItemClick(item.value);
                              }}
                              key={item.value}
                            >
                             
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
                      <VscCalendar className="iconColor" size={22} />
                    </span>
                    {/* <span className='fromDate'>From </span> */}
                    <div className="fromDate_One">

                      <DatePicker
                        className={
                          error1 === true
                            ? "start_Date errorDate"
                            : "start_Date"
                        }
                        dateFormat="yyyy-MM-dd"
                        placeholderText="From   YYYY-MM-DD"

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
                              name="decreaseMonth"
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
                              name="inecreaseMonth"
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
                            toast.error(
                              "Start date should be smaller than  or equal to end date",
                              { duration: 4000 }
                            );
                            setStartDate("");
                            setError1(true);
                            setTimeout(() => {
                              setError1(false);
                            }, 4000);
                          } else {
                            setStartDate(date);
                            setError1(false);
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
                    </div>
                    <span className="calenderIcon2">
                      <VscCalendar className="iconColor" size={22} />
                    </span>
                    <div className="fromDate_two">
                      <DatePicker
                        className={
                          error2 === true
                            ? "start_Date errorDate"
                            : "start_Date"
                        }
                        dateFormat="yyyy-MM-dd"
                        placeholderText="To    YYYY-MM-DD"
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
                            <div>
                              {" "}
                              <button
                                name="deecreasedMonth"
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
                            </div>

                            <button
                              name="increasedMonth"
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
                            toast.error(
                              "End date should be greater than  or equal to start date",
                              { duration: 4000 }
                            );
                            setError2(true);
                            setEndDate("");
                            setTimeout(() => {
                              setError2(false);
                            }, 4000);
                          } else {
                            setEndDate(date);
                            setError2(false);
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
                  <div
                    className="searchAndFilterBar LeftSide"
                    style={{ position: "relative" }}
                  >
                    {from_room === "" ? (
                      <>
                        <div className="searchAndFilter">
                          <OutsideClickHandler
                            onOutsideClick={() => setRoomListPopup(false)}
                          >
                            <input
                              value={searchByRoomVal}
                              onFocus={() => setRoomListPopup(true)}
                              onChange={(event) =>
                                searchByRoom(event.target.value)
                              }
                              onBlur={() => BlurEffect("searchByRoom")}
                              className="_inputBar searchLeft"
                              type="text"
                              placeholder="Search by room"
                            />
                            {searchByRoomVal === "" ? (
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
                                onClick={(event) => searchByRoom("")}
                                data-for="top_head"
                                data-tip="Clear Search"
                              ></span>
                            )}
                            {roomListPopup ? (
                              <div className="tag_room_list">
                                {roomList.map((v) => (
                                  <p
                                    className="_tag_rooms"
                                    onClick={() => selectRooms(v)}
                                    key={"conv_" + v.conversation_id}
                                  >
                                    {v.title}
                                  </p>
                                ))}
                                {roomList.length === 0 && (
                                  <div className="tagNotFound">Not found</div>
                                )}
                              </div>
                            ) : (
                              ""
                            )}
                          </OutsideClickHandler>
                        </div>
                        <div className="selectedRoomCont">

                          {roomList
                            .filter(
                              (r) =>
                                selectedRooms.indexOf(r.conversation_id) > -1
                            )
                            .map((v) => (
                              <span
                                className="tags_Color"
                                key={"conv1" + v.conversation_id}
                              >
                                {v.title}{" "}
                                <BsXLg
                                  size={14}
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
                                  onClick={() => {
                                    setSelectedRooms(
                                      selectedRooms.filter(
                                        (r) => r !== v.conversation_id
                                      )
                                    );
                                  }}
                                />
                              </span>
                            ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="searchAndFilter">
                          <OutsideClickHandler
                            onOutsideClick={() => setuploaderListPopup(false)}
                          >
                            <input
                              value={searchByUploaderVal}
                              onChange={(event) =>
                                searchByUploader(event.target.value)
                              }
                              className="_inputBar searchRight"
                              type="text"
                              onFocus={() => setuploaderListPopup(true)}
                              onBlur={() => BlurEffect("searchByUploaderVal")}
                              placeholder="Uploaded By"
                            />
                            {searchByUploaderVal === "" ? (
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
                                style={{ right: "34px", top: "21px" }}
                                className="clearAllSrcTest"
                                onClick={(event) => searchByUploader("")}
                                data-for="top_head"
                                data-tip="Clear Search"
                              ></span>
                            )}
                            {uploaderListPopup && (
                              <div className="tag_room_list">
                                {Uploader_list.filter(
                                  (e) =>
                                    (e.l_show === undefined || e.l_show) &&
                                    selectedCreators.indexOf(e.id) === -1
                                ).map((v) => (
                                  <p
                                    className="_tag_rooms"
                                    key={"tag" + v.id}
                                    onClick={() => selectCreate(v)}
                                  >
                                    {v.firstname + " " + v.lastname}
                                  </p>
                                ))}
                                {Uploader_list.filter(
                                  (e) =>
                                    (e.l_show === undefined || e.l_show) &&
                                    selectedCreators.indexOf(e.id) === -1
                                ).length === 0 && (
                                  <div className="tagNotFound">Not found</div>
                                )}
                              </div>
                            )}
                          </OutsideClickHandler>
                        </div>
                        <div className="selectedRoomCont">
                          {Uploader_list.filter(
                            (r) => selectedCreators.indexOf(r.id) > -1
                          ).map((v) => (
                            <span
                              className="tags_Color"
                              id="selectedCreatorss"
                              key={"tag1" + v.id}
                            >
                              {v.firstname + " " + v.lastname}
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
                                  setSelectedCreators(
                                    selectedCreators.filter((r) => r !== v.id)
                                  );

                                }}
                              />
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <div
                    className="searchAndFilterBar rightSide"
                    style={{ position: "relative" }}
                  >
                    <div className="searchAndFilter">
                      <OutsideClickHandler
                        onOutsideClick={() => setTagListPopup(false)}
                      >
                        <input
                          value={searchByTagVal}
                          onChange={(event) => searchByTag(event.target.value)}
                          onFocus={() => setTagListPopup(true)}
                          className="_inputBar searchRight"
                          type="text"
                          onBlur={() => BlurEffect("searchByTag")}
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
                            onClick={(event) => searchByTag("")}
                            data-for="top_head"
                            data-tip="Clear Search"
                          ></span>
                        )}

                          {tagListPopup ?
                            <div className="tag_room_list">
                              {
                                tag_list.filter(e => selectedTags.indexOf(e.tag_id) === -1 ).map((v) =>
                                  <p className="_tag_rooms" key={'tag' + v.tag_id} onClick={() => selectTags(v)}>{v.title}</p>
                                )
                              }
                              {tag_list.filter(e => selectedTags.indexOf(e.tag_id) === -1 ).length === 0 && <div className="tagNotFound">Not found</div>}
                            </div>
                            : ''}
                      </OutsideClickHandler>
                    </div>
                    <div className="selectedRoomCont">
                        {
                          tag_list.filter(r => selectedTags.indexOf(r.tag_id) > -1).map(v =>
                            <span className="tags_Color" key={'tag1' + v.tag_id}>{v.title}
                              <BsXLg style={{
                                cursor: 'pointer',
                                color: '#000000',
                                position: 'relative',
                                top: '2px',
                                marginLeft: '5px',
                                border: '1px solid #9b9b9b',
                                borderRadius: '50%',
                                padding: '2px'
                              }} size={14} 
                              onClick={() => { setSelectedTags(selectedTags.filter(r => r !== v.tag_id)); }} 
                              
                              />
                            </span>
                          )
                        }
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="searchAndFilter"
                style={{
                  borderBottom: "1px solid #eeeeee",
                  position: "relative",
                  height: "80px",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  className="filesText"
                  style={
                    selectButton === "filesText"
                      ? { backgroundColor: "#0b1f47" }
                      : { backgroundColor: "#318fff" }
                  }
                  onClick={() => {
                    setSelectButton("filesText");
                    handleItemClick("all");
                  }}
                >
                  <MdFolder color="#ffffff" size={14} />
                  <Tooltip placement="top" overlay={<span>Files</span>}>
                    <span>Files</span>
                  </Tooltip>
                </div>
                <div
                  className="starredFiles"
                  style={
                    selectButton === "starredFiles"
                      ? { backgroundColor: "#0b1f47" }
                      : { backgroundColor: "#318fff" }
                  }
                  onClick={() => {
                    setSelectButton("starredFiles");
                    handleItemClick("all");
                  }}
                >
                  <BsStarFill color="#ffffff" size={14} />
                  <Tooltip placement="top" overlay={<span>Starred Files</span>}>
                    <span className="changeColor">Starred Files</span>
                  </Tooltip>
                </div>
                <div
                  className="filesRefType"
                  style={
                    selectButton === "filesRefType"
                      ? { backgroundColor: "#0b1f47" }
                      : { backgroundColor: "#318fff" }
                  }
                  onClick={() => {
                    setSelectButton("filesRefType");
                    handleItemClick("all");
                  }}
                >
                  <MdFolder color="#ffffff" size={14} />
                  <Tooltip
                    placement="top"
                    overlay={<span>Reference Type</span>}
                  >
                    <span>Reference Type</span>
                  </Tooltip>
                </div>
                <div
                  className="filesRefType"
                  style={
                    selectButton === "share"
                      ? { backgroundColor: "#0b1f47" }
                      : { backgroundColor: "#318fff" }
                  }
                  onClick={() => {
                    setSelectButton("share");
                    handleItemClick("all");
                  }}
                >
                  <MdFolder color="#ffffff" size={14} />
                  <Tooltip placement="top" overlay={<span>Shared by URL</span>}>
                    <span>Shared by URL</span>
                  </Tooltip>
                </div>
                <input
                  className="_inputSearchBar"
                  type="text"
                  id="_inputBar_tagdetails"
                  placeholder="Search"
                  value={input_val}
                  onChange={(event) => {
                    setInputVal(event.target.value);
                  }}
                  autoFocus
                  onKeyUp={(event) => KeyUpHandle(event)}
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
        {expandTotal ? (
          ""
        ) : (
          <div className="show_results_eachfiles innerCounter">
            {expanSummary ? (
              <span className="counter_section innnerResult">
                <span
                  className="counterText innnerText"
                  style={{
                    color: "#000000",
                    fontSize: "16px",
                  }}
                >
                  <span className="counterN">
                    {
                      expandResult[
                        selectedItem === "all"
                          ? "total"
                          : selectedItem === "docs"
                          ? "other"
                          : selectedItem
                      ]
                    }
                  </span>
                  {options.find((i) => i.value === selectedItem).customeName}{" "}
                  {" found"}
                </span>
              </span>
            ) : (
              ""
            )}
          </div>
        )}
        {expandTotal ? (
          <div className="show_results_eachfiles">
            {expandTotalLoader ? (
              <span
                className={"btn_loader"}
                style={{
                  width: "158px",
                  float: "left",
                  border: "none",
                  height: "20px",
                }}
              ></span>
            ) : (
              <ul
                className={classNames(
                  "file_count_list",
                  expandTotalLoader ? "blur_effect" : ""
                )}
              >
                <Tooltip placement="top" overlay={<span>All file(s)</span>}>
                  <li
                    className="file_ul_list liststyl"
                    style={
                      selectItemText === "all" || selectedItem === "all"
                        ? { backgroundColor: "#0b1f47" }
                        : { backgroundColor: "#318fff" }
                    }
                    onClick={() => {
                      handleItemClick("all");
                    }}
                  >
                    {/* <li className="file_ul_list liststyl"  onClick={() =>{ handleItemClick('all')}}> */}
                    <span className="file_count">All file(s)</span>
                    <span className="file_count_num">
                      {" "}
                      <span>{expandResult.total}</span>{" "}
                    </span>
                  </li>
                </Tooltip>
                <Tooltip placement="top" overlay={<span>Document(s)</span>}>
                  <li
                    className="file_ul_list liststyl"
                    style={
                      selectItemText === "docs" || selectedItem === "docs"
                        ? { backgroundColor: "#0b1f47" }
                        : { backgroundColor: "#318fff" }
                    }
                    onClick={() => {
                      handleItemClick("docs");
                    }}
                  >
                    <span className="file_count"> Doc(s)</span>
                    <span className="file_count_num">
                      <span>{expandResult.other}</span>
                    </span>
                  </li>
                </Tooltip>
                <Tooltip placement="top" overlay={<span>Image(s)</span>}>
                  <li
                    className="file_ul_list liststyl"
                    style={
                      selectItemText === "image" || selectedItem === "image"
                        ? { backgroundColor: "#0b1f47" }
                        : { backgroundColor: "#318fff" }
                    }
                    onClick={() => {
                      handleItemClick("image");
                    }}
                  >
                    <span className="file_count">Image(s)</span>

                    <span className="file_count_num">
                      <span> {expandResult.image}</span>
                    </span>
                  </li>
                </Tooltip>
                <Tooltip placement="top" overlay={<span>Voice(s)</span>}>
                  <li
                    className="file_ul_list liststyl"
                    style={
                      selectItemText === "voice" || selectedItem === "voice"
                        ? { backgroundColor: "#0b1f47" }
                        : { backgroundColor: "#318fff" }
                    }
                    onClick={() => {
                      handleItemClick("voice");
                    }}
                  >
                    <span className="file_count">Voice(s)</span>

                    <span className="file_count_num">
                      {" "}
                      <span>{expandResult.voice}</span>
                    </span>
                  </li>
                </Tooltip>
                <Tooltip placement="top" overlay={<span>Audio(s)</span>}>
                  <li
                    className="file_ul_list liststyl"
                    style={
                      selectItemText === "audio" || selectedItem === "audio"
                        ? { backgroundColor: "#0b1f47" }
                        : { backgroundColor: "#318fff" }
                    }
                    onClick={() => {
                      handleItemClick("audio");
                    }}
                  >
                    <span className="file_count">Audio(s)</span>

                    <span className="file_count_num">
                      {" "}
                      <span>{expandResult.audio}</span>
                    </span>
                  </li>
                </Tooltip>
                <Tooltip placement="top" overlay={<span>Video(s)</span>}>
                  <li
                    className="file_ul_list liststyl"
                    style={
                      selectItemText === "video" || selectedItem === "video"
                        ? { backgroundColor: "#0b1f47" }
                        : { backgroundColor: "#318fff" }
                    }
                    onClick={() => {
                      handleItemClick("video");
                    }}
                  >
                    <span className="file_count ">Video(s)</span>

                    <span className="file_count_num">
                      {" "}
                      <span>{expandResult.video}</span>
                    </span>
                  </li>
                </Tooltip>
                <Tooltip placement="top" overlay={<span>Refresh</span>}>
                  <li
                    className="file_ul_list refreshIco"
                  ></li>
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
            style={{ height: "calc(100vh - 328px)" }}
          ></div>
        ) : (
          <div className="tagFlieList_top">
            <div className="taskListTableHead">
              <ul
                className="fileHeadRow"
                style={{ borderTop: "1px solid rgb(229, 238, 244)" }}
              >
                <li className="_afileMark"></li>
                <li
                  className={classNames(
                    "_afileName ",
                    activesortCol === "originalname"
                      ? "sort_active " + activeOrdering
                      : "desc"
                  )}
                  // onClick={(event) => sorting(event, 'originalname', activesortCol === 'originalname' ? activeOrdering : 'desc')}

                  style={{
                    justifyContent: "flex-start",
                    paddingLeft: "8px",
                    width: "45%",
                    paddingRight: "0px",
                    cursor: "default",
                  }}
                >
                  <span
                    className="sortIcons"
                    style={{ cursor: "pointer" }}
                    onClick={(event) =>
                      sorting(
                        event,
                        "originalname",
                        activesortCol === "originalname"
                          ? activeOrdering
                          : "desc"
                      )
                    }
                  ></span>
                  <span
                    className="columnNum"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    File name
                  </span>
                 
                </li>
                <li
                  className="_afileSize"
                  style={{
                    justifyContent: "flex-start",
                    paddingLeft: "0px",
                    width: "5%",
                    paddingRight: "30px",
                    cursor: "default",
                  }}
                >
                  <span className="columnNum changeColor">Starred</span>
                </li>

                <li
                  className={classNames(
                    "_afileSize",
                    activesortCol === "file_size"
                      ? "sort_active " + activeOrdering
                      : "desc"
                  )}
                  style={{
                    width: "7%",
                    marginLeft: "0px",
                    paddingLeft: "16px",
                    cursor: "default",
                  }}
                >
                  <span className="columnNum changeColor">Size</span>
                </li>
                <li
                  className={classNames(
                    "_afileDate ",
                    activesortCol === "created_at"
                      ? "sort_active " + activeOrdering
                      : "desc"
                  )}
                  style={{
                    justifyContent: "flex-start",
                    width: "10%",
                    paddingLeft: "0px",
                    cursor: "default",
                  }}
                >
                  <span className="columnNum">Date</span>
                </li>
                <li
                  className="_afileDate sort_active desc"
                  style={{
                    justifyContent: "flex-start",
                    width: "15%",
                    paddingLeft: "0px",
                    paddingRight: "30px",
                    cursor: "default",
                  }}
                >
                  <span className="columnNum">Uploaded by</span>
                </li>
                <li
                  className="_afileSize"
                  style={{
                    justifyContent: "flex-start",
                    width: "9%",
                    paddingLeft: "0",
                    paddingRight: "0",
                    flexBasis: "9%",
                    cursor: "default",
                  }}
                >
                  <span className="columnNum changeColor">Reference ID</span>
                </li>
                <li
                  className="_afileSize"
                  style={{
                    justifyContent: "flex-start",
                    width: "6%",
                    paddingLeft: "0",
                    paddingRight: "0px",
                    cursor: "default",
                    flexBasis: "6%",
                  }}
                >
                  <span className="columnNum changeColor">Tags</span>
                </li>
              </ul>
              <div
                className={classNames(
                  "fileBody_area",
                  search_val === "Basic search"
                    ? "advanceFlieList_body"
                    : "advanceFlieList_full_body"
                )}
                id="infiniteScroll"
              >
                {files.length > 0 ? (
                  files.map((v, index) => (
                    <ul
                      className="fileBodyRow inFileTagRow"
                      style={{
                        padding: "10px 0px",
                        height: "auto",
                        position: "relative",
                      }}
                      key={v.id + "_file"}
                      id={v.id + "_file_id"}
                    >
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
                            <h2 className="popupTitle tagfileTitle" style={{}}>
                              File tags
                            </h2>
                            {v.tag_list_details
                              .filter((t) => t.title !== "UNTAGGED FILES")
                              .map((tag) => (
                                <span
                                  key={tag.tag_id}
                                  style={{ background: tag.tag_color }}
                                >
                                  {tag.title}
                                </span>
                              ))}
                          </div>
                        </div>
                      )}
                      {selectedTagsIndex !== index ? (
                        ""
                      ) : (
                        <>
                          <div
                            className="tagareaList threeTags"
                            style={{
                              right: "17%",
                              top: "3px",
                              maxWidth: "500px",
                              position: "absolute",
                              paddingTop: "20px",
                              height: "auto",
                              padding: "1px 15px 5px 10px",
                              minWidth: "150px",
                            }}
                          >

                            <h2
                              className="popupTitle tagfileTitle"
                              style={{
                                marginBottom: "0px",
                              }}
                            >
                              File tags
                            </h2>
                            {v.tag_list_details
                              .filter((t) => t.title !== "UNTAGGED FILES")
                              .map((tag) => (
                                <span
                                  key={tag.tag_id}
                                  style={{ background: tag.tag_color }}
                                >
                                  {tag.title}
                                </span>
                              ))}
                          </div>
                        </>
                      )}

                      {/* activeItem === selectedFiles.id ? 'ovalActive' : '' */}
                      <li 
                        className="_afileMark ovalClick"
                        onClick={() => setMarkIteam(markIteam.indexOf(index) > -1 ? markIteam.filter((m) => m !== index)
                          : [...markIteam, index])}
                      >
                        <span
                          className={classNames("ovalCircle", markIteam.indexOf(index) > -1 ? "ovalActive":"")}
                        ></span>
                      </li>
                      <li
                        
                        className="_afileName fileName_list"
                        style={{
                          justifyContent: "flex-start",
                          paddingLeft: "8px",
                          width: "45%",
                          paddingRight: "30px",
                          overflow: "hidden",
                        }}
                      >
                        <span
                          className="_fileIcon"
                          style={{ marginRight: "10px" }}
                        >

                          <Image
                            src={v.fileExtention}
                            width={50}
                            height={50}
                            alt="galleryImage"
                          />
                        </span>
                        <div className="filenameAndIcon">
                          {v.originalname.length < 60 ? (
                            <span
                              className="workfreeliFileText"
                              style={{
                                marginLeft: "0px",
                                top: "-10px",
                                width: "auto",
                              }}
                            >
                              {removeTags(v.originalname)}
                            </span>
                          ) : (
                            <Tooltip
                              placement="top"
                              overlay={<span>{v.originalname} </span>}
                            >
                              <span
                                className="workfreeliFileText"
                                style={{
                                  marginLeft: "0px",
                                  top: "-10px",
                                  width: "auto",
                                }}
                              >
                                {v.originalname.length < 60
                                  ? `${removeTags(v.originalname)}`
                                  : `${removeTags(v.originalname).substring(
                                      0,
                                      59
                                    )}...`}
                              </span>
                            </Tooltip>
                          )}
                          {v.url_short_id !== null && v.url_short_id !== "" ? (
                            <span
                              style={{
                                width: "auto",
                                position: "relative",
                                top: "-5px",
                              }}
                              className="sharedIcon"
                            ></span>
                          ) : (
                            ""
                          )}
                        </div>
                        <p className="workfreeliDOCX">{v.file_category}</p>

                        <div
                          className={classNames(
                            "gFileHoverLists",
                            v.url_short_id !== null && v.url_short_id !== ""
                              ? "alreadyShared"
                              : ""
                          )}
                          style={{ right: "25px", top: "0px" }}
                        >
                          <Tooltip
                            placement="top"
                            overlay={<span>Add a tag</span>}
                          >
                            <div
                              data-for={v.id}
                              className="fileOpts tag_opts"
                              onClick={(e) => {
                                fileTag(e, v);
                              }}
                            ></div>
                          </Tooltip>

                


                          <Tooltip
                            placement="top"
                            overlay={<span>Download</span>}
                          >
                            <div
                              data-for={v.id}
                              className="fileOpts download_opts"
                              onClick={(e) =>
                                AfileDownload(e, v.location, v.originalname)
                              }
                            ></div>
                          </Tooltip>
                        
                            <Tooltip
                              placement="top"
                              overlay={<span>Delete</span>}
                            >
                              <div className="fileOpts delete_opts"></div>
                            </Tooltip>
                          
                        </div>
                      </li>
                      <li
                        className="_afileSize"
                        style={{
                          width: "5%",
                          // transform: 'translate(23%)',
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onClick={() => starMarkFile(v)}
                      >
                        <BsStarFill
                          className="startedMark"
                          color={
                            "#febf3a"
                             
                          }
                          size={16}
                        />
                      </li>
                      <li className="_afileSize" style={{ width: "7%" }}>
                        <span
                          style={{
                            fontWeight: "normal",
                            color: "#032e84",
                            fontSize: "12px",
                            paddingLeft: "20px",
                          }}
                          className=""
                        >
                          {" "}
                          {v.FileSize}
                        </span>
                      </li>
                      <li className="_afileSize" style={{ width: "10%" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: "7px 0px",
                            paddingLeft: "8px",
                          }}
                        >
                          <p className="linkTextTable newText">
                            <Moment format="DD/MM/YYYY">{v.created_at}</Moment>
                          </p>
                          <p className="linkTextTable newText">
                            <Moment format="h:mm a">{v.created_at}</Moment>
                          </p>
                        </div>
                      </li>
                      <li
                        className="_afileSize uploadedByClm"
                        style={{ width: "15%" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: "7px 0px",
                            paddingLeft: "8px",
                          }}
                        >
                          <p className="linkTextTable newText">
                            {v.uploaded_by}
                          </p>
                          <p className="linkTextTable newText">
                            {v.conversation_title}
                          </p>
                        </div>
                      </li>
                      <li className="_afileSize" style={{ width: "9%" }}>
                          <span
                            style={{ backgroundColor: "#732be2" }}
                            className="fileRef"
                          >
                            {" "}
                            Ref. ID: {"55451"}
                          </span>
                        
                      </li>
                      <li
                        className="_afileSize"
                        style={{ flexBasis: "6%", paddingLeft: "10px" }}
                      >
                        <p
                          className="timeAndDate"
                          style={{
                            paddingLeft: "10px",
                          }}
                        >
                          {v.tag_list_details.filter(
                            (t) => t.title !== "UNTAGGED FILES"
                          ).length > 4
                            ? v.tag_list_details.filter(
                                (t) => t.title !== "UNTAGGED FILES"
                              ).length
                            : ""}
                          {/* {v.tag_list_details.length} */}
                        </p>
                        {v.tag_list_details.filter(
                          (t) => t.title !== "UNTAGGED FILES"
                        ).length > 4 ? (
                          <Tooltip
                            placement="left"
                            overlay={<span>Click to view all tags</span>}
                          >
                            <ul
                              className="colorGroup"
                              onClick={(e) => {
                                showHoverItemHandler(index);
                              }}
                            >
                              {v.tag_list_details
                                .filter((t) => t.title !== "UNTAGGED FILES")
                                .slice(0, 4)
                                .map((tag) => (
                                  <li
                                    key={tag.tag_id}
                                    className="colorGroupList"
                                    style={{ background: tag.tag_color }}
                                  ></li>
                                ))}
                            </ul>
                          </Tooltip>
                        ) : (
                          <Tooltip
                            placement="top"
                            overlay={<span>File tags</span>}
                          >
                            <ul
                              className="colorGroup"
                              onMouseEnter={(e) => {
                                showHoverTagsHandler(index);
                              }}
                              onMouseLeave={hideHoverTagsHandler}
                              // onClick={(e) => { showHoverTagsHandler(index) }}
                            >
                              {v.tag_list_details
                                .filter((t) => t.title !== "UNTAGGED FILES")
                                .slice(0, 4)
                                .map((tag, i) => (
                                  <li
                                    key={i}
                                    className="colorGroupList"
                                    style={{ background: tag.tag_color }}
                                  ></li>
                                ))}
                            </ul>
                          </Tooltip>
                        )}
                      </li>
                    </ul>
                  ))
                ) : !initialLoader ? (
                  <div
                    className="fileNotFound"
                    style={{
                      height: "calc(100% - 410px)",
                      backgroundColor: "transparent",
                    }}
                  >
                    <h2>No data found matching the criteria! </h2>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TagFiles;
