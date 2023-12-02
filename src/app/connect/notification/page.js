"use client"
import React, { useEffect, useState } from 'react';
import {Redirect,useHistory} from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';
// import { connect } from 'react-redux';
// import {get_notificationsAPI} from '../Utils/API';
import InfiniteScroll from 'react-infinite-scroll-component';
import classNames from 'classnames';
import Image from 'next/image';
// import DeleteNotification from './Popups/DeleteNotification';
import './notification.css';
import { useRouter } from 'next/navigation'

function Notification(props) {
	const router = useRouter()
	const [read_status , setRead_status ] = useState('no');
	const [pageState, setPageState] = useState(null);
	const [redirectCovId, ] = useState(null);
	const [loader, setloader] = useState(true);
	const history = useHistory();


	// console.log(25, props.history.location.pathname)
	useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 27) {
				if (props.history.location.pathname === '/connect/notification') {
					history.goBack()
				}
			}
        };
        // window.addEventListener('keydown', handleKeyDown);
        // return () => {
        //     window.removeEventListener('keydown', handleKeyDown);
        // };
    }, [props, history]);



	// const fetchData = async ()=>{
	// 	try{
	// 		let APIres = await get_notificationsAPI({last_notification_id:pageState,read_status:read_status});
	// 		if (read_status === 'no') {
	// 			APIres.notifications = APIres.notifications.filter(v=> v.read_status === 'no')
	// 		} else {
	// 			APIres.notifications = APIres.notifications.filter(v=> v.read_status === 'yes')
	// 		}
	// 		props.setNotifications([...props.notifications, ...APIres.notifications]);
    //         if(APIres.notifications.length === 0){
    //             setPageState(null);
    //         }else{
    //             setPageState(APIres.notifications[APIres.notifications.length - 1].notification_id);
    //         }
	// 		setloader(false);
	// 	}catch(error){
	// 		console.log(error);
	// 	}
	// }

	// const InititalData = async (read_status) => {
	// 	setloader(true);
	// 	try {
	// 		let APIres = await get_notificationsAPI({ read_status: read_status });
	// 		if (read_status === 'no') {
	// 			APIres.notifications = APIres.notifications.filter(v=> v.read_status === 'no')
	// 		} else {
	// 			APIres.notifications = APIres.notifications.filter(v=> v.read_status === 'yes')
	// 		}
	// 		props.setNotifications(APIres.notifications);
	// 		if(APIres.notifications.length === 0){
    //             setPageState(null);
    //         }else{
    //             setPageState(APIres.notifications[APIres.notifications.length - 1].notification_id);
    //         }
			
	// 		setloader(false);

	// 	} catch (error) {
	// 		console.log(error);
	// 		setloader(false);
	// 	}
	// }

	// useEffect(() => {
	// 	InititalData(read_status);
	// }, [read_status])

	// const getMyMsgSep = (date) => {

	// 	let text = moment(date).calendar(null, {
	// 		sameDay: '[Today]',
	// 		lastDay: '[Yesterday]',
	// 		lastWeek: function (now) { return '[' + this.format("MMM Do, YYYY") + ']'; },
	// 		sameElse: function (now) { return '[' + this.format("MMM Do, YYYY") + ']'; }
	// 	});
	// 	return { status: true, text: text }

	// }
	// const getNewMsgSep = (data) => {
	// 	let msgSep = [];
	// 	for (let m in props.notifications) {
	// 		if (msgSep.indexOf(props.notifications[m].separator) === -1) {
	// 			msgSep = [...msgSep, props.notifications[m].separator];
	// 		}
	// 	}
	// 	let sep = getMyMsgSep(data.created_at).text;
	// 	if (msgSep.indexOf(sep) === -1) {
	// 		data['separator'] = sep;
	// 	} else {
	// 		data['separator'] = null;
	// 	}
	// 	if (data['separator'] === null) {
	// 		return '';
	// 	} else {
	// 		return <div className="msgSeparator" >
	// 			<p>{data.separator}</p>
	// 		</div>
	// 	}
	// }

	const [deleteNoti, setDeleteNoti] = useState(false);
	const [activeNoti, setActiveNoti] = useState('unnotify')
	const notificationFilter =(type)=> {
		setActiveNoti(type);
		if(type === 'unnotify'){
			setRead_status('no')
		}else{
			setRead_status('yes')
		}
	}


	return (
		<>
		
		{redirectCovId !== null ? <Redirect push to={redirectCovId} />:''}
		{/* {deleteNoti ? <DeleteNotification 
			InititalData={InititalData} 
			setDeleteNoti={setDeleteNoti} 
			notifications={props.notifications} 
			setNotifications={props.setNotifications} 
			/>:''} */}
			<div className="container_notification" style={{ position: 'relative' }}>
				<div className="notificationHeader">	
					<span style={{marginLeft:'20px',marginRight:'0px'}} 
					className="backToChat" data-for="galleryTooltip" 
					data-tip="Back" currentitem="false" 
					//onClick={()=>props.history.goBack()}
					onClick={() => router.back()}
					></span>
					<div className="action_list">						
						<div className={classNames("notiActions", activeNoti === 'unnotify'? 'active':'')} onClick={()=> notificationFilter('unnotify')}>Unread notification(s)</div>
						<div className={classNames("notiActions", activeNoti === 'readnotify' ? 'active' : '')} onClick={() => notificationFilter('readnotify')}>Read (History)</div>
						<span className="backToChat closeBtn" data-for="replyThread_tooltip" data-tip="Back to conversation" onClick={()=>props.history.goBack()} ></span>
						
					</div>
				</div>

				<div className="notify_boundary" id="notifications_container">
				{/* {loader ? <div className="loaderMain" style={{top: '0', zIndex: '9', height: '100%'}}></div>:''} */}
					{/* <InfiniteScroll
	                dataLength={props.notifications.length} //This is important field to render the next data
	                // next={fetchData}
	                hasMore={pageState === null ? false:true}
	                scrollableTarget="notifications_container"
	                > */}
						{/* {props.notifications.length > 0?
							props.notifications.map((v,i)=> 
										<div className={classNames("notification_msg",v.read_status === 'no' ? 'unread_noti':'')} key={v.notification_id} >
												{v.separator !== null && v.separator !== undefined ?
													<div className="msgSeparator" >
														<p>{v.separator}</p>
													</div>
													:
													getNewMsgSep(v)
												}
												{read_status === 'no' ?
												<div className="msg_hover_options">

												</div>
												:
												''
												 }
											<div className="sender_img">
												{v.created_by_img.indexOf('img.png') > -1 ?
													<span className="nameLetters">{v.fnln}</span>
												:
													
												<Image
												src={v.created_by_img}
												onError={(e) => { e.target.onerror = null; 
												e.target.src = "/media/images/img.png" }}
												alt="user"
												/>
											}
												
											</div>

											<div className="msg_info">
												<div className="sender_info">
													<p className="sender_name">{v.created_by_name} </p><p className="msg_time"><i className="fas fa-clock custom_clock_size" ></i> <Moment fromNow>{v.created_at}</Moment></p></div>
												<div className="msg_body">{v.title}</div>
											</div>

										</div>
							)
						:loader !== true 
						? */}

						<div className="fileNotFound">
							<h2> 
							{
							activeNoti === 'unnotify' ? 
							<div className="notificariontextArea"> 
								<div className='notificationIcon'>
									<Image
										src="/media/images/NotificationsPage_icon.png"
										alt="notificationIcon"
										width={'90'}
										height={'100'}
									/>
								</div>
								<div className='notificationText'>
									<h2  className='notificationHeading'>Welcome to your notification page</h2>
								</div>
								<div className='notificationIconImages'>								
									
									<Image
										src="/media/images/NotificationsPage_images.png"
										alt="NotificationsPage_images.png"
										width={'280'}
										height={'60'}
									/>
								</div>
								<div className='notificationIconPara'>
									<p>Notification about who reacted to your messages, what</p> 
									<p>messages has been deleted from a conversation, and who </p>
									<p>has been removed from a room will be listed here.</p>
								</div>
								<div className='notificationIconButton'>
									<div className='buttonText'>
										You have no new notifications!
									</div>
								</div>
							</div>
							:'No data found'
							}
						</h2>
						</div>
						{/* :''
					 	}
	                 </InfiniteScroll> */}
				</div>
			</div>

		</>
	)
}

// const mapStateToProps = (state) => {
// 	return {
// 		notifications:state.rightSectionReducer.notifications,
// 		logindata:state.rootReducer.logindata,
// 	} 
//   }


// const mapDispatchToProps = (dispatch) =>{
// 	return {
// 	  set_go_with_noti:(data)=>{
// 		dispatch({type:'set_go_with_noti',payload:data})
// 	  },
// 	  setRedirectConv:(data)=>{
// 		dispatch({type:'setRedirectConv',payload:data})
// 	  },
// 	  set_noti_click_count:(data)=>{
// 		dispatch({type:'set_noti_click_count',payload:data})
// 		},
// 	  set_re_click_conv:(data)=>{
// 		dispatch({type:'set_re_click_conv',payload:data})
// 		},
// 	  setNotifications:(data)=>{
// 		dispatch({type:'setNotifications',payload:data})
// 	  },
	 

// 	}
//   }

// export default connect(mapStateToProps, mapDispatchToProps)(Notification);
export default Notification;