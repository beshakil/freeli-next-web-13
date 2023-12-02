"use client"
import React, { useEffect, useRef, useState, useCallback } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import classNames from "classnames";
import Select from 'react-select';
import { VscCalendar } from "react-icons/vsc";
import { color } from "@mui/system";
function TasksOverdue() {
  const [isOpen2, setOpen2] = useState({});
  const [selectedItem2, setSelectedItem2] = useState({});
  // const [selectedOption, setselectedOption] = useState([]);

  const options2 = [

    { label: "In Progress", value: 'In Progress', customeName: 'In Progress', color: '#ffaf4c', textColor: '#ffffff' },
    { label: "On Hold", value: 'On Hold', customeName: 'On Hold', color: '#032e84', textColor: '#ffffff' },
    { label: "Not Started", value: 'Not Started', customeName: 'Not Started', color: '#ffaf4c', textColor: '#ffffff' },
    { label: "Overdue", value: 'Overdue', customeName: 'Overdue', color: '#df1e39', textColor: '#ffffff' },
    { label: "Completed", value: 'Completed', customeName: 'Completed', color: '#7db52a', textColor: '#ffffff' }

  ];
  const [optionsList, setoptionsList] = useState(options2);
  const [selectedOption, setSelectedOption] = useState("");
  const selectTeams = (e) => {
    setSelectedOption({ ...selectedOption, Progress: e })
  }
  // const handleItemClick2 = (value,i) => {

  //   const optionsval = options2.find(x => x.value === value).label;
  //   setSelectedItem2(optionsval)

  //   setOpen2(false);

  // }
  const handleItemClick2 = (e, value) => {
    // setSelectedItem2(index)
    const optionsval = options2.find(x => x.value === value).label;
    setSelectedItem2({
      ...selectedItem2,
      value: e.target.value
    })
    //setSelectedItem2(optionsval)

    setOpen2(false);

  }
  // const customStyles = {
  //   option: (base, { data, isDisabled, isFocused, isSelected }) => {
  //   return {
  //     ...base,
  //     backgroundColor: isFocused ? "#0c1e47" : "",
  //     color: isFocused ? "#ffffff" : "#0c1e47",
  //     backgroundColor: isSelected ? "#0c1e47" : "white",
  //     color: isSelected ? "#ffffff" : "#0c1e47",
  //   };
  // }
  // };
  // const customStyles = {
  //   option: (base, state) => {
  //      let backgroundColor = '#fff';
  //      let color='#0c1e47';

  //      if (state.isSelected) {
  //        backgroundColor = "#0c1e47";

  //      }
  //      if (state.isSelected) {
  //       color='#ffffff';
  //     }

  //      if (state.isFocused) {
  //        backgroundColor = "#0c1e47";
  //      }
  //      if (state.isFocused) {
  //       color='#ffffff';
  //     }

  //      return {
  //        ...base,
  //        backgroundColor,
  //        color
  //      };
  //    }
  // }

  const customStyles = {
    control: (provided, state) => {
      const selectedOption = state.selectProps.value;
      const backgroundColor = selectedOption?.color || '#ffffff';
      const textColor = selectedOption?.textColor || '#0c1e47';
      return {
        ...provided,
        backgroundColor,
        color: textColor,
      };
    },
  };
  const tasksOverdue = [
    {
      id: 1,
      title: "AppFairmont Lake Louise Poppy - ID & Brandingle",
      startDate: "Jan 12, 2023",
      endDate: "Jan 12, 2023",
      Progress: 'Overdue'

    },
    {
      id: 2,
      title: "AppFairmont Lake Louise Poppy - ID & Brandingle",
      startDate: "Jan 12, 2023",
      endDate: "Jan 12, 2023",
      Progress: 'Not Started'

    },
    {
      id: 3,
      title: "AppFairmont Lake Louise Poppy - ID & Brandingle",
      startDate: "Jan 12, 2023",
      endDate: "Jan 12, 2023",
      Progress: 'Completed'

    },
    {
      id: 4,
      title: "Curated Properties Branding",
      startDate: "Jan 12, 2023",
      endDate: "Jan 12, 2023",
      Progress: 'Overdue'

    },
    {
      id: 5,
      title: "Curated Properties Branding",
      startDate: "Jan 12, 2023",
      endDate: "Jan 12, 2023",
      Progress: 'In Progress'

    },

  ];

  const handleTypeSelect = e => {
    setSelectedOption(e.value);

  };

  return (
    <div className='tasksOverdue'>
      <div className='tasksOverduePara'>
        The following tasks have missing hours, we recommend that you update these tasks to get an accurate report:
      </div>
      <div className='tasksOverdue_body'>
        <ul className='tasksOverdue_list'>
          <li className='projectTitle'>Project Title</li>
          <li className='pt_startDate'>Start Date</li>
          <li className='pt_endDate'>End Date</li>
          <li className='pt_Progress'>Progress</li>
        </ul>
        {tasksOverdue.map((task, idx) => (
          <ul key={idx} className='tasksOverdue_status_list'>
            <li className='tasksOverdue_title'>{task.title}</li>
            <li className='tasksOverdue_startDate'><span>{task.startDate}</span><span className="vscaledar"><VscCalendar color="#318fff" size={14} /></span></li>
            <li className='tasksOverdue_endDate'>{task.endDate}<span className="vscaledar"><VscCalendar color="#318fff" size={14} /></span></li>
            <li className='tasksOverdue_progress'>
              {/* <OutsideClickHandler onOutsideClick={() => setOpen2(false)}>
                                            <div className='custom_dropdown_task'>
                                                <div className='custom_dropdown-header' 
                                                onClick={() =>
                                                  setOpen2({ ...isOpen2, [task.id]: !isOpen2[task.id] })
                                                }
                                                
                                                >
                                                    {selectedItem2 == "" ? "Status" : options2.find(i => i.value === selectedItem2).label}
                                                    <i className={`fa fa-chevron-right custom_icon ${isOpen2[task.id] && "open"}`}></i>
                                                </div>

                                                <div className={`custom_dropdown-body_task ${isOpen2[task.id] && 'open'}`}>
                                                    {options2.map((item,i) => (
                                                        <div className={classNames("custom_dropdown-item", item.value == selectedItem2 ? 'selected' : '')}
                                                        
                                                            onClick={() => handleItemClick2(item.value,i)}
                                                            key={item.value}
                                                            
                                                            >

                                                            {item.label}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </OutsideClickHandler> */}

              <Select
                className="select-ecosystem taskstatus_are"

                defaultValue={selectedOption}
                onChange={handleTypeSelect}
                options={options2}
                isSearchable={true}
                styles={customStyles}
                placeholder={<span className="selectPlaceholder">Status</span>}
              />
            </li>
          </ul>
        ))}

      </div>

    </div>
  )
}


export default TasksOverdue