"use client";
import React, { useState, useEffect, useRef} from 'react';

import toast from 'react-hot-toast';
import { BsArrowRightCircle, BsChevronDown, BsFillTrash3Fill, BsXLg } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";
import TextField from '@mui/material/TextField';
import OutsideClickHandler from "react-outside-click-handler";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import classNames from "classnames";
import Select from 'react-select';
import Image from 'next/image';

function CreateQuickTask(props) {
  const [value, setValue] = useState([]);
  const [inv, setInputValue] = useState('');
  const [deletePopup, setDeletePopup] = useState('');
  const [selectPopup, setselectPopup] = useState(false);
  const [searchByAssignVal, setsearchByAssignVal] = useState('');
  const [selectedAssign, setSelectedAssign] = useState([])
  const [, setAssignListPopup] = useState(false);
  const [AddAssign, setAddAssign] = useState(false);
  const [ViewAddAssign, setViewAddAssign] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);

  //conatent editable
  const contentRef = useRef(null);
  const selectRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const options = [
    { value: 'Manzurul Alam', label: 'Manzurul Alam' },
    { value: 'Chat Room', label: 'Chat Room' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const [selectRooms, setSelectRooms] = useState(options[0]);

  const handleChange = (selectedOption) => {
    setSelectRooms(selectedOption);
  };
  const onChangeTagInput=(e)=> {
    setInputValue(e.target.value.replace(/[^0-9a-z ]/gi, ''));
}
  const TogglePopup = (i) => {
    if(selectedItem===i && viewAddAssign ===false){
      setViewAddAssign(true)
  }
  
    
  }
  const hideCurrentPopup = (i) => {
    setSelectedItem(i);
    setViewAddAssign(false);
    
  }
  

  const [Assignee, setAssignee] = useState([{
    firstname: 'Dalim66666 ',
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
    firstname: 'Shakil',
    lastname: 'Ahmed',
    fnln: 'SA',
    img: 'img.png',
    id: '4'


  },
  {
    firstname: 'Shakil',
    lastname: 'Ahmed',
    fnln: 'SA',
    img: 'img.png',
    id: '5'


  }
  ])
  const selectAssign = (v,i) => {
    // console.log(175, v)
    setsearchByAssignVal('');
    setAssignListPopup(false);
    //setSelectedAssign([...selectedAssign, v.id]);
    setSelectedAssign([v.id]);
  }
  const searchByAssign = (v) => {
    //console.log(5555, v)
    setsearchByAssignVal(v);
    // if (v !== '') {
    //   setAssignListPopup(true)
    // } else {
    //   setAssignListPopup(false)
    // }
  }
  useEffect(() => {

    if (searchByAssignVal === '') {
      setAssignee(Assignee.map(v => searchByAssignVal === '' ? { ...v, l_show: true } : v))
    } else {
      setAssignee(Assignee.map(v => (v.firstname.toLowerCase().indexOf(searchByAssignVal.toLowerCase()) > -1 || v.lastname.toLowerCase().indexOf(searchByAssignVal.toLowerCase()) > -1) ? { ...v, l_show: true } : { ...v, l_show: false }))
    }
   // eslint-disable-next-line
  }, [searchByAssignVal]);
const saveTaskFunc=()=>{
  
  if (inv === '') {
    // Set the error
    toast.error('Input box should not empty');
  }else {
  setValue((prev) => [...prev, inv]);
  setInputValue('');
  }
}
  const handleKey = e => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
        //console.log('updated 1111', value);
        saveTaskFunc()

    }
};
const deletedPopupFuc=(i)=>{
  setDeletePopup(i);
  setselectPopup(!selectPopup)
}
const remove = (index) => {
  setValue([
      ...value.slice(0, index),
      ...value.slice(index + 1)
  ]);
  toast.success('Successfully deleted');

}
  const UserString = (name) => {
    if (name === undefined) return 0;
    var str = name.toLowerCase();
    switch (str.charAt(0)) {
      case ('a'): return 0;
      case ('b'): return 0;
      case ('c'): return 0;
      case ('d'): return 6;
      case ('e'): return 1;
      case ('f'): return 1;
      case ('g'): return 1;
      case ('h'): return 6;
      case ('i'): return 2;
      case ('j'): return 2;
      case ('k'): return 2;
      case ('l'): return 6;
      case ('m'): return 3;
      case ('n'): return 3;
      case ('o'): return 3;
      case ('p'): return 6;
      case ('q'): return 4;
      case ('r'): return 4;
      case ('s'): return 4;
      case ('t'): return 4;
      case ('u'): return 5;
      case ('v'): return 5;
      case ('x'): return 5;
      case ('y'): return 6;
      default: return 6;
    }
  }
  const OpenDatePicker = (type) => {

    if (type === 'end_date') {
      if (document.querySelector("#endDate")) {
        document.querySelector("#endDate").click();
      }

    }
  }
  const handleIconClick = () => {
    contentRef.current.focus();
    setIsFocused(true);
  };
  useEffect(() => {
    if (contentRef.current && isFocused) {
      const range = document.createRange();
      // const selection = window.getSelection();
      range.selectNodeContents(contentRef.current);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
      setIsFocused(false);
    }
  }, [isFocused]);
  const keyPressEvent = (e) => {
    if (e.keyCode !== 8 && contentRef.current?.textContent?.length >= 50) {
      e.preventDefault();
      //toast.error('Maximum 50 characters support');
    }
  }
  const handleSelectFocus = () => {
    // Get the underlying input element and move the cursor to the end
    const input = selectRef.current.inputRef;
    if (input) {
      input.selectionStart = input.value.length;
      input.selectionEnd = input.value.length;
    }
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '25px', // Adjust the height value as needed
      backgroundColor: state.isFocused ? '' : '',
      borderColor: state.isFocused ? 'hsla(210,96%,45%,50%)' : '#d6d6d6',
      boxShadow: state.isFocused ? '0 1px 1px rgba(0,0,0,.03),0 3px 6px rgba(0,0,0,.02),0 0 0 3px hsl(210deg 96% 45%/25%),0 1px 1px 0 rgba(0,0,0,.08)' : 'none',
      '&:hover': {
        borderColor: state.isFocused ? 'hsla(210,96%,45%,50%)' : '',
      },

    }),
    valueContainer: (provided) => ({
      ...provided,
      height: '25px', // Adjust the height value as needed
    }),
    input: (provided) => ({
      ...provided,
      textAlign: 'right',
    }),

  };
  const completedTask=()=>{
    props.setCreatetasksTab(!props.CreatetasksTab);
    props.setTasksTab('tasks');
  }
  return (
    <div className='quickTaskArea'>
    <div className='CreateQuickTask_container'>
      <div className='Create_Quick_Task'>
          <div className='quick_Task_Head'>
            <div className='check_box_img'></div>
            <div className='heading_create_task'>
                <div className='heading_text'>
                    Create a task
                </div>
                <div className='para_text'>
                Create one or more tasks below
                </div>
            </div>
          </div>
         
      </div>
      <div className='quick_Task_body'>
            <div className='inputTaskAtewa'>
                    <div className='inputboxArea'>
                        <input
                            onKeyDown={handleKey}
                            value={inv}
                            onChange={(e) => onChangeTagInput(e)}
                            className="addNewTask" 
                            placeholder='Write a task here'
                            autoFocus
                            />
                      <span className='ractAngle_inputBox'></span>
                      {inv !== '' ?
                            <span 
                            className='clearInput inv' 
                            style={{top: '47px',right: '60px'}}
                            onClick={() => { setInputValue('') }}></span>
                      : ''}
                        <span className='checkList_plusIcon' 
                              data-for="checkList_tooltip" 
                              style={{ position: 'absolute',
                                top: '52px',
                                height: '100%',
                                cursor: 'pointer',
                                right: '43px'}}
                              data-tip={'Click to create checklist'}
                              onClick={saveTaskFunc}
                            >
                          <i className="fa fa-plus custom_icon"></i>
                      </span>

                    </div>
                    


              </div>
              <div className='new_Task_list'>
                {value.map((val, index) => (
                  <>
                   <div className='new_Task_dtails' key={index}>
                    <div className='new_Task_area'>
                       <div className='ractagleBox'>
                       </div>
                        <div className="task_full_div">
                        <div className="task_name_title_area" >
                          <div
                            className={classNames('task_name_title', `editable ${isFocused ? 'focused' : ''}`)}
                            contentEditable={true}
                            ref={contentRef}
                            spellCheck={false}
                            onKeyDown={keyPressEvent}
                            suppressContentEditableWarning={true}
                          >
                            {val}
                          </div>
                          <span onClick={handleIconClick} className='editImage' ></span>
                        </div>
                          <Select
                            styles={customStyles}
                            className={classNames("select-ecosystem taskSelectdata"
                            )}
                            ref={selectRef}
                            onFocus={handleSelectFocus}
                            closeMenuOnSelect={true}
                            openMenuOnFocus={true}
                            options={options}
                            defaultValue={selectRooms}
                            // value={fields.room_name}

                            isSearchable
                            //onChange={getRoomValue}
                            onChange={handleChange}
                            placeholder={<span className="selectPlaceholder">Select a room</span>}

                          />

                        </div>

                        <div className={classNames('task_right_div', selectedAssign.length === 0 ? 'hideNow' : 'showAlways')}>
                          <div className='task_User_sec'>
                            {selectedAssign.length === 0 ? <div className='task_User_icon'></div> :
                            
                              <OutsideClickHandler OutsideClickHandler onOutsideClick={() => hideCurrentPopup(index)}>
                                <div
                                  style={{ display: 'flex', position: 'relative', cursor: 'pointer' }}
                                  className="ellipsis"
                                  onClick={() => TogglePopup(index)}
                                >
                                  <div className='userListData'>   
                                    {Assignee.filter(r => selectedAssign.indexOf(r.id) > -1).slice(0, 3).map((obs) => (<>
                                    {obs.img.indexOf('img.png') > -1 ?
                                      <li className="ObsImageTask" style={{ width: "32px", height: "32px", alignItems: 'center', backgroundColor: props.popup.colorPlate[UserString(obs.fnln)] }} >{obs.fnln}</li>
                                      :
                                      <Image src={obs.img} fill alt="profilepic" />
                                    }</>
                                  ))} </div>
                                  {Assignee.filter(r => selectedAssign.indexOf(r.id) > -1).length - 3 > 0 && <div style={{ marginTop: '20px', fontSize: '12px' }}>+ {Assignee.filter(r => selectedAssign.indexOf(r.id) > -1).length - 3 > 0 ? Assignee.filter(r => selectedAssign.indexOf(r.id) > -1).length - 3 : '0'} others</div>}</div>
                                {ViewAddAssign && Assignee.filter(r => selectedAssign.indexOf(r.id) > -1).length > 0 &&

                                  <div className="AddKeywordsPopup quickTask">

                                    <div className="keywordItem">
                                      <div className="searchAndFilterBar " style={{ position: 'relative' }}>

                                        <div className="selectedKeywordCont_task" >
                                          {selectedAssign.length > 0 &&

                                            Assignee.filter(r => selectedAssign.indexOf(r.id) > -1).map(v =>
                                              <span key={v.id} className="keyword_Color">{v.firstname + ' ' + v.lastname}
                                                <BsXLg style={{
                                                  cursor: 'pointer',
                                                  color: 'white',
                                                  position: 'relative',
                                                  top: '2px',

                                                  marginLeft: '5px',

                                                  padding: '2px'
                                                }} size={14} onClick={() => setSelectedAssign(selectedAssign.filter(r => r !== v.id))} />
                                              </span>
                                            )
                                          }

                                        </div>


                                      </div>
                                    </div>

                                  </div>}
                              </OutsideClickHandler>
                            }
                        
                            
                            
                            {/* <div className='task_User_box'>
                              <span className='task_User_assign'>Assigned To</span>
                              <span className='task_User_assign_arrow'>
                                <BsChevronDown 
                                size='11px' color='#318fff' 
                                className='taskShevronDown' />
                              </span>
                            </div> */}

                            <OutsideClickHandler onOutsideClick={() => setAddAssign(false)}>
                              <div className='task_box_assignee'>
                                <input type="text" className="Focus" onFocus={() => setAddAssign(true)}
                                value={searchByAssignVal}
                                onChange={(event) => searchByAssign(event.target.value)}
                                placeholder='Assigned To' />
                                <span className='task_User_assign_arrow'>
                                  <BsChevronDown
                                    size='11px' color='#318fff'
                                    className='taskShevronDown' />
                                </span>
                              </div>
                              {AddAssign &&
                                <div className="AddKeywordsPopup">
                                  <div className="keywordItem">
                                    <div className="searchAndFilterBar " style={{ position: 'relative' }}>
                                      <div className="selectedKeywordCont_task" >
                                        {
                                          Assignee.filter(r => selectedAssign.indexOf(r.id) > -1).map(v =>
                                            <span key={v.id} className="keyword_Color">{v.firstname + ' ' + v.lastname}
                                              <BsXLg style={{
                                                cursor: 'pointer',
                                                color: 'white',
                                                position: 'relative',
                                                top: '2px',

                                                marginLeft: '5px',

                                                padding: '2px'
                                              }} size={14} onClick={() => setSelectedAssign(selectedAssign.filter(r => r !== v.id))} />
                                            </span>
                                          )
                                        }

                                      </div>
                                      <div className="searchAndFilterKeyword">

                                        <div style={{ 
                                          height: '200px', 
                                        position: 'relative', 
                                        overflow: 'auto', width: '100%', 
                                        top: '5px' }}>
                                          <div className="keyword_list">
                                            {
                                              Assignee.filter(e => (e.l_show === undefined || e.l_show) && selectedAssign.indexOf(e.id) === -1).map((v) =>
                                                <p key={v.id} className="tag_rooms"
                                                onClick={() => { 
                                                  selectAssign(v,index); 
                                                  setAssignListPopup(false) }}
                                                  >{v.firstname + ' ' + v.lastname}</p>
                                              )
                                            }
                                            {Assignee.filter(e => (e.l_show === undefined || e.l_show) && selectedAssign.indexOf(e.id) === -1).length === 0 && <div className="tagNotFound" style={{ marginTop: '20px' }}>Not found</div>}
                                          </div></div>

                                      </div>

                                    </div>
                                  </div>

                                </div>}
                            </OutsideClickHandler>





                            {/* ========== */}
                          </div>
                          <div className='task_date_sec'>
                            <div className='task_date_icon'>
                              <div className='taskvsCalenderIcon' 
                              onClick={() => OpenDatePicker('end_date')}><VscCalendar color={'#318fff'} size={22} />
                              </div>
                            </div>
                            <div className='task_datePicker'>
                              <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <MobileDatePicker
                                  placeholder="January 12, 2023"
                                  className={classNames('start_date')}
                                  showToolbar={false}
                                  closeOnSelect={true}
                                  inputFormat={'MMMM dd, yyyy'}

                                  value={endDate}
                                  onChange={(date) => setEndDate(date)}
                                 
                                  renderInput={(params) =>
                                    <TextField {...params}
                                      className={classNames("calenderAdvance dueDate")}
                                      id="taskDueDate"
                                      placeholder="Due date"
                                    />}
                                />
                              </LocalizationProvider>
                              {
                                endDate !== '' ?
                                  <span className='clearInput endDate' onClick={() => setEndDate('')}></span>
                                  : ''
                              }

                            </div>
                          </div>
                          <div className='task_save-sec'>
                            <BsArrowRightCircle 
                            size='16px' 
                            color='#318fff'
                            className='taskArrowRight' />
                          </div>
                          <div className='task_delete_sec'
                            onClick={() => deletedPopupFuc(index)}
                            //onMouseLeave={() => setselectPopup(false)}
                          >
                            <BsFillTrash3Fill color='#00246e' size='18px' />
                          </div>
                          {deletePopup === index && selectPopup ?
                          <div className='deletedPopup'
                              onMouseLeave={() => setselectPopup(false)}
                          >
                              <div className='deletedPopup_text'>
                                Are you sure you want to delete this task?
                              </div>
                              <div className='deletedPopup_delete_btn' 
                                onClick={() => remove(index)}
                              >
                                delete
                              </div>
                              <div className='deletedPopup_cancel_btn'
                                onClick={() => setDeletePopup('')}
                              >
                                cancel
                              </div>
                              
                          </div>
                          :''
                          }
                      </div>
                       
                     </div>
                     <div className='border_line'></div>
                      
                  </div>
                  
                  </>
                ))}
                {value.length > 0  &&
              <div className='completed_button' onClick={completedTask}>
                    Complete
                  </div>
                }
              </div>

          </div>
    </div>
    </div>
  )
}

export default CreateQuickTask;