/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import 'moment-timezone';
import moment from "moment-timezone";
import Moment from 'react-moment';
import Image from "next/image";

function NotificationsTabHome(props) {
    const data = 
        [
            {
                "_id": "653de3c106c7421dba4172dc",
                "type": "Task",
                "title": "Task titled 'iol98l' updated",
             
                "created_by_id": "05571111-80ea-4baf-baff-38e33653a08a",
                "created_by_name": "Shakil Ahmed",
                "created_by_img": "https://wfss001.freeli.io/profile-pic/Photos/Untitled-design-9@1697369194813.png",
                "receiver_id": "b7100ad2-4121-4405-beb6-6e2ab8fe4a13",
                "read_status": "yes",
                "company_id": "57620630-552b-11ed-bc02-3d08415c9794",
                "created_at": "2023-10-29T04:46:57.731Z",
                "__v": 0
            },
            {
                "_id": "653de3a706c7421dba4172a9",
                "type": "Task",
                "title": "Task titled 'iol98l' created.",
              
                "created_by_id": "05571111-80ea-4baf-baff-38e33653a08a",
                "created_by_name": "Shakil Ahmed",
                "created_by_img": "https://wfss001.freeli.io/profile-pic/Photos/Untitled-design-9@1697369194813.png",
                "receiver_id": "b7100ad2-4121-4405-beb6-6e2ab8fe4a13",
                "read_status": "yes",
                "company_id": "57620630-552b-11ed-bc02-3d08415c9794",
                "created_at": "2023-10-29T04:46:31.485Z",
                "__v": 0
            },
            {
                "_id": "653cc79cd7e46131a4e222bf",
                "type": "Task",
                "title": "Task titled 'Task' updated",
               
                "created_by_id": "25aa5834-b09b-45c9-bac2-a9bb00fe5202",
                "created_by_name": "Md. Rajon Hossain",
                "created_by_img": "https://wfss001.freeli.io/profile-pic/Photos/IMG_20190929_204944@1697603764989.jpg",
                "receiver_id": "b7100ad2-4121-4405-beb6-6e2ab8fe4a13",
                "read_status": "yes",
                "company_id": "57620630-552b-11ed-bc02-3d08415c9794",
                "created_at": "2023-10-28T08:34:36.956Z",
                "__v": 0
            },
            {
                "_id": "6538a8d12fadb3fa259f5b3d",
                "type": "Task",
                "title": "Task titled 'check' updated",
              
                "created_by_id": "25aa5834-b09b-45c9-bac2-a9bb00fe5202",
                "created_by_name": "Md. Rajon Hossain",
                "created_by_img": "https://wfss001.freeli.io/profile-pic/Photos/IMG_20190929_204944@1697603764989.jpg",
                "receiver_id": "b7100ad2-4121-4405-beb6-6e2ab8fe4a13",
                "read_status": "yes",
                "company_id": "57620630-552b-11ed-bc02-3d08415c9794",
                "created_at": "2023-10-25T05:34:09.252Z",
                "__v": 0
            },
            {
                "_id": "6538a8b72fadb3fa259f5af4",
                "type": "Task",
                "title": "Task titled 'check' created.",
             
                "created_by_id": "25aa5834-b09b-45c9-bac2-a9bb00fe5202",
                "created_by_name": "Md. Rajon Hossain",
                "created_by_img": "https://wfss001.freeli.io/profile-pic/Photos/IMG_20190929_204944@1697603764989.jpg",
                "receiver_id": "b7100ad2-4121-4405-beb6-6e2ab8fe4a13",
                "read_status": "yes",
                "company_id": "57620630-552b-11ed-bc02-3d08415c9794",
                "created_at": "2023-10-25T05:33:43.707Z",
                "__v": 0
            },
            {
                "_id": "6538a5172fadb3fa259f56b8",
                "type": "Task",
                "title": "Task titled 'sdafasd' updated",
              
                "created_by_id": "25aa5834-b09b-45c9-bac2-a9bb00fe5202",
                "created_by_name": "Md. Rajon Hossain",
                "created_by_img": "https://wfss001.freeli.io/profile-pic/Photos/IMG_20190929_204944@1697603764989.jpg",
                "receiver_id": "b7100ad2-4121-4405-beb6-6e2ab8fe4a13",
                "read_status": "yes",
                "company_id": "57620630-552b-11ed-bc02-3d08415c9794",
                "created_at": "2023-10-25T05:18:15.453Z",
                "__v": 0
            },
            {
                "_id": "653519f07b1033746f71f3db",
                "type": "Task",
                "title": "Task titled '14 task ' updated",
             
                "created_by_id": "2c01ed80-7954-4e36-9b1a-36e86f753b3c",
                "created_by_name": "MARUF HASAN",
                "created_by_img": "https://wfss001.freeli.io/profile-pic/Photos/water_fall@1697600326148.png",
                "receiver_id": "b7100ad2-4121-4405-beb6-6e2ab8fe4a13",
                "read_status": "yes",
                "company_id": "57620630-552b-11ed-bc02-3d08415c9794",
                "created_at": "2023-10-22T12:47:44.949Z",
                "__v": 0
            },
       
        ];
    
    const [notifications, setnotifications] = useState(data);
    const [pageState, setpageState] = useState({ page: 0, totalPages: 0, total: 0 });

    const notify = notifications.reduce((groups, data) => {
        const date = moment(data.created_at).format('MMM Do YYYY');
        if (!groups[date]) { groups[date] = []; }

        groups[date].push(data);
        return groups;
    }, {});
    // Edit: to add it in the array format instead
    const taskNotify = Object.keys(notify).map((date) => {
        return {
            date,
            notify_data: notify[date]
        };
    });
    return (
        <div className='taskNotify_full_area'>

                {notifications.length > 0 ?
                    taskNotify.map((data, index) => (
                        <div className="msg_indivisual_box" key={index} >
                            <div className="msgSeparator"><p>{data.date}</p></div>
                            {data.notify_data.map((noti, i) => (
                                <div className="user_msg" key={i} style={{ padding: '7px 30px' }}>
                                    {/* <p className="task_Title">{noti.title}</p> */}
                                    <div className="sender_img">
                                        <Image src={noti.created_by_img} width={50} height={50} alt="user" />
                                    </div>
                                    <div className="msg_info">

                                        <div className="sender_info">
                                            <p className="sender_name">{noti.created_by_name} </p><p className="msg_time"><i className="fas fa-clock custom_clock_size" ></i> <Moment fromNow>{noti.created_at}</Moment></p></div>
                                        <div className="msg_body">{noti.title}</div>

                                    </div>

                                </div>
                            ))}
                        </div>
                    ))
                    : <p className="notFound">Notifications not found</p>}

        </div>
    )
}

export default NotificationsTabHome;