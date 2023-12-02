import React,{useState} from 'react';
// import {createTeamAPI, updateTeamAPI} from '../../Utils/API'
import toast  from 'react-hot-toast';
function CreateTeam(props){
	const [loader,setLoader] = useState(false);
	const [title,setTitle] = useState(props.type === 'edit' ? props.data.team_title:'');
	
	const createTeam = async ()=>{
		try{
			let d = {
				"title": title,
				"participants": [props.logindata.user.id]
			}
			setLoader(true)
			let APIres = await createTeamAPI(d);
			// console.log(16,APIres)
			if (APIres.status) {
				toast.success('Team created successfully', {duration: 4000});
				props.setTeams([...APIres.data])
				setLoader(false);
				props.setCreateTeam(false);
			} else {

			}
		}catch(error){
			console.log(10,error)
		}
	}

	const updateTeam = async () => {
		
		try {
			let data = {
				team_id: props.data.team_id,
				participants: props.data.participants,
				title: title,
			
			}
			setLoader(true)
			let APIres = await updateTeamAPI(data);
			setLoader(false);
			props.setEditTeam(false);
			// console.log(APIres)
			if (APIres.status) {
				props.setTeams([...APIres.data])
				toast.success('Team update successfully', {duration: 4000});
			} else {
				toast.error(APIres.message, {duration: 4000});
			}

		} catch (error) {
			console.log(error);
		}
	}

	// console.log(49, props.logindata);

	



	return (
		<>
			{/* File upload popup */}

				<div className="backwrap">
					{props.type === 'create' ?
						<div className="createTeamModal">
							<div className="createTeamModalHead">
								{/* <h4 className="popupTitle"></h4> */}
								<h4 className="popupTitle">Create team</h4>
								<span className="closeModal" onClick={() => props.setCreateNewTeam(false)}></span>
								{/* <span className="closeModal" onClick={() => props.setPopup({type: 'closeTeamModal', data: false})}></span> */}
							</div>
							<div className="createTeamModalBody">
								<div className="crTeam_inputGroup">
									<label>Team name</label>
									<input autoFocus type="text" value={title} maxLength={25} onChange={(event)=>setTitle(event.target.value)} placeholder="Team name"/>
								</div>
							</div>
							<div className="createTeamModalFoot">
								{
								loader ? <button className="btnAction btn_loader" style={{ 'color': 'transparent' }}>Create team</button>
								:
								title !== '' && title !== ' ' && title.trim() ?
								<button className="btnAction" onClick={createTeam}>Create team</button> 
								:
										<button className="btnAction" style={{ 'opacity': '0.5' }}>Create team</button>
								}
								
							</div>
						</div>
					:
						<div className="createTeamModal">
							<div className="createTeamModalHead">
								<h4 className="popupTitle">Edit team</h4>
								<span className="closeModal"  onClick={() => props.setCreateNewTeam(false)}></span>
								
							</div>
							<div className="createTeamModalBody">
								<div className="crTeam_inputGroup">
									<label>Team name</label>
									<input type="text" maxLength={25} value={title} onChange={(event)=>setTitle(event.target.value)} placeholder="Team name"/>
								</div>
							</div>
							<div className="createTeamModalFoot">
								{
								loader ? <button className="btnAction btn_loader" style={{'color':'transparent'}}>Update</button>
								:
								title !== '' && title !== ' ' && title.trim() ?
								<button className="btnAction" onClick={updateTeam}>Update</button> 
								:
								<button className="btnAction" style={{'opacity':'0.5'}}>Update</button>
								}
								
							</div>
						</div>
					}
				</div>

			{/* File upload popup End */}
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
		set_noti_click_count: (data) => {
			dispatch({ type: 'set_noti_click_count', payload: data })
		},

	}
}

export default CreateTeam;