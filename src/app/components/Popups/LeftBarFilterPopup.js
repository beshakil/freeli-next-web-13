import React,{ useState}  from 'react';
import classNames from 'classnames';

function LeftBarFilterPopup(props) {
	const [defaultSelect, setDefaultSelect] = useState('');
	const handleFilterChk = (type) => {
		//debugger;
		if (type === 'CreatedByMe') {
			setDefaultSelect('CreatedByMe')

		}
		else if (type === 'CreatedByOthers') {
			setDefaultSelect('CreatedByOthers')
		}
		else if (type === 'Rooms') {
			setDefaultSelect('Rooms')
		}
		else if (type === 'DirectMessages') {
			setDefaultSelect('DirectMessages')
		}else{
			setDefaultSelect('')
		}
		//props.setPopup({ type: 'leftBarFilterPopup', data: false });
	}
	return (
		<>
			
				<div className="filterActionPopup">
				<p class="profilenavMidleArea_label">Filter</p>
				<ul className="filterActionList"

				>
					<li 
						onClick={() => { handleFilterChk('CreatedByMe') }}
					className={classNames(defaultSelect === 'CreatedByMe' ? 'active' : '')} 
					
					> Created by me</li>
					<li className={classNames(defaultSelect === 'CreatedByOthers' ? 'active' : '')} onClick={() => { handleFilterChk('CreatedByOthers') }} >Created by others</li>
					<li className={classNames(defaultSelect === 'Rooms' ? 'active' : '')} onClick={() => { handleFilterChk('Rooms') }} >Rooms</li>
					<li className={classNames(defaultSelect === 'DirectMessages' ? 'active' : '')} onClick={() => { handleFilterChk('DirectMessages') }} >Direct messages</li>

					{/* <li onClick={() => { handleExportChk(); }}>Export Checklist</li> */}
				</ul>
				</div>
			
		</>
	)
}




export default LeftBarFilterPopup;