"use client"
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import DatePicker from "react-datepicker";
import toast, { Toaster } from 'react-hot-toast';
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import { BiReset, BiMinus } from "react-icons/bi";
import { BsCheckCircle, BsCheck, BsCheckCircleFill } from "react-icons/bs";
import { VscCalendar, VscWarning } from "react-icons/vsc";
import OutsideClickHandler from "react-outside-click-handler";

import { Scrollbars } from 'react-custom-scrollbars';
import { BsExclamationTriangleFill, BsXLg, BsArrowRight, BsArrowDown } from "react-icons/bs";
import Image from 'next/image';

function TaskUnassigned(props) {
    const [emailInviteObs, seTEmailInviteObs] = useState(false);
    const [ObsListPopup, setObsListPopup] = useState(false);
    const [selectedObs, setSelectedObs] = useState([]);
    const [searchByObsVal, setsearchByObsVal] = useState('');
    const [AddObs, setAddObs] = useState(false);
    const [AddObs1, setAddObs1] = useState(false);
    const [AddObs2, setAddObs2] = useState(false);
    const [AddObs3, setAddObs3] = useState(false);
    const [ViewAddObs, setViewAddObs] = useState(false);


    const selectObs = (v) => {
        setsearchByObsVal('');
        setObsListPopup(false);
        setSelectedObs([...selectedObs, v.id]);
    }
    const [ObserverL, setOvserver] = useState([{
        firstname: 'Dalim ',
        lastname: 'Chowdhury',
        fnln: 'DC',
        img: 'img.png',
        id: '1'
    },
    {
        firstname: 'Alamgir',
        lastname: 'Hossain',
        fnln: 'AH',
        img: 'img.png',
        id: '2'


    },
    {
        firstname: 'Shakil',
        lastname: 'Ahmed',
        fnln: 'SA',
        img: 'img.png',
        id: '3'


    },
    {
        firstname: 'Nayeem',
        lastname: 'Ahmed',
        fnln: 'NA',
        img: 'img.png',
        id: '4'


    },
    {
        firstname: 'Manjurul',
        lastname: 'Ahmed',
        fnln: 'MA',
        img: 'img.png',
        id: '5'


    }
        ,
    {
        firstname: 'Shohel',
        lastname: 'Ahmed',
        fnln: 'SA',
        img: 'img.png',
        id: '6'
    }
        ,
    {
        firstname: 'Robiul',
        lastname: 'Islam',
        fnln: 'RI',
        img: 'img.png',
        id: '7'
    }
    ])

    const UserString = (name) => {
        if (name === undefined) return 0;
        var str = name.toLowerCase();
        switch (str.charAt(0)) {
            case ('a'): return 0; break;
            case ('b'): return 0; break;
            case ('c'): return 0; break;
            case ('d'): return 6; break;
            case ('e'): return 1; break;
            case ('f'): return 1; break;
            case ('g'): return 1; break;
            case ('h'): return 6; break;
            case ('i'): return 2; break;
            case ('j'): return 2; break;
            case ('k'): return 2; break;
            case ('l'): return 6; break;
            case ('m'): return 3; break;
            case ('n'): return 3; break;
            case ('o'): return 3; break;
            case ('p'): return 6; break;
            case ('q'): return 4; break;
            case ('r'): return 4; break;
            case ('s'): return 4; break;
            case ('t'): return 4; break;
            case ('u'): return 5; break;
            case ('v'): return 5; break;
            case ('x'): return 5; break;
            case ('y'): return 6; break;
            default: return 6; break;
        }
    }
    const searchByObserver = (v) => {
        console.log(5555, v)
        setsearchByObsVal(v);
        if (v !== '') {
            setObsListPopup(true)
        } else {
            setObsListPopup(false)
        }
    }
    useEffect(() => {
        console.log(193, ObserverL)
        if (searchByObsVal === '') {
            setOvserver(ObserverL.map(v => searchByObsVal === '' ? { ...v, l_show: true } : v))
        } else {
            setOvserver(ObserverL.map(v => (v.firstname.toLowerCase().indexOf(searchByObsVal.toLowerCase()) > -1 || v.lastname.toLowerCase().indexOf(searchByObsVal.toLowerCase()) > -1) ? { ...v, l_show: true } : { ...v, l_show: false }))
        }
        console.log()
    }, [searchByObsVal, ObserverL]);





    return (
        <div className='TaskMissingHours'>
            <div className='TaskMissing_top_para'>
                The following tasks have missing hours, we recommend that you update these tasks to get an accurate report:
            </div>

            <div className='taskUnassigned_body'>
                <div>
                    <div>
                        <span className='mcPlan'>Create a marketing plan</span>
                        <p>Tribeca Marketing room</p>
                    </div>
                    <div className='taskTeamInsight_info MemberSelector' >
                        <OutsideClickHandler onOutsideClick={() => setAddObs(false)}>
                            <div className='AssigneeField insight ' onClick={() => setAddObs(!AddObs)}>

                                <div style={{ display: 'flex', justifyContent: 'flex-start' }} >  <div style={{ overflow: 'hidden', marginTop: '3px' }}>   {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).slice(0, 3).map((obs) => (
                                    <>
                                        {obs.img.indexOf('img.png') > -1 ?
                                            <li className="ObsImageTask" style={{ marginTop: '0px', width: "32px", height: "32px", alignItems: 'center', backgroundColor: props.popup.colorPlate[UserString(obs.fnln)] }} >{obs.fnln}</li>
                                            :
                                            <Image src={obs.img} fill alt="profilepic" />
                                        }
                                    </>
                                ))} </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', cursor: 'pointer' }} className="ellipsis" >
                                        <span className='memberNameEllipsis'>{selectedObs.length > 0 ? ObserverL.filter(r => selectedObs.indexOf(r.id) > -1)[selectedObs.length - 1].firstname + " " + ObserverL.filter(r => selectedObs.indexOf(r.id) > -1)[selectedObs.length - 1].lastname : 'Assign To'}</span>

                                        {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 > 0 && <p style={{ marginTop: '2px', fontSize: '12px' }}>+ {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 > 0 ? ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 : '0'} others</p>}
                                    </div>
                                </div>

                                <div className='dropdown' style={{ backgroundColor: 'transparent' }}>
                                    <div className='dropdown-header' >
                                        <i className={`fa fa-chevron-right icon ${AddObs && "open"}`} style={{ color: 'black' }}></i>
                                    </div>

                                </div>
                            </div>
                            {AddObs &&

                                <div className="AddKeywordsPopup_task_settings insightTaskBoard" style={{ width: '300px', right: '25%', bottom: '20%', position: 'absolute' }}>
                                    <div className="keywordItem">
                                        <div className="searchAndFilterBar " >
                                            <div className="AssignTo">
                                                <span>Assign To</span>
                                                <span onClick={() => setAddObs(false)}></span>
                                            </div>

                                            <div className="selectedKeywordCont_task" >
                                                {
                                                    ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).map(v =>
                                                        <span key={v.id} className="keyword_Color workloadUsersName">{v.firstname + ' ' + v.lastname}
                                                            <BsXLg style={{
                                                                cursor: 'pointer',
                                                                color: 'white',
                                                                position: 'relative',
                                                                top: '2px',

                                                                marginLeft: '5px',

                                                                padding: '2px'
                                                            }} size={14} onClick={() => setSelectedObs(selectedObs.filter(r => r !== v.id))} />
                                                        </span>
                                                    )
                                                }
                                            </div>


                                            <div className="searchAndFilterKeyword">

                                            </div>
                                            <input type="text" className="Focus searchPeople" onFocus={() => setAddObs(true)}
                                                value={searchByObsVal}
                                                onChange={(event) => searchByObserver(event.target.value)}
                                                placeholder='Search name or room' />
                                            <div style={{ height: '150px' }}>
                                                <div className="keyword_list_task_settings workloadUsers" style={{ position: 'relative !important' }}>
                                                    {
                                                        ObserverL.filter(e => (e.l_show === undefined || e.l_show) && selectedObs.indexOf(e.id) === -1).map((v, index) =>
                                                            <div className='_tag_rooms workLoadRooms' key={index} style={{ padding: '10px', height: '35px', background: ' aliceblue', cursor: 'pointer' }} onClick={() => { selectObs(v); setObsListPopup(false) }}>
                                                                <span className='inviteEmail' >{v.firstname + ' ' + v.lastname}</span>
                                                                <span className='PlusIcon'>+</span>
                                                            </div>
                                                        )
                                                    }
                                                    {ObserverL.filter(e => (e.l_show === undefined || e.l_show) && selectedObs.indexOf(e.id) === -1).length === 0 && <div className="tagNotFound" style={{ marginTop: '20px' }}>Not found</div>}
                                                </div>




                                            </div>
                                        </div>
                                    </div>


                                </div>}
                        </OutsideClickHandler>
                    </div>
                </div>

                <div>
                    <div>
                        <span className='mcPlan'>Create a marketing plan</span>
                        <p>Tribeca Marketing room</p>
                    </div>
                    <div className='taskTeamInsight_info MemberSelector' >
                        <OutsideClickHandler onOutsideClick={() => setAddObs1(false)}>
                            <div className='AssigneeField insight ' onClick={() => setAddObs1(!AddObs1)}>

                                <div style={{ display: 'flex', justifyContent: 'flex-start' }} >  <div style={{ overflow: 'hidden', marginTop: '3px' }}>   {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).slice(0, 3).map((obs) => (
                                    <>
                                        {obs.img.indexOf('img.png') > -1 ?
                                            <li className="ObsImageTask" style={{ marginTop: '0px', width: "32px", height: "32px", alignItems: 'center', backgroundColor: props.popup.colorPlate[UserString(obs.fnln)] }} >{obs.fnln}</li>
                                            :
                                            <Image src={obs.img} fill alt="profilepic" />
                                        }
                                    </>
                                ))} </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', cursor: 'pointer' }} className="ellipsis" >
                                        <span className='memberNameEllipsis'>{selectedObs.length > 0 ? ObserverL.filter(r => selectedObs.indexOf(r.id) > -1)[selectedObs.length - 1].firstname + " " + ObserverL.filter(r => selectedObs.indexOf(r.id) > -1)[selectedObs.length - 1].lastname : 'Assign To'}</span>

                                        {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 > 0 && <p style={{ marginTop: '2px', fontSize: '12px' }}>+ {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 > 0 ? ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 : '0'} others</p>}
                                    </div>
                                </div>

                                <div className='dropdown' style={{ backgroundColor: 'transparent' }}>
                                    <div className='dropdown-header' >
                                        <i className={`fa fa-chevron-right icon ${AddObs1 && "open"}`} style={{ color: 'black' }}></i>
                                    </div>

                                </div>
                            </div>
                            {AddObs1 &&

                                <div className="AddKeywordsPopup_task_settings insightTaskBoard" style={{ width: '300px', right: '25%', bottom: '20%', position: 'absolute' }}>
                                    <div className="keywordItem">
                                        <div className="searchAndFilterBar " >
                                            <div className="AssignTo">
                                                <span>Assign To</span>
                                                <span onClick={() => setAddObs1(false)}></span>
                                            </div>

                                            <div className="selectedKeywordCont_task" >
                                                {
                                                    ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).map(v =>
                                                        <span key={v.id} className="keyword_Color workloadUsersName">{v.firstname + ' ' + v.lastname}
                                                            <BsXLg style={{
                                                                cursor: 'pointer',
                                                                color: 'white',
                                                                position: 'relative',
                                                                top: '2px',

                                                                marginLeft: '5px',

                                                                padding: '2px'
                                                            }} size={14} onClick={() => setSelectedObs(selectedObs.filter(r => r !== v.id))} />
                                                        </span>
                                                    )
                                                }
                                            </div>


                                            <div className="searchAndFilterKeyword">

                                            </div>
                                            <input type="text" className="Focus searchPeople" onFocus={() => setAddObs1(true)}
                                                value={searchByObsVal}
                                                onChange={(event) => searchByObserver(event.target.value)}
                                                placeholder='Search name or room' />
                                            <div style={{ height: '150px' }}>
                                                <div className="keyword_list_task_settings workloadUsers" style={{ position: 'relative !important' }}>
                                                    {
                                                        ObserverL.filter(e => (e.l_show === undefined || e.l_show) && selectedObs.indexOf(e.id) === -1).map((v, index) =>
                                                            <div className='_tag_rooms workLoadRooms' key={index} style={{ padding: '10px', height: '35px', background: ' aliceblue', cursor: 'pointer' }} onClick={() => { selectObs(v); setObsListPopup(false) }}>
                                                                <span className='inviteEmail' >{v.firstname + ' ' + v.lastname}</span>
                                                                <span className='PlusIcon'>+</span>
                                                            </div>
                                                        )
                                                    }
                                                    {ObserverL.filter(e => (e.l_show === undefined || e.l_show) && selectedObs.indexOf(e.id) === -1).length === 0 && <div className="tagNotFound" style={{ marginTop: '20px' }}>Not found</div>}
                                                </div>




                                            </div>
                                        </div>
                                    </div>


                                </div>}
                        </OutsideClickHandler>
                    </div>
                </div>

                <div>
                    <div>
                        <span className='mcPlan'>Create a marketing plan</span>
                        <p>Tribeca Marketing room</p>
                    </div>
                    <div className='taskTeamInsight_info MemberSelector' >
                        <OutsideClickHandler onOutsideClick={() => setAddObs2(false)}>
                            <div className='AssigneeField insight ' onClick={() => setAddObs2(!AddObs2)}>

                                <div style={{ display: 'flex', justifyContent: 'flex-start' }} >  <div style={{ overflow: 'hidden', marginTop: '3px' }}>   {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).slice(0, 3).map((obs) => (
                                    <>
                                        {obs.img.indexOf('img.png') > -1 ?
                                            <li className="ObsImageTask" style={{ marginTop: '0px', width: "32px", height: "32px", alignItems: 'center', backgroundColor: props.popup.colorPlate[UserString(obs.fnln)] }} >{obs.fnln}</li>
                                            :
                                            <Image src={obs.img} fill alt="profilepic" />
                                        }
                                    </>
                                ))} </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', cursor: 'pointer' }} className="ellipsis" >
                                        <span className='memberNameEllipsis'>{selectedObs.length > 0 ? ObserverL.filter(r => selectedObs.indexOf(r.id) > -1)[selectedObs.length - 1].firstname + " " + ObserverL.filter(r => selectedObs.indexOf(r.id) > -1)[selectedObs.length - 1].lastname : 'Assign To'}</span>

                                        {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 > 0 && <p style={{ marginTop: '2px', fontSize: '12px' }}>+ {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 > 0 ? ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 : '0'} others</p>}
                                    </div>
                                </div>

                                <div className='dropdown' style={{ backgroundColor: 'transparent' }}>
                                    <div className='dropdown-header' >
                                        <i className={`fa fa-chevron-right icon ${AddObs2 && "open"}`} style={{ color: 'black' }}></i>
                                    </div>

                                </div>
                            </div>
                            {AddObs2 &&

                                <div className="AddKeywordsPopup_task_settings insightTaskBoard" style={{ width: '300px', right: '25%', bottom: '20%', position: 'absolute' }}>
                                    <div className="keywordItem">
                                        <div className="searchAndFilterBar " >
                                            <div className="AssignTo">
                                                <span>Assign To</span>
                                                <span onClick={() => setAddObs2(false)}></span>
                                            </div>

                                            <div className="selectedKeywordCont_task" >
                                                {
                                                    ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).map(v =>
                                                        <span key={v.id} className="keyword_Color workloadUsersName">{v.firstname + ' ' + v.lastname}
                                                            <BsXLg style={{
                                                                cursor: 'pointer',
                                                                color: 'white',
                                                                position: 'relative',
                                                                top: '2px',

                                                                marginLeft: '5px',

                                                                padding: '2px'
                                                            }} size={14} onClick={() => setSelectedObs(selectedObs.filter(r => r !== v.id))} />
                                                        </span>
                                                    )
                                                }
                                            </div>


                                            <div className="searchAndFilterKeyword">

                                            </div>
                                            <input type="text" className="Focus searchPeople" onFocus={() => setAddObs2(true)}
                                                value={searchByObsVal}
                                                onChange={(event) => searchByObserver(event.target.value)}
                                                placeholder='Search name or room' />
                                            <div style={{ height: '150px' }}>
                                                <div className="keyword_list_task_settings workloadUsers" style={{ position: 'relative !important' }}>
                                                    {
                                                        ObserverL.filter(e => (e.l_show === undefined || e.l_show) && selectedObs.indexOf(e.id) === -1).map((v, index) =>
                                                            <div className='_tag_rooms workLoadRooms' key={index} style={{ padding: '10px', height: '35px', background: ' aliceblue', cursor: 'pointer' }} onClick={() => { selectObs(v); setObsListPopup(false) }}>
                                                                <span className='inviteEmail' >{v.firstname + ' ' + v.lastname}</span>
                                                                <span className='PlusIcon'>+</span>
                                                            </div>
                                                        )
                                                    }
                                                    {ObserverL.filter(e => (e.l_show === undefined || e.l_show) && selectedObs.indexOf(e.id) === -1).length === 0 && <div className="tagNotFound" style={{ marginTop: '20px' }}>Not found</div>}
                                                </div>




                                            </div>
                                        </div>
                                    </div>


                                </div>}
                        </OutsideClickHandler>
                    </div>
                </div>

                <div>
                    <div>
                        <span className='mcPlan'>Create a marketing plan</span>
                        <p>Tribeca Marketing room</p>
                    </div>
                    <div className='taskTeamInsight_info MemberSelector' >
                        <OutsideClickHandler onOutsideClick={() => setAddObs3(false)}>
                            <div className='AssigneeField insight ' onClick={() => setAddObs3(!AddObs3)}>

                                <div style={{ display: 'flex', justifyContent: 'flex-start' }} >  <div style={{ overflow: 'hidden', marginTop: '3px' }}>   {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).slice(0, 3).map((obs) => (
                                    <>
                                        {obs.img.indexOf('img.png') > -1 ?
                                            <li className="ObsImageTask" style={{ marginTop: '0px', width: "32px", height: "32px", alignItems: 'center', backgroundColor: props.popup.colorPlate[UserString(obs.fnln)] }} >{obs.fnln}</li>
                                            :
                                            <Image fill src={obs.img} alt="profilepic" />
                                        }
                                    </>
                                ))} </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', cursor: 'pointer' }} className="ellipsis" >
                                        <span className='memberNameEllipsis'>{selectedObs.length > 0 ? ObserverL.filter(r => selectedObs.indexOf(r.id) > -1)[selectedObs.length - 1].firstname + " " + ObserverL.filter(r => selectedObs.indexOf(r.id) > -1)[selectedObs.length - 1].lastname : 'Assign To'}</span>

                                        {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 > 0 && <p style={{ marginTop: '2px', fontSize: '12px' }}>+ {ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 > 0 ? ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).length - 3 : '0'} others</p>}
                                    </div>
                                </div>

                                <div className='dropdown' style={{ backgroundColor: 'transparent' }}>
                                    <div className='dropdown-header' >
                                        <i className={`fa fa-chevron-right icon ${AddObs3 && "open"}`} style={{ color: 'black' }}></i>
                                    </div>

                                </div>
                            </div>
                            {AddObs3 &&

                                <div className="AddKeywordsPopup_task_settings insightTaskBoard" style={{ width: '300px', right: '25%', bottom: '20%', position: 'absolute' }}>
                                    <div className="keywordItem">
                                        <div className="searchAndFilterBar " >
                                            <div className="AssignTo">
                                                <span>Assign To</span>
                                                <span onClick={() => setAddObs3(false)}></span>
                                            </div>

                                            <div className="selectedKeywordCont_task" >
                                                {
                                                    ObserverL.filter(r => selectedObs.indexOf(r.id) > -1).map(v =>
                                                        <span key={v.id} className="keyword_Color workloadUsersName">{v.firstname + ' ' + v.lastname}
                                                            <BsXLg style={{
                                                                cursor: 'pointer',
                                                                color: 'white',
                                                                position: 'relative',
                                                                top: '2px',

                                                                marginLeft: '5px',

                                                                padding: '2px'
                                                            }} size={14} onClick={() => setSelectedObs(selectedObs.filter(r => r !== v.id))} />
                                                        </span>
                                                    )
                                                }
                                            </div>


                                            <div className="searchAndFilterKeyword">

                                            </div>
                                            <input type="text" className="Focus searchPeople" onFocus={() => setAddObs3(true)}
                                                value={searchByObsVal}
                                                onChange={(event) => searchByObserver(event.target.value)}
                                                placeholder='Search name or room' />
                                            <div style={{ height: '150px' }}>
                                                <div className="keyword_list_task_settings workloadUsers" style={{ position: 'relative !important' }}>
                                                    {
                                                        ObserverL.filter(e => (e.l_show === undefined || e.l_show) && selectedObs.indexOf(e.id) === -1).map((v, index) =>
                                                            <div className='_tag_rooms workLoadRooms' key={index} style={{ padding: '10px', height: '35px', background: ' aliceblue', cursor: 'pointer' }} onClick={() => { selectObs(v); setObsListPopup(false) }}>
                                                                <span className='inviteEmail' >{v.firstname + ' ' + v.lastname}</span>
                                                                <span className='PlusIcon'>+</span>
                                                            </div>
                                                        )
                                                    }
                                                    {ObserverL.filter(e => (e.l_show === undefined || e.l_show) && selectedObs.indexOf(e.id) === -1).length === 0 && <div className="tagNotFound" style={{ marginTop: '20px' }}>Not found</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>}
                        </OutsideClickHandler>
                    </div>
                </div>

            </div>


        </div>
    )
}



export default TaskUnassigned;