"use client"
import React, { useEffect, useState, useCallback } from "react";
import toast from 'react-hot-toast';
import OutsideClickHandler from "react-outside-click-handler";;
import classNames from "classnames";
import {
  BsXLg, BsArrowRight,
  //  BsPlus, BsStar, BsStarFill 
} from "react-icons/bs";
// import { MdFolder } from "react-icons/md";
import Moment from 'react-moment';
import Tooltip from 'rc-tooltip';

import DatePicker from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";

import {
  BiReset,
  //  BiMinus
} from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";
import {
  //  MdRefresh,
  MdKeyboardArrowRight, MdKeyboardArrowDown
} from "react-icons/md";




function Links(props) {
  const data =
    [
      {
        id: 1,
        title: "Policy Document",
        url: "public",
        uploaded_by: "Mahfuzur Rahman",
        conversation_title: "Custom room",
        created_at: "24 May 2023"
      },

    ];
  const [linksData, setLinksData] = useState(data)

  const [resetCounter, setResetCounter] = useState(0);
  const [roomListPopup, setRoomListPopup] = useState(false);
  const [uploaderListPopup, setuploaderListPopup] = useState(false);
  const from_room = props.conversation_gallery ? props.logindata.active_conv.details.conversation_id : '';
  const [selectedRooms, setSelectedRooms] = useState(props.conversation_gallery ? [props.logindata.active_conv.details.conversation_id] : []);
  const [selectedCreators, setSelectedCreators] = useState([]);
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
  const [Uploader_list, setUploader_list] = useState([
    {
      id: '1',
      firstname: 'Manzurul',
      lastname:'Alam'

    },
    {
      id: '2',
      firstname: 'Sujon',
      lastname: 'Express'

    },
    {
      id: '3',
      firstname: 'Sohel',
      lastname: 'Rana'

    },


  ]);
  const [searchByRoomVal, setSearchByRoomVal] = useState('');
  const [searchByUploaderVal, setsearchByUploaderVal] = useState('');
  // const [pageState, setpageState] = useState(null);
  const [pageState, setpageState] = useState({ page: 0, totalPages: 0, total: 0 });
  const [initialLoader, setInitialLoader] = useState(false)
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [input_val, setInputVal] = useState('');
  const [search_val, setSearch_val] = useState('Advanced search');
  const [activesortCol, setActivesortCol] = useState('created_at');
  const [activeOrdering, setActiveOrdering] = useState('desc');
  const [, setOpen] = useState(false);
  const [redirectCovId,] = useState(null);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);


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

  const [countSort, setCountSort] = useState(0)
  const sorting = (e, type, class_name) => {

    let actionType = class_name === 'desc' ? true : false
    setActivesortCol(type)


    if (actionType) { //Ascending Sort
      // console.log('Ascending Sort')
      setActiveOrdering('asce')
      // console.log(1, e.target.classList)

      // if (type === 'file_size') {
      //     setLinksData([...linksData.sort((a, b) => parseFloat(a[type]) - parseFloat(b[type]))])
      // } else {
      //     setLinksData([...linksData.sort((a, b) => a[type].toUpperCase() > b[type].toUpperCase() ? 1 : -1)])
      // }
    } else { //Descending Sort
      // console.log('Descending')
      setActiveOrdering('desc')

      // if (type === 'file_size') {
      //     setLinksData([...linksData.sort((a, b) => parseFloat(b[type]) - parseFloat(a[type]))])
      // } else {
      //     setLinksData([...linksData.sort((a, b) => a[type].toUpperCase() < b[type].toUpperCase() ? 1 : -1)])
      // }
    }
    setCountSort((countSort + 1))
  }
  const resetFun = () => {
    setpageState({ page: 0, totalPages: 0, total: 0 })
    setRoomListPopup(false);
    setError1(false);
    setError2(false);
    setSearchByRoomVal('');
    setsearchByUploaderVal('');
    setInputVal('');
    setSelectedRooms(props.conversation_gallery ? [props.logindata.active_conv.details.conversation_id] : []);
    setSelectedCreators([]);
    setStartDate('');
    setEndDate('');
    setResetCounter((resetCounter + 1))

  }
  // useEffect(() => {
  //   if (search_val !== 'Advanced search') {

  //     resetFun();
  //   }
  // }, [search_val, resetCounter])
  const searchByRoom = (v) => {
    setSearchByRoomVal(v);
    if (v !== '') {
      setRoomListPopup(true)
    } else {
      setRoomListPopup(false)
    }
  }




  useEffect(() => {
    if (searchByRoomVal === '') {
      setRoomList(roomList.map(v => searchByRoomVal === '' ? { ...v, l_show: true } : v))
    } else {
      setRoomList(roomList.map(v => v.title.toLowerCase().indexOf(searchByRoomVal.toLowerCase()) > -1 ? { ...v, l_show: true } : { ...v, l_show: false }))
    }
  }, [searchByRoomVal, roomList]);

  const searchByUploader = (v) => {
    setsearchByUploaderVal(v);
    if (v !== '') {
      setuploaderListPopup(true)
    } else {
      setuploaderListPopup(false)
    }
  }

  useEffect(() => {
    // console.log(193, Uploader_list)
    if (Uploader_list.length === 0) return
    if (searchByUploaderVal === '') {
      setUploader_list(Uploader_list.map(v => searchByUploaderVal === '' ? { ...v, l_show: true } : v))
    } else {
      setUploader_list(Uploader_list.map(v => (v.firstname.toLowerCase().indexOf(searchByUploaderVal.toLowerCase()) > -1 || v.lastname.toLowerCase().indexOf(searchByUploaderVal.toLowerCase()) > -1) ? { ...v, l_show: true } : { ...v, l_show: false }))
    }
    // console.log()
  }, [searchByUploaderVal, Uploader_list]);
  const selectRooms = (v) => {
    setSearchByRoomVal('');
    setRoomListPopup(false);
    setSelectedRooms([...selectedRooms, v.conversation_id]);
  }
  const selectCreate = (v) => {
    // console.log(175, v)
    setsearchByUploaderVal('');
    setuploaderListPopup(false);
    setSelectedCreators([...selectedCreators, v.id]);
  }


  const ButtonArea = () => {
    return (
      <div className='buttonList'>
          <div className={classNames("buttonsDesign reset_button", (selectedRooms.length !== 0 || selectedCreators.length !== 0 || searchByUploaderVal !== "" || startDate !== "" || endDate !== "" || input_val !== "" || searchByRoomVal !== "" ? "" : "dissableReset"))}>
            <span className="goIconArea" onClick={() => { setRoomListPopup(false); resetFun(); }}>
              <span className="goText" style={{
                position: 'relative',
                top: '0px'
              }}>
                Clear
              </span>
              <BiReset size={20} className='arrow_go_icon clear' />
            </span>

          </div>

        <div className='buttonsDesign go_button' >
          <span className="goIconArea">
            <span className="goText" style={{
              position: 'relative',
              top: '0px'
            }}>
              Search
            </span>
            <BsArrowRight size={20} className='arrow_go_icon' />
          </span>

        </div>
      </div>
    )
  }

  const keyPress = useCallback((event) => {
    if (event.key === 'Escape') {
      setRoomListPopup(false);
      setuploaderListPopup(false);
      setOpen(false)
      props.setPopup({ type: 'customTitle', data: false });
      setShowDeletePopup(false);
    }

  }, [])

  const BlurEffect = (type) => {
    setTimeout(() => {
      if (type === 'searchByRoom') {
        setRoomListPopup(false)
      }

      if (type === 'searchByUploaderVal') {
        setuploaderListPopup(false)
      }

    }, 500)

  }

  useEffect(() => {
    document.addEventListener('keydown', keyPress, false)

    return () => {
      document.removeEventListener('keydown', keyPress, false)
    }
  }, [keyPress ])

  const copyToClipBoard = (body) => {
    let Url = body.replace(/(&nbsp;|<([^>]+)>)/ig, '')

    navigator.clipboard.writeText(Url);
    toast.success('Already Copied', { duration: 4000 });
  }

  const deleteLink = (link) => {
    props.set_popup_action_data(link);
    setShowDeletePopup(true);
  }
  const FormatUrl = (url) => {
    // console.log(3333,url)
    let Url = url.replace(/(&nbsp;|<([^>]+)>)/ig, '')
    return Url;
  }
  const KeyUpHandle = (event) => {
    if (event.keyCode === 13) {
    }
  }


  return (
    <>

      <div className="tagFileArea advancedFilePanel">
        {search_val === 'Basic search' ?
          <div className="search_total_area">
            <div className="search_right_area" style={{ flexBasis: "100%" }}>
              <div className="Advance_search" >
                <div className="Advance_search_top newClass " style={{ paddingRight: "0px" }}>
                  <div style={{ flexBasis: "20%" }} onClick={() => { setSearch_val('Advanced search') }} className="Advance_search_text Advance_item">
                    Advanced search <span>
                      
                      <MdKeyboardArrowDown size={16} />
                    </span>
                  </div>
                  <div style={{ flexBasis: "84%", borderBottom: 'unset', borderRight: 'unset', padding: '5px 0px 0 20px' }} className="Advance_search_list Advance_item" name="fontSize">
                    <div className="searchAndFilter" style={{ borderBottom: 'unset', position: 'relative', width: '98%' }}>
                      <input className="_inputSearchBar"
                        type="text"
                        id="_inputBar_tagdetails"
                        placeholder="Search"
                        value={input_val}
                        onChange={(event) => { setInputVal(event.target.value) }}
                        onKeyUp={(event) => KeyUpHandle(event)}
                        style={{ marginRight: '2px' }}
                      />
                      {input_val === '' ?
                        <div style={{
                          right: '108px',
                          height: '31px'
                        }}
                          className="srcBtnSection" data-for="top_head" data-tip="Search"></div>
                        : <span style={{ right: '112px' }} className="clearAllSrcTest" onClick={() => resetFun()} data-for="top_head" data-tip="Clear Search"></span>}

                      <div className="SearchButton" 
                      
                      >Go</div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
          :

          <>
            <div className="search_total_area">
              <div className="search_right_area">
                <div className="Advance_search" >
                  <div className="Advance_search_top newClass" style={{ paddingRight: '5px' }} >
                    <div style={{ flexBasis: "20%" }} onClick={() => { setSearch_val('Basic search') }} className="Advance_search_text Advance_item">
                      Advanced search <span>
                        {/* <BsPlus className='icon_Color' size={14} /> */}
                        <MdKeyboardArrowRight size={16} />
                      </span>
                    </div>

                    <div className="date_area Advance_item responsive_item_link" style={{ flexBasis: '88%', paddingRight: '0px' }}>
                      <span className='calenderIcon'><VscCalendar size={22} /></span>
                      <div className='fromDate_One'>
                        <DatePicker
                          className={error1 === true ? "start_Date errorDate" : "start_Date"}
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
                            <div className="CalendarDiv"

                            >
                              <button name="decreaseMonth" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {"<"}
                              </button>
                              <div > <select
                                value={getYear(date)}
                                onChange={({ target: { value } }) => changeYear(value)}
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

                              <button name="increaseMonth" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
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
                        {
                          startDate !== '' ?
                            <span className='clearInput' onClick={() => { setStartDate('') }}></span>
                            : ''
                        }
                      </div>
                      {/* <span className='fromTo'>To </span> */}
                      <span className='calenderIcon2'><VscCalendar size={22} /></span>
                      <div className='fromDate_two'>

                        <DatePicker
                          className={error2 === true ? "start_Date errorDate" : "start_Date"}
                          dateFormat="yyyy-MM-dd"
                          placeholderText="To   YYYY-MM-DD"

                          renderCustomHeader={({
                            date,
                            changeYear,
                            changeMonth,
                            decreaseMonth,
                            increaseMonth,
                            prevMonthButtonDisabled,
                            nextMonthButtonDisabled,

                          }) => (
                            <div className="CalendarDiv"
                            >
                              <button name="decreasedMonth" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {"<"}
                              </button>
                              <div><select className="yearDate"
                                value={getYear(date)}
                                onChange={({ target: { value } }) => changeYear(value)}
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

                              <button name="increasedMonth" onClick={increaseMonth}
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

                        {endDate !== '' ?
                          <span className='clearInput' onClick={() => { setEndDate('') }}></span>
                          : ''
                        }
                      </div>

                    </div>
                    {/* <div className="reset_icon Advance_item" style={{ flexBasis: '13%' }}>
                                    
                                </div> */}
                  </div>
                  <div className="Advance_search_bottom" >
                    <div className="searchAndFilterBar LeftSide" style={{ position: 'relative' }}>
                      <div className="searchAndFilter">
                        <OutsideClickHandler onOutsideClick={() => setRoomListPopup(false)}>
                          <input value={searchByRoomVal} onChange={(event) => searchByRoom(event.target.value)} onFocus={() => setRoomListPopup(true)} onBlur={() => BlurEffect('searchByRoom')} className="_inputBar searchLeft" type="text" placeholder="Search by room" />
                          {searchByRoomVal === '' ?
                            <div style={{
                              right: '31px',
                              height: '31px',
                              top: '17px'
                            }}
                              className="srcBtnSection" data-for="top_head" data-tip="Search"></div>
                            : <span style={{ right: '34px', top: '21px' }} className="clearAllSrcTest" onClick={(event) => searchByRoom('')} data-for="top_head" data-tip="Clear Search"></span>}

                          {roomListPopup &&
                            <div className="tag_room_list">
                              {
                                roomList.map((v) =>
                                  <p className="_tag_rooms" onClick={() => selectRooms(v)} key={'conv_' + v.conversation_id}>{v.title}</p>
                                )
                              }
                              {roomList.length === 0 && <div className="tagNotFound">Not found</div>}
                            </div>
                          }

                        </OutsideClickHandler>
                      </div>
                      <div className="selectedRoomCont">
                        {
                          roomList.filter(r => selectedRooms.indexOf(r.conversation_id) > -1).map(v =>
                            <span className="tags_Color" key={'conv1' + v.conversation_id}>{v.title} <BsXLg size={14} style={{
                              cursor: 'pointer',
                              color: '#000000',
                              position: 'relative',
                              top: '2px',
                              marginLeft: '5px',
                              border: '1px solid #9b9b9b',
                              borderRadius: '50%',
                              padding: '2px'
                            }} onClick={() => setSelectedRooms(selectedRooms.filter(r => r !== v.conversation_id))} /></span>
                          )
                        }


                      </div>

                    </div>
                    <div className="searchAndFilterBar rightSide" style={{ position: 'relative' }}>
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
                              }} size={14} onClick={() => setSelectedCreators(selectedCreators.filter(r => r !== v.id))} />
                            </span>
                          )
                        }


                      </div>

                    </div>
                  </div>
                </div>
                <div className="searchAndFilter" style={{ borderBottom: '1px solid #eeeeee', position: 'relative', height: '80px' }}>

                  <input className="_inputSearchBar"
                    type="text"
                    id="_inputBar_tagdetails"
                    placeholder="Search"
                    value={input_val}
                    onChange={(event) => { setInputVal(event.target.value) }}
                    onKeyUp={(event) => KeyUpHandle(event)}
                    autoFocus
                  />
                  {input_val === '' ?
                    <div style={{
                      right: '31px',
                      height: '31px'
                    }}
                      className="srcBtnSection" data-for="top_head" data-tip="Search"></div>
                    : <span style={{ right: '32px', top: '24px' }} className="clearAllSrcTest" onClick={(event) => { setInputVal(''); setResetCounter((resetCounter + 1)) }} data-for="top_head" data-tip="Clear Search"></span>}
                </div>
              </div>
              <div className="serarchButton area">
                <ButtonArea />
              </div>
            </div>
          </>
        }

        <div className="tagFlieList_body">
          {initialLoader ? <div className="loaderMain" style={{ height: 'calc(100vh - 328px)' }}></div> :
            <div className="tagFlieList_top">
              <div className="taskListTableHead">
                <ul className="fileHeadRow" style={{ borderTop: '1px solid rgb(229, 238, 244)' }}>

                  <li className="_afileMark">

                  </li>
                  <li
                    className={classNames("_afileName ", activesortCol === 'title'
                      ? 'sort_active ' + activeOrdering : 'desc')}
                    style={{
                      justifyContent: "flex-start",
                      width: "32%",
                      cursor: 'default'
                    }}
                  >
                    <span className="sortIcons" style={{ cursor: 'pointer' }} onClick={(event) => sorting(event, 'title', activesortCol === 'title' ? activeOrdering : 'desc')} ></span>
                    <span className="columnNum" style={{ cursor: 'pointer' }} onClick={(event) => sorting(event, 'title', activesortCol === 'title' ? activeOrdering : 'desc')}>Link title  </span>

                    {/* <span className="total_files" style={{ position: 'absolute', left: '100px',marginLeft:'5px' }}>  {linksData.length} Total Links</span> */}
                  </li>

                  <li className="_afileSize" style={{
                    justifyContent: "flex-start",
                    width: "40%",
                    color: '#858fa3 !important',
                    cursor: 'default',
                    paddingLeft: "3px",
                    // paddingRight: "30px",
                  }}>

                    <span className="columnNum changeColor">Url</span>
                  </li>
                  <span style={{ width: "1%", justifyContent: "flex-start", cursor: 'default' }}></span>
                  <li
                    className={classNames("_afileDate ", activesortCol === 'uploaded_by'
                      ? 'sort_active ' + activeOrdering : 'desc')}
                    // onClick={(event)=>sorting(event,'uploaded_by',activesortCol === 'uploaded_by' ? activeOrdering:'desc')}

                    style={{
                      justifyContent: "flex-start",
                      width: "19%",
                      // paddingLeft: "8px",
                      // paddingRight: "30px",
                      cursor: 'default'

                    }}
                  >
                    {/* <span className="sortIcons"></span> */}
                    <span className="columnNum">Uploaded by</span>
                  </li>

                  <span style={{ width: "1%", justifyContent: "flex-start", }}></span>


                  <li
                    className={classNames("_afileDate ", activesortCol === 'created_at' ? 'sort_active ' + activeOrdering : 'desc')}
                    // onClick={(event)=>sorting(event,'created_at',activesortCol === 'created_at' ? activeOrdering:'desc')}

                    style={{
                      justifyContent: "flex-start",
                      width: "10%",
                      // paddingLeft: "20px",
                      cursor: 'default',
                      flexBasis: '10%'

                    }}
                  >
                    {/* <span className="sortIcons"></span> */}
                    <span className="columnNum" style={{ cursor: 'default' }}>Date</span>

                  </li>

                </ul>
                <div className={search_val === 'Basic search' ? "fileBody_areaLink" : "fileBody_area linkBody"} id="infiniteScroll">
                    {linksData.length > 0 ? linksData.map((link, index) => (
                      link.url !== '' ?
                        <ul
                          className="fileBodyRow inFileLinkRow"
                          style={{
                            padding: "3px 0px",
                            height: "auto",
                            position: 'relative',
                            paddingLeft: '8px'
                          }}
                          key={index}
                        >

                          <li className="_afileMark">

                          </li>
                          <li
                            className="_afileName hoverListsLink"
                            style={{
                              justifyContent: "flex-start",
                              // paddingLeft: "8px",
                              width: "32%",

                            }}
                          >

                            <div className="workfreeliFileTextLink" style={{ marginLeft: "0px", marginTop: '5px', fontSize: '12px !important' }}>
                              {link.title ? link.title : ""}
                              
                            </div>
                            <div
                              className={classNames(
                                "gFileHoverListsLink",

                              )}
                              style={{ right: "45px" }}

                            >
                              <div className="msg_hover_optionsLink">
                                <Tooltip placement="top" overlay={<span>Edit</span>}>
                                  <div className="opts edit_opts opts_show edit_newpen" 
                                  
                                   data-for="rightSection_tooltip" data-tip="forward" ></div>
                                </Tooltip> 

                                <Tooltip placement="top" overlay={<span>Copy to clipboard</span>}>
                                  <div className="opts opts_show copy_opts" data-for="rightSection_tooltip" data-tip="Copy to clipboard"
                                    onClick={() => copyToClipBoard(link.url)}
                                  ></div>
                                </Tooltip>
                                <Tooltip placement="top" overlay={<span>Delete</span>}>
                                  <div onClick={() => deleteLink(link)} class="fileOpts delete_opts"></div>
                                </Tooltip>
                              </div>

                            </div>

                          </li>

                          <li
                            className="_afileSize"
                            style={{ width: "40%" }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '7px 0px' }}>
                              <a href={FormatUrl(link.url)} target="_blank" className="linkTextTable" rel="noopener noreferrer" >{FormatUrl(link.url)}</a>
                            </div>

                          </li>

                          <span style={{ width: "1%" }}></span>
                          <li
                            className="_afileSize"
                            style={{ width: "19%" }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '7px 0px' }}>
                              <p className="linkTextTable">{link.uploaded_by}</p>
                              <p className="linkTextTable" >{"Room : " + link.conversation_title}</p>
                            </div>
                          </li>

                          <span style={{ width: "1%", justifyContent: "flex-start", }}></span>
                          <li
                            className="_afileSize"
                            style={{ width: "10%", flexBasis: '10%' }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '7px 0px', paddingLeft: '5px' }}>
                              <p className="linkTextTable"><Moment format="DD/MM/YYYY">{link.created_at}</Moment></p>
                              <p className="linkTextTable" ><Moment format="h:mm a">{link.created_at}</Moment></p>
                            </div>
                          </li>


                        </ul>
                        : ''

                    )) : !initialLoader ? <div className="fileNotFound" style={{ height: 'calc(100% - 377px)' }}><h2>No data found matching the criteria! </h2></div> : ''}
                  

                </div>
              </div>
            </div>
          }
        </div>


      </div>

    </>
  );
}


export default Links;
