import React, { useState } from 'react';
import classNames from "classnames";
import { BsFillTagFill, BsLink45Deg } from "react-icons/bs";
import OutsideClickHandler from 'react-outside-click-handler';
import { useRouter } from 'next/navigation';
// import { connect } from 'react-redux';


function FileHubHead(props) {

    const router = useRouter();
    const [fileViewPopup, setFileViewPopup] = useState(false);

    return (
            <div className='tagFile_header_top'>
                <div className='tagFile_header'>

                    {fileViewPopup ?
                        <OutsideClickHandler onOutsideClick={() => setFileViewPopup(false)}>
                            <div className="fileViewPopup" style={{ display: 'block', top: '44px', right: '0px', zIndex: '20', left: '0px' }}>
                                <li 
                          // onClick={() => { props.set_fileViewType('recentfiles'); setFileViewPopup(false) }} className={classNames("fileTypeLi list ", props.fileViewType === 'recentfiles' ? ' active' : '')} 
                                > Recent files </li>
                                <li 
                                //onClick={() => { props.set_fileViewType('myfiles'); setFileViewPopup(false) }} className={classNames("fileTypeLi list ", props.fileViewType === 'myfiles' ? ' active' : '')}
                                > Uploaded by you </li>
                                <li 
                                //onClick={() => { props.set_fileViewType('otherfiles'); setFileViewPopup(false) }} className={classNames("fileTypeLi list ", props.fileViewType === 'otherfiles' ? ' active' : '')}
                                > Uploaded by others </li>
                                <li 
                                //onClick={() => { props.set_fileViewType('starfiles'); setFileViewPopup(false) }} className={classNames("fileTypeLi list ", props.fileViewType === 'starfiles' ? ' active' : '')}
                                > Starred files  </li>
                            </div>
                        </OutsideClickHandler>
                        : ''}
                    <div className='tagFile_column first_column'>
                        {!props.tagFilePanelDetailsShow && props.fileViewType === 'tag_files_new' ?
                            <div className="tagname_icon">
                                <span onClick={e => { props.setTagFilePanelDetailsShow(true); props.getdataTag(); }} className="backToChat" style={{ position: 'absolute', left: '24px' }}></span>
                                <span className="tagWith_icon">
                                    <BsFillTagFill size={25} color={props.selectTag.tag_color} />
                                </span>
                                <span className='tagNameText' style={{ color: props.selectTag.tag_color }}>{props.conversation_gallery ? props.selectTag.title + ' | ' + props.logindata.active_conv.details.title : props.selectTag.title}</span>
                                <span className='counter' style={{ color: props.selectTag.tag_color }}> </span>
                            </div>
                            :
                            props.conversation_gallery && props.fileViewType === 'all_links' ?
                                <div className="tagname_icon">
                                    <span onClick={e => { props.set_fileViewType(''); }} className="backToChat" style={{ position: 'absolute', left: '24px' }}></span>
                                    <span className="tagWith_icon">
                                        <BsLink45Deg size={25} />
                                    </span>
                                    <span className='tagNameText' >{props.logindata.active_conv.details.title}</span>
                                    {/* <span className='counter' > ({props.counter_})</span>  */}
                                    {/* </div>: props.fileViewType === 'recentfiles' ? <span>Recent files<span className='counter' > ({props.counter_})</span></span>:props.fileViewType === 'myfiles' ?<span>Uploaded by you<span className='counter' > ({props.counter_})</span></span>:props.fileViewType === 'otherfiles' ?<span>Uploaded by others<span className='counter' > ({props.counter_})</span></span>:props.fileViewType === 'starfiles' ?<span>Starred files<span className='counter' > ({props.counter_})</span></span>:props.fileViewType === 'all_links' ? props.headText:props.conversation_gallery && props.fileViewType === 'tag_files_new' ?'File Hub | Tags | '+props.logindata.active_conv.details.title:props.conversation_gallery ?'File Hub | Files | '+props.logindata.active_conv.details.title: props.fileViewType === 'tag_files_new' ? 'File Hub | Tags':'File Hub | Files'} */}
                                </div>
                                : props.fileViewType === 'recentfiles' ?
                                    <span>Recent files<span className='counter' > </span></span> : props.fileViewType === 'myfiles' ?
                                        <span>Uploaded by you<span className='counter' > </span></span> : props.fileViewType === 'otherfiles' ?
                                            <span>Uploaded by others<span className='counter' > </span></span> : props.fileViewType === 'starfiles' ?
                                                <span>Starred files<span className='counter' > </span></span> : props.fileViewType === 'all_links' ?
                                                    props.headText : props.conversation_gallery && props.fileViewType === 'tag_files_new' ?
                                                        <> <div className="tagname_icon"> <span onClick={e => { props.set_fileViewType(''); }} className="backToChat" style={{ position: 'absolute', left: '24px' }}></span> <span style={{ top: '-4px', left: '40px' }} className='tagNameText'> {' Tags | ' + props.logindata.active_conv.details.title}</span></div></> : props.conversation_gallery ?
                                                            <><div className="tagname_icon"> <span onClick={e => { props.set_fileViewType(''); }} className="backToChat" style={{ position: 'absolute', left: '24px' }}></span> <span style={{ top: '-4px', left: '40px' }} className='tagNameText'>{' Files | ' + props.logindata.active_conv.details.title}</span></div></> : props.fileViewType === 'tag_files_new' ?
                                                                'File Hub | Tags' : 'File Hub | Files'
                        }
                    </div>
                    <div className='tagFile_column secound_column'>
                        <ul className="tagFileLists">
                            {/* {!props.conversation_gallery ? <li onClick={() => props.set_fileViewType('tag_files_new')} className={classNames("tagFileLists_tab", props.fileViewType === 'tag_files_new' ? 'activeTab' : '')}>Tags</li>:''} */}
                            <li 
                            onClick={() => {
                                props.setfileViewType('tagPanel')
                                // router.push('/connect/filehub/tags')
                            }}
                            className={
                                classNames("tagFileLists_tab", props.fileViewType === 'tagPanel' ? 'activeTab' : '')}
                            >Tags</li>
                            <li 
                            onClick={() => {
                                // router.push('/connect/filehub/tagFiles');
                                props.setfileViewType('all_files_in_hub');
                            }}
                            className={classNames("tagFileLists_tab", props.fileViewType === 'all_files_in_hub' ? 'activeTab' : '')}
                            >Files</li>
                            {/* <li onClick={() => props.set_fileViewType('recentfiles')} className={classNames("tagFileLists_tab", props.fileViewType !== 'tag_files_new' && props.fileViewType !== 'all_links' ? 'activeTab' : '')}>File</li> */}
                            <li 
                            onClick={() =>{
                                // router.push('/connect/filehub/links');
                                props.setfileViewType('all_links');
                        
                            }}
                            className={classNames("tagFileLists_tab", props.fileViewType === 'all_links' ? 'activeTab' : '')}
                            >Links</li>
                        </ul>
                    </div>
                </div>
            </div>
       
    )
}




