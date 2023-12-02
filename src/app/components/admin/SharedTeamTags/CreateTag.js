/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select';
import { connect } from 'react-redux';
// import validator from 'validator'
import classNames from "classnames";
// import {getTeamAPI} from '../../Utils/API'
// import { CreatePrivateTagAPI } from '../../Utils/popupAPI'

function TagColor(props) {
    const colorCode = ['#0A256A', '#B246FF', '#732BE2', '#0036B6', '#FF53D3', '#DF1E39', '#41D82F', '#078CFE', '#FFE026', '#28C8BD', '#FF991D']
    const changeColor = (color_code) => {
        props.setTagData({ ...props.tagData, color: color_code });
    }
    return (
        <>
            <div className='ColorList'>
                {colorCode.map(v =>
                    <span key={v} className={classNames('color_desgin', props.tagData.color === v ? 'active' : '')} style={{ backgroundColor: v }} onClick={() => changeColor(v)}></span>
                )}

            </div>
        </>
    )
}
function CreateTag(props) {
    // const [teamListView,setTeamListView] = useState(false);
    const [loader, setLoader] = useState(false);
    const [initalLoader, setInitialLoader] = useState(false);
    const [createStatus, setCreateStatus] = useState(false);
    const [uniqName, setUniqName] = useState(true);
    const [teams, setTeams] = useState([]);
    const [tagData, setTagData] = useState(
        {
            title: props.actionTag ? props.actionTag.title : props.for_ === 'connect' ? props.inputVal : '',
            color: props.actionTag ? props.actionTag.tag_color : '#0A256A',
            team_list: []
        }
    )
    //  const checkTitle = ()=>{
    //      let allTitle = [];
    //      for (let i of props.tags) {
    //          if (props.actionTag) {

    //              if (props.actionTag.title.toUpperCase() !== i.title.toUpperCase()) {
    //                  allTitle.push(i.title.toUpperCase());
    //              }
    //          } else {
    //               allTitle.push(i.title.toUpperCase());
    //          }
    //      }
    //      // console.log(29,allTitle)
    //      if(allTitle.indexOf(tagData.title.toUpperCase()) > -1){
    //          setUniqName(false);
    //          return false;
    //      }else{
    //          setUniqName(true);
    //          return true;
    //      }
    //  }
    //  useEffect(() => {
    //      let uniqName =  checkTitle();
    //      if (tagData.title !== '' && 
    //         tagData.title !== '' &&
    //          tagData.title.trim() && uniqName ) {
    //          setCreateStatus(true);
    //      } else {
    //          setCreateStatus(false);
    //      }
    //  },[tagData])
    const createTagClick = async () => {
        try {
            if (createStatus) {
                setLoader(true);
                let teamLIst = [];
                for (let i of tagData.team_list) {
                    teamLIst.push(i.data)
                }
                let data = {
                    "mention_users": [],
                    "title": tagData.title.toUpperCase(),
                    "tagged_by": props.logindata.user.id,
                    "tag_type": "public",
                    "tag_color": tagData.color === '' ? '#0A256A' : tagData.color,
                    "team_list": teamLIst
                }
                if (props.actionTag) {
                    data['tag_id'] = props.actionTag.tag_id;
                    data['tag_type'] = props.actionTag.tag_type;
                }
                // console.log(50,props)
                let APIres = await CreatePrivateTagAPI(data);

                // console.log(46, APIres.data)
                if (props.actionTag) {
                    props.setTags([...props.tags.map(v => v.tag_id === props.actionTag.tag_id ? { ...APIres.data, team_list_name: APIres.data.team_list_name ? APIres.data.team_list_name : ['All Teams'], use_count: v.use_count } : v)]);
                } else {
                    if (props.for_ === 'connect') {
                        // console.log(96)
                        props.set_activeTag([APIres.data.tag_id, ...props.active_tag]);
                        props.setInitial_public_tag([...props.tags, APIres.data]);
                        if (props.setInitial_public_tag2) props.setInitial_public_tag2([...props.tags, APIres.data]);
                        props.setPublicTag([APIres.data, ...props.public_tag]);
                        props.setInputVal('');
                    } else {
                        props.setTags([...props.tags, { ...APIres.data, use_count: 0 }]);
                    }
                }
                setLoader(false)
                if (props.for_ === 'connect') {
                    props.setShowShare(false);
                } else {
                    props.setPopup({ type: props.actionTag ? 'editTag' : 'createTag', data: false })
                }
                if (APIres.status) {
                    toast.success('Shared team tag updated', { duration: 4000 });
                }

            }
        } catch (error) {
            setLoader(false)
            // console.log(20,error.response);
            if (typeof (error.data.message) !== 'string') {
                toast.error(error.data.error);
            } else {
                toast.error(error.data.message);
            }
        }
    }
    const updateTeamList = (event, type) => {
        if (event.target.value.length < 40) {
            setTagData({ ...tagData, [type]: event.target.value })
        }

    }
    const selectTeams = (e) => {
        setTagData({ ...tagData, team_list: e })
    }
    const getInitialData = async () => {
        try {
            setInitialLoader(true);
            let APIres = await getTeamAPI();
            let forTeams = [];
            for (let t of APIres.teams) {
                forTeams.push({ value: t.team_id, label: t.team_title, data: t.team_id, participants: t.participants });
            }
            setTeams([...forTeams]);
            if (props.actionTag) {
                setTagData({ ...tagData, team_list: forTeams.filter(v => props.actionTag.team_list.indexOf(v.data) > -1) })
            }
            setInitialLoader(false);
        } catch (error) {
            console.log(error)
        }
    }
    const [teamView, setTeamView] = useState(true);
    const checkTeamList = () => {
        if (props.actionTag && props.actionTag.tag_type !== 'public') {
            setTeamView(false);
        } else {
            setTeamView(true);
        }
    }
    useEffect(() => {
        getInitialData();
        checkTeamList();
    }, []);



    return (
        <>
            <div><Toaster /></div>
            <div className="backwrap">
                <div className="createUserModal" style={{ width: '420px' }}>
                    <div className="createUserModalHead">
                        <h4 className="popupTitle">{props.actionTag ? 'Edit tag' : 'Create new tag'}</h4>
                        {/* <span className="closeModal" onClick={() => props.setCreateUser(false)}></span> */}
                        <span className="closeModal" onClick={() => { props.for_ === 'connect' ? props.setShowShare(false) : props.setCreateNewTag(false) }}></span>
                        {/* <span className="closeModal" onClick={() => { props.for_ === 'connect' ? props.setShowShare(false) : props.setPopup({ type: !props.actionTag ? 'createTag' : 'editTag', data: false }) }}></span> */}
                    </div>
       
                        <div className="createTeamModalBody">
                            <div className="crTeam_inputGroup" style={{ width: '100%', float: 'left' }}>
                                <label>Tag name</label>
                                <input
                                    style={{ borderLeft: '8px solid ' + tagData.color, borderColor: tagData.color }}
                                    type="text" placeholder="Tag name"
                                    value={tagData.title}
                                    onChange={(event) => updateTeamList(event, 'title')}
                                    maxLength={25}
                                    autoFocus
                                />
                                {!uniqName ? <span className="rgInputMsg" style={{ color: 'red', fontSize: '12px', margin: '-8px 0px 4px 0px' }}>Tag name already exist. </span> : ''}
                            </div>
                            <div className="crTeam_inputGroup" style={{ width: '100%', float: 'left' }}>
                                <label>Color</label>
                                <TagColor tagData={tagData} setTagData={setTagData}></TagColor>
                                {/* <input type="color" style={{padding:'2px',marginLeft:'4px'}} value={tagData.color} onChange={(event)=>updateTeamList(event,'color')} /> */}
                            </div>
                            {teamView ? <div className="crTeam_inputGroup">
                                <label>Select team</label>
                                <Select
                                    className="select-ecosystem tagSelect"
                                    value={tagData.team_list}
                                    isMulti
                                    closeMenuOnSelect={true}
                                    options={teams}
                                    isSearchable
                                    onChange={selectTeams}
                                    placeholder={<span className="selectPlaceholder">Assign to specific Team(s) or leave empty for all</span>}
                                />
                            </div> : ''}

                        </div>
               
                    {/* {initalLoader ?
                        <div className='btn_loader for_loader'></div>
                        :
                        <div className="createTeamModalBody">
                            <div className="crTeam_inputGroup" style={{ width: '100%', float: 'left' }}>
                                <label>Tag name</label>
                                <input
                                    style={{ borderLeft: '8px solid ' + tagData.color, borderColor: tagData.color }}
                                    type="text" placeholder="Tag name"
                                    value={tagData.title}
                                    onChange={(event) => updateTeamList(event, 'title')}
                                    maxLength={25}
                                    autoFocus
                                />
                                {!uniqName ? <span className="rgInputMsg" style={{ color: 'red', fontSize: '12px', margin: '-8px 0px 4px 0px' }}>Tag name already exist. </span> : ''}
                            </div>
                            <div className="crTeam_inputGroup" style={{ width: '100%', float: 'left' }}>
                                <label>Color</label>
                                <TagColor tagData={tagData} setTagData={setTagData}></TagColor>

                            </div>
                            {teamView ? <div className="crTeam_inputGroup">
                                <label>Select team</label>
                                <Select
                                    className="select-ecosystem tagSelect"
                                    value={tagData.team_list}
                                    isMulti
                                    closeMenuOnSelect={true}
                                    options={teams}
                                    isSearchable
                                    onChange={selectTeams}
                                    placeholder={<span className="selectPlaceholder">Assign to specific Team(s) or leave empty for all</span>}
                                />
                            </div> : ''}

                        </div>
                    } */}
                    <div className="createUserModalFoot">
                        <button className="btnCancel" onClick={() => props.setCreateNewTag(false)}>Cancel</button>
                        {loader ? <button className="btnAction btn_loader" style={{ 'color': 'transparent' }}>Create</button> : <button className="btnAction" style={!createStatus ? { pointerEvents: 'none', opacity: '0.5' } : {}} onClick={createTagClick} >{props.actionTag ? 'Update' : 'Create'}</button>}
                    </div>
                    {/* <div className="createUserModalFoot">
                        <button className="btnCancel" onClick={() => { props.for_ === 'connect' ? props.setShowShare(false) : props.setPopup({ type: !props.actionTag ? 'createTag' : 'editTag', data: false }) }}>Cancel</button>
                        {loader ? <button className="btnAction btn_loader" style={{ 'color': 'transparent' }}>Create</button> : <button className="btnAction" style={!createStatus ? { pointerEvents: 'none', opacity: '0.5' } : {}} onClick={createTagClick} >{props.actionTag ? 'Update' : 'Create'}</button>}
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default CreateTag;