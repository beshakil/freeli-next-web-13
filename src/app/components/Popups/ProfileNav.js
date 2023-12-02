"use client"
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import UserProfile from '../Profile/UserProfileContainer';
import ChangePassword from '../ChangePassword';


function ProfileNav(props) {
    const router = useRouter();
    const [theme, setTheme] = useState('light');
    const [tagPop, setTagPop] = useState(false)
    const showTagPOP = () => {
        setTagPop(true);

    }
    const [archivec, setArchivec] = useState(0);
    // const getArchiveConvCount = async () => {
    //     try {
    //         let APIres = await archiveCount();
    //         setArchivec(APIres.data.archive)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    useState(() => {

        let type = localStorage.getItem("theme");
        if (type === 'dark') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    const changePassFun = () => {
        props.setPopup({ type: 'profilenav', data: false });
        props.setPopup({ type: 'Password', data: true });
    }
    const otherAccounts = () => {
        props.setPopup({ type: 'profilenav', data: false });
        props.setPopup({ type: 'multiAccount', data: true });
    }

    const updateUserInfo = () => {
        props.setPopup({ type: 'profilenav', data: false });
        props.setPopup({ type: 'galleryPopup', data: false });
        props.setPopup({ type: 'floatingAction', data: false });
        props.setPopup({ type: 'userUpdate', data: true });
        props.set_popup_action_data({ phone: props.logindata.user.phone ? props.logindata.user.phone : "880", user_id: props.logindata.user.id, user_img: props.logindata.user.img, user_name: props.logindata.user.firstname, firstname: props.logindata.user.firstname, lastname: props.logindata.user.lastname, email: props.logindata.user.email })
    }

    const openNotification = () => {
        props.setPopup({ type: 'profilenav', data: false })
        props.setPopup({ type: 'galleryPopup', data: false });
        props.setPopup({ type: 'userUpdate', data: false });
        props.setPopup({ type: 'roomUpdate', data: false });
    }

    const openAdminSetting = () => {
        props.setPopup({ type: 'profilenav', data: false })
        props.setPopup({ type: 'galleryPopup', data: false });
        props.setPopup({ type: 'userUpdate', data: false });
        props.setPopup({ type: 'roomUpdate', data: false });
        props.setPopup({ type: 'replyThread', data: false });
        props.setPopup({ type: 'adminSettings_view', data: true });
    }

    const selectTheme = (type) => {
        localStorage.setItem("theme", type);
        props.set_active_theme(type);
        if (type === 'dark') {
            document.querySelector('#root').classList.add('dark');
        } else {
            document.querySelector('#root').classList.remove('dark');
        }
        props.setPopup({ type: 'profilenav', data: false });
    }

    const revisitSiteFun = () => {

        localStorage.setItem('total_login', JSON.stringify(1));
        localStorage.setItem('hideArea', JSON.stringify(true));
        localStorage.setItem('hideAreaCall', JSON.stringify(true));
        localStorage.setItem("hideNavIconHover", JSON.stringify(false));
        localStorage.setItem("hideFirstTooltip", JSON.stringify(true));
        localStorage.setItem("hideCategoryPopUp", JSON.stringify(true));
        localStorage.setItem("hideShareTooltip", JSON.stringify(true));
        localStorage.setItem("hideTeamManagerPopUp", JSON.stringify(true));
        localStorage.setItem("hideManagerPopUp", JSON.stringify(true));
        localStorage.setItem("hideArea", JSON.stringify(true));
        localStorage.setItem("hideCatPopUp", JSON.stringify(true));
        localStorage.setItem("hideFileHubPopUp", JSON.stringify(true));
        localStorage.setItem("hideAdminNavIconHover", JSON.stringify(false));
        localStorage.setItem("hideMsgTool", JSON.stringify(true));
        // window.location.reload(false);

    }
    const [, setbeforeInstallEvent] = useState(null)
    useEffect(() => {
        // getArchiveConvCount();
        // window.addEventListener("beforeinstallprompt", eventHandler, errorHandler);

        function eventHandler(event) {
            setbeforeInstallEvent(event);
        }
        function errorHandler(e) {
            console.log('error: ' + e);
        }


    }, [])

    const clicktoAddShortcut = () => {
        // console.log(155, window.deferredPrompt1)
        // window.deferredPrompt1.prompt();

    }

    const [changePasswordPopup, setChangePasswordPopup] = useState(false)


    return (
        <>
            {/* Profile popup */}
            <div className="profilenavMainSection" style={{ zIndex: '99999', display: tagPop ? 'none' : 'unset' }}>
                <div className="profilenavMidleArea">
                    <p className="profilenavMidleArea_label">
                        Account details
                    </p>
                    {/* <span className="linkAccount" onClick={() => props.setProfilePopup(true)}>
                        Edit profile
                    </span> */}
                    <Link href="/connect/userprofile"
                        className="nodecoration">
                        <span className="linkAccount">
                            Edit profile
                        </span>
                    </Link>
                    <div onClick={() => setChangePasswordPopup(true)}
                        className="nodecoration">
                        <span className="linkAccount">
                        Change password
                        </span>
                    </div>

                    <div className="profileNavContainer_line"></div>

                    <p className="profilenavMidleArea_label">
                        Manage Account
                    </p>
                    {/* {props.logindata.user.multi_company ? */}
                    <span className="linkAccount" onClick={otherAccounts}>

                        Switch accounts
                    </span>

                    {/* : ''

                    } */}
                    <span className="linkAccount theme">

                        Switch Theme
                        <span className="themeMenu">
                            <span className={classNames("themeMode", theme === 'light' ? 'active' : '')} onClick={() => selectTheme('light')}>Light mode</span>
                            <span className={classNames("themeMode", theme === 'dark' ? 'active' : '')} onClick={() => selectTheme('dark')}>Dark mode</span>
                        </span>
                    </span>
                    <div className="profileNavContainer_line"></div>
                    <p className="profilenavMidleArea_label">
                        Advanced
                    </p>
                    <Link href="/connect/notification"
                        //onClick={openNotification} 
                        className="nodecoration">
                        <span
                            //onClick={() => router.push('/connect/notification')}
                            className="linkAccount"
                        >

                            All Notifications
                            {/* {props.logindata.total_unread_notification > 0 ? <span className="unreadCounter">{props.logindata.total_unread_notification}</span> : ''} */}
                        </span>
                    </Link>
                    <span onClick={props.getArchiveConv} className="nodecoration">
                        <span className="linkAccount">

                            Archived Rooms {archivec > 0 ? '(' + archivec + ')' : ''}

                        </span>
                    </span>
                    <span onClick={showTagPOP} className="nodecoration">
                        <span className="linkAccount">

                            <span>Manage Personal Tags</span>
                        </span>
                    </span>
                    {/* {props.logindata.user.role === 'Admin' ? */}

                    <Link href={"/admin/user-management"} className="nodecoration">
                        <span className="linkAccount">
                            Admin settings
                        </span>
                    </Link>
                    {/* : ''} */}
                    <div className="profileNavContainer_line"></div>
                    <p className="profilenavMidleArea_label">
                        Help
                    </p>
                    {<span onClick={clicktoAddShortcut} className="nodecoration">
                        {/* <span className="linkAccount">
                            {window.deferredPrompt1 ? 'Install' : 'Installed'} Desktop Application
                        </span> */}
                    </span>
                    }
                    <span className="linkAccount" onClick={revisitSiteFun}>
                        Tour for tips and suggestions
                    </span>
                    <span className="nodecoration">
                        <span className="linkAccount">
                            <span>Workfreeli Support</span>
                        </span>
                    </span>
                </div>
                <div className="profileNavContainer_line"></div>
                <span className="linkAccount signout">
                    Sign out
                    <span className='signout_menu'>
                        {/* {props.logindata.remove_device_list?.length > 0 ? */}
                        <span className="themeMode border_bottom"
                        // onClick={() => { props.setPopup({ type: 'logoutpop', data: true }); props.setPopup({ type: 'profilenav', data: false }); }}
                        >From all devices</span>

                        {/* : ''} */}
                        <Link href={"/logout"} className="nodecoration"><span className="themeMode border_bottom" >From this device</span></Link>
                    </span>
                </span>
            </div>

            {changePasswordPopup && <ChangePassword setChangePasswordPopup={setChangePasswordPopup} />}
        </>
    )
}



export default ProfileNav;