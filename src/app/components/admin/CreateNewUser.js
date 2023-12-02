import React,{useEffect, useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
// import {getSessionLoginData} from "../../Utils/Common"
import Select from 'react-select';
// import {
//     InviteTeammatesAPI,
//     getTeamAPI} from '../../Utils/API'
// import { connect } from 'react-redux';
import validator from 'validator';


 function CreateNewUser(props){
    // const [teamListView,setTeamListView] = useState(false);
    const [loader,setLoader ] = useState(false);
    const [createStatus, setCreateStatus] = useState(false);
    const [teams, setTeamsList] = useState([]);
     const [matchPassword, setMatchPassword] = useState(false);
    // console.log(15,getSessionLoginData())
    const [userdata,setUserData] = useState({
        user_id: "",
        name: "",
        company_id: "",
        company_name: "", 
        firstname: '',
        lastname: '',
        emails: '', 
        role: 'Member', 
        password: '',
        password2: '',
        team_id: '',
        team_title:'',
        team_list:[]
    });
    // const [userdata,setUserData] = useState({
    //     user_id: getSessionLoginData().user.id,
    //     name: getSessionLoginData().user.firstname+' '+getSessionLoginData().user.lastname,
    //     company_id: getSessionLoginData().user.company_id,
    //     company_name: getSessionLoginData().user.company_name, 
    //     firstname: '',
    //     lastname: '',
    //     emails: '', 
    //     role: 'Member', 
    //     password: '',
    //     password2: '',
    //     team_id: '',
    //     team_title:'',
    //     team_list:[]
    // });

    const createUser = async ()=>{
        try{
            setLoader(true);
            let d = {
                ...userdata,
                send_mail:'no'
            }
            if(d.team_list.length === 0){
                d.team_list = ['all']
            }else {
                let l = [];
                for(let i of d.team_list){
                    l.push(i.data);
                }
                d.team_list = l;
            }
            let data = await InviteTeammatesAPI(d)
            setLoader(false)
            // console.log(61, data);
            if (data.status) {
               // toast.success(data.message);
                toast.success('User successfully created');

            }

            data[0]['is_show'] = true;
            data[0]['fnln'] = data[0].firstname.charAt(0) + data[0].lastname.charAt(0);
            props.setAllAppUser([data[0],...props.allAppUser])
            props.setPopup({type:'createNewUser', data:false});
        }catch(error){
            setLoader(false)
            // console.log(20,error);
            if (typeof (error.data.message) !== 'string') {
				toast.error(error.data.error);
			} else {
				//toast.error(error.data.message);
                toast.error('Invited error!!');
			}
            props.setPopup({type:'createNewUser', data:false});
        }
    }
    const selectTeams = (e) => {
        setUserData({...userdata,team_list:e})
    }
     const iskeyDown = (e) => {
        //  var blockSpecialRegex = /[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/;
        //  var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        //  console.log(key)
        //  if (blockSpecialRegex.test(key)) {
        //      e.preventDefault();
        //      return false;
        //  }
     }

    const onChangeHandle =(e, type)=> {
        let value = e.target.value;
        // var key = e.which || e.keyCode;
        if (type === 'emails') {
            if (validator.isEmail(value)) {
                let emails = props.allAppUser.map(v=> v.email);

                if(emails.indexOf(value) > -1){
                    e.target.classList.add('error')
                }else{
                    e.target.classList.remove('error')
                }
            } else {
                e.target.classList.add('error')
            }
            if (value === '') {
                e.target.classList.remove('error')
            }
            setUserData({...userdata, [type]:[value]});
        } 
        if (type === 'firstname') {
            if (!validator.isEmpty(value) && !validator.isNumeric(value.charAt(0)) && validator.trim(value)) {
                e.target.classList.remove('error');
              
                
               

            } else {
                e.target.classList.add('error')
            }

            setUserData({ ...userdata, [type]: value });

        }
        if (type === 'lastname') {
            if (!validator.isEmpty(value) && !validator.isNumeric(value.charAt(0)) && validator.trim(value)) {
                e.target.classList.remove('error');

            } else {
                e.target.classList.add('error')
            }

            setUserData({ ...userdata, [type]: value });

        }


            setUserData({...userdata, [type]:value});
        

    }

    // useEffect(()=> {
    //     let emails = props.allAppUser.map(v=> v.email);
    //     // console.log(79,userdata)
    //     if (userdata.firstname !== '' && 
    //         userdata.firstname !== ' ' && 
    //         validator.trim(userdata.firstname) &&
    //         !validator.isNumeric(userdata.firstname.charAt(0)) && userdata.lastname !== '' && 
    //         userdata.lastname !== '' &&
    //         userdata.lastname !== ' '  &&
    //         validator.trim(userdata.lastname) &&
    //         !validator.isNumeric(userdata.lastname.charAt(0)) &&
    //         userdata.role !== '' && 
    //         validator.isEmail(userdata.emails) && emails.indexOf(userdata.emails) == -1 &&
    //         userdata.password === userdata.password2
    //         //&& userdata.team_list.length > 0
    //         ) {
    //         setCreateStatus(true);
    //     } else {
    //         setCreateStatus(false);
    //     }
    // },[userdata])
    // const viewTeamList =()=>{
    //     teamListView ? setTeamListView(false):setTeamListView(true);

    //  }
    //  const selectTeam = (team_id,team_title) => {
    //      setUserData({ ...userdata, 'team_id': team_id,'team_title':team_title });
    //      setTeamListView(false);
    //  }
    // const [teamsdata,setTeams] = useState([]);
     const [, setTeams] = useState([]);
     const getinitialData = async ()=>{
        try{
            let APIres = await getTeamAPI();
            // console.log(26, APIres);
            let forTeams = [];
			for(let t of APIres.teams){
				forTeams.push({value:t.team_id,label:t.team_title,data:t.team_id,participants:t.participants});
			}
            setTeamsList([...forTeams]);
            setTeams([...APIres.teams.sort((a, b) => a.team_title.toLowerCase().localeCompare(b.team_title.toLowerCase()))]);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getinitialData();
    },[])

    //  const createNewUser = async ()=>{
    //     try{
    //         setLoader(true);
    //         let d = {
    //             ...userdata
    //         }
    //         if(d.team_list.length === 0){
    //             d.team_list = ['all']
    //         }else {
    //             let l = [];
    //             for(let i of d.team_list){
    //                 l.push(i.data);
    //             }
    //             d.team_list = l;
    //         }
    //         let data = await InviteTeammatesAPI(d)
    //         setLoader(false)
    //         // console.log(61, data);
    //         if (data.status) {
    //            // toast.success(data.message);
    //             toast.success('User successfully Created');

    //         }

    //         data[0]['is_show'] = true;
    //         data[0]['fnln'] = data[0].firstname.charAt(0) + data[0].lastname.charAt(0);
    //         props.setAllAppUser([data[0],...props.allAppUser])
    //         props.setPopup({ type:'createNewUser', data:false});
    //     }catch(error){
    //         setLoader(false)
    //         // console.log(20,error);
    //         if (typeof (error.data.message) !== 'string') {
	// 			toast.error(error.data.error);
	// 		} else {
	// 			//toast.error(error.data.message);
    //             toast.error('Invited error!!');
	// 		}
    //         props.setPopup({ type:'createNewUser', data:false});
    //     }
    // }
     const previewPassword = (e, type) => {
         let target = e.target;

         if (target.classList.contains('active')) {
             target.classList.remove('active');
             if (type === 'oldPass') {
                 document.querySelector('#oldPass').setAttribute('type', 'password');
             } else if (type === 'password') {
                 document.querySelector('#password').setAttribute('type', 'password');
             } else {
                 document.querySelector('#password2').setAttribute('type', 'password');
             }
         } else {
             target.classList.add('active');
             if (type === 'oldPass') {
                 document.querySelector('#oldPass').setAttribute('type', 'text');
             } else if (type === 'password2') {
                 document.querySelector('#password2').setAttribute('type', 'text');
             } else {
                 document.querySelector('#password').setAttribute('type', 'text');
             }
         }
     }
     useEffect(() => {

         if (userdata.password2 !== '' && userdata.password === userdata.password2) {
             setMatchPassword(true);
             // console.log('This is true');
         } else if (userdata.password2 !== '' && userdata.password !== userdata.password2) {
             setMatchPassword('Password not matched');
             // console.log('Not matched');
         } else if (userdata.password2 === '' && userdata.password !== userdata.password2) {
             setMatchPassword('');
             // console.log('This is Empty');
         }

     }, [userdata.password, userdata.password2])
	return (
		<>
            <div><Toaster /></div>
            <div className="backwrap">
                <div className="createUserModal newUser" >
                    <div className="createUserModalHead">
                        <h4 className="popupTitle">Create new user</h4>
                        {/* <span className="closeModal" onClick={() => props.setCreateUser(false)}></span> */}
                        <span className="closeModal" onClick={() => props.setCreateNewUser(false)}></span>
                    </div>
                   
                    <div className="createUserModalBody newUser">
                        <div className="createUserFormContainer">
                            <form className="createUserFrom">
                                <div className="cu_doubleInputGroup">
                                    <div className="cu_inputGroup newCreateUser" 
                                    style={{ marginBottom:'0px' }}
                                    >
                                        <label>First name<span className="red_star">*</span></label>
                                        <input className='firstName' id='firstName' type="text" 
                                        placeholder="First name" 
                                        onChange={(event)=> onChangeHandle(event, 'firstname')}
                                        onKeyPress={(event) => iskeyDown(event)}
                                        maxLength={25}
                                        autoFocus
                                        />
                                        <span className="errorLabel" style={{ position: 'relative' }}>
                                            {
                                                validator.isNumeric(userdata.firstname.charAt(0))
                                                ? "First letter should not be numeric!!"
                                                : "First name should not empty"

                                            }
                                        </span>
                                    </div>
                                    <div className="cu_inputGroup newCreateUser"
                                        style={{ marginBottom: '0px' }}
                                    >
                                        <label>Last name<span className="red_star">*</span></label>
                                        <input type="text" placeholder="Last name" 
                                        onChange={(event)=> onChangeHandle(event, 'lastname')}
                                        onKeyPress={(event) => iskeyDown(event)}
                                        maxLength={25}
                                        />
                                        <span className="errorLabel" style={{ position: 'relative' }}>
                                            {
                                                validator.isNumeric(userdata.lastname.charAt(0))
                                                ? "First letter should not be numeric!!"
                                                : "Last name should not empty"

                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="cu_inputGroup newCreateUser"
                                >
                                    <label>Email<span className="red_star">*</span></label>
                                    <input type="text" className="createUser_email" placeholder="Enter email address" onChange={(event)=> onChangeHandle(event, 'emails')}/>
                                    {/* <span className="errorLabel" style={{position:'relative'}}>{props.allAppUser.map(v=> v.email).indexOf(userdata.emails) > -1 ? "Email already exist.":"Invalid email address."}</span>                                */}
                                </div>
                                <div className="passInputGroup newCreateUser"
                                    style={{ marginBottom: '0px' }}
                                >
                                    <label className="passInputLabel">New Password</label>
                                    <span className="passwordLock"></span>
                                    <span className="passwordView" data-for="loginTooltip" 
                                    style={userdata.password === '' ? { pointerEvents: 'none' } : {}}
                                    onClick={(event) => previewPassword(event, 'password')} 
                                    data-tip="Click to view the password as plain text"
                                    ></span>
                                    <input type="password" 
                                    className="passInput" 
                                        id="password"
                                        value={userdata.password}
                                   
                                    onChange={(event) => onChangeHandle(event, 'password')}
                                    autoComplete="new-password" required />
                                    <span className="rgInputMsg errorLabel">Invalid password.</span>
                                    {/* <span className="rgInputMsg">Create a strong password that is at least 6 characters long. Include numbers, lower case characters to increase the strength of your password.</span> */}
                                    <span className="passwordPlaceholder" 
                                    onClick={() => document.querySelector('#password').focus()}
                                    >......</span>
                                </div>
                                <div className="passInputGroup newCreateUser"
                                    style={{ marginBottom: '0px' }}
                                >
                                    <label className="passInputLabel">Confirm Password</label>
                                    <span className="passwordLock"></span>
                                    <span className="passwordView" 
                                    data-for="loginTooltip" 
                                        style={userdata.password2 === '' ? { pointerEvents: 'none' } : {}} 
                                        onClick={(event) => previewPassword(event, 'password2')}
                                        data-tip="Click to view the password as plain text"></span>
                                    <input type="password" 
                                    className="passInput" 
                                    id="password2" value={userdata.password2}
                                    onChange={(event) => onChangeHandle(event, 'password2')}
                                    autoComplete="new-password" required 
                                    />
                                    <span className="rgInputMsg" style={{ color: 'red' }}>{matchPassword}</span>
                                    <span className="passwordPlaceholder" 
                                    onClick={() => document.querySelector('#password2').focus()}
                                    >......
                                    </span>
                                </div>
                                <div className="cu_inputGroup newCreateUser" style={{ marginBottom: '0px' }}>
                                    <label>Team</label>
                                    <div className="addedTeamLi"></div>
                                    <Select
                                        className="select-ecosystem"
                                        value={userdata.team_list}
                                        isMulti
                                        closeMenuOnSelect={true}
                                        options={teams}
                                        isSearchable
                                        onChange={selectTeams}
                                        placeholder={<span className="selectPlaceholder">Assign to specific Team(s) or leave empty for all</span>}
                                    />
                                    {/* <input type="text" onClick={viewTeamList} placeholder="Select team" value={userdata.team_title}/>
                                    {teamListView ?
                                    <ul className="teamListView">
                                            {teamsdata.map(v =>
                                                <li className="" key={v.team_id} onClick={()=> selectTeam(v.team_id,v.team_title)}>{v.team_title}</li>
                                            )}
                                    </ul>:''} */}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="createUserModalFoot">
                        <button className="btnCancel" 
                        onClick={() => props.setCreateNewUser(false)}
                        >Cancel</button>
                        {loader? <button className="btnAction btn_loader"  
                        style={{'color':'transparent'}}>Create User</button>
                        :
                        <button className="btnAction" onClick={createUser}
                        style={!createStatus ? {pointerEvents:'none',opacity:'0.5'}:{}}
                         //onClick={createNewUser} 
                         >Create user</button>}
                    </div>
                </div>
            </div>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		logindata: state.rootReducer.logindata

	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setPopup: (data) => {
			dispatch({ type: 'setPopup', payload: data })
		},

	}
}

export default CreateNewUser;