// const mapStateToProps = (state) => {
//     return {
//         popup: state.popupReducer.popup,
//         logindata: state.rootReducer.logindata,
//         change_file_data: state.rootReducer.change_file_data,
//         change_share_link: state.rootReducer.change_share_link,
//         active_gallery_tab: state.popupReducer.active_gallery_tab,
//         fileViewType: state.popupReducer.fileViewType,
//         selected_gallery_files: state.popupReducer.selected_gallery_files,
//         conversation_gallery: state.popupReducer.conversation_gallery,
//         selected_files_data: state.popupReducer.selected_files_data,
//         multi_file_ids: state.popupReducer.multi_file_ids,
//         gallery_tag_filter: state.actionReducer.gallery_tag_filter,
//         downloading_file: state.popupReducer.downloading_file,
//         active_theme: state.popupReducer.active_theme,
//         gallery_tag_filter_list: state.actionReducer.gallery_tag_filter_list,
//         get_selectedTag: state.actionReducer.get_selectedTag,
//         leftTagCounter: state.actionReducer.leftTagCounter
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPopup: (data) => {
//             dispatch({ type: 'setPopup', payload: data })
//         },
//         set_downloading_file: (data) => {
//             dispatch({ type: 'set_downloading_file', payload: data })
//         },
//         set_active_gallery_tab: (data) => {
//             dispatch({ type: 'set_active_gallery_tab', payload: data })
//         },
//         set_activeImg: (data) => {
//             dispatch({ type: 'set_activeImg', payload: data })
//         },
//         set_popup_action_data: (data) => {
//             dispatch({ type: 'set_popup_action_data', payload: data })
//         },
//         set_selected_gallery_files: (data) => {
//             dispatch({ type: 'set_selected_gallery_files', payload: data })
//         },
//         set_selected_files_data: (data) => {
//             dispatch({ type: 'set_selected_files_data', payload: data })
//         },
//         set_multi_file_ids: (data) => {
//             dispatch({ type: 'set_multi_file_ids', payload: data })
//         },
//         set_popup_video: (data) => {
//             dispatch({ type: 'set_popup_video', payload: data })
//         },
//         set_gallery_tag_filter_list: (data) => {
//             dispatch({ type: 'set_gallery_tag_filter_list', payload: data })
//         },
//         set_selectedTag: (data) => {
//             dispatch({ type: 'set_selectedTag', payload: data })
//         },
//         set_gallery_tag_filter: (data) => {
//             dispatch({ type: 'set_gallery_tag_filter', payload: data })
//         },
//         set_go_with_noti: (data) => {
//             dispatch({ type: 'set_go_with_noti', payload: data })
//         },
//         set_fileViewType: (data) => {
//             dispatch({ type: 'set_fileViewType', payload: data })
//         },
//         set_noti_click_count: (data) => {
//             dispatch({ type: 'set_noti_click_count', payload: data })
//         },
//     }
// }

// export default React.memo(connect(mapStateToProps, mapDispatchToProps)(FileHubHead));
export default FileHubHead;